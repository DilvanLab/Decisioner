<div class="col-sm-4 text-right">
    <g:render template="/widgets/label" model="[id: id, label: label, widgetClass: 'control-label']"/>
</div>

<div class="col-sm-8">
    <g:render template="/widgets/singleCategory" model="[id: id, label: label, data: data, header: header]"/>
</div>