<h5 class="text-primary">Selecionar avaliação</h5>
<form id="select_production_units" action="/tool/selectProductionUnit" method="post" class="form-horizontal" >
    <div class="form-group">
        <label for="production_unit_id" class="col-sm-4 control-label">Avaliações</label>
        <div class="col-sm-8">
            <table data-toggle="table"
                   data-click-to-select="true"
                   data-select-item-name="evaluation">
                <thead>
                <tr>
                    <th></th>
                    <th data-field="name">Nome</th>
                </tr>
                </thead>
                <tbody>
                    <g:each status="i" in="${evaluations}" var="it">
                        <tr data-index="${i}">
                            <td><input data-index="${i}" type="radio" name="evaluation" value="${it.id}" ></td>
                            <td>${it.label}</td>
                        </tr>
                    </g:each>
                </tbody>
            </table>
        </div>
    </div>
    <div class="form-group col-sm-12 text-center">
        <input id="get_evaluation" type="submit" class="btn btn-primary" value="Selecionar avaliação" disabled/>
    </div>
</form>