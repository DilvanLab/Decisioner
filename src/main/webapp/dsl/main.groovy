group ':SustainabilityIndicator', {

    feature ':EnvironmentalIndicator', 'extraFeatures': true

    feature ':EconomicIndicator', 'extraFeatures': true

    feature ':SocialIndicator', 'extraFeatures': true

}

group ':Variable', {

    feature ':ProductionEfficiencyFeature'

    feature ':TechnologicalEfficiencyFeature', {
        conditional ":ProductionUnit", 'http://dbpedia.org/ontology/Provider', {
            include ':TechnologicalEfficiencyInTheField'
        }
        conditional ":ProductionUnit", 'http://dbpedia.org/resource/PhysicalPlant', {
            include ':TechnologicalEfficiencyInTheField', ':TechnologicalEfficiencyInTheIndustrial'
        }
    }

}