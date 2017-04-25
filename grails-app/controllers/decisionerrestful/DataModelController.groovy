package decisionerrestful

import dsl.*
import grails.rest.*
import grails.converters.*
import semantics.DataReader

class DataModelController {
	static responseFormats = ['json', 'xml']
    def ctx = grailsApplication.mainContext
    def k
    def ui
    def dsl

    def index() {
        def data = [status: 'ok']
        respond data
    }

    def show() {
        def id = params.id
        def data = [:]
        switch(id){
            case 'main':
                data = dsl.dataModel['input']
                break
            case 'instance':
                data = dsl.dataModel[id]
                break
            case 'input':
                data = dsl.dataModel[id]
                break
            case 'report':
                def uri = k.toURI('inds:'+'analysis01')
                dsl.setData(new DataReader(k, uri))
                dsl.dataModel[id] = []
                dsl.runReport()
                data = dsl.dataModel[id]
                break
            case 'admin':
                def view = [type: k.toURI('ui:AdminView'), label: "Admin", action: "http://localhost:8080/Application", children: []]
                data = [view]
                break
            case 'dataTypes':
                data =  ui.dataModel[id]
                break
            default:
                data['error'] = 'File processing error'
                break
        }
        respond data
    }
}
