// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37156 = arguments.length;
var i__26281__auto___37157 = (0);
while(true){
if((i__26281__auto___37157 < len__26280__auto___37156)){
args__26287__auto__.push((arguments[i__26281__auto___37157]));

var G__37158 = (i__26281__auto___37157 + (1));
i__26281__auto___37157 = G__37158;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((4) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26288__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq37151){
var G__37152 = cljs.core.first.call(null,seq37151);
var seq37151__$1 = cljs.core.next.call(null,seq37151);
var G__37153 = cljs.core.first.call(null,seq37151__$1);
var seq37151__$2 = cljs.core.next.call(null,seq37151__$1);
var G__37154 = cljs.core.first.call(null,seq37151__$2);
var seq37151__$3 = cljs.core.next.call(null,seq37151__$2);
var G__37155 = cljs.core.first.call(null,seq37151__$3);
var seq37151__$4 = cljs.core.next.call(null,seq37151__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__37152,G__37153,G__37154,G__37155,seq37151__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37167 = arguments.length;
var i__26281__auto___37168 = (0);
while(true){
if((i__26281__auto___37168 < len__26280__auto___37167)){
args__26287__auto__.push((arguments[i__26281__auto___37168]));

var G__37169 = (i__26281__auto___37168 + (1));
i__26281__auto___37168 = G__37169;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__37118__auto__,rest__37119__auto__){
var convert_case__37120__auto__ = (function (p1__37117__37121__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__37117__37121__auto__,rest__37119__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37118__auto__,convert_case__37120__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq37159){
var G__37160 = cljs.core.first.call(null,seq37159);
var seq37159__$1 = cljs.core.next.call(null,seq37159);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__37160,seq37159__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37170 = arguments.length;
var i__26281__auto___37171 = (0);
while(true){
if((i__26281__auto___37171 < len__26280__auto___37170)){
args__26287__auto__.push((arguments[i__26281__auto___37171]));

var G__37172 = (i__26281__auto___37171 + (1));
i__26281__auto___37171 = G__37172;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq37161){
var G__37162 = cljs.core.first.call(null,seq37161);
var seq37161__$1 = cljs.core.next.call(null,seq37161);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__37162,seq37161__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37173 = arguments.length;
var i__26281__auto___37174 = (0);
while(true){
if((i__26281__auto___37174 < len__26280__auto___37173)){
args__26287__auto__.push((arguments[i__26281__auto___37174]));

var G__37175 = (i__26281__auto___37174 + (1));
i__26281__auto___37174 = G__37175;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq37163){
var G__37164 = cljs.core.first.call(null,seq37163);
var seq37163__$1 = cljs.core.next.call(null,seq37163);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__37164,seq37163__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37176 = arguments.length;
var i__26281__auto___37177 = (0);
while(true){
if((i__26281__auto___37177 < len__26280__auto___37176)){
args__26287__auto__.push((arguments[i__26281__auto___37177]));

var G__37178 = (i__26281__auto___37177 + (1));
i__26281__auto___37177 = G__37178;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq37165){
var G__37166 = cljs.core.first.call(null,seq37165);
var seq37165__$1 = cljs.core.next.call(null,seq37165);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__37166,seq37165__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37187 = arguments.length;
var i__26281__auto___37188 = (0);
while(true){
if((i__26281__auto___37188 < len__26280__auto___37187)){
args__26287__auto__.push((arguments[i__26281__auto___37188]));

var G__37189 = (i__26281__auto___37188 + (1));
i__26281__auto___37188 = G__37189;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37118__auto__,rest__37119__auto__){
var convert_case__37120__auto__ = (function (p1__37117__37121__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__37117__37121__auto__,rest__37119__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37118__auto__,convert_case__37120__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq37179){
var G__37180 = cljs.core.first.call(null,seq37179);
var seq37179__$1 = cljs.core.next.call(null,seq37179);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__37180,seq37179__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37190 = arguments.length;
var i__26281__auto___37191 = (0);
while(true){
if((i__26281__auto___37191 < len__26280__auto___37190)){
args__26287__auto__.push((arguments[i__26281__auto___37191]));

var G__37192 = (i__26281__auto___37191 + (1));
i__26281__auto___37191 = G__37192;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq37181){
var G__37182 = cljs.core.first.call(null,seq37181);
var seq37181__$1 = cljs.core.next.call(null,seq37181);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__37182,seq37181__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37193 = arguments.length;
var i__26281__auto___37194 = (0);
while(true){
if((i__26281__auto___37194 < len__26280__auto___37193)){
args__26287__auto__.push((arguments[i__26281__auto___37194]));

var G__37195 = (i__26281__auto___37194 + (1));
i__26281__auto___37194 = G__37195;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq37183){
var G__37184 = cljs.core.first.call(null,seq37183);
var seq37183__$1 = cljs.core.next.call(null,seq37183);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__37184,seq37183__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37196 = arguments.length;
var i__26281__auto___37197 = (0);
while(true){
if((i__26281__auto___37197 < len__26280__auto___37196)){
args__26287__auto__.push((arguments[i__26281__auto___37197]));

var G__37198 = (i__26281__auto___37197 + (1));
i__26281__auto___37197 = G__37198;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq37185){
var G__37186 = cljs.core.first.call(null,seq37185);
var seq37185__$1 = cljs.core.next.call(null,seq37185);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__37186,seq37185__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37207 = arguments.length;
var i__26281__auto___37208 = (0);
while(true){
if((i__26281__auto___37208 < len__26280__auto___37207)){
args__26287__auto__.push((arguments[i__26281__auto___37208]));

var G__37209 = (i__26281__auto___37208 + (1));
i__26281__auto___37208 = G__37209;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__37118__auto__,rest__37119__auto__){
var convert_case__37120__auto__ = (function (p1__37117__37121__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__37117__37121__auto__,rest__37119__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37118__auto__,convert_case__37120__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq37199){
var G__37200 = cljs.core.first.call(null,seq37199);
var seq37199__$1 = cljs.core.next.call(null,seq37199);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__37200,seq37199__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37210 = arguments.length;
var i__26281__auto___37211 = (0);
while(true){
if((i__26281__auto___37211 < len__26280__auto___37210)){
args__26287__auto__.push((arguments[i__26281__auto___37211]));

var G__37212 = (i__26281__auto___37211 + (1));
i__26281__auto___37211 = G__37212;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq37201){
var G__37202 = cljs.core.first.call(null,seq37201);
var seq37201__$1 = cljs.core.next.call(null,seq37201);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__37202,seq37201__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37213 = arguments.length;
var i__26281__auto___37214 = (0);
while(true){
if((i__26281__auto___37214 < len__26280__auto___37213)){
args__26287__auto__.push((arguments[i__26281__auto___37214]));

var G__37215 = (i__26281__auto___37214 + (1));
i__26281__auto___37214 = G__37215;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq37203){
var G__37204 = cljs.core.first.call(null,seq37203);
var seq37203__$1 = cljs.core.next.call(null,seq37203);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__37204,seq37203__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37216 = arguments.length;
var i__26281__auto___37217 = (0);
while(true){
if((i__26281__auto___37217 < len__26280__auto___37216)){
args__26287__auto__.push((arguments[i__26281__auto___37217]));

var G__37218 = (i__26281__auto___37217 + (1));
i__26281__auto___37217 = G__37218;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq37205){
var G__37206 = cljs.core.first.call(null,seq37205);
var seq37205__$1 = cljs.core.next.call(null,seq37205);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__37206,seq37205__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37227 = arguments.length;
var i__26281__auto___37228 = (0);
while(true){
if((i__26281__auto___37228 < len__26280__auto___37227)){
args__26287__auto__.push((arguments[i__26281__auto___37228]));

var G__37229 = (i__26281__auto___37228 + (1));
i__26281__auto___37228 = G__37229;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__37118__auto__,rest__37119__auto__){
var convert_case__37120__auto__ = (function (p1__37117__37121__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__37117__37121__auto__,rest__37119__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37118__auto__,convert_case__37120__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq37219){
var G__37220 = cljs.core.first.call(null,seq37219);
var seq37219__$1 = cljs.core.next.call(null,seq37219);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__37220,seq37219__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37230 = arguments.length;
var i__26281__auto___37231 = (0);
while(true){
if((i__26281__auto___37231 < len__26280__auto___37230)){
args__26287__auto__.push((arguments[i__26281__auto___37231]));

var G__37232 = (i__26281__auto___37231 + (1));
i__26281__auto___37231 = G__37232;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq37221){
var G__37222 = cljs.core.first.call(null,seq37221);
var seq37221__$1 = cljs.core.next.call(null,seq37221);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__37222,seq37221__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37233 = arguments.length;
var i__26281__auto___37234 = (0);
while(true){
if((i__26281__auto___37234 < len__26280__auto___37233)){
args__26287__auto__.push((arguments[i__26281__auto___37234]));

var G__37235 = (i__26281__auto___37234 + (1));
i__26281__auto___37234 = G__37235;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq37223){
var G__37224 = cljs.core.first.call(null,seq37223);
var seq37223__$1 = cljs.core.next.call(null,seq37223);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__37224,seq37223__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37236 = arguments.length;
var i__26281__auto___37237 = (0);
while(true){
if((i__26281__auto___37237 < len__26280__auto___37236)){
args__26287__auto__.push((arguments[i__26281__auto___37237]));

var G__37238 = (i__26281__auto___37237 + (1));
i__26281__auto___37237 = G__37238;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq37225){
var G__37226 = cljs.core.first.call(null,seq37225);
var seq37225__$1 = cljs.core.next.call(null,seq37225);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__37226,seq37225__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37247 = arguments.length;
var i__26281__auto___37248 = (0);
while(true){
if((i__26281__auto___37248 < len__26280__auto___37247)){
args__26287__auto__.push((arguments[i__26281__auto___37248]));

var G__37249 = (i__26281__auto___37248 + (1));
i__26281__auto___37248 = G__37249;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37118__auto__,rest__37119__auto__){
var convert_case__37120__auto__ = (function (p1__37117__37121__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__37117__37121__auto__,rest__37119__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37118__auto__,convert_case__37120__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq37239){
var G__37240 = cljs.core.first.call(null,seq37239);
var seq37239__$1 = cljs.core.next.call(null,seq37239);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__37240,seq37239__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37250 = arguments.length;
var i__26281__auto___37251 = (0);
while(true){
if((i__26281__auto___37251 < len__26280__auto___37250)){
args__26287__auto__.push((arguments[i__26281__auto___37251]));

var G__37252 = (i__26281__auto___37251 + (1));
i__26281__auto___37251 = G__37252;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq37241){
var G__37242 = cljs.core.first.call(null,seq37241);
var seq37241__$1 = cljs.core.next.call(null,seq37241);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__37242,seq37241__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37253 = arguments.length;
var i__26281__auto___37254 = (0);
while(true){
if((i__26281__auto___37254 < len__26280__auto___37253)){
args__26287__auto__.push((arguments[i__26281__auto___37254]));

var G__37255 = (i__26281__auto___37254 + (1));
i__26281__auto___37254 = G__37255;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq37243){
var G__37244 = cljs.core.first.call(null,seq37243);
var seq37243__$1 = cljs.core.next.call(null,seq37243);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__37244,seq37243__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37256 = arguments.length;
var i__26281__auto___37257 = (0);
while(true){
if((i__26281__auto___37257 < len__26280__auto___37256)){
args__26287__auto__.push((arguments[i__26281__auto___37257]));

var G__37258 = (i__26281__auto___37257 + (1));
i__26281__auto___37257 = G__37258;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq37245){
var G__37246 = cljs.core.first.call(null,seq37245);
var seq37245__$1 = cljs.core.next.call(null,seq37245);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__37246,seq37245__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37267 = arguments.length;
var i__26281__auto___37268 = (0);
while(true){
if((i__26281__auto___37268 < len__26280__auto___37267)){
args__26287__auto__.push((arguments[i__26281__auto___37268]));

var G__37269 = (i__26281__auto___37268 + (1));
i__26281__auto___37268 = G__37269;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37118__auto__,rest__37119__auto__){
var convert_case__37120__auto__ = (function (p1__37117__37121__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__37117__37121__auto__,rest__37119__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37118__auto__,convert_case__37120__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq37259){
var G__37260 = cljs.core.first.call(null,seq37259);
var seq37259__$1 = cljs.core.next.call(null,seq37259);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__37260,seq37259__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37270 = arguments.length;
var i__26281__auto___37271 = (0);
while(true){
if((i__26281__auto___37271 < len__26280__auto___37270)){
args__26287__auto__.push((arguments[i__26281__auto___37271]));

var G__37272 = (i__26281__auto___37271 + (1));
i__26281__auto___37271 = G__37272;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq37261){
var G__37262 = cljs.core.first.call(null,seq37261);
var seq37261__$1 = cljs.core.next.call(null,seq37261);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__37262,seq37261__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37273 = arguments.length;
var i__26281__auto___37274 = (0);
while(true){
if((i__26281__auto___37274 < len__26280__auto___37273)){
args__26287__auto__.push((arguments[i__26281__auto___37274]));

var G__37275 = (i__26281__auto___37274 + (1));
i__26281__auto___37274 = G__37275;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq37263){
var G__37264 = cljs.core.first.call(null,seq37263);
var seq37263__$1 = cljs.core.next.call(null,seq37263);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__37264,seq37263__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37276 = arguments.length;
var i__26281__auto___37277 = (0);
while(true){
if((i__26281__auto___37277 < len__26280__auto___37276)){
args__26287__auto__.push((arguments[i__26281__auto___37277]));

var G__37278 = (i__26281__auto___37277 + (1));
i__26281__auto___37277 = G__37278;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq37265){
var G__37266 = cljs.core.first.call(null,seq37265);
var seq37265__$1 = cljs.core.next.call(null,seq37265);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__37266,seq37265__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37287 = arguments.length;
var i__26281__auto___37288 = (0);
while(true){
if((i__26281__auto___37288 < len__26280__auto___37287)){
args__26287__auto__.push((arguments[i__26281__auto___37288]));

var G__37289 = (i__26281__auto___37288 + (1));
i__26281__auto___37288 = G__37289;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__37118__auto__,rest__37119__auto__){
var convert_case__37120__auto__ = (function (p1__37117__37121__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__37117__37121__auto__,rest__37119__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__37118__auto__,convert_case__37120__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq37279){
var G__37280 = cljs.core.first.call(null,seq37279);
var seq37279__$1 = cljs.core.next.call(null,seq37279);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__37280,seq37279__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37290 = arguments.length;
var i__26281__auto___37291 = (0);
while(true){
if((i__26281__auto___37291 < len__26280__auto___37290)){
args__26287__auto__.push((arguments[i__26281__auto___37291]));

var G__37292 = (i__26281__auto___37291 + (1));
i__26281__auto___37291 = G__37292;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq37281){
var G__37282 = cljs.core.first.call(null,seq37281);
var seq37281__$1 = cljs.core.next.call(null,seq37281);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__37282,seq37281__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37293 = arguments.length;
var i__26281__auto___37294 = (0);
while(true){
if((i__26281__auto___37294 < len__26280__auto___37293)){
args__26287__auto__.push((arguments[i__26281__auto___37294]));

var G__37295 = (i__26281__auto___37294 + (1));
i__26281__auto___37294 = G__37295;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq37283){
var G__37284 = cljs.core.first.call(null,seq37283);
var seq37283__$1 = cljs.core.next.call(null,seq37283);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__37284,seq37283__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__26287__auto__ = [];
var len__26280__auto___37296 = arguments.length;
var i__26281__auto___37297 = (0);
while(true){
if((i__26281__auto___37297 < len__26280__auto___37296)){
args__26287__auto__.push((arguments[i__26281__auto___37297]));

var G__37298 = (i__26281__auto___37297 + (1));
i__26281__auto___37297 = G__37298;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__37123__auto__,rest__37124__auto__){
if(!((s__37123__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__37123__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__37123__auto__),rest__37124__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq37285){
var G__37286 = cljs.core.first.call(null,seq37285);
var seq37285__$1 = cljs.core.next.call(null,seq37285);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__37286,seq37285__$1);
});


//# sourceMappingURL=core.js.map?rel=1484074967032