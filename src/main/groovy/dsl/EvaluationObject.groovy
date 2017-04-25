package dsl

import org.springframework.context.ApplicationContext
import semantics.Know

/**
 * Created by john on 4/21/17.
 */
class EvaluationObject {
    def _id
    def _ctx
    def dataModel
    Know k
    def ui

    EvaluationObject(String id, ApplicationContext applicationContext){
        _id = id
        _ctx = applicationContext
        k = _ctx.getBean('k')
        ui = _ctx.getBean('ui')
        dataModel = []
    }

    def instance(Map attrs = [:], String id){
        def uri = k.toURI(id)
        def range = (id != 'rdfs:subClassOf')? k[uri].range : _id
        def dataType = (range)? range : k.toURI('xsd:string')
        def data = []

        if(id == 'rdfs:subClassOf'){
            attrs['required'] = true
            data = k[dataType].getLabelDescription(id)
        }
        else if(k[uri].type.contains(k.toURI('owl:ObjectProperty'))){
            data = k[dataType].getLabelDescription('rdf:type')
        }

        if(k[uri].isFunctional()){
            attrs['functional'] = true
        }

        if(data.size() > 0){
            data.each{
                it['type'] = k.toURI('ui:Categorical')
                it['name'] = uri
                it['value'] = it['id']

                it.remove('id')
            }
            attrs.children = data
        }

        dataModel.push([ name: uri,
                         type: dataType]+attrs)
    }

    def type(Map attrs = [:], String id='rdfs:subClassOf'){
        instance(attrs, id)
    }
}
