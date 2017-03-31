// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,camel_snake_kebab.core.__GT_camelCase));
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(root_obj,type,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,(root_obj[type]),cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});
cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var args37391 = [];
var len__26280__auto___37394 = arguments.length;
var i__26281__auto___37395 = (0);
while(true){
if((i__26281__auto___37395 < len__26280__auto___37394)){
args37391.push((arguments[i__26281__auto___37395]));

var G__37396 = (i__26281__auto___37395 + (1));
i__26281__auto___37395 = G__37396;
continue;
} else {
}
break;
}

var G__37393 = args37391.length;
switch (G__37393) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37391.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,raw_theme));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][camel_snake_kebab.core.__GT_camelCaseString.call(null,color_key)]);
});
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.css_transition_group = (function cljs_react_material_ui$core$css_transition_group(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37399 = arguments.length;
var i__26281__auto___37400 = (0);
while(true){
if((i__26281__auto___37400 < len__26280__auto___37399)){
args__26287__auto__.push((arguments[i__26281__auto___37400]));

var G__37401 = (i__26281__auto___37400 + (1));
i__26281__auto___37400 = G__37401;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"CSSTransitionGroup",args);
});

cljs_react_material_ui.core.css_transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.css_transition_group.cljs$lang$applyTo = (function (seq37398){
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37398));
});

cljs_react_material_ui.core.transition_group = (function cljs_react_material_ui$core$transition_group(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37403 = arguments.length;
var i__26281__auto___37404 = (0);
while(true){
if((i__26281__auto___37404 < len__26280__auto___37403)){
args__26287__auto__.push((arguments[i__26281__auto___37404]));

var G__37405 = (i__26281__auto___37404 + (1));
i__26281__auto___37404 = G__37405;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"TransitionGroup",args);
});

cljs_react_material_ui.core.transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.transition_group.cljs$lang$applyTo = (function (seq37402){
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37402));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37407 = arguments.length;
var i__26281__auto___37408 = (0);
while(true){
if((i__26281__auto___37408 < len__26280__auto___37407)){
args__26287__auto__.push((arguments[i__26281__auto___37408]));

var G__37409 = (i__26281__auto___37408 + (1));
i__26281__auto___37408 = G__37409;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq37406){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37406));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37411 = arguments.length;
var i__26281__auto___37412 = (0);
while(true){
if((i__26281__auto___37412 < len__26280__auto___37411)){
args__26287__auto__.push((arguments[i__26281__auto___37412]));

var G__37413 = (i__26281__auto___37412 + (1));
i__26281__auto___37412 = G__37413;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq37410){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37410));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37415 = arguments.length;
var i__26281__auto___37416 = (0);
while(true){
if((i__26281__auto___37416 < len__26280__auto___37415)){
args__26287__auto__.push((arguments[i__26281__auto___37416]));

var G__37417 = (i__26281__auto___37416 + (1));
i__26281__auto___37416 = G__37417;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq37414){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37414));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37419 = arguments.length;
var i__26281__auto___37420 = (0);
while(true){
if((i__26281__auto___37420 < len__26280__auto___37419)){
args__26287__auto__.push((arguments[i__26281__auto___37420]));

var G__37421 = (i__26281__auto___37420 + (1));
i__26281__auto___37420 = G__37421;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq37418){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37418));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37423 = arguments.length;
var i__26281__auto___37424 = (0);
while(true){
if((i__26281__auto___37424 < len__26280__auto___37423)){
args__26287__auto__.push((arguments[i__26281__auto___37424]));

var G__37425 = (i__26281__auto___37424 + (1));
i__26281__auto___37424 = G__37425;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq37422){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37422));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37427 = arguments.length;
var i__26281__auto___37428 = (0);
while(true){
if((i__26281__auto___37428 < len__26280__auto___37427)){
args__26287__auto__.push((arguments[i__26281__auto___37428]));

var G__37429 = (i__26281__auto___37428 + (1));
i__26281__auto___37428 = G__37429;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq37426){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37426));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37431 = arguments.length;
var i__26281__auto___37432 = (0);
while(true){
if((i__26281__auto___37432 < len__26280__auto___37431)){
args__26287__auto__.push((arguments[i__26281__auto___37432]));

var G__37433 = (i__26281__auto___37432 + (1));
i__26281__auto___37432 = G__37433;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq37430){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37430));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37435 = arguments.length;
var i__26281__auto___37436 = (0);
while(true){
if((i__26281__auto___37436 < len__26280__auto___37435)){
args__26287__auto__.push((arguments[i__26281__auto___37436]));

var G__37437 = (i__26281__auto___37436 + (1));
i__26281__auto___37436 = G__37437;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq37434){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37434));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37439 = arguments.length;
var i__26281__auto___37440 = (0);
while(true){
if((i__26281__auto___37440 < len__26280__auto___37439)){
args__26287__auto__.push((arguments[i__26281__auto___37440]));

var G__37441 = (i__26281__auto___37440 + (1));
i__26281__auto___37440 = G__37441;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq37438){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37438));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37443 = arguments.length;
var i__26281__auto___37444 = (0);
while(true){
if((i__26281__auto___37444 < len__26280__auto___37443)){
args__26287__auto__.push((arguments[i__26281__auto___37444]));

var G__37445 = (i__26281__auto___37444 + (1));
i__26281__auto___37444 = G__37445;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq37442){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37442));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37447 = arguments.length;
var i__26281__auto___37448 = (0);
while(true){
if((i__26281__auto___37448 < len__26280__auto___37447)){
args__26287__auto__.push((arguments[i__26281__auto___37448]));

var G__37449 = (i__26281__auto___37448 + (1));
i__26281__auto___37448 = G__37449;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq37446){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37446));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37451 = arguments.length;
var i__26281__auto___37452 = (0);
while(true){
if((i__26281__auto___37452 < len__26280__auto___37451)){
args__26287__auto__.push((arguments[i__26281__auto___37452]));

var G__37453 = (i__26281__auto___37452 + (1));
i__26281__auto___37452 = G__37453;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq37450){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37450));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37455 = arguments.length;
var i__26281__auto___37456 = (0);
while(true){
if((i__26281__auto___37456 < len__26280__auto___37455)){
args__26287__auto__.push((arguments[i__26281__auto___37456]));

var G__37457 = (i__26281__auto___37456 + (1));
i__26281__auto___37456 = G__37457;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq37454){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37454));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37459 = arguments.length;
var i__26281__auto___37460 = (0);
while(true){
if((i__26281__auto___37460 < len__26280__auto___37459)){
args__26287__auto__.push((arguments[i__26281__auto___37460]));

var G__37461 = (i__26281__auto___37460 + (1));
i__26281__auto___37460 = G__37461;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq37458){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37458));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37463 = arguments.length;
var i__26281__auto___37464 = (0);
while(true){
if((i__26281__auto___37464 < len__26280__auto___37463)){
args__26287__auto__.push((arguments[i__26281__auto___37464]));

var G__37465 = (i__26281__auto___37464 + (1));
i__26281__auto___37464 = G__37465;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq37462){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37462));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37467 = arguments.length;
var i__26281__auto___37468 = (0);
while(true){
if((i__26281__auto___37468 < len__26280__auto___37467)){
args__26287__auto__.push((arguments[i__26281__auto___37468]));

var G__37469 = (i__26281__auto___37468 + (1));
i__26281__auto___37468 = G__37469;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq37466){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37466));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37471 = arguments.length;
var i__26281__auto___37472 = (0);
while(true){
if((i__26281__auto___37472 < len__26280__auto___37471)){
args__26287__auto__.push((arguments[i__26281__auto___37472]));

var G__37473 = (i__26281__auto___37472 + (1));
i__26281__auto___37472 = G__37473;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq37470){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37470));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37475 = arguments.length;
var i__26281__auto___37476 = (0);
while(true){
if((i__26281__auto___37476 < len__26280__auto___37475)){
args__26287__auto__.push((arguments[i__26281__auto___37476]));

var G__37477 = (i__26281__auto___37476 + (1));
i__26281__auto___37476 = G__37477;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq37474){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37474));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37479 = arguments.length;
var i__26281__auto___37480 = (0);
while(true){
if((i__26281__auto___37480 < len__26280__auto___37479)){
args__26287__auto__.push((arguments[i__26281__auto___37480]));

var G__37481 = (i__26281__auto___37480 + (1));
i__26281__auto___37480 = G__37481;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq37478){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37478));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37483 = arguments.length;
var i__26281__auto___37484 = (0);
while(true){
if((i__26281__auto___37484 < len__26280__auto___37483)){
args__26287__auto__.push((arguments[i__26281__auto___37484]));

var G__37485 = (i__26281__auto___37484 + (1));
i__26281__auto___37484 = G__37485;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq37482){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37482));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37487 = arguments.length;
var i__26281__auto___37488 = (0);
while(true){
if((i__26281__auto___37488 < len__26280__auto___37487)){
args__26287__auto__.push((arguments[i__26281__auto___37488]));

var G__37489 = (i__26281__auto___37488 + (1));
i__26281__auto___37488 = G__37489;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq37486){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37486));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37491 = arguments.length;
var i__26281__auto___37492 = (0);
while(true){
if((i__26281__auto___37492 < len__26280__auto___37491)){
args__26287__auto__.push((arguments[i__26281__auto___37492]));

var G__37493 = (i__26281__auto___37492 + (1));
i__26281__auto___37492 = G__37493;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq37490){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37490));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37495 = arguments.length;
var i__26281__auto___37496 = (0);
while(true){
if((i__26281__auto___37496 < len__26280__auto___37495)){
args__26287__auto__.push((arguments[i__26281__auto___37496]));

var G__37497 = (i__26281__auto___37496 + (1));
i__26281__auto___37496 = G__37497;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq37494){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37494));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37499 = arguments.length;
var i__26281__auto___37500 = (0);
while(true){
if((i__26281__auto___37500 < len__26280__auto___37499)){
args__26287__auto__.push((arguments[i__26281__auto___37500]));

var G__37501 = (i__26281__auto___37500 + (1));
i__26281__auto___37500 = G__37501;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq37498){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37498));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37503 = arguments.length;
var i__26281__auto___37504 = (0);
while(true){
if((i__26281__auto___37504 < len__26280__auto___37503)){
args__26287__auto__.push((arguments[i__26281__auto___37504]));

var G__37505 = (i__26281__auto___37504 + (1));
i__26281__auto___37504 = G__37505;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq37502){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37502));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37507 = arguments.length;
var i__26281__auto___37508 = (0);
while(true){
if((i__26281__auto___37508 < len__26280__auto___37507)){
args__26287__auto__.push((arguments[i__26281__auto___37508]));

var G__37509 = (i__26281__auto___37508 + (1));
i__26281__auto___37508 = G__37509;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq37506){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37506));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37511 = arguments.length;
var i__26281__auto___37512 = (0);
while(true){
if((i__26281__auto___37512 < len__26280__auto___37511)){
args__26287__auto__.push((arguments[i__26281__auto___37512]));

var G__37513 = (i__26281__auto___37512 + (1));
i__26281__auto___37512 = G__37513;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq37510){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37510));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37515 = arguments.length;
var i__26281__auto___37516 = (0);
while(true){
if((i__26281__auto___37516 < len__26280__auto___37515)){
args__26287__auto__.push((arguments[i__26281__auto___37516]));

var G__37517 = (i__26281__auto___37516 + (1));
i__26281__auto___37516 = G__37517;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq37514){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37514));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37519 = arguments.length;
var i__26281__auto___37520 = (0);
while(true){
if((i__26281__auto___37520 < len__26280__auto___37519)){
args__26287__auto__.push((arguments[i__26281__auto___37520]));

var G__37521 = (i__26281__auto___37520 + (1));
i__26281__auto___37520 = G__37521;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq37518){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37518));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37523 = arguments.length;
var i__26281__auto___37524 = (0);
while(true){
if((i__26281__auto___37524 < len__26280__auto___37523)){
args__26287__auto__.push((arguments[i__26281__auto___37524]));

var G__37525 = (i__26281__auto___37524 + (1));
i__26281__auto___37524 = G__37525;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq37522){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37522));
});

cljs_react_material_ui.core.make_selectable = (function cljs_react_material_ui$core$make_selectable(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37527 = arguments.length;
var i__26281__auto___37528 = (0);
while(true){
if((i__26281__auto___37528 < len__26280__auto___37527)){
args__26287__auto__.push((arguments[i__26281__auto___37528]));

var G__37529 = (i__26281__auto___37528 + (1));
i__26281__auto___37528 = G__37529;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"makeSelectable",args);
});

cljs_react_material_ui.core.make_selectable.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.make_selectable.cljs$lang$applyTo = (function (seq37526){
return cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37526));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37531 = arguments.length;
var i__26281__auto___37532 = (0);
while(true){
if((i__26281__auto___37532 < len__26280__auto___37531)){
args__26287__auto__.push((arguments[i__26281__auto___37532]));

var G__37533 = (i__26281__auto___37532 + (1));
i__26281__auto___37532 = G__37533;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq37530){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37530));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37535 = arguments.length;
var i__26281__auto___37536 = (0);
while(true){
if((i__26281__auto___37536 < len__26280__auto___37535)){
args__26287__auto__.push((arguments[i__26281__auto___37536]));

var G__37537 = (i__26281__auto___37536 + (1));
i__26281__auto___37536 = G__37537;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq37534){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37534));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37539 = arguments.length;
var i__26281__auto___37540 = (0);
while(true){
if((i__26281__auto___37540 < len__26280__auto___37539)){
args__26287__auto__.push((arguments[i__26281__auto___37540]));

var G__37541 = (i__26281__auto___37540 + (1));
i__26281__auto___37540 = G__37541;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq37538){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37538));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37543 = arguments.length;
var i__26281__auto___37544 = (0);
while(true){
if((i__26281__auto___37544 < len__26280__auto___37543)){
args__26287__auto__.push((arguments[i__26281__auto___37544]));

var G__37545 = (i__26281__auto___37544 + (1));
i__26281__auto___37544 = G__37545;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq37542){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37542));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37547 = arguments.length;
var i__26281__auto___37548 = (0);
while(true){
if((i__26281__auto___37548 < len__26280__auto___37547)){
args__26287__auto__.push((arguments[i__26281__auto___37548]));

var G__37549 = (i__26281__auto___37548 + (1));
i__26281__auto___37548 = G__37549;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq37546){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37546));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37551 = arguments.length;
var i__26281__auto___37552 = (0);
while(true){
if((i__26281__auto___37552 < len__26280__auto___37551)){
args__26287__auto__.push((arguments[i__26281__auto___37552]));

var G__37553 = (i__26281__auto___37552 + (1));
i__26281__auto___37552 = G__37553;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq37550){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37550));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37555 = arguments.length;
var i__26281__auto___37556 = (0);
while(true){
if((i__26281__auto___37556 < len__26280__auto___37555)){
args__26287__auto__.push((arguments[i__26281__auto___37556]));

var G__37557 = (i__26281__auto___37556 + (1));
i__26281__auto___37556 = G__37557;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq37554){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37554));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37559 = arguments.length;
var i__26281__auto___37560 = (0);
while(true){
if((i__26281__auto___37560 < len__26280__auto___37559)){
args__26287__auto__.push((arguments[i__26281__auto___37560]));

var G__37561 = (i__26281__auto___37560 + (1));
i__26281__auto___37560 = G__37561;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq37558){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37558));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37563 = arguments.length;
var i__26281__auto___37564 = (0);
while(true){
if((i__26281__auto___37564 < len__26280__auto___37563)){
args__26287__auto__.push((arguments[i__26281__auto___37564]));

var G__37565 = (i__26281__auto___37564 + (1));
i__26281__auto___37564 = G__37565;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq37562){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37562));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37567 = arguments.length;
var i__26281__auto___37568 = (0);
while(true){
if((i__26281__auto___37568 < len__26280__auto___37567)){
args__26287__auto__.push((arguments[i__26281__auto___37568]));

var G__37569 = (i__26281__auto___37568 + (1));
i__26281__auto___37568 = G__37569;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq37566){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37566));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37571 = arguments.length;
var i__26281__auto___37572 = (0);
while(true){
if((i__26281__auto___37572 < len__26280__auto___37571)){
args__26287__auto__.push((arguments[i__26281__auto___37572]));

var G__37573 = (i__26281__auto___37572 + (1));
i__26281__auto___37572 = G__37573;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq37570){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37570));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37575 = arguments.length;
var i__26281__auto___37576 = (0);
while(true){
if((i__26281__auto___37576 < len__26280__auto___37575)){
args__26287__auto__.push((arguments[i__26281__auto___37576]));

var G__37577 = (i__26281__auto___37576 + (1));
i__26281__auto___37576 = G__37577;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq37574){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37574));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37579 = arguments.length;
var i__26281__auto___37580 = (0);
while(true){
if((i__26281__auto___37580 < len__26280__auto___37579)){
args__26287__auto__.push((arguments[i__26281__auto___37580]));

var G__37581 = (i__26281__auto___37580 + (1));
i__26281__auto___37580 = G__37581;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq37578){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37578));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37583 = arguments.length;
var i__26281__auto___37584 = (0);
while(true){
if((i__26281__auto___37584 < len__26280__auto___37583)){
args__26287__auto__.push((arguments[i__26281__auto___37584]));

var G__37585 = (i__26281__auto___37584 + (1));
i__26281__auto___37584 = G__37585;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq37582){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37582));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37587 = arguments.length;
var i__26281__auto___37588 = (0);
while(true){
if((i__26281__auto___37588 < len__26280__auto___37587)){
args__26287__auto__.push((arguments[i__26281__auto___37588]));

var G__37589 = (i__26281__auto___37588 + (1));
i__26281__auto___37588 = G__37589;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq37586){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37586));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37591 = arguments.length;
var i__26281__auto___37592 = (0);
while(true){
if((i__26281__auto___37592 < len__26280__auto___37591)){
args__26287__auto__.push((arguments[i__26281__auto___37592]));

var G__37593 = (i__26281__auto___37592 + (1));
i__26281__auto___37592 = G__37593;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq37590){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37590));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37595 = arguments.length;
var i__26281__auto___37596 = (0);
while(true){
if((i__26281__auto___37596 < len__26280__auto___37595)){
args__26287__auto__.push((arguments[i__26281__auto___37596]));

var G__37597 = (i__26281__auto___37596 + (1));
i__26281__auto___37596 = G__37597;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq37594){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37594));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37599 = arguments.length;
var i__26281__auto___37600 = (0);
while(true){
if((i__26281__auto___37600 < len__26280__auto___37599)){
args__26287__auto__.push((arguments[i__26281__auto___37600]));

var G__37601 = (i__26281__auto___37600 + (1));
i__26281__auto___37600 = G__37601;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq37598){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37598));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37603 = arguments.length;
var i__26281__auto___37604 = (0);
while(true){
if((i__26281__auto___37604 < len__26280__auto___37603)){
args__26287__auto__.push((arguments[i__26281__auto___37604]));

var G__37605 = (i__26281__auto___37604 + (1));
i__26281__auto___37604 = G__37605;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq37602){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37602));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37607 = arguments.length;
var i__26281__auto___37608 = (0);
while(true){
if((i__26281__auto___37608 < len__26280__auto___37607)){
args__26287__auto__.push((arguments[i__26281__auto___37608]));

var G__37609 = (i__26281__auto___37608 + (1));
i__26281__auto___37608 = G__37609;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq37606){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37606));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37611 = arguments.length;
var i__26281__auto___37612 = (0);
while(true){
if((i__26281__auto___37612 < len__26280__auto___37611)){
args__26287__auto__.push((arguments[i__26281__auto___37612]));

var G__37613 = (i__26281__auto___37612 + (1));
i__26281__auto___37612 = G__37613;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq37610){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37610));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37615 = arguments.length;
var i__26281__auto___37616 = (0);
while(true){
if((i__26281__auto___37616 < len__26280__auto___37615)){
args__26287__auto__.push((arguments[i__26281__auto___37616]));

var G__37617 = (i__26281__auto___37616 + (1));
i__26281__auto___37616 = G__37617;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq37614){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37614));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37619 = arguments.length;
var i__26281__auto___37620 = (0);
while(true){
if((i__26281__auto___37620 < len__26280__auto___37619)){
args__26287__auto__.push((arguments[i__26281__auto___37620]));

var G__37621 = (i__26281__auto___37620 + (1));
i__26281__auto___37620 = G__37621;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq37618){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37618));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37623 = arguments.length;
var i__26281__auto___37624 = (0);
while(true){
if((i__26281__auto___37624 < len__26280__auto___37623)){
args__26287__auto__.push((arguments[i__26281__auto___37624]));

var G__37625 = (i__26281__auto___37624 + (1));
i__26281__auto___37624 = G__37625;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq37622){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37622));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37627 = arguments.length;
var i__26281__auto___37628 = (0);
while(true){
if((i__26281__auto___37628 < len__26280__auto___37627)){
args__26287__auto__.push((arguments[i__26281__auto___37628]));

var G__37629 = (i__26281__auto___37628 + (1));
i__26281__auto___37628 = G__37629;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq37626){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37626));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37631 = arguments.length;
var i__26281__auto___37632 = (0);
while(true){
if((i__26281__auto___37632 < len__26280__auto___37631)){
args__26287__auto__.push((arguments[i__26281__auto___37632]));

var G__37633 = (i__26281__auto___37632 + (1));
i__26281__auto___37632 = G__37633;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq37630){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37630));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37635 = arguments.length;
var i__26281__auto___37636 = (0);
while(true){
if((i__26281__auto___37636 < len__26280__auto___37635)){
args__26287__auto__.push((arguments[i__26281__auto___37636]));

var G__37637 = (i__26281__auto___37636 + (1));
i__26281__auto___37636 = G__37637;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq37634){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37634));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37639 = arguments.length;
var i__26281__auto___37640 = (0);
while(true){
if((i__26281__auto___37640 < len__26280__auto___37639)){
args__26287__auto__.push((arguments[i__26281__auto___37640]));

var G__37641 = (i__26281__auto___37640 + (1));
i__26281__auto___37640 = G__37641;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq37638){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37638));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37643 = arguments.length;
var i__26281__auto___37644 = (0);
while(true){
if((i__26281__auto___37644 < len__26280__auto___37643)){
args__26287__auto__.push((arguments[i__26281__auto___37644]));

var G__37645 = (i__26281__auto___37644 + (1));
i__26281__auto___37644 = G__37645;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq37642){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37642));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37647 = arguments.length;
var i__26281__auto___37648 = (0);
while(true){
if((i__26281__auto___37648 < len__26280__auto___37647)){
args__26287__auto__.push((arguments[i__26281__auto___37648]));

var G__37649 = (i__26281__auto___37648 + (1));
i__26281__auto___37648 = G__37649;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq37646){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37646));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37651 = arguments.length;
var i__26281__auto___37652 = (0);
while(true){
if((i__26281__auto___37652 < len__26280__auto___37651)){
args__26287__auto__.push((arguments[i__26281__auto___37652]));

var G__37653 = (i__26281__auto___37652 + (1));
i__26281__auto___37652 = G__37653;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq37650){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37650));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37655 = arguments.length;
var i__26281__auto___37656 = (0);
while(true){
if((i__26281__auto___37656 < len__26280__auto___37655)){
args__26287__auto__.push((arguments[i__26281__auto___37656]));

var G__37657 = (i__26281__auto___37656 + (1));
i__26281__auto___37656 = G__37657;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq37654){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37654));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37659 = arguments.length;
var i__26281__auto___37660 = (0);
while(true){
if((i__26281__auto___37660 < len__26280__auto___37659)){
args__26287__auto__.push((arguments[i__26281__auto___37660]));

var G__37661 = (i__26281__auto___37660 + (1));
i__26281__auto___37660 = G__37661;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq37658){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37658));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37663 = arguments.length;
var i__26281__auto___37664 = (0);
while(true){
if((i__26281__auto___37664 < len__26280__auto___37663)){
args__26287__auto__.push((arguments[i__26281__auto___37664]));

var G__37665 = (i__26281__auto___37664 + (1));
i__26281__auto___37664 = G__37665;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq37662){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37662));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37667 = arguments.length;
var i__26281__auto___37668 = (0);
while(true){
if((i__26281__auto___37668 < len__26280__auto___37667)){
args__26287__auto__.push((arguments[i__26281__auto___37668]));

var G__37669 = (i__26281__auto___37668 + (1));
i__26281__auto___37668 = G__37669;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((0) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__26288__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq37666){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37666));
});


//# sourceMappingURL=core.js.map?rel=1484074970117