package decisionerrestful

import grails.rest.*
import grails.converters.*
import dsl.DSL;

class DSLController {
	static responseFormats = ['json', 'xml']
    def ctx = grailsApplication.mainContext;
    def index() {
        def file = ctx.getResource("dsl/main.groovy").file
        def result = [code: file.text]
        render result as JSON
    }

    def show(id) {

    }

    def save(){
        def file = ctx.getResource("dsl/main.groovy").file
        def json = request.JSON;

        if(file.exists())
            file.write(json.code);

        def dsl = new DSL("dsl/main.groovy", ctx)

        render dsl.viewMap as JSON
    }
}
