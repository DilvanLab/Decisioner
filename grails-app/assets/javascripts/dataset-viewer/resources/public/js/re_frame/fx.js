// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__36673){
var vec__36674 = p__36673;
var k = cljs.core.nth.call(null,vec__36674,(0),null);
var value = cljs.core.nth.call(null,vec__36674,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__36677 = cljs.core.seq.call(null,value);
var chunk__36678 = null;
var count__36679 = (0);
var i__36680 = (0);
while(true){
if((i__36680 < count__36679)){
var map__36681 = cljs.core._nth.call(null,chunk__36678,i__36680);
var map__36681__$1 = ((((!((map__36681 == null)))?((((map__36681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36681):map__36681);
var effect = map__36681__$1;
var ms = cljs.core.get.call(null,map__36681__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36681__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36677,chunk__36678,count__36679,i__36680,map__36681,map__36681__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36677,chunk__36678,count__36679,i__36680,map__36681,map__36681__$1,effect,ms,dispatch))
,ms);
}

var G__36685 = seq__36677;
var G__36686 = chunk__36678;
var G__36687 = count__36679;
var G__36688 = (i__36680 + (1));
seq__36677 = G__36685;
chunk__36678 = G__36686;
count__36679 = G__36687;
i__36680 = G__36688;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36677);
if(temp__4657__auto__){
var seq__36677__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36677__$1)){
var c__25986__auto__ = cljs.core.chunk_first.call(null,seq__36677__$1);
var G__36689 = cljs.core.chunk_rest.call(null,seq__36677__$1);
var G__36690 = c__25986__auto__;
var G__36691 = cljs.core.count.call(null,c__25986__auto__);
var G__36692 = (0);
seq__36677 = G__36689;
chunk__36678 = G__36690;
count__36679 = G__36691;
i__36680 = G__36692;
continue;
} else {
var map__36683 = cljs.core.first.call(null,seq__36677__$1);
var map__36683__$1 = ((((!((map__36683 == null)))?((((map__36683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36683):map__36683);
var effect = map__36683__$1;
var ms = cljs.core.get.call(null,map__36683__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36683__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36677,chunk__36678,count__36679,i__36680,map__36683,map__36683__$1,effect,ms,dispatch,seq__36677__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36677,chunk__36678,count__36679,i__36680,map__36683,map__36683__$1,effect,ms,dispatch,seq__36677__$1,temp__4657__auto__))
,ms);
}

var G__36693 = cljs.core.next.call(null,seq__36677__$1);
var G__36694 = null;
var G__36695 = (0);
var G__36696 = (0);
seq__36677 = G__36693;
chunk__36678 = G__36694;
count__36679 = G__36695;
i__36680 = G__36696;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__36697 = cljs.core.seq.call(null,value);
var chunk__36698 = null;
var count__36699 = (0);
var i__36700 = (0);
while(true){
if((i__36700 < count__36699)){
var event = cljs.core._nth.call(null,chunk__36698,i__36700);
re_frame.router.dispatch.call(null,event);

var G__36701 = seq__36697;
var G__36702 = chunk__36698;
var G__36703 = count__36699;
var G__36704 = (i__36700 + (1));
seq__36697 = G__36701;
chunk__36698 = G__36702;
count__36699 = G__36703;
i__36700 = G__36704;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36697);
if(temp__4657__auto__){
var seq__36697__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36697__$1)){
var c__25986__auto__ = cljs.core.chunk_first.call(null,seq__36697__$1);
var G__36705 = cljs.core.chunk_rest.call(null,seq__36697__$1);
var G__36706 = c__25986__auto__;
var G__36707 = cljs.core.count.call(null,c__25986__auto__);
var G__36708 = (0);
seq__36697 = G__36705;
chunk__36698 = G__36706;
count__36699 = G__36707;
i__36700 = G__36708;
continue;
} else {
var event = cljs.core.first.call(null,seq__36697__$1);
re_frame.router.dispatch.call(null,event);

var G__36709 = cljs.core.next.call(null,seq__36697__$1);
var G__36710 = null;
var G__36711 = (0);
var G__36712 = (0);
seq__36697 = G__36709;
chunk__36698 = G__36710;
count__36699 = G__36711;
i__36700 = G__36712;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1484074963837