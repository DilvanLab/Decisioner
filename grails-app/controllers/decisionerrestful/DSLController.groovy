package decisionerrestful

import grails.rest.*
import grails.converters.*
import dsl.*

class DSLController {
	static responseFormats = ['json', 'xml']
    def ctx = grailsApplication.mainContext;
    def dsl

    def index() {
        def dsls = ctx.getResource("dsl/").file
        def data = []
        dsls.eachFile { file ->
            data.push(file.getName().replaceFirst(~/\.[^\.]+$/, ''))
        }
        respond data
    }

    def show() {
        def file = ctx.getResource("dsl/"+params.id+".groovy").file
        def data = [:]

        if(file.exists())
            data['dsl'] = file.text
        else
            data['error'] = 'No file found'
        respond data
    }

    def save(){
        def input = request.JSON
        def id = input.id
        def file = ctx.getResource("dsl/"+id+".groovy").file
        def response = [:]

        if(file.exists()) {
            def result = dsl.reload(input.code)
            response['message'] = result.status
            if(result.status == 'ok')
                file.write(input.code)
            else
                println result
        } else
            response['error'] = 'No file found'

        respond response
    }
}
