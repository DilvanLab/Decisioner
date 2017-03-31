// Compiled by ClojureScript 1.9.293 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x27492_27493 = value;
x27492_27493.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x27497_27498 = value;
x27497_27498.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x27502_27503 = value;
x27502_27503.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__25160__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25160__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25160__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27511 = arguments.length;
var i__26281__auto___27512 = (0);
while(true){
if((i__26281__auto___27512 < len__26280__auto___27511)){
args__26287__auto__.push((arguments[i__26281__auto___27512]));

var G__27513 = (i__26281__auto___27512 + (1));
i__26281__auto___27512 = G__27513;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__27507_27514 = cljs.core.seq.call(null,items);
var chunk__27508_27515 = null;
var count__27509_27516 = (0);
var i__27510_27517 = (0);
while(true){
if((i__27510_27517 < count__27509_27516)){
var item_27518 = cljs.core._nth.call(null,chunk__27508_27515,i__27510_27517);
if(cljs.core.some_QMARK_.call(null,item_27518)){
if(cljs.core.coll_QMARK_.call(null,item_27518)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_27518)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_27518));
}
} else {
}

var G__27519 = seq__27507_27514;
var G__27520 = chunk__27508_27515;
var G__27521 = count__27509_27516;
var G__27522 = (i__27510_27517 + (1));
seq__27507_27514 = G__27519;
chunk__27508_27515 = G__27520;
count__27509_27516 = G__27521;
i__27510_27517 = G__27522;
continue;
} else {
var temp__4657__auto___27523 = cljs.core.seq.call(null,seq__27507_27514);
if(temp__4657__auto___27523){
var seq__27507_27524__$1 = temp__4657__auto___27523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27507_27524__$1)){
var c__25986__auto___27525 = cljs.core.chunk_first.call(null,seq__27507_27524__$1);
var G__27526 = cljs.core.chunk_rest.call(null,seq__27507_27524__$1);
var G__27527 = c__25986__auto___27525;
var G__27528 = cljs.core.count.call(null,c__25986__auto___27525);
var G__27529 = (0);
seq__27507_27514 = G__27526;
chunk__27508_27515 = G__27527;
count__27509_27516 = G__27528;
i__27510_27517 = G__27529;
continue;
} else {
var item_27530 = cljs.core.first.call(null,seq__27507_27524__$1);
if(cljs.core.some_QMARK_.call(null,item_27530)){
if(cljs.core.coll_QMARK_.call(null,item_27530)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_27530)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_27530));
}
} else {
}

var G__27531 = cljs.core.next.call(null,seq__27507_27524__$1);
var G__27532 = null;
var G__27533 = (0);
var G__27534 = (0);
seq__27507_27514 = G__27531;
chunk__27508_27515 = G__27532;
count__27509_27516 = G__27533;
i__27510_27517 = G__27534;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq27506){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27506));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27542 = arguments.length;
var i__26281__auto___27543 = (0);
while(true){
if((i__26281__auto___27543 < len__26280__auto___27542)){
args__26287__auto__.push((arguments[i__26281__auto___27543]));

var G__27544 = (i__26281__auto___27543 + (1));
i__26281__auto___27543 = G__27544;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((2) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26288__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__27538_27545 = cljs.core.seq.call(null,children);
var chunk__27539_27546 = null;
var count__27540_27547 = (0);
var i__27541_27548 = (0);
while(true){
if((i__27541_27548 < count__27540_27547)){
var child_27549 = cljs.core._nth.call(null,chunk__27539_27546,i__27541_27548);
if(cljs.core.some_QMARK_.call(null,child_27549)){
if(cljs.core.coll_QMARK_.call(null,child_27549)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_27549))));
} else {
var temp__4655__auto___27550 = devtools.formatters.helpers.pref.call(null,child_27549);
if(cljs.core.truth_(temp__4655__auto___27550)){
var child_value_27551 = temp__4655__auto___27550;
template.push(child_value_27551);
} else {
}
}
} else {
}

var G__27552 = seq__27538_27545;
var G__27553 = chunk__27539_27546;
var G__27554 = count__27540_27547;
var G__27555 = (i__27541_27548 + (1));
seq__27538_27545 = G__27552;
chunk__27539_27546 = G__27553;
count__27540_27547 = G__27554;
i__27541_27548 = G__27555;
continue;
} else {
var temp__4657__auto___27556 = cljs.core.seq.call(null,seq__27538_27545);
if(temp__4657__auto___27556){
var seq__27538_27557__$1 = temp__4657__auto___27556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27538_27557__$1)){
var c__25986__auto___27558 = cljs.core.chunk_first.call(null,seq__27538_27557__$1);
var G__27559 = cljs.core.chunk_rest.call(null,seq__27538_27557__$1);
var G__27560 = c__25986__auto___27558;
var G__27561 = cljs.core.count.call(null,c__25986__auto___27558);
var G__27562 = (0);
seq__27538_27545 = G__27559;
chunk__27539_27546 = G__27560;
count__27540_27547 = G__27561;
i__27541_27548 = G__27562;
continue;
} else {
var child_27563 = cljs.core.first.call(null,seq__27538_27557__$1);
if(cljs.core.some_QMARK_.call(null,child_27563)){
if(cljs.core.coll_QMARK_.call(null,child_27563)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_27563))));
} else {
var temp__4655__auto___27564 = devtools.formatters.helpers.pref.call(null,child_27563);
if(cljs.core.truth_(temp__4655__auto___27564)){
var child_value_27565 = temp__4655__auto___27564;
template.push(child_value_27565);
} else {
}
}
} else {
}

var G__27566 = cljs.core.next.call(null,seq__27538_27557__$1);
var G__27567 = null;
var G__27568 = (0);
var G__27569 = (0);
seq__27538_27545 = G__27566;
chunk__27539_27546 = G__27567;
count__27540_27547 = G__27568;
i__27541_27548 = G__27569;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq27535){
var G__27536 = cljs.core.first.call(null,seq27535);
var seq27535__$1 = cljs.core.next.call(null,seq27535);
var G__27537 = cljs.core.first.call(null,seq27535__$1);
var seq27535__$2 = cljs.core.next.call(null,seq27535__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__27536,G__27537,seq27535__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27572 = arguments.length;
var i__26281__auto___27573 = (0);
while(true){
if((i__26281__auto___27573 < len__26280__auto___27572)){
args__26287__auto__.push((arguments[i__26281__auto___27573]));

var G__27574 = (i__26281__auto___27573 + (1));
i__26281__auto___27573 = G__27574;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq27570){
var G__27571 = cljs.core.first.call(null,seq27570);
var seq27570__$1 = cljs.core.next.call(null,seq27570);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27571,seq27570__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27577 = arguments.length;
var i__26281__auto___27578 = (0);
while(true){
if((i__26281__auto___27578 < len__26280__auto___27577)){
args__26287__auto__.push((arguments[i__26281__auto___27578]));

var G__27579 = (i__26281__auto___27578 + (1));
i__26281__auto___27578 = G__27579;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq27575){
var G__27576 = cljs.core.first.call(null,seq27575);
var seq27575__$1 = cljs.core.next.call(null,seq27575);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27576,seq27575__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args27580 = [];
var len__26280__auto___27585 = arguments.length;
var i__26281__auto___27586 = (0);
while(true){
if((i__26281__auto___27586 < len__26280__auto___27585)){
args27580.push((arguments[i__26281__auto___27586]));

var G__27587 = (i__26281__auto___27586 + (1));
i__26281__auto___27586 = G__27587;
continue;
} else {
}
break;
}

var G__27582 = args27580.length;
switch (G__27582) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27580.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj27584 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25172__auto__ = start_index;
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
return (0);
}
})()};
return obj27584;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27595 = arguments.length;
var i__26281__auto___27596 = (0);
while(true){
if((i__26281__auto___27596 < len__26280__auto___27595)){
args__26287__auto__.push((arguments[i__26281__auto___27596]));

var G__27597 = (i__26281__auto___27596 + (1));
i__26281__auto___27596 = G__27597;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27591){
var vec__27592 = p__27591;
var state_override_fn = cljs.core.nth.call(null,vec__27592,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq27589){
var G__27590 = cljs.core.first.call(null,seq27589);
var seq27589__$1 = cljs.core.next.call(null,seq27589);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__27590,seq27589__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26161__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27601_27604 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27602_27605 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27601_27604,_STAR_print_fn_STAR_27602_27605,sb__26161__auto__){
return (function (x__26162__auto__){
return sb__26161__auto__.append(x__26162__auto__);
});})(_STAR_print_newline_STAR_27601_27604,_STAR_print_fn_STAR_27602_27605,sb__26161__auto__))
;

try{var _STAR_print_level_STAR_27603_27606 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_27603_27606;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27602_27605;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27601_27604;
}
return [cljs.core.str(sb__26161__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_27608 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_27608;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__27610 = name;
switch (G__27610) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__27615 = tag;
var html_tag = cljs.core.nth.call(null,vec__27615,(0),null);
var style = cljs.core.nth.call(null,vec__27615,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_27619 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_27619;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_27622 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_27623 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_27623;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_27622;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__27624 = initial_value;
var G__27625 = value.call(null);
initial_value = G__27624;
value = G__27625;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__27626 = initial_value;
var G__27627 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__27626;
value = G__27627;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__27628 = initial_value;
var G__27629 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__27628;
value = G__27629;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1487092379872