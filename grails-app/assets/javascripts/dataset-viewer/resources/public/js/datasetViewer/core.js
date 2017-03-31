// Compiled by ClojureScript 1.9.293 {}
goog.provide('datasetViewer.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.icons');
goog.require('cljs_react_material_ui.core');
goog.require('datasetViewer.db');
goog.require('re_frisk.core');
datasetViewer.core.update_all = (function datasetViewer$core$update_all(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27257 = arguments.length;
var i__26281__auto___27258 = (0);
while(true){
if((i__26281__auto___27258 < len__26280__auto___27257)){
args__26287__auto__.push((arguments[i__26281__auto___27258]));

var G__27259 = (i__26281__auto___27258 + (1));
i__26281__auto___27258 = G__27259;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((3) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((3)),(0),null)):null);
return datasetViewer.core.update_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26288__auto__);
});

datasetViewer.core.update_all.cljs$core$IFn$_invoke$arity$variadic = (function (map,a,b,args){
var num = cljs.core.count.call(null,args);
var map1 = cljs.core.update_in.call(null,map,a,b);
if(cljs.core.even_QMARK_.call(null,num)){
if((num === (0))){
return map1;
} else {
return cljs.core.apply.call(null,datasetViewer.core.update_all,map1,args);
}
} else {
throw (new Error("update-all has one db and path and function pairs."));
}
});

datasetViewer.core.update_all.cljs$lang$maxFixedArity = (3);

datasetViewer.core.update_all.cljs$lang$applyTo = (function (seq27253){
var G__27254 = cljs.core.first.call(null,seq27253);
var seq27253__$1 = cljs.core.next.call(null,seq27253);
var G__27255 = cljs.core.first.call(null,seq27253__$1);
var seq27253__$2 = cljs.core.next.call(null,seq27253__$1);
var G__27256 = cljs.core.first.call(null,seq27253__$2);
var seq27253__$3 = cljs.core.next.call(null,seq27253__$2);
return datasetViewer.core.update_all.cljs$core$IFn$_invoke$arity$variadic(G__27254,G__27255,G__27256,seq27253__$3);
});

datasetViewer.core.assoc_all = (function datasetViewer$core$assoc_all(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27264 = arguments.length;
var i__26281__auto___27265 = (0);
while(true){
if((i__26281__auto___27265 < len__26280__auto___27264)){
args__26287__auto__.push((arguments[i__26281__auto___27265]));

var G__27266 = (i__26281__auto___27265 + (1));
i__26281__auto___27265 = G__27266;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((3) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((3)),(0),null)):null);
return datasetViewer.core.assoc_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26288__auto__);
});

datasetViewer.core.assoc_all.cljs$core$IFn$_invoke$arity$variadic = (function (map,a,b,args){
var num = cljs.core.count.call(null,args);
var map1 = cljs.core.assoc_in.call(null,map,a,b);
if(cljs.core.even_QMARK_.call(null,num)){
if((num === (0))){
return map1;
} else {
return cljs.core.apply.call(null,datasetViewer.core.assoc_all,map1,args);
}
} else {
throw (new Error("assoc-all has one db and path and function pairs."));
}
});

datasetViewer.core.assoc_all.cljs$lang$maxFixedArity = (3);

datasetViewer.core.assoc_all.cljs$lang$applyTo = (function (seq27260){
var G__27261 = cljs.core.first.call(null,seq27260);
var seq27260__$1 = cljs.core.next.call(null,seq27260);
var G__27262 = cljs.core.first.call(null,seq27260__$1);
var seq27260__$2 = cljs.core.next.call(null,seq27260__$1);
var G__27263 = cljs.core.first.call(null,seq27260__$2);
var seq27260__$3 = cljs.core.next.call(null,seq27260__$2);
return datasetViewer.core.assoc_all.cljs$core$IFn$_invoke$arity$variadic(G__27261,G__27262,G__27263,seq27260__$3);
});

re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,datasetViewer.db.initial_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tool","tool",-1298696470)], null)),(function (_,p__27267){
var vec__27268 = p__27267;
var ___$1 = cljs.core.nth.call(null,vec__27268,(0),null);
var value = cljs.core.nth.call(null,vec__27268,(1),null);
return value;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return db.call(null,new cljs.core.Keyword(null,"views","views",1450155487));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),(function (db,_){
return db.call(null,new cljs.core.Keyword(null,"tool","tool",-1298696470));
}));
datasetViewer.core.button = (function datasetViewer$core$button(icon,tooltip,selected,event){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),tooltip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(selected)?"#d0d060":cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"background-color","background-color",570434026))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 0px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"35px"], null),new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),(function (){
return re_frame.core.dispatch.call(null,event);
})], null)], null)], null);
});
datasetViewer.core.toolbar = (function datasetViewer$core$toolbar(){
var mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522)], null));
return ((function (mode){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.toolbar_title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Tools"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [datasetViewer.core.button,cljs_react_material_ui.icons.action_search.call(null),"zoom",cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [datasetViewer.core.button,cljs_react_material_ui.icons.maps_my_location.call(null),"scroll",cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode),new cljs.core.Keyword(null,"scroll","scroll",971553779)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),new cljs.core.Keyword(null,"scroll","scroll",971553779)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [datasetViewer.core.button,cljs_react_material_ui.icons.image_brightness_6.call(null),"windowing",cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [datasetViewer.core.button,cljs_react_material_ui.icons.action_pan_tool.call(null),"move",cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode),new cljs.core.Keyword(null,"move","move",-2110884309)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),new cljs.core.Keyword(null,"move","move",-2110884309)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [datasetViewer.core.button,cljs_react_material_ui.icons.action_polymer.call(null),"3D Edit",cljs.core._EQ_.call(null,cljs.core.deref.call(null,mode),new cljs.core.Keyword(null,"3D","3D",1222061766)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-mode","change-mode",-170197522),new cljs.core.Keyword(null,"3D","3D",1222061766)], null)], null)], null)], null);
});
;})(mode))
});
datasetViewer.core.simple_example = (function datasetViewer$core$simple_example(){
var editor_id = [cljs.core.str("editor"),cljs.core.str((0))].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-color","text-color",1728708298),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue800","blue800",-847606291))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.app_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ePAD2",new cljs.core.Keyword(null,"icon-class-name-right","icon-class-name-right",1415991912),"muidocs-icon-navigation-expand-more"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datasetViewer.core.toolbar,editor_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.paper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"editor-holder"], null)], null)], null)], null)], null);
});
datasetViewer.core.run = (function datasetViewer$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datasetViewer.core.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('datasetViewer.core.run', datasetViewer.core.run);

//# sourceMappingURL=core.js.map?rel=1487877621526