// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__25835__auto__ = (((value == null))?null:value);
var m__25836__auto__ = (devtools.format._header[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,value);
} else {
var m__25836__auto____$1 = (devtools.format._header["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__25835__auto__ = (((value == null))?null:value);
var m__25836__auto__ = (devtools.format._has_body[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,value);
} else {
var m__25836__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__25835__auto__ = (((value == null))?null:value);
var m__25836__auto__ = (devtools.format._body[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,value);
} else {
var m__25836__auto____$1 = (devtools.format._body["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__26359__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26359__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26359__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26359__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26358__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26358__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__26359__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26359__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26359__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26359__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26358__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26358__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__26359__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26359__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26359__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26359__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26358__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26358__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__26359__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26359__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26359__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26359__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26358__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26358__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__26359__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26359__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26359__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26359__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26358__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26358__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__26359__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26359__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26359__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26359__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26358__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26358__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__26359__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__26359__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__26359__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__26359__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__26358__auto__ = temp__4657__auto____$2;
return goog.object.get(o__26358__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26380 = arguments.length;
var i__26281__auto___26381 = (0);
while(true){
if((i__26281__auto___26381 < len__26280__auto___26380)){
args__26287__auto__.push((arguments[i__26281__auto___26381]));

var G__26382 = (i__26281__auto___26381 + (1));
i__26281__auto___26381 = G__26382;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq26379){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26379));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26384 = arguments.length;
var i__26281__auto___26385 = (0);
while(true){
if((i__26281__auto___26385 < len__26280__auto___26384)){
args__26287__auto__.push((arguments[i__26281__auto___26385]));

var G__26386 = (i__26281__auto___26385 + (1));
i__26281__auto___26385 = G__26386;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq26383){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26383));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26388 = arguments.length;
var i__26281__auto___26389 = (0);
while(true){
if((i__26281__auto___26389 < len__26280__auto___26388)){
args__26287__auto__.push((arguments[i__26281__auto___26389]));

var G__26390 = (i__26281__auto___26389 + (1));
i__26281__auto___26389 = G__26390;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq26387){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26387));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26392 = arguments.length;
var i__26281__auto___26393 = (0);
while(true){
if((i__26281__auto___26393 < len__26280__auto___26392)){
args__26287__auto__.push((arguments[i__26281__auto___26393]));

var G__26394 = (i__26281__auto___26393 + (1));
i__26281__auto___26393 = G__26394;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq26391){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26391));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26396 = arguments.length;
var i__26281__auto___26397 = (0);
while(true){
if((i__26281__auto___26397 < len__26280__auto___26396)){
args__26287__auto__.push((arguments[i__26281__auto___26397]));

var G__26398 = (i__26281__auto___26397 + (1));
i__26281__auto___26397 = G__26398;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq26395){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26395));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26400 = arguments.length;
var i__26281__auto___26401 = (0);
while(true){
if((i__26281__auto___26401 < len__26280__auto___26400)){
args__26287__auto__.push((arguments[i__26281__auto___26401]));

var G__26402 = (i__26281__auto___26401 + (1));
i__26281__auto___26401 = G__26402;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq26399){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26399));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26404 = arguments.length;
var i__26281__auto___26405 = (0);
while(true){
if((i__26281__auto___26405 < len__26280__auto___26404)){
args__26287__auto__.push((arguments[i__26281__auto___26405]));

var G__26406 = (i__26281__auto___26405 + (1));
i__26281__auto___26405 = G__26406;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq26403){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26403));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26414 = arguments.length;
var i__26281__auto___26415 = (0);
while(true){
if((i__26281__auto___26415 < len__26280__auto___26414)){
args__26287__auto__.push((arguments[i__26281__auto___26415]));

var G__26416 = (i__26281__auto___26415 + (1));
i__26281__auto___26415 = G__26416;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__26410){
var vec__26411 = p__26410;
var state_override = cljs.core.nth.call(null,vec__26411,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__26411,state_override){
return (function (p1__26407_SHARP_){
return cljs.core.merge.call(null,p1__26407_SHARP_,state_override);
});})(vec__26411,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq26408){
var G__26409 = cljs.core.first.call(null,seq26408);
var seq26408__$1 = cljs.core.next.call(null,seq26408);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__26409,seq26408__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26418 = arguments.length;
var i__26281__auto___26419 = (0);
while(true){
if((i__26281__auto___26419 < len__26280__auto___26418)){
args__26287__auto__.push((arguments[i__26281__auto___26419]));

var G__26420 = (i__26281__auto___26419 + (1));
i__26281__auto___26419 = G__26420;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq26417){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26417));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26287__auto__ = [];
var len__26280__auto___26423 = arguments.length;
var i__26281__auto___26424 = (0);
while(true){
if((i__26281__auto___26424 < len__26280__auto___26423)){
args__26287__auto__.push((arguments[i__26281__auto___26424]));

var G__26425 = (i__26281__auto___26424 + (1));
i__26281__auto___26424 = G__26425;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq26421){
var G__26422 = cljs.core.first.call(null,seq26421);
var seq26421__$1 = cljs.core.next.call(null,seq26421);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__26422,seq26421__$1);
});


//# sourceMappingURL=format.js.map?rel=1487092376831