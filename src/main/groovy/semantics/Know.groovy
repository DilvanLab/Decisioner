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

import groovySparql.SparqlBase

/**
 * Know
 *
 * @author Dilvan Moreira.
 * @author John Garavito.
 */
class Know {

    private Map _prefixes = [:]
    private SparqlBase sparql
    private String select = '*'
    private String lang = 'en'

    Know(String url){
        sparql = new SparqlBase(endpoint: url)
        addDefaultNamespaces()
        lang = 'pt'
    }

    private addDefaultNamespaces(){
        addNamespace('rdf','http://www.w3.org/1999/02/22-rdf-syntax-ns#')
        addNamespace('rdfs','http://www.w3.org/2000/01/rdf-schema#')
        addNamespace('owl','http://www.w3.org/2002/07/owl#')
        addNamespace('xsd','http://www.w3.org/2001/XMLSchema#')
        addNamespace('foaf','http://xmlns.com/foaf/0.1/')
        //addNamespace('dcterm', 'http://purl.org/dc/terms/')

        addNamespace('dc','http://purl.org/dc/terms/')
        addNamespace('dbp','http://dbpedia.org/ontology/')
        addNamespace('dbpr','http://dbpedia.org/resource/')
        addNamespace('pt','http://dbpedia.org/property/pt/')
        addNamespace('ui','http://purl.org/biodiv/semanticUI#')
        addNamespace('inds','http://semantic.icmc.usp.br/individuals#')
        addNamespace('','http://semantic.icmc.usp.br/sustenagro#')
    }

    def addNamespace(String prefix, String namespace){
        _prefixes.put(prefix, namespace)
    }

    Know select(str){
        select = str
        this
    }

    def query(String q, String order = '', String lang = this.lang){
        def f = "$prefixes \nselect $select where {$q} ${order}"
        select = '*'
        sparql.query(f, lang)
    }

    def insert(String q) { //}, String lang = this.lang){
        def f = "$prefixes \nINSERT DATA {$q}"
        sparql.update(f)
    }

    def delete(String q, String d=''){
        def f = "$prefixes \n DELETE $d WHERE {$q}"
        sparql.update(f)
    }

    def update(String q){
        def f = "$prefixes \n $q"
        sparql.update(f)
    }

    String toURI(String id){
        if (id==null || id == '') return null
        if (id == ':') return _prefixes['']
        if (!id.contains(' ')){
            if (id.startsWith('_:')) return id
            if (id.startsWith('http:')) return id
            if (id.startsWith('urn:')) return id
            if (id.startsWith(':')) return _prefixes['']+id.substring(1)
            if (id.contains(':')){
                def prefix = _prefixes[id.split(':')[0]]
                if(prefix?.trim())
                    return prefix+id.substring(id.indexOf(':')+1)
                return null
            }
            println 'prexixes analyse: '+id
            if (!id.contains(':')) return searchByLabel(id)
        } else
            return null
    }

    def getPrefixes(){
        def str = ''
        _prefixes.each {key, obj -> str += "PREFIX $key: <$obj>\n"}
        str
    }

    def propertyMissing(String name){
        getAt(name)
    }

    Node getAt(String name){
        findNode(name)
    }

    private Node findNode(String name){
        new Node(this, toURI(name))
    }
}
