package decisionerrestful

import dsl.DSL
import grails.converters.JSON
import grails.core.GrailsApplication
import grails.util.Environment
import grails.plugins.*

class ApplicationController implements PluginManagerAware {

    GrailsApplication grailsApplication
    GrailsPluginManager pluginManager

    def index() {
        //[grailsApplication: grailsApplication, pluginManager: pluginManager]
        def dsl = new DSL("dsl/main.groovy", grailsApplication.mainContext)

        render dsl.viewMap as JSON
    }

    def show(id) {
        def result = [id: id]
        render result as JSON
    }
}
