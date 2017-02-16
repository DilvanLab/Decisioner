/*
 * Copyright (c) 2015-2017 Dilvan Moreira.
 * Copyright (c) 2015-2017 John Garavito.
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
import org.kohsuke.groovy.sandbox.SandboxTransformer
import org.springframework.context.ApplicationContext
import semantics.DataReader
import utils.Uri

/**
 * AQDMDSL
 *
 * @author Dilvan Moreira.
 */

class ADMDSL {
    private _ctx
    private _k
    private _gui
    private static _md

    private _sandbox
    private _script
    private _program
    private _shell

    private _data
    private _msg
    private _props = [:]
    private _featureMap = [:]
    private _scenarioMap = [:]
    private _reportView = []
    private _evaluationObjectInstance

    /**
     *
     * @param filename
     * @param applicationContext
     */
    ADMDSL(String filename, ApplicationContext applicationContext){
        // Create CompilerConfiguration and assign
        // the DelegatingScript class as the base script class.
        _ctx = applicationContext
        _k = _ctx.getBean('k')
        _gui = _ctx.getBean('gui')
        _md = _ctx.getBean('md')
        _msg = _ctx.getBean('messageSource')

        def _cc = new CompilerConfiguration()
        _cc.addCompilationCustomizers(new SandboxTransformer())
        _cc.setScriptBaseClass(DelegatingScript.class.name)

        _shell = new GroovyShell(new Binding(), _cc)
        _sandbox = new DSLSandbox()
        _sandbox.register()

        // Configure the GroovyShell and pass the compiler configuration.
        //_shell = new GroovyShell(this.class.classLoader, binding, cc)
        //println _ctx.getResource(filename).getFile().text

        //_script = (DelegatingScript) _shell.parse(new File(filename).text)
        //println _ctx.getBean('path')
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
        _data = null
        _props = [:]
        _featureMap = [:]
        _reportView = []
        _evaluationObjectInstance = null

        _sandbox.register()

        _script = (DelegatingScript) _shell.parse(code)
        _shell
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

    def evaluationObject(String id, Closure closure){
        String uri = _k.toURI(id)
        def object = new EvaluationObject(uri, _ctx)

        closure.resolveStrategy = Closure.DELEGATE_FIRST
        closure.delegate = object
        closure()

        _evaluationObjectInstance = object
    }

    def evaluationObjectInfo(){
        def analyseURI = _props[_data].id
        def evalObjURI = _k[analyseURI].getAttr('appliedTo')
        def data = []
        _k[evalObjURI].dataProperties.each{
            data.push([label: it.dataPropertyLabel.capitalize(), value: it.value])
        }
        _k[evalObjURI].objectProperties.each{
            data.push([label: it.objectPropertyLabel.capitalize(), value: it.valueLabel])
        }
        _reportView.push(['widget': 'evaluationObjectInfo', 'attrs': [data: data]])
    }

    def getEvaluationObject(){
        _evaluationObjectInstance
    }

    def feature(Map attrs, String id, Closure closure = {}){
        String uri = _k.toURI(id)
        def feature = new Feature(uri, attrs, _ctx)

        closure.resolveStrategy = Closure.DELEGATE_FIRST
        closure.delegate = feature
        closure()

        _featureMap[uri] = feature
    }

    def feature(String id, Closure closure = {}){
        feature([:], id, closure)
    }

    def getFeatureMap(){
        return _featureMap
    }

    def getScenarioMap(){
        _scenarioMap
    }

    def report(Closure c){
        _program = c
    }

    def runReport(){
        _program()
    }

    def getVariables(){
        def result = [:]
        _props.each{ key, value ->
            if(value.class != DataReader)
                result[key] = value
        }
        return result
    }

    def getReportView(){
        return _reportView
    }

    def data(String str){
        _data = str
        //_props[str]
    }

    def setData(obj){
        _props[_data]= obj
    }

    def getData(String key){
        _props[key]
    }

    def printData(){
        println _props
    }

    def propertyMissing(String key) {
        //println "propertyMissing: key "+key
        getData(key)
        //new Node(_k, _k.toURI(props[key]))
    }

    def propertyMissing(String key, arg) {
        //println "propertyMissing: key, arg "+key+"->"+arg
        _props[key] = arg
    }

//    def methodMissing(){
//        println "methodMissing: key "
//    }

    def methodMissing(String key) {
        println "methodMissing: key "+key
        //new Node(_k, _k.toURI(props[key]))
    }

    def methodMissing(String key, attrs){
        //println "DSL methodMissing: "+ key
        if(!attrs.isArray) return
    }

    def clean(String controller, String action){
        if(controller?.trim() && action?.trim()){
            _gui.viewsMap[controller][action] = []
            if(action == 'analysis' || action == 'report' ){
               _reportView = []
            }
        }
    }

    def message(String code){
        _msg.getMessage(code, null, Locale.getDefault())
    }

    static _toHTML(String txt) {_md.markdownToHtml(txt)}
}

