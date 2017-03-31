// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('re_frisk.devtool');
goog.require('re_frisk.ui');
goog.require('reagent.core');
goog.require('re_frisk.data');
goog.require('re_frame.core');
goog.require('datafrisk.core');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.conj,value);
});
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.re_frisk_shell,re_frisk.data.re_frame_data,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frisk.devtool.open_debugger_window], null),params)], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__26287__auto__ = [];
var len__26280__auto___36901 = arguments.length;
var i__26281__auto___36902 = (0);
while(true){
if((i__26281__auto___36902 < len__26280__auto___36901)){
args__26287__auto__.push((arguments[i__26281__auto___36902]));

var G__36903 = (i__26281__auto___36902 + (1));
i__26281__auto___36902 = G__36903;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),(function (db,_){
return db;
}));

cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709)], null))], null));

cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq36900){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36900));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__26287__auto__ = [];
var len__26280__auto___36905 = arguments.length;
var i__26281__auto___36906 = (0);
while(true){
if((i__26281__auto___36906 < len__26280__auto___36905)){
args__26287__auto__.push((arguments[i__26281__auto___36906]));

var G__36907 = (i__26281__auto___36906 + (1));
i__26281__auto___36906 = G__36907;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq36904){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36904));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
} else {
return null;
}
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
} else {
return null;
}
});
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"events","events",1792552201)], null),events);

cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"subs","subs",-186681991)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__36908_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__36908_SHARP_],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36908_SHARP_], null))]);
}),subs)));

var seq__36913 = cljs.core.seq.call(null,subs);
var chunk__36914 = null;
var count__36915 = (0);
var i__36916 = (0);
while(true){
if((i__36916 < count__36915)){
var s = cljs.core._nth.call(null,chunk__36914,i__36916);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__36917 = seq__36913;
var G__36918 = chunk__36914;
var G__36919 = count__36915;
var G__36920 = (i__36916 + (1));
seq__36913 = G__36917;
chunk__36914 = G__36918;
count__36915 = G__36919;
i__36916 = G__36920;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36913);
if(temp__4657__auto__){
var seq__36913__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36913__$1)){
var c__25986__auto__ = cljs.core.chunk_first.call(null,seq__36913__$1);
var G__36921 = cljs.core.chunk_rest.call(null,seq__36913__$1);
var G__36922 = c__25986__auto__;
var G__36923 = cljs.core.count.call(null,c__25986__auto__);
var G__36924 = (0);
seq__36913 = G__36921;
chunk__36914 = G__36922;
count__36915 = G__36923;
i__36916 = G__36924;
continue;
} else {
var s = cljs.core.first.call(null,seq__36913__$1);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__36925 = cljs.core.next.call(null,seq__36913__$1);
var G__36926 = null;
var G__36927 = (0);
var G__36928 = (0);
seq__36913 = G__36925;
chunk__36914 = G__36926;
count__36915 = G__36927;
i__36916 = G__36928;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,view);
} else {
return null;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246),(function (db,p__36929){
var vec__36930 = p__36929;
var _ = cljs.core.nth.call(null,vec__36930,(0),null);
var value = cljs.core.nth.call(null,vec__36930,(1),null);
return value;
}));

//# sourceMappingURL=core.js.map?rel=1484074965457