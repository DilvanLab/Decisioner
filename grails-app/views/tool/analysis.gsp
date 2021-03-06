<g:set var="locale"
       value="${session.'org.springframework.web.servlet.i18n.SessionLocaleResolver.LOCALE' ?: org.springframework.web.servlet.support.RequestContextUtils.getLocale(request)}"/>

<!DOCTYPE html>
<!--
  Copyright (c) 2015-$today.year Dilvan Moreira.
  Copyright (c) 2015-$today.year John Garavito.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an
  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, either express or implied.  See the License for the
  specific language governing permissions and limitations
  under the License.
  -->

<html>
<head>
    <meta name="layout" content="main"/>
    <title>SustenAgro - Tool - Analysis</title>
    <asset:stylesheet href="bootstrap-table.min.css"/>
    <asset:javascript src="bootstrap-table.min.js"/>
    <asset:javascript src="d3.min.js"/>
    <asset:javascript src="md5.min.js"/>
    <asset:javascript src="jquery.validate.min.js"/>

    <g:if test="${!session.lang || session.lang=='pt'}">
        <asset:javascript src="locale/bootstrap-table-pt-BR.min.js"/>
        <asset:javascript src="localization/messages_pt_BR.min.js"/>
    </g:if>
    <g:else>
        <asset:javascript src="locale/bootstrap-table-en-US.min.js"/>
    </g:else>

    <asset:javascript src="jspdf/jspdf.min.js"/>
    <asset:javascript src="jspdf/from_html.min.js"/>
    <asset:javascript src="jspdf/from_html.min.js"/>
    <asset:javascript src="jspdf/split_text_to_size.min.js"/>
    <asset:javascript src="jspdf/standard_fonts_metrics.min.js"/>
    <script src='https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML'></script>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    %{--<asset:javascript src="bower_components/webcomponentsjs/webcomponents-lite.js"/>--}%
    %{--<asset:link rel="import" href="bower_components/paper-checkbox/paper-checkbox.html"/>--}%
    %{--<asset:link rel="import" href="bower_components/sustainability-matrix/sustainability-matrix.html"/>--}%
    %{--<asset:link rel="import" href="bower_components/sustainability-semaphore/sustainability-semaphore.html"/>--}%
    %{--<asset:link rel="import" href="bower_components/poly-matrix-master/matrix.html"/>--}%

</head>
<body>
<div class="row main">
    <div id="content" class="col-sm-10 col-sm-offset-1 content">
        <g:if test="${inputs}">
            <g:each in="${inputs}">
                <div class="section">
                    <g:render template="/widgets/${it.widget}" model="${it.attrs}" />
                </div>
            </g:each>
        </g:if>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function() {
        backToMainTab();
        $('.pager a').click(function(e){
            var id = $(this).attr('href');
            id = id.substring(0, id.lastIndexOf('_tab_'));
            var main_id = $('#main_tabs li.active a').attr('href');
            main_id = main_id.substring(0, main_id.lastIndexOf('_tab_'));
            if(id != main_id){
                var parent_id = $('.nav-tabs a[href="'+$(this).attr('href')+'"]').parents('.tab-pane').attr('id');
                $('.nav-tabs a[href="'+'#'+parent_id+'"]').tab('show');
            }
            $('.nav-tabs a[href="'+$(this).attr('href')+'"]').tab('show');
            backToMainTab();
            e.preventDefault();
        });

        $(".clear").click(function(){
            var name = $(this).attr('id').replace('-clear', '');
            $("input[name='"+name+"']").removeAttr('checked');
            $($("select[name^='"+name+"'] option")[0]).prop("selected", true);
            $("textarea[name^='"+name+"']").val('');
        });

        $(".justify").click(function () {
            var name = $(this).attr('id').replace('-justify', '');
            var element = $("label[for='" + name + "-justification']").parent();
            if ($(element).hasClass("hidden"))
                $(element).addClass('show').removeClass('hidden');
            else if ($(element).hasClass("show"))
                $(element).addClass('hidden').removeClass('show');
        });

        var rules = {};

        $("input[type='radio']").each(function () {
            var e1Name = $(this).attr('name');
            var e2 = $("[name^='" + e1Name + "-weight']");
            if (e2.length) {
                var e2Name = $(e2).attr('name');
                rules[e1Name] = {
                    required: function (element) {
                        var name = $(element).attr('name');
                        return (($("[name^='" + name + "-weight']").val() != null) != $(element).is(':checked'));
                    }
                };
                rules[e2Name] = {
                    required: function (element) {
                        var name = $(element).attr('name');
                        var anotherName = name.substring(0, name.lastIndexOf('-'));
                        return (($(element).val() != null) != $("[name='" + anotherName + "']").is(':checked'));
                    }
                };
            }
        });

        $("form").each(function (index) {
            $(this).validate({
                rules: rules,
                ignore: '',
                errorClass: "has-error",
                invalidHandler: function(event, validator) {
                    var invalids = Object.keys(validator.invalid);
                    var containers;
                    var id;

                    if(invalids[0]){
                        containers = $("[name='"+invalids[0]+"']").parents("div[role='tabpanel']");
                        for(var i = containers.length; i>0; i--){
                            id = $(containers[i-1]).attr('id');
                            $(".nav-tabs a[href='#"+id+"']").tab('show');
                        }
                    }
                },
                errorPlacement: function (error, element) {
                    var form_group = $(element).parents('.form-group');
                    form_group.append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    //console.log('highlight');
                    var form_group = $(element).parents('.form-group');
                    $(element).addClass(errorClass).removeClass(validClass);
                    form_group.addClass(errorClass).removeClass(validClass);
                },
                unhighlight: function (element, errorClass, validClass) {
                    //console.log('unhighlight');
                    var form_group = $(element).parents('.form-group');
                    $(element).removeClass(errorClass).addClass(validClass);
                    form_group.removeClass(errorClass).addClass(validClass);
                }
            });
        });

        $('#generate').click(function(){
            var button = $(this);
            var url = window.location.href;
            var analysisId = url.substring(url.lastIndexOf('/')+1,url.length);
            //button.button('generating');
            window.open("/tool/generatePdf/"+analysisId);
        });

        function backToMainTab() {
            $('html,body').animate({
                scrollTop: 180
            }, 'fast');
        }
    });
</script>
</body>
</html>