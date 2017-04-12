package dsl

import org.springframework.context.ApplicationContext
import org.codehaus.groovy.control.CompilerConfiguration
import org.kohsuke.groovy.sandbox.SandboxTransformer
import semantics.*

/**
 * Created by john on 4/6/17.
 */
class DSL {
    private _ctx
    private Know _k
    private _shell
    private _sandbox
    private _script

    private viewMap = []
    private parentNode = null

    DSL(String filename, ApplicationContext applicationContext){
        _ctx = applicationContext;
        _k = _ctx.getBean('k')

        def _cc = new CompilerConfiguration()
        _cc.addCompilationCustomizers(new SandboxTransformer())
        _cc.setScriptBaseClass(DelegatingScript.class.name)

        _shell = new GroovyShell(new Binding(), _cc)
        _sandbox = new DSLSandbox()

        _script = (DelegatingScript) _shell.parse(_ctx.getResource(filename).file)

        _script.setDelegate(this)

        try {
            _script.run()
        }
        finally {
            _sandbox.unregister()
        }
    }

    def addNodeToViewMap(node, closure){
        if(parentNode == null)
            viewMap.push(node)
        else
            parentNode.children.push(node)

        def tmpNode = parentNode
        parentNode = node
        closure()
        parentNode = tmpNode
    }

    def group(String id, Closure closure = {}){
        def uri = _k.toURI(id)
        def kNode = new Node(_k, uri)
        def node = [id: uri, label: kNode['label'], children: []]

        if(parentNode == null || parentNode.type != 'tabs'){
            _createParentNode('tabs', 'swc-tabs-pages')
        }
        addNodeToViewMap(node, closure)
    }

    def feature(Map attrs, String id, Closure closure = {}){
        def uri = _k.toURI(id)
        def feature = new Feature(uri, attrs, _ctx)
        def kNode = new Node(_k, uri)
        def tmpNode

        def children = []

        def subClasses = kNode.getSubClass('?label')

        def grandChildren = kNode.getGrandchildren('?id ?label ?subClass ?relevance ?category ?weight ?weightLabel')

        if(parentNode == null || parentNode.type != 'tabs'){
            _createParentNode('tabs', 'swc-tabs-pages')
        }

        closure.resolveStrategy = Closure.DELEGATE_FIRST
        closure.delegate = feature

        def divs = []
        def widgets = []
        def radio
        def label

        subClasses.each{ subClass ->
            subClass['widget'] = 'h5'
            grandChildren.each{
                if(subClass.id == it.subClass) {
                    tmpNode = new Node(_k, it.id)

                    def valueTypes = tmpNode.collectionIndividualsTypes
                    def categoryIndividuals = tmpNode.collectionIndividuals.capitalizeLabels()
                    def weightIndividuals

                    if(it.weight){
                        weightIndividuals = tmpNode.weightIndividuals.capitalizeLabels()
                    }

                    widgets.push([widget: 'label', label: it.label])

                    if(valueTypes.contains('http://purl.org/biodiv/semanticUI#Boolean') || valueTypes.contains('http://purl.org/biodiv/semanticUI#Categorical')){
                        categoryIndividuals.each{ option ->
                            radio = [widget: 'input', name: it.id, type: 'radio', value: option.id]
                            label = [widget: 'label', label: option.label, children: [radio]]
                            widgets.push([widget: 'div', children: [label]])
                        }

                    }else{
                        widgets.push([widget: 'input', type: 'text'])
                    }

                    divs.push([widget: 'div', children: widgets])
                    widgets = []

                    //println valueTypes
                    //println categoryIndividuals

                }
            }
            def fieldSet = [widget: 'fieldset', id: subClass.id, children: [[widget: 'legend', children: [subClass]]]+divs]
            divs = []
            children.push(fieldSet)
        }

        def node = attrs + [id: uri, label: kNode.label, children: children]
        addNodeToViewMap(node, closure)
    }

    def feature(String id, Closure closure = {}){
        feature([:], id, closure)
    }

    def getViewMap(){
        return viewMap
    }

    def _createParentNode(String type, String widget){
        def node = [type: type, widget: widget, children: []]
        addNodeToViewMap(node, {})
        parentNode = node
    }


}
