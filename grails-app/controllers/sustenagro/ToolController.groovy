package sustenagro

import com.github.slugify.Slugify
import com.github.rjeschke.txtmark.Processor
import org.pegdown.PegDownProcessor

import static rdfSlurper.RDFSlurper.N

class ToolController {
    def slp
    def dsl

    def index() {

        def inputs = []
        dsl.featureLst.each{
            def label = slp.query("${it[1]} rdfs:label ?label.")[0].label
            def lst = slp.query("?id ${it[0]} ${it[1]} ; rdfs:label ?name. optional {?id dc:description ?description}")
            inputs << [label, lst]
        }
        println 'inp: ' + inputs
        def microregions = slp.query("?id a dbp:MicroRegion ; rdfs:label ?name.")
        //def cultures = slp.query('?id a sa:SugarcaneProductionSystem; sa:name ?name.')
        def technologies = slp.query('?id a :AgriculturalEfficiency; rdfs:label ?name; dc:description ?description.')
        def production_unit_types = slp.query('?id rdfs:subClassOf :ProductionUnit; rdfs:label ?name.')// filter (lang(?name) = "pt")')
        //println Processor.process("This is ***TXTMARK***");
        //String html = new Markdown4jProcessor().process("This is a **bold** text");

        render(view: 'index',
               model:    [
                       name: dsl.name,
                       //description:   Processor.process(dsl.description),
                       description:   new PegDownProcessor().markdownToHtml(dsl.description),
                       microregions: microregions,
                       //cultures: cultures,
                       technologies: technologies,
                       production_unit_types: production_unit_types])
    }

    def productionUnitCreate() {
        Slugify slug = new Slugify()

        def production_unit_id = slug.slugify(params['production_unit_name'])

        slp.addNode(
            N(':'+production_unit_id,
                'rdf:type': slp.v(params['production_unit_type']),
                'rdfs:label': params['production_unit_name'],
                ':microregion': slp.v(params['production_unit_microregion']),
                //'sa:culture': slp.v(params['production_unit_culture']),
                ':technology': slp.v(params['production_unit_technology'])
            ))

        slp.g.commit()
        //        g.saveRDF(new FileOutputStream('ontology/SustenAgroOntologyAndIndividuals.rdf'), 'rdf-xml')
        redirect(action: 'assessment', id: production_unit_id)
    }

    def assessment() {

        def indicators = {cls ->
            slp.query('?a  rdfs:subClassOf '+cls+''' .
                   ?id rdfs:subClassOf ?a; rdfs:label ?title.
                   ?id rdfs:subClassOf ?y.
                   ?y  owl:onClass ?class.
                   ?class rdfs:subClassOf ?valueType.''')
        }

        def environmental_indicators = indicators(':EnvironmentalIndicator')
        def economic_indicators = indicators(':EconomicIndicator')
        def social_indicators = indicators(':SocialIndicator')

        def categorical = [:]
        def categ = {ind ->
            ind.each{
                slp.query("<$it.id> rdfs:subClassOf ?a. ?a owl:onClass ?id").each{
                   categorical[it.id] = []
                }
            }
        }

        categ(environmental_indicators)
        categ(economic_indicators)
        categ(social_indicators)

        categorical.each{ k, v ->
            slp.query("?id a <$k>; rdfs:label ?title.").each{
                v.push(it)
            }
        }

        String name = slp.":$params.id".'$rdfs:label'

        render(view: 'assessment',
               model: [sustenagro: 'http://bio.icmc.usp.br/sustenagro#',
                       production_unit_id: params.id,
                       production_unit_name: name,
                       environmental_indicators: environmental_indicators,
                       economic_indicators: economic_indicators,
                       social_indicators: social_indicators,
                       categorical: categorical ])
    }
}