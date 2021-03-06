/*
 * Copyright (c) 2015-2016 Dilvan Moreira.
 * Copyright (c) 2015-2016 John Garavito.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package dsl

import org.codehaus.groovy.control.CompilerConfiguration
import org.grails.io.support.PathMatchingResourcePatternResolver
import org.kohsuke.groovy.sandbox.SandboxTransformer
import org.springframework.context.ApplicationContext
import semantics.DataReader
import semantics.Know
import utils.Uri

/**
 * GUIDSL
 *
 * @author Dilvan Moreira.
 * @author John Garavito.
 */
class GUIDSL {
    private _shell
    private _sandbox
    private _script
    private _ctx
    private Know _k
    private _widgetAttrs
    private contanst
    private _controller
    private _action
    private static _md
    private _msg
    private viewsMap
    private dataTypeToWidget

    def _props = [:]

    def GUIDSL(String filename, ApplicationContext applicationContext){

        _ctx = applicationContext
        _k = _ctx.getBean('k')
        _md = _ctx.getBean('md')
        _msg = _ctx.getBean('messageSource')

        dataTypeToWidget = [:]
        _widgetAttrs = [:]
        contanst = [:]

        viewsMap = [:]
        viewsMap['home'] = [:]
        viewsMap['home']['index'] = []
        viewsMap['home']['contact'] = []
        viewsMap['tool'] = [:]
        viewsMap['tool']['index'] = []
        viewsMap['tool']['analysis'] = []
        viewsMap['tool']['inputFeatures'] = []
        viewsMap['tool']['report'] = []
        viewsMap['user'] = [:]
        viewsMap['user']['signup'] = []

        // Create CompilerConfiguration and assign
        // the DelegatingScript class as the base script class.
        def _cc = new CompilerConfiguration()
        _cc.addCompilationCustomizers(new SandboxTransformer())
        _cc.setScriptBaseClass(DelegatingScript.class.name)

        _shell = new GroovyShell(new Binding(), _cc)
        _sandbox = new DSLSandbox()
        _sandbox.register()

        // Configure the GroovyShell and pass the compiler configuration.
        //dslInter = new GroovyShell(this.class.classLoader, binding, cc)
        _ctx = applicationContext

        //_script = (DelegatingScript) dslInter.parse(new File(filename).text)
        //println new File(_ctx.getBean('path')+filename).toString()

        _script = (DelegatingScript) _shell.parse(_ctx.getResource(filename).file)
        _script.setDelegate(this)

        // Run DSL script.
        try {
            _script.run()
        }
        finally {
            _sandbox.unregister()
        }
    }

    def reload(String code){

        dataTypeToWidget = [:]

        viewsMap = [:]
        viewsMap['home'] = [:]
        viewsMap['home']['index'] = []
        viewsMap['home']['contact'] = []
        viewsMap['tool'] = [:]
        viewsMap['tool']['index'] = []
        viewsMap['tool']['analysis'] = []
        viewsMap['tool']['inputFeatures'] = []
        viewsMap['tool']['report'] = []
        viewsMap['user'] = [:]
        viewsMap['user']['signup'] = []

        _sandbox.register()

        //def stack = code.tokenize("\n")

        //for (c in stack){
        //    println c + "\n"
        //}

        _script = (DelegatingScript) _shell.parse(code)
        _script.delegate = this

        def response  = [:]

        // Run DSL script.
        try {
            _script.run()
            response.status = 'ok'
        }
        catch(Exception e){
            response.error = [:]
            for (StackTraceElement el : e.stackTrace) {
                if(el.methodName == 'run' && el.fileName ==~ /Script.+\.groovy/) {
                    response.error.line = el.lineNumber
                    response.error.message = e.message
                    response.error.filename = el.fileName
                }
            }
            response.status = 'error'
        }
        finally {
            _sandbox.unregister()
        }
        return response
    }

    def dataType(Map attrs = [:], String id){
        def k = _ctx.getBean('k')
        dataTypeToWidget[k.toURI(id)] = attrs['widget']
    }

    def getDataTypeToWidget(){
        return dataTypeToWidget
    }

    def widgetAttributes(Map attrs = [:], String id){
        _widgetAttrs[id] = attrs
    }

    def getWidgetAttrs(){
        return _widgetAttrs
    }

    def getViewsMap(){
        return viewsMap
    }

    def contanst(Object arg, String id){
        contanst[id] = arg
    }

    def selectEvaluationObject(Map attrs = [:], ArrayList view = viewsMap[_controller][_action]){
        def defaultAttrs =  _widgetAttrs['selectEvaluationObject']
        def uri = _k.toURI(attrs.id)
        def request = ['evaluationObjects': ['a', uri]]
        def shortId = _k.shortURI(uri)
        attrs['evaluationObject']= uri

        defaultAttrs.each{key, value->
            if(!attrs.containsKey(key))
                attrs[key] = value
        }

        request.each{ key, arg ->
            attrs[key] = _k[arg[1]].getLabelDescription(arg[0].toString())
        }

        view.push(['widget': 'selectEvaluationObject', 'request': request, attrs: attrs])
    }

    def listEvaluationObjects(Map attrs = [:], ArrayList view = viewsMap[_controller][_action]){
        def defaultAttrs =  [:]
        def evaluationObjects = _k['inds:'+attrs.userId].evaluationObjectsIdLabel //_k['ui:EvaluationObject'].getIndividualsIdLabel()

        defaultAttrs.each{key, value->
            if(!attrs.containsKey(key))
                attrs[key] = value
        }
        if(attrs.id){
            def uri = _k.toURI('inds:'+attrs.id)
            attrs.id = uri
            attrs.data = []
            _k[uri].dataProperties.each{
                attrs.data.push([label: it.dataPropertyLabel, value: it.value])
            }
            _k[uri].objectProperties.each{
                attrs.data.push([label: it.objectPropertyLabel, value: it.valueLabel])
            }
        }

        attrs['evaluationObjects'] = evaluationObjects

        view.push(['widget': 'listEvaluationObjects', attrs: attrs])
    }

    def createEvaluationObject(Map attrs = [:], ArrayList widgets = [], ArrayList view = viewsMap[_controller][_action]){
        def request         = [:]

        request['widgets']  = [:]
        attrs['widgets']    = [:]

        widgets.each{
            if(it.request) {
                request['widgets'][it.id] = it.request
            }
            attrs['widgets'][it.id] = ['widget': it.widget, 'attrs': it.attrs]
        }

        request.widgets.each{ key, arg ->
            //println arg[1]
            //println arg[0]
            attrs.widgets[key]['attrs']['data'] = _k[arg[1]].getIndividualsLabel(arg[0].toString())
            //println attrs.widgets[key]['attrs']['data']
        }

        //Uri.printTree(attrs)

        view.push(['widget': 'createEvaluationObject', 'request': request, 'attrs': attrs])
    }

    def text(Map attrs = [:], ArrayList view = viewsMap[_controller][_action]){
        attrs.text = attrs['text'] ? _toHTML(attrs['text']) : ''
        view.push(['widget': 'text', 'attrs': attrs])
    }

    def text(String txt, ArrayList view = viewsMap[_controller][_action]){
        view.push(['widget': 'text', 'attrs': [text: _toHTML(txt)]])
    }

    def individualsPanel(Map attrs = [:], ArrayList view = viewsMap[_controller][_action]){
        view.push(['widget': 'individualsPanel', 'attrs': attrs])
    }

    def linebreak(ArrayList view = viewsMap[_controller][_action]){
        view.push(['widget': 'linebreak'])
    }

    def ln(ArrayList view = viewsMap[_controller][_action]){
        view.push(['widget': 'linebreak'])
    }

    def recommendation(String txt, ArrayList view = viewsMap[_controller][_action]){
        view.push(['widget': 'text', 'attrs': [text: _toHTML('Recomendação: '+ txt)]])
    }

    def recommendation(boolean c, String txt){
        //if (c) report << ['recommendation', _toHTML(txt)]
    }

    def recommendation(Map map){
        //if (map.if) report << ['recommendation', _toHTML(map.show)]
    }

    def recommendation(Map map, String txt){
        //if (map['if']) report << ['recommendation', _toHTML(txt)]
    }

    def tableReport(Map attrs = [:], ArrayList view = viewsMap[_controller][_action]){
        //report << ['table', list, headers]
        view.push(['widget': 'tableReport', 'attrs': attrs])
    }

    def map(Map attrs = [:], ArrayList view = viewsMap[_controller][_action]){
        //report << ['map', url]
        view.push(['widget': 'map', 'attrs': attrs])
    }

    def matrix(Map attrs = [:], ArrayList view = viewsMap[_controller][_action]){
        //report << ['matrix', map.x, map.y, map.labelX, map.labelY, map.rangeX, map.rangeY, map.quadrants, map.recomendations]
        view.push(['widget': 'matrix', 'attrs': attrs])
        //view.push(['widget': 'matrix', 'attrs': [x: map.x, y: map.y, label_x: map.label_x, label_y: map.label_y, range_x: map.range_x, range_y: map.range_y, quadrants: map.quadrants, recomendations: map.recomendations]])
    }

    def tabs(Map extAttrs = [:], ArrayList widgets = [], ArrayList view = viewsMap[_controller][_action]){
        def defaultAttrs = _widgetAttrs['tabs']
        def attrs = [:]
        def tab_prefix = 'tab_'
        def activeTab = extAttrs.containsKey('activeTab') ? extAttrs.activeTab : tab_prefix+'0'
        def pre = extAttrs.containsKey('id') ?  extAttrs.id+'_' : ''

        attrs['id'] = pre + 'tabs'
        attrs['tabs'] = [:]

        widgets.eachWithIndex { it, int i ->
            if(it.widget == 'tab'){
                attrs['tabs'][tab_prefix + i] = ['widget': 'tab', attrs: [id: pre+tab_prefix + i, label: it.attrs.label], widgets: []]

                it.widgets.each{ widget ->
                    if(widget.attrs && widget.widgets && widget.id)
                        "$widget.widget"(widget.attrs, widget.widgets, widget.id, attrs['tabs'][tab_prefix+i].widgets)
                    else if(widget.attrs && widget.widgets)
                        "$widget.widget"(widget.attrs, widget.widgets, attrs['tabs'][tab_prefix+i].widgets)
                    else if(widget.widgets && widget.id)
                        "$widget.widget"([:], widget.widgets, widget.id, attrs['tabs'][tab_prefix+i].widgets)
                    else if(widget.attrs && widget.id)
                        "$widget.widget"(widget.attrs, widget.id, attrs['tabs'][tab_prefix+i].widgets)
                    else if(widget.id)
                        "$widget.widget"([:], widget.id, attrs['tabs'][tab_prefix+i].widgets)
                    else if(widget.widgets)
                        "$widget.widget"([:], widget.widgets, attrs['tabs'][tab_prefix+i].widgets)
                    else if(widget.attrs)
                        "$widget.widget"(widget.attrs, attrs['tabs'][tab_prefix+i].widgets)
                    else
                        "$widget.widget"([:], attrs['tabs'][tab_prefix+i].widgets)
                }
            }
        }

        attrs['submitTopButton'] = extAttrs.containsKey('submitTopButton') ? extAttrs['submitTopButton'] :  defaultAttrs['submitTopButton']
        attrs['submitTopLabel'] = extAttrs.containsKey('submitTopLabel') ? extAttrs['submitTopLabel'] :  defaultAttrs['submitTopLabel']
        attrs['saveTopButton'] = extAttrs.containsKey('saveTopButton') ? extAttrs['saveTopButton'] :  defaultAttrs['saveTopButton']
        attrs['saveTopLabel'] = extAttrs.containsKey('saveTopLabel') ? extAttrs['saveTopLabel'] :  defaultAttrs['saveTopLabel']
        attrs['generateTopButton'] = extAttrs.containsKey('generateTopButton') ? extAttrs['generateTopButton'] :  defaultAttrs['generateTopButton']
        attrs['generateTopLabel'] = extAttrs.containsKey('generateTopLabel') ? extAttrs['generateTopLabel'] :  defaultAttrs['generateTopLabel']

        //Uri.printTree(attrs)
        if(attrs['tabs'][activeTab]) {
            attrs['tabs'][activeTab].attrs['widgetClass'] = 'active'

            attrs['pagination'] = extAttrs.containsKey('pagination') ? extAttrs['pagination'] : defaultAttrs['pagination']

            if (attrs['pagination']) {
                if (extAttrs.containsKey('initialPag')){
                    attrs['tabs'][tab_prefix + '0'].attrs['initialPag'] = extAttrs['initialPag']
                    attrs['tabs'][tab_prefix + '0'].attrs['initialPagLabel'] = extAttrs['initialPagLabel']
                }
                if (extAttrs.containsKey('finalPag')){
                    attrs['tabs'][tab_prefix + (widgets.size() - 1)].attrs['finalPag'] = extAttrs['finalPag']
                    attrs['tabs'][tab_prefix + (widgets.size() - 1)].attrs['finalPagLabel'] = extAttrs['finalPagLabel']
                }
                if (extAttrs.containsKey('submit'))
                    attrs['tabs'][tab_prefix + (widgets.size() - 1)].attrs['submitLabel'] = extAttrs.containsKey('submitLabel') ? extAttrs['submitLabel'] : defaultAttrs['submitLabel']

                attrs['tabs'].eachWithIndex { tab, int i ->
                    if (i > 0) {
                        tab.value.attrs['previous'] = pre+tab_prefix + (i - 1)
                        tab.value.attrs['previousLabel'] = defaultAttrs['previousLabel']
                    }
                    if (i < (attrs['tabs'].size() - 1)) {
                        tab.value.attrs['next'] = pre+tab_prefix + (i + 1)
                        tab.value.attrs['nextLabel'] = defaultAttrs['nextLabel']
                    }
                }
            }
        }

        //Uri.printTree(attrs)

        view.push(['widget': 'tabs', 'attrs': attrs])
    }

    def form(Map attrs = [:], ArrayList widgets = [], ArrayList view = viewsMap[_controller][_action]){
        def defaultAttrs = _widgetAttrs['form']
        defaultAttrs.each{key, value->
            if(!attrs.containsKey(key))
                attrs[key] = value
        }
        attrs.widgets = []

        widgets.each {
            if (it.widget){
                if (it.attrs && it.widgets)
                    "$it.widget"(it.attrs, it.widgets, attrs.widgets)
                else if(it.widgets)
                    "$it.widget"([:], it.widgets, attrs.widgets)
                else if(it.attrs)
                    //println 'Only Attrs '+ it.widget
                    "$it.widget"(it.attrs, attrs.widgets) // "$it.widget"(it.attrs, [], attrs.widgets)
                else
                    //println 'No Attrs '+it.widget
                    "$it.widget"([:], [], attrs.widgets)
            }
        }
        view.push(['widget': 'form', 'attrs': attrs])
    }

    def hiddenInput(Map attrs = [:], ArrayList view = viewsMap[_controller][_action]){
        view.push(['widget': 'hiddenInput', 'attrs': attrs])
    }

    def navBarRoute(Map attrs = [:], ArrayList view = viewsMap[_controller][_action]){
        def attributes = [:]
        def roles = _k['inds:'+attrs.username].getAttr('hasRole')
        def users = [:]
        def evaluationObjects = [:]
        def analyses = [:]

        attrs.each { key, value ->
            if(!attributes.containsKey(key))
                attributes[key] = value
        }

        if(roles.contains(_k.toURI('ui:AdminRole'))){
            _k['ui:User'].getIndividuals('?hasUsername').each{
                users[it.id.substring(it.id.lastIndexOf('#')+1)] = [label: it.hasUsername]
            }
        }

        if(attrs.userId){
            _k['inds:'+attrs.userId].evaluationObjectsIdLabel.each{
                evaluationObjects[it.id.substring(it.id.lastIndexOf('#')+1)] = [label: it.label]
            }
        }

        if(attrs.evalObjId){
            _k['inds:'+attrs.evalObjId].analysesIdLabel.each{
                analyses[it.id.substring(it.id.lastIndexOf('#')+1)] = [label: it.label]
            }
        }

        attributes['users'] = users

        attributes['evaluationObjects'] = evaluationObjects

        attributes['analyses'] = analyses

        view.push(['widget': 'navbarRoute', 'attrs': attributes])
    }

    def methodMissing(String key) {
        println "methodMissing: key "+key
        //new Node(_k, _k.toURI(props[key]))
    }

    def methodMissing(String key, attrs){
        //println "GUIDSL methodMissing: "+ key //+ " - "+attrs
        if(attrs in Object[]){
            def container = []
            def element = null
            if(key in widgetsNames){
                if(attrs.size()==1 && attrs[0] in String){
                    if(viewsMap[_controller]){
                        container = viewsMap[_controller][_action]
                        element = ['widget': key, 'attrs': ['text': _toHTML(attrs[0])]]
                    } else
                        _props[key] =_toHTML(attrs[0])
                }
                else if(attrs.size()==1 && attrs[0] in LinkedHashMap){
                    if(viewsMap[_controller] && attrs[0].text){
                        attrs[0].text = _toHTML(attrs[0].text)
                        /*
                        if(key == 'text'){
                            println key
                            println attrs.size()
                            println _toHTML(attrs[0].text)
                            println _controller+"-"+_action
                        }
                        */
                    }
                    container = viewsMap[_controller][_action]
                    element = ['widget': key, 'attrs': attrs[0]]
                }
                else if(attrs.size()==2 && attrs[0] in LinkedHashMap && attrs[1] in ArrayList){
                    if(attrs[0].text){
                        container = attrs[1]
                        attrs[0].text = _toHTML(attrs[0].text)
                        element = ['widget': key, 'attrs': attrs[0]]
                    } else {
                        container = attrs[1]
                        element = ['widget': key, 'attrs': attrs[0]]
                    }
                }
                if(element)
                    container.push(element)
                /*
                if(key == 'text'){
                    println key
                    println container
                }
                */
            }
            else if(attrs.size()==1 && attrs[0] in String)
                _props[key] = _toHTML(attrs[0])
            else {
                println 'Unknown method: '+ key
                attrs.eachWithIndex{ it, int i ->
                    println "Attrs ["+i+"]"
                    Uri.printTree(it)
                }
            }
        }
    }

    def propertyMissing(String key) {
        getData(key)         //new Node(_k, _k.toURI(props[key]))
    }

    def propertyMissing(String key, obj) {
        setData(key, obj)
    }

    def setData(String key, obj){
        _props[key]= obj    // _props[key]= _k.toURI(uri)
    }

    def getData(String key){
        _props[key]
    }

    def getVariables(){
        def result = [:]
        _props.each{ key, value ->
            if(!value in DataReader)
                result[key] = value
        }
        return result
    }

    def printData(){
        _props.each{
            println it
        }
    }

    def requestData(String controllerName, String actionName){
        viewsMap[controllerName][actionName].each{ command ->
            if(command.request){
                command.request.each{ key, attrs ->
                    if(key != 'widgets')
                        command.attrs[key] = _k[attrs[1]].getLabelDescription(attrs[0].toString())
                    else if(key == 'widgets')
                        attrs.each{ subKey, subArgs ->
                            //command.attrs.widgets[subKey]['attrs']['data'] = getLabelDescription(subArgs[1], subArgs[0])
                            command.attrs.widgets[subKey]['attrs']['data'] = _k[subArgs[1]].getLabelDescription(subArgs[0].toString())
                        }
                }
            }
        }
    }

    def setView(String controllerName, String actionName){
        this._controller = controllerName
        this._action = actionName
        if(!viewsMap[_controller])
            viewsMap[_controller] = [:]
        if(!viewsMap[_controller][_action])
            viewsMap[_controller][_action]=[]
    }

    def renderView(String name){
        _sandbox.register()
        //        _script = (DelegatingScript) dslInter.parse(new File("dsl/views/${name}.groovy").text)

        _script = (DelegatingScript) _shell.parse(_ctx.getResource("dsl/views/${name}.groovy").file)
        _script.setDelegate(this)

        try {
            _script.run()
        }
        catch(Exception e){
            /*
            response.error = [:]
            for (StackTraceElement el : e.getStackTrace()) {
                if(el.getMethodName() == 'run' && el.getFileName() ==~ /Script.+\.groovy/) {
                    response.error.line = el.getLineNumber()
                    response.error.message = e.getMessage()
                    response.error.filename = el.getFileName()
                }
            }
            //response.status = 'error'
            */
            println e
        }
        finally {
            _sandbox.unregister()
        }
    }

    def renderXML(String file){
        def node = new XmlParser().parse(_ctx.getResource('/dsl/views-markup/'+file+'.xml').file)
        def widgetWithText = ['text', 'pageHeader', 'div']
        def widgetContainer = ['form']
        def name
        def attributes
        def text
        def widgets
        def tmp

        node.children().each{
            name = it.name()
            attributes = it.attributes()
            widgets = []
            text = ''
            //println name

            if(widgetWithText.contains(name)){
                it.value().each{ subNode ->
                    if (subNode in String)
                        text += subNode
                    else if (subNode in Node && subNode.name() == 'message')
                        text += message(subNode.attribute('key'))
                }
                attributes['text'] = text
            }
            if(widgetContainer.contains(name)){
                it.value().each{ subNode ->
                    if(subNode in Node){
                        subNode.value().each{ widget ->
                            tmp = widget.attributes()
                            tmp.each{ attr ->
                                if(attr.value.startsWith('message.key='))
                                    attr.value = message(attr.value.substring(12))
                            }
                            widgets.add([widget: subNode.name(), attrs: subNode.attributes() + [widgetName: widget.name(), model: tmp]])
                        }
                    }
                }
            }
            if (widgetContainer.contains(name))
                this."$name"(attributes, widgets, viewsMap['admin'][file])
            else
                this."$name"(attributes, viewsMap['admin'][file])
        }
        //Uri.printTree(viewsMap['admin'][file])
    }

    def getWidgetsNames(){
        def patternResolver = new PathMatchingResourcePatternResolver()
        def resources = patternResolver.getResources('widgets/*.gsp')
        def widgetsList = []
        def name

        resources.each {
            name = it.filename
            widgetsList << name.substring(1, name.lastIndexOf('.'))
        }
        return widgetsList
    }

    def message(String code){
        _msg.getMessage(code, null, java.util.Locale.getDefault())
    }

    static _toHTML(String txt) {_md.markdownToHtml(txt)}

    /*
       def title(String arg) {
           setData('title', arg)
       }

       def description(String arg){
           setData('description', _toHTML(arg))
           //def gui = _ctx.getBean('gui')
           //gui.viewsMap['tool']['index'].push(['widget': 'description', 'attrs': ['description': _toHTML(arg)]])

           //println  Processor.process(description, true)
           //println new PegDownProcessor().markdownToHtml(description)
       }


       def text(String arg){
           //def gui = _ctx.getBean('gui')
           //gui.viewsMap['tool']['analysis'].push(['widget': 'text', 'attrs': ['text': arg]])
       }

       def recommendation(Map map, String txt){
           recommendations << [map['if'],txt]
       }
   */
}
