// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25172__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_36171 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_36171){
return (function (){
var _STAR_always_update_STAR_36172 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36172;
}});})(_STAR_always_update_STAR_36171))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36171;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args36173 = [];
var len__26280__auto___36176 = arguments.length;
var i__26281__auto___36177 = (0);
while(true){
if((i__26281__auto___36177 < len__26280__auto___36176)){
args36173.push((arguments[i__26281__auto___36177]));

var G__36178 = (i__26281__auto___36177 + (1));
i__26281__auto___36177 = G__36178;
continue;
} else {
}
break;
}

var G__36175 = args36173.length;
switch (G__36175) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36173.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__36184_36188 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__36185_36189 = null;
var count__36186_36190 = (0);
var i__36187_36191 = (0);
while(true){
if((i__36187_36191 < count__36186_36190)){
var v_36192 = cljs.core._nth.call(null,chunk__36185_36189,i__36187_36191);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_36192);

var G__36193 = seq__36184_36188;
var G__36194 = chunk__36185_36189;
var G__36195 = count__36186_36190;
var G__36196 = (i__36187_36191 + (1));
seq__36184_36188 = G__36193;
chunk__36185_36189 = G__36194;
count__36186_36190 = G__36195;
i__36187_36191 = G__36196;
continue;
} else {
var temp__4657__auto___36197 = cljs.core.seq.call(null,seq__36184_36188);
if(temp__4657__auto___36197){
var seq__36184_36198__$1 = temp__4657__auto___36197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36184_36198__$1)){
var c__25986__auto___36199 = cljs.core.chunk_first.call(null,seq__36184_36198__$1);
var G__36200 = cljs.core.chunk_rest.call(null,seq__36184_36198__$1);
var G__36201 = c__25986__auto___36199;
var G__36202 = cljs.core.count.call(null,c__25986__auto___36199);
var G__36203 = (0);
seq__36184_36188 = G__36200;
chunk__36185_36189 = G__36201;
count__36186_36190 = G__36202;
i__36187_36191 = G__36203;
continue;
} else {
var v_36204 = cljs.core.first.call(null,seq__36184_36198__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_36204);

var G__36205 = cljs.core.next.call(null,seq__36184_36198__$1);
var G__36206 = null;
var G__36207 = (0);
var G__36208 = (0);
seq__36184_36188 = G__36205;
chunk__36185_36189 = G__36206;
count__36186_36190 = G__36207;
i__36187_36191 = G__36208;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1484074959605