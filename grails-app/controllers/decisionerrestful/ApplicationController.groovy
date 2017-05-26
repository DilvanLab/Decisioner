package decisionerrestful

import grails.converters.JSON
import grails.core.GrailsApplication
import grails.plugins.*
import org.apache.commons.validator.routines.UrlValidator
import java.text.SimpleDateFormat
import java.text.ParsePosition

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
        def view = k.toURI('ui:View')
        def dataModel = dsl.dataModel['input']
        def features = dataModel[0].children
        def hasName = k.toURI('ui:hasName')
        def type = k.toURI('rdfs:subClassOf')
        def data = [:]
        def timestamp = new SimpleDateFormat('yyyy-MM-dd-HH-mm-ss') //.parse(analysisId, new ParsePosition(analysisId.length()-19));
        def evalObjId = k['inds:'+'analysis']
        println(evalObjId)

        UrlValidator urlValidator = new UrlValidator();



        features.each{ featuresGroups ->
            featuresGroups.children.each{ featuresGroup ->
                featuresGroup.children.each{ dimensions ->
                    dimensions.children.each{ dimension ->
                        dimension.children.each{ attribute ->
                            attribute.children.each{ indicator ->
                                params.each{ param ->
                                    if(urlValidator.isValid(param.key)){
                                        if(param.key == indicator.id)
                                            data[indicator.id] = [value: param.value, dataType: indicator.type]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        println data



        def result = [status: 'ok']

        render result as JSON
    }


    def createAnalysis(){
        createAnalysisAndFeatures(params)
        redirect(action: 'analysis', id: params.analysisId)
    }

    def createAnalysisAndFeatures(parameters){
        println 'params.analysisId: '+parameters.analysisId

        def evalObjURI = k.toURI(parameters.evalObjInstance)
        def analysisId = parameters.analysisId
        //def node = new Node(k)

        def name = k[':Harvest'].label+ ' ' + k[evalObjURI]['?harvestYear']
        def timestamp = new SimpleDateFormat('yyyy-MM-dd-HH-mm-ss').parse(analysisId, new ParsePosition(analysisId.length()-19));

        def properties = [:]
        def analysisSize = k[evalObjURI].getAnalysisLabel(name).size();
        if(k['inds:'+analysisId].exist()){
            name = k['inds:'+analysisId]['label']
            properties[k.toURI('ui:updateAt')] = [value: new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").format(new Date()), dataType: k.toURI('xsd:dateTime')]

            k.deleteFeatures(analysisId)
            k.deleteAnalysis(analysisId)
        }
        else if(analysisSize > 0)
            name += " ($analysisSize)"

        properties[k.toURI('rdfs:label')] = [value: name, dataType: k.toURI('rdfs:Literal')]     //new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(now)
        properties[k.toURI(':appliedTo')] = [value: evalObjURI, dataType: k[':appliedTo'].range]
        properties[k.toURI('ui:createAt')] = [value: new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").format(timestamp), dataType: k.toURI('xsd:dateTime')]

        k.insertAnalysis(analysisId, properties)
        k.insertFeatures(analysisId, featuresInstances(parameters))
        k.insertExtraFeatures(analysisId, extraFeaturesInstances(parameters))
    }

    def updateAnalysis(){
        //def now = new Date()
        def analysisId = params.analysisId
        def analysisURI = k.toURI('inds:'+analysisId)
        //def evalObjURI = k[analysisURI].getAttr('appliedTo')
        //def createAt = k[analysisURI].getAttr('createAt')
        //def name = k[analysisURI].getAttr('label')
        //def node = new Node(k)
        def properties = [:]

        properties[k.toURI('rdfs:label')] =  [value: k[analysisURI]['label'], dataType: k.toURI('rdfs:Literal')]     //new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(now)
        properties[k.toURI(':appliedTo')] =  [value: k[analysisURI]['appliedTo'], dataType: k[':appliedTo'].range]
        properties[k.toURI('ui:createAt')] = [value: k[analysisURI]['createAt'], dataType: k.toURI('xsd:dateTime')]
        properties[k.toURI('ui:updateAt')] = [value: new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").format(new Date()), dataType: k.toURI('xsd:dateTime')]

        k.deleteFeatures(analysisId)
        k.deleteAnalysis(analysisId)

        k.insertAnalysis(analysisId, properties)
        k.insertFeatures(analysisId, featuresInstances(params))
        k.insertExtraFeatures(analysisId, extraFeaturesInstances(params))

        redirect(action: 'analysis', id: analysisId)
    }
}
