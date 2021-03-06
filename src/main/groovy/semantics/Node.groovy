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

package semantics

/**
 * Node
 *
 * @author Dilvan Moreira.
 * @author John Garavito.
 */
class Node {
    String URI
    static Know k
    Map patterns = [:]

    Node(Know k, String uri = null){
        this.k = k
        this.URI = uri

        //rdf:Property
        this.patterns['type']       = " rdf:type ?type. "
        this.patterns['superClass'] = " rdfs:subClassOf ?superClass. "

        //owl:ObjectProperty
        this.patterns['range']      = " rdfs:range ?range. "
        this.patterns['hasRole']    = " ui:hasRole ?hasRole. "
        this.patterns['appliedTo']  = " :appliedTo ?appliedTo. "
        this.patterns['hasOwner']   = " :hasOwner ?hasOwner. "

        //owl:DatatypeProperty
        this.patterns['mapa']       = " <http://dbpedia.org/property/pt/mapa> ?mapa. "
        this.patterns['createAt']   = " ui:createAt ?createAt. "
        this.patterns['updateAt']   = " ui:updateAt ?updateAt. "
        this.patterns['hasUsername']= " ui:hasUsername ?hasUsername. "
        this.patterns['hasPassword']= " ui:hasPassword ?hasPassword. "
        this.patterns['harvestYear']= " :harvestYear ?harvestYear. "

        //owl:TransitiveProperty

        // owl:AnnotationProperty
        this.patterns['label']      = " rdfs:label ?label. "
        this.patterns['comment']    = " rdfs:comment ?comment. "
        this.patterns['weight']     = " :weight ?weight. "
        this.patterns['description']= " dcterm:description ?description. "
        this.patterns['title']      = " dcterm:title ?title. "
        this.patterns['creator']    = " dc:creator ?creator. "
    }

    def getAt(String name){
        getAttr(name)
    }

    /**
     * Get atributes from node using the patterns or a URI.
     *
     * @param args
     * @param params
     * @return
     */
    def getAttr(String args='', Map params = [:]) {
        def argsList = args.tokenize(' ?')
        def select = ''
        def query = ''
        def order = ''
        def result

        //println argsList
        argsList.each{
            if(argsList.contains(it))
                query += "<$URI>"+patterns[it]
        }
        /*
        if(argsList.contains('label'))
            query += patterns['label']
        if(argsList.contains('superClass'))
            query += patterns['superClass']
        */

        if(params.containsKey('FILTER')){           //(?type != :ProductionUnit && ?type != ui:EvaluationObject && !isBlank(?type) )"
            query += "FILTER(" + params['FILTER'] + ")"
        }

        //println query

        // By default orginizes by label or if there is only one argument, it uses it
        if(argsList.contains('label')){
            order = 'order by ?label'
        }
        else if(argsList.size()==1){
            order = 'order by ?'+argsList[0]
        }

        select = 'distinct '
        argsList.each{
            select += '?'+it
        }

        result = k.select(select).query(query, order)

        //println result

        if(argsList.size()==1)
            result = result.collect{ it[argsList[0]]}

        (result.size()==1)? result[0] : result
    }

    def getLabel(Map params = [:]){
        getAttr('?label', params)
    }

    def getType(Map params = [:]){
        getAttr('?type', params)
    }

    def getRange(Map params = [:]) {
        //def result = k.select("distinct ?range").query("<$URI> rdfs:range ?range.")
        getAttr('?range', params)
    }

    def getDataProperties(){
        def result = k.select('?dataProperty ?dataPropertyLabel ?value').query("<$URI> ?dataProperty ?value. ?dataProperty rdf:type owl:DatatypeProperty; rdfs:label ?dataPropertyLabel. ")
        return result
    }

    def getObjectProperties(){
        def result = k.select('?objectProperty ?objectPropertyLabel ?value ?valueLabel').query("<$URI> ?objectProperty ?value. ?value rdfs:label ?valueLabel. ?objectProperty rdf:type owl:ObjectProperty; rdfs:label ?objectPropertyLabel. ")
        return result
    }

    def getDataType(){
        def result = k.select('?dataType').query("<$URI> rdfs:subClassOf ?dataType. ?dataType rdfs:subClassOf :DataType. FILTER (?dataType != :DataType && ?dataType != <$URI>)")
        //println k.getPrefixesMap()

        result.metaClass.shortURI = {
            def uris = delegate.collect {
                if(it.dataType in String)
                    it.dataType = it.dataType.replace(k.getBasePrefix(), '')
            }
            if(uris.size()==1)
                return uris[0]
            else
                return uris
        }
        return result
    }

    /**
     *
     * @param args
     * @return
     */
    def getMap(String args){
        def sparql = "<$URI> :appliedTo ?evalobj. " +
                     "?evalobj ui:hasMicroregion ?microregion. " +
                     "optional{ ?microregion rdfs:label ?label. } "+
                     "?microregion <http://dbpedia.org/property/pt/mapa> ?map."
        def result = k.select('distinct '+args).query(sparql)

        return (result.size()==1)? result[0] : result
    }

    /**
     * Get all labels from individuals that have <property> with this node.
     * @param property
     * @return
     */
    def getIndividualsLabel(String property) {
        k.query("?id $property <$URI>; rdfs:label ?label. FILTER ( ?id != <$URI> )")
    }
//
//    def getLabelDescription(String property) {
//        k.query("?id $property <$URI>; rdfs:label ?label. optional {?id dc:description ?description}. FILTER ( ?id != <$URI> )")
//    }
//
//    def getLabelDataValue(){
//        k.query("?id a <$URI>; rdfs:label ?label; ui:dataValue ?dataValue")
//    }

    /**
     * Get labels from individuals with <:appliedTo> property with this node.
     *
     * @return
     */
    def getLabelAppliedTo(){
        k.query("?id :appliedTo <$URI>. ?id rdfs:label ?label")
    }

//    def getAnalyses(){
//        k.query("?id a ui:Analysis. ?id :appliedTo <$URI>")
//    }

    /**
     * Get all individuals of type this node that have the properties in args.
     * @param args
     * @return
     */
    def getIndividuals(String args){
        def argsList = (args).tokenize(' ?')
        def select = ''
        def query = "?id a <$URI>. "
        def order = ''
        def result

        //println argsList
        argsList.each{
            if(argsList.contains(it))
                query +=  "?id"+patterns[it]
        }

        if(argsList.contains('label')){
            order = 'order by ?label'
        }
        else if(argsList.size()==1){
            order = 'order by ?'+argsList[0]
        }

        select = 'distinct '
        argsList.add('id')
        argsList.each{
            select += '?'+it
        }

        //println query

        result = k.select(select).query(query, order)

        if(argsList.size()==1){
            result = result.collect{ it[argsList[0]]}
        }

        (result.size()==1)? result[0] : result
        /*
        select * where {
            ?individual rdf:type owl:NamedIndividual.
                    ?individual ?outProperty ?outObject.

        }
        */
    }
//
//    def getIndividualsTriples(){
//        k.select('distinct ?s ?p ?o')
//                .query("?s ?p ?o. filter(STRSTARTS(STR(?s), 'http://semantic.icmc.usp.br/individuals#') && !isBlank(?o))")
//    }
//
//    def getIndividualsIdLabel(){
//        k.select('distinct ?id ?label')
//         .query("?id a <$URI>; rdfs:label ?label.",
//                "ORDER BY ?label")
//    }
//

    /**
     * If the node is an indicator using a category
     * it returns all individual categories that the indicator can assume.
     * @return
     */
    def getCollectionIndividuals(){
        def query = ''
        def result

        query += "<$URI> rdfs:subClassOf ?y. " +
                "?y owl:onProperty ui:value. "+
                "?y owl:onClass*/owl:someValuesFrom ?category. "+
                "optional {"+
                "   ?category owl:oneOf ?collection. "+
                "   ?collection rdf:rest*/rdf:first ?id. "+
                "}"+
                "optional {"+
                "   ?id a ?category. "+
                "}"+
                "?id rdfs:label ?label. "+
                "?id ui:dataValue ?dataValue. "+
                "FILTER(?category != <http://purl.org/biodiv/semanticUI#Categorical>)"

        result = k.select('distinct ?category ?id ?label ?dataValue').query(query, "ORDER BY ?dataValue")

        result.metaClass.capitalizeLabels = {
            delegate.each{
                it.label = it.label.capitalize()
            }
        }
        result
    }

    /**
     * Get individuals from indicators that have the weight property.
     * @return
     */
    def getWeightIndividuals(){
        def query = ''
        def result

        query += "<$URI> rdfs:subClassOf ?y. " +
                "?y owl:onProperty ui:hasWeight. "+
                "?y owl:onClass*/owl:someValuesFrom ?weights. "+
                "optional {"+
                "   ?weights owl:oneOf ?collection. "+
                "   ?collection rdf:rest*/rdf:first ?id. "+
                "}"+
                "optional {"+
                "   ?id a ?weights. "+
                "}"+
                "?id rdfs:label ?label. "+
                "?id ui:asNumber ?dataValue. "

        result = k.select('distinct ?id ?label ?dataValue').query(query, "ORDER BY ?label")

        result.metaClass.capitalizeLabels = {
            delegate.each{
                it.label = it.label.capitalize()
            }
        }
        result
    }

    /**
     * If the node is an indicator using a category
     * it returns all category types that the indicator can assume.
     * @return
     */
    def getCollectionIndividualsTypes(){
        def query = ''
        def result

        query += "<$URI> rdfs:subClassOf ?y. " +
                "?y owl:onProperty ui:value. "+
                "?y owl:onClass*/owl:someValuesFrom ?category. "+
                "optional {"+
                "   ?category owl:oneOf ?collection. "+
                "   ?collection rdf:rest*/rdf:first ?element. "+
                "   ?element a ?types. "+
                "}"+
                "optional{"+
                "   ?category rdfs:subClassOf ?types. "+
                "}"+
                "FILTER(?category != <http://purl.org/biodiv/semanticUI#Categorical>)"

        result = k.select('distinct ?types').query(query, "ORDER BY ?elementLabel")
        result.collect{ it['types'] }
    }

    /**
     *
     * Get individuals that are of this node type and have ui:dataValue
     * @return only ui:dataValue and label
     */
    def getIndividualsIdValueLabel(){
        k.select('distinct ?id ?value ?label')
            .query("?id a <$URI>; rdfs:label ?label; ui:dataValue ?value.",
            "ORDER BY ?label")
    }

    def getEvaluationObjectsIdLabel(){
        k.select('distinct ?id ?label').query("<$URI> :hasEvaluationObject ?id. ?id rdfs:label ?label.", "ORDER BY ?label")
    }

    /**
     * Get id and label of individuals with the relation <:appliedTo> to this node.
     * @return
     */
    def getAnalysesIdLabel(){
        k.select('distinct ?id ?label').query("?id :appliedTo <$URI>; rdfs:label ?label.", "ORDER BY ?label")
    }

    /**
     * Same as getIndividualsIdValueLabel without distinct and label ordering.
     * @return
     */
    def getOptions() {
        k.query("?id a <$URI>; rdfs:label ?label; ui:dataValue ?value.")
    }

    /**
     *
     * @param params
     * @return
     */
    def getSuperClass(){
        getAttr('?superClass', ['FILTER': "?superClass != <$URI>"])
        //k.select('?superClass').query("<$URI> rdfs:subClassOf ?superClass. FILTER(?superClass != <$URI>)")
    }

    def getSubClass(String args=''){
        def argsList = args.tokenize(' ?')
        def query = ''
        //def result

        argsList.each{
            if(argsList.contains('label'))
                query += "?subClass rdfs:label ?label."
        }

        query += "?subClass rdfs:subClassOf <$URI>." +
                "?subSubClass rdfs:subClassOf ?subClass."+
                "FILTER(?subClass != <$URI> && ?subClass != ?subSubClass)"

        def arg = ''

        if(argsList.size()>0){
            arg = "?" + ['label', 'subClass'].join(" ?")
            //println arg;
        }

        //result =
        k.select('distinct ?subClass '+arg).query(query)

        //println query

        //def prefixes = k.prefixesMap

        /*result.metaClass.shortURI = {
            def uris = delegate.collect {
                if(it.subClass instanceof String){
                    prefixes.each{ key, value ->
                        it.subClass = it.subClass.replace(value, key+'-')
                    }
                }
                it.subClass
            }
            if(uris.size()==1)
                return uris[0]
            else
                return uris
        }

        if(result.size()==1)
            return result[0].subClass
        else
            return result*/

        //result
    }

    /**
     * Get all nodes that are children of children.
     * @param args
     * @return
     */
    def getGrandchildren(String args){
        def argsList = args.tokenize(' ?')
        def query = ''
        def result

        if (argsList.contains('subClass') && argsList.contains('id')) {
            query += "?subClass rdfs:subClassOf <$URI>"

            if (argsList.contains('subClassLabel'))
                query += "; rdfs:label ?subClassLabel"

            query += "."

            query +="?id rdfs:subClassOf ?subClass"

            if (argsList.contains('label'))
                query +="; rdfs:label ?label"

            if (argsList.contains('relevance'))
                query +=". optional {?id :relevance ?relevance}"

            query += "."

            if(argsList.contains('category')){
                query += ''' ?id rdfs:subClassOf ?y.
                             ?y owl:onProperty ui:value.
                             ?y owl:onClass*/owl:someValuesFrom ?category. '''
            }
            if(argsList.contains('weight')){
                query += ''' optional {
                                ?id rdfs:subClassOf ?z.
                                ?z owl:onProperty ui:hasWeight.
                                ?z owl:onClass*/owl:someValuesFrom ?weight.
                                ?weight rdfs:label ?weightLabel.
                             } '''
            }

            query += "FILTER(?subClass != <$URI> && ?subClass != ?id && ?category != ui:Categorical)"
        }

        result = k.select('distinct '+args).query(query, "ORDER BY ?label")

        // Adding new attributes to the class of result to add
        // new methods to this object. The goal is to get a better
        // format.

        result.metaClass.category = {
            delegate.collect {it['category']}
        }
        result.metaClass.categoryList = {
            propertyToList(delegate, 'category')
        }
        result.metaClass.subClass = {
            delegate.collect {it['subClass']}
        }
        result.metaClass.subClassMap = { attrs ->
            propertyToMap(delegate, 'subClass', attrs)
        }
        result
    }

//    def getChildren(String args){
//        def argsList = args.split(' ')
//        def query = ''
//        def result
//
//        //'?id ?label ?category ?valueType'
//
//        if (argsList.contains('?id')){
//            query +="?id rdfs:subClassOf <$URI>"
//
//            if (argsList.contains('?label'))
//                query +="; rdfs:label ?label"
//
//            if (argsList.contains('?weight'))
//                query +="; :weight ?weight"
//
//            query += "."
//        }
//        if (argsList.contains('?id') && argsList.contains('?category') && argsList.contains('?valueType')) {
//            query += ''' ?id rdfs:subClassOf ?y.
//                    ?y owl:onClass ?category.
//                    ?category rdfs:subClassOf ?valueType. ''' +
//                    "FILTER( ?valueType = ui:Categorical || ?valueType = ui:Real)"
//        }
//
//        result = k.select('distinct '+args).query(query, "ORDER BY ?label")
//
//        result.each{it.subClass = URI; it.subClassLabel = getLabel()}
//
//        result.metaClass.category = {
//            delegate.collect {it['category']}
//        }
//        result.metaClass.categoryList = {
//            propertyToList(delegate, 'category')
//        }
//        result.metaClass.subClass = {
//            delegate.collect {it['subClass']}
//        }
//        result.metaClass.subClassMap = { attrs ->
//            propertyToMap(delegate, 'subClass', attrs)
//        }
//        result
//    }

//    def getEvaluationObject(String args){
//        def argsList = args.split(' ')
//
//        def query = "<$URI> :appliedTo ?ins."
//
//        if (argsList.contains('?label'))
//            query += "?ins rdfs:label ?label."
//
//        if (argsList.contains('?productionUnit'))
//            query += "?ins rdf:type ?productionUnitType."+
//                     "?productionUnitType rdfs:label ?productionUnit."
//
//        if (argsList.contains('?efficiency'))
//            query += "?ins :AgriculturalEfficiency ?efficiencyType."+
//                     "?efficiencyType rdfs:label ?efficiency."
//
//        if (argsList.contains('?microregion'))
//            query += "?ins dbp:MicroRegion ?microregionType." +
//                     "?microregionType rdfs:label ?microregion."
//
//        if (argsList.contains('?productionUnit'))
//            query += "FILTER( ?productionUnitType != :ProductionUnit )"
//
//        def result = k.select('distinct '+args).query(query)
//
//        /*def id
//        argsList.each {
//            id = it.substring(1)
//            println id
//            result.metaClass[id] = {
//                println 'Array: ' + id
//                return (delegate.size() == 1) ? delegate[0][id] : delegate.collect { it[id] }
//            }
//        }*/
//
//        if (argsList.contains('?label'))
//            result.metaClass['label'] = { (delegate.size()==1)? delegate[0]['label'] :delegate.collect { it['label'] } }
//        if (argsList.contains('?productionUnit'))
//            result.metaClass['productionUnit'] = { (delegate.size()==1)? delegate[0]['productionUnit'] :delegate.collect { it['productionUnit'] } }
//        if (argsList.contains('?microregion'))
//            result.metaClass['microregion'] = { (delegate.size()==1)? delegate[0]['microregion'] :delegate.collect { it['microregion'] } }
//        if (argsList.contains('?efficiency'))
//            result.metaClass['efficiency'] = { (delegate.size()==1)? delegate[0]['efficiency'] :delegate.collect { it['efficiency'] } }
//
//        return result
//    }

    /**
     * Get all individuals from nodes that are children of children of this node.
     * @param analysis
     * @param args
     * @return
     */
    def getGrandChildrenIndividuals(String analysis, String args){
        //def argsList = args.split(' ')
        def result
        def query = "<"+k.toURI(analysis)+"> dc:hasPart ?ind." +
                "?subClass rdfs:subClassOf <$URI>."+
                "?id rdfs:subClassOf ?subClass." +
                "?id rdfs:label ?label." +
                "optional {?id :relevance ?relevance.}" +

                "?ind a ?id." +

                "?ind ui:value ?valueType."+
                "?valueType ui:dataValue ?value."+
                "?valueType rdfs:label ?valueTypeLabel."+

                "optional {"+
                    "?ind ui:hasWeight ?weightType." +
                    "?weightType ui:dataValue ?weight."+
                    "?weightType rdfs:label ?weightTypeLabel."+
                "}"+
                "optional {"+
                    "?ind :hasJustification ?justification."+
                "}"+
                "FILTER( ?subClass != ?id && ?subClass != <$URI> )"

        result = k.select('distinct '+args).query(query, "ORDER BY ?label")

        /*
        println URI
        println k.toURI(analysis)
        println query
        println result
        */

        result.each{
            if(it['relevance'])
                it['totalValue'] = it.value * it.relevance
        }

        result.metaClass.ind = { (delegate.size()==1)? delegate[0]['ind'] :delegate.collect { it['ind'] } }
        result.metaClass.label = { (delegate.size()==1)? delegate[0]['label'] :delegate.collect { it['label'] } }
        result.metaClass.relevance = { (delegate.size()==1)? delegate[0]['relevance'] :delegate.collect { it['relevance'] } }
        result.metaClass.value = { (delegate.size()==1)? delegate[0]['value'] :delegate.collect { it['value'] } }
        result.metaClass.valueType = { (delegate.size()==1)? delegate[0]['valueType'] :delegate.collect { it['valueType'] } }
        result.metaClass.valueTypeLabel = { (delegate.size()==1)? delegate[0]['valueTypeLabel'] :delegate.collect { it['valueTypeLabel'] } }
        result.metaClass.weight = { (delegate.size()==1)? delegate[0]['weight'] :delegate.collect { it['weight'] } }
        result.metaClass.weightType = { (delegate.size()==1)? delegate[0]['weightType'] :delegate.collect { it['weightType'] } }
        result.metaClass.weightTypeLabel = { (delegate.size()==1)? delegate[0]['weightTypeLabel'] :delegate.collect { it['weightTypeLabel'] } }
        result.metaClass.justification = { (delegate.size()==1)? delegate[0]['justification'] :delegate.collect { it['justification'] } }

        result.metaClass.equation = { eq ->
            eq.resolveStrategy = DELEGATE_FIRST
            delegate.collect({ eq.delegate = it; eq()})
        }
        return result
    }

    /**
     * Get the individuals that are part of an analysis.
     * They are children using hasPart
     * @param analysis
     * @param args
     * @return
     */
    def getChildrenIndividuals(String analysis, String args) {
        //def argsList = args.split(' ')
        def result
        def query = "<"+k.toURI(analysis)+"> dc:hasPart ?ind." +
                    "?id rdfs:subClassOf <$URI>." +
                    "?id rdfs:label ?label." +
                    "optional {?id :relevance ?relevance.}" +

                    "?ind a ?id." +

                    "?ind ui:value ?valueType." +
                    "?valueType ui:dataValue ?value." +
                    "?valueType rdfs:label ?valueTypeLabel."+
                    "optional {"+
                        "?ind :hasJustification ?justification."+
                    "}"+
                    "optional {"+
                        "?ind ui:hasWeight ?weightType." +
                        "?weightType ui:dataValue ?weight."+
                        "?weightType rdfs:label ?weightTypeLabel."+
                    "}"+
                    "FILTER( ?id != <$URI> )"

        result = k.select('distinct '+args).query(query, "ORDER BY ?label")

        /*def id
        argsList.each{
            id = it.substring(1)
            println id
            result.metaClass[id] = {
                println 'Array: '+id
                return (delegate.size()==1)? delegate[0][id] : delegate.collect { it[id] }
            }
        }*/

        result.each{
            if(it['weight'])
                it['totalValue'] = it.value * it.weight
        }

        result.metaClass.ind = { (delegate.size()==1)? delegate[0]['ind'] :delegate.collect { it['ind'] } }
        result.metaClass.label = { (delegate.size()==1)? delegate[0]['label'] :delegate.collect { it['label'] } }
        result.metaClass.value = { (delegate.size()==1)? delegate[0]['value'] :delegate.collect { it['value'] } }
        result.metaClass.valueType = { (delegate.size()==1)? delegate[0]['valueType'] :delegate.collect { it['valueType'] } }
        result.metaClass.valueTypeLabel = { (delegate.size()==1)? delegate[0]['valueTypeLabel'] :delegate.collect { it['valueTypeLabel'] } }
        result.metaClass.weight = { (delegate.size()==1)? delegate[0]['weight'] :delegate.collect { it['weight'] } }
        result.metaClass.weightType = { (delegate.size()==1)? delegate[0]['weightType'] :delegate.collect { it['weightType'] } }
        result.metaClass.weightTypeLabel = { (delegate.size()==1)? delegate[0]['weightTypeLabel'] :delegate.collect { it['weightTypeLabel'] } }
        result.metaClass.justification = { (delegate.size()==1)? delegate[0]['justification'] :delegate.collect { it['justification'] } }
        result.metaClass.equation = { eq ->
            eq.resolveStrategy = DELEGATE_FIRST
            delegate.collect({ eq.delegate = it; eq()})
        }
        return result
    }

    /**
     * Get all individuals from this node children added by users.
     * @param analysis
     * @param args
     * @return
     */
    def getChildrenExtraIndividuals(String analysis, String args) {
        //def argsList = args.split(' ')
        def result
        def query = "<"+k.toURI(analysis)+"> dc:hasPart ?ind." +
                "?ind ui:hasName ?name."+
                "?ind :hasJustification ?justification."+
                "?ind ui:value ?valueType." +
                "?valueType ui:dataValue ?value." +
                "?valueType rdfs:label ?valueTypeLabel."+
                "?ind a <$URI>." +
                "<$URI> <http://semantic.icmc.usp.br/sustenagro#relevance> ?relevance."

        result = k.select('distinct '+args).query(query, "ORDER BY ?label")

        /*def id
        argsList.each{
            id = it.substring(1)
            println id
            result.metaClass[id] = {
                println 'Array: '+id
                return (delegate.size()==1)? delegate[0][id] : delegate.collect { it[id] }
            }
        }*/
        result.metaClass.ind = { (delegate.size()==1)? delegate[0]['ind'] :delegate.collect { it['ind'] } }
        result.metaClass.name = { (delegate.size()==1)? delegate[0]['name'] :delegate.collect { it['name'] } }
        result.metaClass.justification = { (delegate.size()==1)? delegate[0]['justification'] :delegate.collect { it['justification'] } }
        result.metaClass.value = { (delegate.size()==1)? delegate[0]['value'] :delegate.collect { it['value'] } }
        result.metaClass.valueType = { (delegate.size()==1)? delegate[0]['valueType'] :delegate.collect { it['valueType'] } }
        result.metaClass.valueTypeLabel = { (delegate.size()==1)? delegate[0]['valueTypeLabel'] :delegate.collect { it['valueTypeLabel'] } }
        result.metaClass.equation = { eq ->
            eq.resolveStrategy = DELEGATE_FIRST
            delegate.collect({ eq.delegate = it; eq()})
        }
        return result
    }

    /**
     * If this node is a grandgrandson of :Indicator, return
     * Value type of its superclass, its label, weight, its grandDad URI, and dad URI
     * Used only on AdminController.groovy
     * @return
     */
    def getIndicator(){
        k.select("distinct ?valuetype ?label ?weight ?dimension ?attribute ")
            .query("?dimension rdfs:subClassOf :Indicator."+
                   "?attribute rdfs:subClassOf ?dimension."+
                   "<$URI> rdfs:subClassOf ?attribute; rdfs:label ?label."+
                   "<$URI> rdfs:subClassOf ?y."+
                   "<$URI> :weight ?weight."+
                   "?y  owl:onClass ?valuetype."+
                   "FILTER( ?dimension != :Indicator && ?dimension != ?attribute && ?attribute != <$URI> )",'','*')
    }

//    def getIndicators(){
//        k.select("distinct ?id ?valuetype ?label ?dimension ?weight ?attribute")
//         .query("?dimension rdfs:subClassOf <$URI>. "+
//         '''?attribute rdfs:subClassOf ?dimension.
//            ?id rdfs:subClassOf ?attribute; rdfs:label ?label.
//            ?id rdfs:subClassOf ?y.
//            ?y  owl:onClass ?valuetype.
//            ?id :weight ?weight.'''+
//            "FILTER( ?dimension != <$URI> && ?dimension != ?attribute && ?attribute != ?id )",'ORDER BY ?id','*')
//    }

    /**
     * Used only in AdminController.groovy
     * @return
     */
//    def getDataValues(){
//        k.query('''?valuetype rdfs:subClassOf :Value.
//            FILTER( ?valuetype != :Value && !isBlank(?valuetype) )''')
//    }

    /**
     * Used only in AdminController.groovy
     * @return
     */
//    def getDimensions(){
//        k.select("distinct ?id ?label").query('''?id rdfs:subClassOf :Indicator.
//            ?attribute rdfs:subClassOf ?id.
//            ?indicator rdfs:subClassOf ?attribute.
//            ?id rdfs:label ?label.
//            FILTER( ?id != :Indicator && ?id != ?attribute && ?id != ?indicator && ?attribute != ?indicator)''', "ORDER BY ?label")
//    }

    /**
     * Used only in AdminController.groovy
     * @return
     */
    def getAttributes() {
        k.select("distinct ?attribute").query("?attribute rdfs:subClassOf <$URI>. ?indicator rdfs:subClassOf ?attribute. FILTER( ?attribute != <$URI> && ?attribute != ?indicator)")
    }

//    def getFeaturesURI(){
//        def result = k.select('?featuresURI').query("<$URI> :features ?featuresURI.")
//        def prefixes = k.prefixesMap
//
//        result.metaClass.shortURI = {
//            def uris = delegate.collect {
//                if(it.featuresURI instanceof String){
//                    prefixes.each{ key, value ->
//                        it.featuresURI = it.featuresURI.replace(value, key+'-')
//                    }
//                }
//                it.featuresURI
//            }
//            if(uris.size()==1)
//                return uris[0]
//            else
//                return uris
//        }
//        if(result.size()==1)
//            return result[0].featuresURI
//        else
//            return result
//    }

//    def getUser(){
//        def select = ''
//        def query = ''
//        def result
//
//        query = "?user a <http://semantic.icmc.usp.br/sustenagro#User>. "+
//                "?user <http://semantic.icmc.usp.br/sustenagro#username> ?username. "+
//                "?user <http://semantic.icmc.usp.br/sustenagro#password> ?password. "+
//                "FILTER (?username = 'root' && ?password = SHA256('root'))"
//
//        result = k.query(query)
//
//        (result.size()==1)? result[0] : result
//    }



    /**
     * Used only in BootStrap.groovy
     * @return
     */
    def getRoles(){
        k.query("<$URI> ui:hasRole ?role. ")
    }

    def getRestriction(String property){
        def propertyURI = k.toURI(property)

        k.query( "<$URI> rdfs:subClassOf ?o. "+
                "?o owl:onProperty ?property. "+
                "optional {?o owl:onClass ?class. } "+
                "optional {?o owl:cardinality ?cardinality. }"+
                "optional {?o owl:qualifiedCardinality ?cardinality. }"+
                "FILTER (?property = <$propertyURI>)")
    }

    def getMicroregions(){
        k.query( "?id rdf:type <http://dbpedia.org/page/Microregion_(Brazil)>. "+
                "?id <http://dbpedia.org/ontology/state> <$URI>. " +
                "?id rdfs:label ?label. ")
    }

//    def findSubject(String args){
//        k.query("?subject <$URI> '$args'")
//    }

    def findSubjectByEmail(String args){
        k.query("?id a <$URI>. ?id ui:hasEmail '$args'")
    }

    def isFunctional(){
        def query = "<$URI> a owl:FunctionalProperty"
        return (k.query(query).size() > 0)
    }
//
//    def outgoingLinks(){
//        k.query("<$URI> ?p ?o", '', '*')
//    }
//
//    def incomingLinks(){
//        k.query("?s ?p <$URI>", '', '*')
//    }

//    def existOntology(String uri){
//        def existOnt = false
//        def result = k.query("?o rdf:type owl:Ontology")
//
//        println "******** Result ********"
//        println result
//
//        result.each{
//            if(it.o == uri)
//                existOnt = true
//        }
//        existOnt
//    }

    def exist(){
        k.query("<$URI> rdf:type ?type").size() > 0
    }

    def getAnalysisLabel(String label){
        k.query("?id :appliedTo <$URI>. ?id rdfs:label ?label. filter contains(?label,'$label')")
    }

    private propertyToList = {ArrayList source, String property ->
        def map = [:]
        source.each{
            map[it[property]] = []
        }
        return map
    }

    private propertyToMap = {ArrayList source, String property , String attrs ->
        def map = [:]
        def args = attrs.tokenize(' ?')
        source.each{
            map[it[property]] = [:]
            args.each{ attr ->
                map[it[property]][attr] = it[attr]
            }
        }
        if(args.size() == 1)
            map = map.sort { it.value[args[0]].toLowerCase() }
        return map
    }
}

// slp.query("?id rdfs:label ?label. FILTER (STR(?label)='$cls')", '', '')
