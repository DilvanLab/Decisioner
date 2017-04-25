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

        argsList.each{
            if(argsList.contains(it))
                query += "<$URI>"+patterns[it]
        }

        if(params.containsKey('FILTER')){           //(?type != :ProductionUnit && ?type != ui:EvaluationObject && !isBlank(?type) )"
            query += "FILTER(" + params['FILTER'] + ")"
        }

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

    /**
     * Get attributes of a node by subscript operator
     * @param name
     * @return
     */
    def getAt(String name){
        getAttr(name)
    }

    /**
     * Get label as an attribute
     * @param params
     * @return
     */
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

    /**
     * Get subclasses of a class
     * @param args
     * @return
     */
    def getSubClass(String args=''){
        def argsList = args.tokenize(' ?')
        def query = ''

        argsList.each{
            if(argsList.contains('label'))
                query += "?id rdfs:label ?label."
        }

        query += "?id rdfs:subClassOf <$URI>." +
                "?subClass rdfs:subClassOf ?id."+
                "FILTER(?id != <$URI> && ?id != ?subClass)"

        def arg = ''

        if(argsList.size()>0){
            arg = "?" + ['label', 'id'].join(" ?")
        }

        k.select('distinct ?id '+arg).query(query)
    }

    /**
     * Get superclasses of a class
     * @return
     */
    def getSuperClass(String args=''){
        def argsList = args.tokenize(' ?')
        def query = ''

        argsList.each{
            if(argsList.contains('label'))
                query += "?id rdfs:label ?label."
        }

        query += "<$URI> rdfs:subClassOf ?id." +
                 "FILTER(?id != <$URI>)"

        def arg = ''

        if(argsList.size()>0){
            arg = "?" + ['label', 'id'].join(" ?")
        }

        k.select('distinct ?id '+arg).query(query)
    }

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

        result = k.select(select).query(query, order)

        if(argsList.size()==1){
            result = result.collect{ it[argsList[0]]}
        }

        (result.size()==1)? result[0] : result
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

    def getLabelDescription(String property) {
        k.query("?id $property <$URI>; rdfs:label ?label. optional {?id dc:description ?description}. FILTER ( ?id != <$URI> )")
    }

    def isFunctional(){
        def query = "<$URI> a owl:FunctionalProperty"
        return (k.query(query).size() > 0)
    }
}
