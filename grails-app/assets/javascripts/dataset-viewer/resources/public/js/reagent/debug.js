// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35845__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35846__i = 0, G__35846__a = new Array(arguments.length -  0);
while (G__35846__i < G__35846__a.length) {G__35846__a[G__35846__i] = arguments[G__35846__i + 0]; ++G__35846__i;}
  args = new cljs.core.IndexedSeq(G__35846__a,0);
} 
return G__35845__delegate.call(this,args);};
G__35845.cljs$lang$maxFixedArity = 0;
G__35845.cljs$lang$applyTo = (function (arglist__35847){
var args = cljs.core.seq(arglist__35847);
return G__35845__delegate(args);
});
G__35845.cljs$core$IFn$_invoke$arity$variadic = G__35845__delegate;
return G__35845;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35848__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35849__i = 0, G__35849__a = new Array(arguments.length -  0);
while (G__35849__i < G__35849__a.length) {G__35849__a[G__35849__i] = arguments[G__35849__i + 0]; ++G__35849__i;}
  args = new cljs.core.IndexedSeq(G__35849__a,0);
} 
return G__35848__delegate.call(this,args);};
G__35848.cljs$lang$maxFixedArity = 0;
G__35848.cljs$lang$applyTo = (function (arglist__35850){
var args = cljs.core.seq(arglist__35850);
return G__35848__delegate(args);
});
G__35848.cljs$core$IFn$_invoke$arity$variadic = G__35848__delegate;
return G__35848;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1484074954689