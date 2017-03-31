// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs.simple_merge = (function devtools$prefs$simple_merge(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27062 = arguments.length;
var i__26281__auto___27063 = (0);
while(true){
if((i__26281__auto___27063 < len__26280__auto___27062)){
args__26287__auto__.push((arguments[i__26281__auto___27063]));

var G__27064 = (i__26281__auto___27063 + (1));
i__26281__auto___27063 = G__27064;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic = (function (base_map,maps){
var rmaps = cljs.core.reverse.call(null,maps);
var sentinel = {};
var sentinel_QMARK_ = ((function (rmaps,sentinel){
return (function (p1__27056_SHARP_){
return (p1__27056_SHARP_ === sentinel);
});})(rmaps,sentinel))
;
var merged_keys = cljs.core.dedupe.call(null,cljs.core.sort.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.keys,rmaps))));
var result = base_map;
var todo_keys = merged_keys;
while(true){
if(cljs.core.empty_QMARK_.call(null,todo_keys)){
return result;
} else {
var key = cljs.core.first.call(null,todo_keys);
var val = cljs.core.first.call(null,cljs.core.remove.call(null,sentinel_QMARK_,cljs.core.map.call(null,((function (result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys){
return (function (p1__27057_SHARP_){
return cljs.core.get.call(null,p1__27057_SHARP_,key,sentinel);
});})(result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys))
,rmaps)));
var G__27065 = cljs.core.assoc.call(null,result,key,val);
var G__27066 = cljs.core.rest.call(null,todo_keys);
result = G__27065;
todo_keys = G__27066;
continue;
}
break;
}
});

devtools.prefs.simple_merge.cljs$lang$maxFixedArity = (1);

devtools.prefs.simple_merge.cljs$lang$applyTo = (function (seq27058){
var G__27059 = cljs.core.first.call(null,seq27058);
var seq27058__$1 = cljs.core.next.call(null,seq27058);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic(G__27059,seq27058__$1);
});

devtools.prefs.default_config = devtools.defaults.prefs;
devtools.prefs.external_config = cljs.core.PersistentArrayMap.EMPTY;
devtools.prefs.env_config = cljs.core.PersistentArrayMap.EMPTY;
devtools.prefs.initial_config = devtools.prefs.simple_merge.call(null,devtools.prefs.default_config,devtools.prefs.external_config,devtools.prefs.env_config);
devtools.prefs._STAR_prefs_STAR_ = devtools.prefs.initial_config;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs._STAR_prefs_STAR_);
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27070 = arguments.length;
var i__26281__auto___27071 = (0);
while(true){
if((i__26281__auto___27071 < len__26280__auto___27070)){
args__26287__auto__.push((arguments[i__26281__auto___27071]));

var G__27072 = (i__26281__auto___27071 + (1));
i__26281__auto___27071 = G__27072;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((2) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26288__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq27067){
var G__27068 = cljs.core.first.call(null,seq27067);
var seq27067__$1 = cljs.core.next.call(null,seq27067);
var G__27069 = cljs.core.first.call(null,seq27067__$1);
var seq27067__$2 = cljs.core.next.call(null,seq27067__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27068,G__27069,seq27067__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1487092377615