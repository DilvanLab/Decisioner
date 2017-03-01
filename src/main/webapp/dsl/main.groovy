//                          Decisioner

// Esta DSL descreve como o aplicativo será gerado. Ele é em inglês pois
// facilita na hora de publicarmos os papers. Porém, o aplicativo pode ser
// em português ou inglês. Isso vai depender da ontologia, nela teremos as
// definições nas duas linguas.

// Informações que serão lidas antes dos indicadores. No exemplo serão
// mostradas todas as culturas, tecnologias e meios de produção que
// estiverem na ontologia
// Mantemos crop, mas se a única que estiver na ontologia for Cana,
// a interface só mostra uma opção (sem possibilidade de escolha)
// Na ontologia, location definiria as microregiões do IBGE.
// Se a fazenda ficar em mais de uma micro-região?

// Caracterização dos sistemas produtivos no Centro-Sul
evaluationObject ':Nanoparticle', {
    //type or instance

    // Production unit name
    instance 'ui:hasName', label: ['en': 'Production unit or farm name', 'pt': 'Nome da unidade produtiva ou fazenda'], placeholder: ['en': 'Name', 'pt': "Nome"]

}


// Cada dimensão que será mostrada. Em cada dimensão, serão mostrados
// todos os indicadores presentes na ontologia. Existe a opção de não
// mostrar algum indicador. No exemplo abaixo, o indicador "co2 emission"
// (fictício) não é mostrado.

feature ':TechnologyDevelopmentEvaluation'
//    exclude 'co2 emission'
//}

feature ':Environmental', 'extraFeatures': true

feature ':FoodAndHumanHealth', 'extraFeatures': true

feature ':Social', 'extraFeatures': true

feature ':FeaturesToxicologicalAndEcotoxicological', 'extraFeatures': true

feature ':UnexpectedOcurrences', 'extraFeatures': true




data 'data'

// Para cada índice, é possível indicar fórmulas para o cálculo de cada
// atributo. Essas fórmulas podem ser tão complicadas como você queira.
report {
    environment =   weightedSum(data.':EnvironmentalIndicator')             //.equation({value*weight}))
    economic    =   weightedSum(data.':EconomicIndicator')
    social      =   weightedSum(data.':SocialIndicator')

    sustainability = (environment + social + economic)/3

    cost_production_efficiency = sum(data.':ProductionEfficiencyFeature')

    technologicalEfficiencyInTheField = 0.8*weightedSum(data.':TechnologicalEfficiencyInTheField')  //.equation({value*weight}))
    technologicalEfficiencyInTheIndustrial = 0.2*weightedSum(data.':TechnologicalEfficiencyInTheIndustrial')

    efficiency = Math.abs(cost_production_efficiency) *
            (technologicalEfficiencyInTheField+technologicalEfficiencyInTheIndustrial)

    //economic =      2.0 * analysis.'Eficiência operacional da Usina (crescimento vertical da usina, recuperação e avanço)' + 5.1 *
    //        analysis.'Eficiência energética das caldeiras para cogeração de energia'

    //social =        3 * analysis.EnergyEfficiencyOfBoilersForCogeneration + 7 *
    //        analysis.OperationalEfficiencyPlant

    evaluationObjectInfo()

    sustainabilityMatrix    x: sustainability,
            y: efficiency,
            label_x: ['en': 'Sustainability index', 'pt': 'Indice da sustentabilidade'],
            label_y: ['en': 'Efficiency index', 'pt': 'Indice de eficiência'],
            range_x: [-43,43],
            range_y: [-160,800],
            quadrants: [4,3],
            recomendations: [   "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ desfavorável ao sistema de produção de cana / sistema de produção de cana na fase inicial de implementação (avaliação de sustentabilidade comprometida) ou com muito baixa sustentabilidade – sistema de produção de cana não recomendado.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ desfavorável ao sistema de produção de cana / sistema de produção de cana com baixa sustentabilidade – recomendam-se ações corretivas.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ desfavorável ao sistema de produção de cana / Avaliação da sustentabilidade com médio desempenho – recomenda-se acompanhamento com restrições.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ desfavorável ao sistema de produção de cana / Avaliação da sustentabilidade com bom desempenho – sistema de produção de cana recomendado.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ propícia para o sistema cana / Avaliação da sustentabilidade: sistema de produção de cana na fase inicial de implementação ou com muito baixa sustentabilidade – gerenciamento recomendado com restrições.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ propícia para o sistema cana / Avaliação da sustentabilidade: com baixo desempenho - recomenda-se ações corretivas.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ propícia para o sistema cana / Avaliação da sustentabilidade: com médio desempenho - monitoramento e gerenciamento recomendado.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ propícia para o sistema cana / Avaliação da sustentabilidade: com bom desempenho – sistema de produção de cana recomendado.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ favorável para o sistema cana – recomenda-se investimentos no sistema avaliado / Avaliação da sustentabilidade: com muito baixo desempenho – recomenda-se ações corretivas.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ favorável para o sistema cana – recomenda-se investimentos no sistema avaliado / Avaliação da sustentabilidade: com baixo desempenho - gerenciamento recomendado.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ favorável para o sistema cana – recomenda-se investimentos no sistema avaliado / Avaliação da sustentabilidade: com médio desempenho – monitoramento recomendado.",
                                "Avaliação da eficiência: balanço da eficiência ‘tecnológica – produção – custo’ favorável para o sistema cana – recomenda-se investimentos no sistema avaliado / Avaliação da sustentabilidade: com bom desempenho - sistema de produção de cana fortemente recomendado."]



    sustainabilitySemaphore value: sustainability,
            label: ['en': 'Index of general sustainability', 'pt': 'Índice da sustentabilidade geral'],
            legend: [['en': 'Less sustainable', 'pt': 'Menos sustentável'],
                     ['en': 'Negative changes', 'pt': 'Alterações negativas'],
                     ['en': 'No change', 'pt': 'Sem alteração'],
                     ['en': 'Positive changes', 'pt': 'Alterações positivas'],
                     ['en': 'More sustainable', 'pt': 'Mais sustentável']],
            range: [-60,60]


    text    'en': 'Microregion map', 'pt': '**Mapa da microregião**'

    map     data.'Microregion'
}
