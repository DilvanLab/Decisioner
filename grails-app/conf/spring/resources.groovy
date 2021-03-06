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

import com.github.slugify.Slugify
import dsl.ADMDSL
import org.pegdown.PegDownProcessor
import semantics.Know
import dsl.DSL
import dsl.GUIDSL
import org.springframework.web.servlet.i18n.SessionLocaleResolver

beans = {
    localeResolver(SessionLocaleResolver) {
        defaultLocale = new Locale("pt")
        Locale.setDefault(defaultLocale)
    }
    slugify(Slugify)
    //TODO PegDown not thread safe: Take it out of this global variable!
    md(PegDownProcessor)

    k(Know, 'http://127.0.0.1:9999/blazegraph/namespace/kb/sparql')
    //'http://localhost:7200/repositories/sustenagro')
    //http://172.28.73.196:7200/repositories/sustenagro
    gui(GUIDSL, 'dsl/gui.groovy', grailsApplication.mainContext)
    dsl(DSL, 'dsl/main.groovy', grailsApplication.mainContext)
    admScript(ADMDSL, 'dsl/adm.groovy', grailsApplication.mainContext)
}
