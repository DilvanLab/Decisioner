package decisionerrestful

import grails.converters.JSON
import grails.core.GrailsApplication
import grails.plugins.*
import semantics.Node

import java.text.SimpleDateFormat

class ApplicationController implements PluginManagerAware {

    GrailsApplication grailsApplication
    GrailsPluginManager pluginManager
    def dsl
    def k
    def slugify

    def index() {
        //[grailsApplication: grailsApplication, pluginManager: pluginManager]
        def result = [status: 'ok']

        render result as JSON
    }

    def save(){
        //println params
        def view = k.toURI('ui:View')
        def dataModel = dsl.dataModel['instance']
        def elements = dataModel[0].children
        def hasName = k.toURI('ui:hasName')
        def type = k.toURI('rdfs:subClassOf')
        def data = [:]

        elements.each{
            params.each{ param ->
                if((it.name == param.key) && param.value){
                    data[it.name] = [value: param.value, dataType: it.type]
                }
            }
        }

        if(data[hasName] && data[type]){
            def name = data[hasName].value
            def id = slugify.slugify(name)
            def node = new Node(k)
            def propertyInstances = [:]
            def now = new Date()
            def value

            propertyInstances[k.toURI('ui:createAt')] = [value: new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").format(now), dataType: k.toURI('xsd:dateTime')]

            data.each{
                if(it.key != type){
                    propertyInstances[it.key] = it.value
                }
            }

            println id
            println data[type]
            println propertyInstances
        }


        def result = [status: 'ok']

        render result as JSON
    }

    def createEvaluationObject(){

    }
}
