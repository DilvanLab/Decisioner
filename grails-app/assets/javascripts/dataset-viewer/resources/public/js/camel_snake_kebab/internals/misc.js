// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__26287__auto__ = [];
var len__26280__auto___36973 = arguments.length;
var i__26281__auto___36974 = (0);
while(true){
if((i__26281__auto___36974 < len__26280__auto___36973)){
args__26287__auto__.push((arguments[i__26281__auto___36974]));

var G__36975 = (i__26281__auto___36974 + (1));
i__26281__auto___36974 = G__36975;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((4) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26288__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__36967){
var map__36968 = p__36967;
var map__36968__$1 = ((((!((map__36968 == null)))?((((map__36968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36968):map__36968);
var separator = cljs.core.get.call(null,map__36968__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__36970 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__36971 = cljs.core.seq.call(null,vec__36970);
var first__36972 = cljs.core.first.call(null,seq__36971);
var seq__36971__$1 = cljs.core.next.call(null,seq__36971);
var first = first__36972;
var rest = seq__36971__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq36962){
var G__36963 = cljs.core.first.call(null,seq36962);
var seq36962__$1 = cljs.core.next.call(null,seq36962);
var G__36964 = cljs.core.first.call(null,seq36962__$1);
var seq36962__$2 = cljs.core.next.call(null,seq36962__$1);
var G__36965 = cljs.core.first.call(null,seq36962__$2);
var seq36962__$3 = cljs.core.next.call(null,seq36962__$2);
var G__36966 = cljs.core.first.call(null,seq36962__$3);
var seq36962__$4 = cljs.core.next.call(null,seq36962__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__36963,G__36964,G__36965,G__36966,seq36962__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__25172__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map?rel=1484074965988