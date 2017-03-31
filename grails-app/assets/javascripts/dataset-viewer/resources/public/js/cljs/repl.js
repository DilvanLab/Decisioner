// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32745){
var map__32770 = p__32745;
var map__32770__$1 = ((((!((map__32770 == null)))?((((map__32770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32770):map__32770);
var m = map__32770__$1;
var n = cljs.core.get.call(null,map__32770__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32772_32794 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32773_32795 = null;
var count__32774_32796 = (0);
var i__32775_32797 = (0);
while(true){
if((i__32775_32797 < count__32774_32796)){
var f_32798 = cljs.core._nth.call(null,chunk__32773_32795,i__32775_32797);
cljs.core.println.call(null,"  ",f_32798);

var G__32799 = seq__32772_32794;
var G__32800 = chunk__32773_32795;
var G__32801 = count__32774_32796;
var G__32802 = (i__32775_32797 + (1));
seq__32772_32794 = G__32799;
chunk__32773_32795 = G__32800;
count__32774_32796 = G__32801;
i__32775_32797 = G__32802;
continue;
} else {
var temp__4657__auto___32803 = cljs.core.seq.call(null,seq__32772_32794);
if(temp__4657__auto___32803){
var seq__32772_32804__$1 = temp__4657__auto___32803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32772_32804__$1)){
var c__25986__auto___32805 = cljs.core.chunk_first.call(null,seq__32772_32804__$1);
var G__32806 = cljs.core.chunk_rest.call(null,seq__32772_32804__$1);
var G__32807 = c__25986__auto___32805;
var G__32808 = cljs.core.count.call(null,c__25986__auto___32805);
var G__32809 = (0);
seq__32772_32794 = G__32806;
chunk__32773_32795 = G__32807;
count__32774_32796 = G__32808;
i__32775_32797 = G__32809;
continue;
} else {
var f_32810 = cljs.core.first.call(null,seq__32772_32804__$1);
cljs.core.println.call(null,"  ",f_32810);

var G__32811 = cljs.core.next.call(null,seq__32772_32804__$1);
var G__32812 = null;
var G__32813 = (0);
var G__32814 = (0);
seq__32772_32794 = G__32811;
chunk__32773_32795 = G__32812;
count__32774_32796 = G__32813;
i__32775_32797 = G__32814;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32815 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25172__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32815);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32815)))?cljs.core.second.call(null,arglists_32815):arglists_32815));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32776_32816 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32777_32817 = null;
var count__32778_32818 = (0);
var i__32779_32819 = (0);
while(true){
if((i__32779_32819 < count__32778_32818)){
var vec__32780_32820 = cljs.core._nth.call(null,chunk__32777_32817,i__32779_32819);
var name_32821 = cljs.core.nth.call(null,vec__32780_32820,(0),null);
var map__32783_32822 = cljs.core.nth.call(null,vec__32780_32820,(1),null);
var map__32783_32823__$1 = ((((!((map__32783_32822 == null)))?((((map__32783_32822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32783_32822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32783_32822):map__32783_32822);
var doc_32824 = cljs.core.get.call(null,map__32783_32823__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32825 = cljs.core.get.call(null,map__32783_32823__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32821);

cljs.core.println.call(null," ",arglists_32825);

if(cljs.core.truth_(doc_32824)){
cljs.core.println.call(null," ",doc_32824);
} else {
}

var G__32826 = seq__32776_32816;
var G__32827 = chunk__32777_32817;
var G__32828 = count__32778_32818;
var G__32829 = (i__32779_32819 + (1));
seq__32776_32816 = G__32826;
chunk__32777_32817 = G__32827;
count__32778_32818 = G__32828;
i__32779_32819 = G__32829;
continue;
} else {
var temp__4657__auto___32830 = cljs.core.seq.call(null,seq__32776_32816);
if(temp__4657__auto___32830){
var seq__32776_32831__$1 = temp__4657__auto___32830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32776_32831__$1)){
var c__25986__auto___32832 = cljs.core.chunk_first.call(null,seq__32776_32831__$1);
var G__32833 = cljs.core.chunk_rest.call(null,seq__32776_32831__$1);
var G__32834 = c__25986__auto___32832;
var G__32835 = cljs.core.count.call(null,c__25986__auto___32832);
var G__32836 = (0);
seq__32776_32816 = G__32833;
chunk__32777_32817 = G__32834;
count__32778_32818 = G__32835;
i__32779_32819 = G__32836;
continue;
} else {
var vec__32785_32837 = cljs.core.first.call(null,seq__32776_32831__$1);
var name_32838 = cljs.core.nth.call(null,vec__32785_32837,(0),null);
var map__32788_32839 = cljs.core.nth.call(null,vec__32785_32837,(1),null);
var map__32788_32840__$1 = ((((!((map__32788_32839 == null)))?((((map__32788_32839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32788_32839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32788_32839):map__32788_32839);
var doc_32841 = cljs.core.get.call(null,map__32788_32840__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32842 = cljs.core.get.call(null,map__32788_32840__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32838);

cljs.core.println.call(null," ",arglists_32842);

if(cljs.core.truth_(doc_32841)){
cljs.core.println.call(null," ",doc_32841);
} else {
}

var G__32843 = cljs.core.next.call(null,seq__32776_32831__$1);
var G__32844 = null;
var G__32845 = (0);
var G__32846 = (0);
seq__32776_32816 = G__32843;
chunk__32777_32817 = G__32844;
count__32778_32818 = G__32845;
i__32779_32819 = G__32846;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32790 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32791 = null;
var count__32792 = (0);
var i__32793 = (0);
while(true){
if((i__32793 < count__32792)){
var role = cljs.core._nth.call(null,chunk__32791,i__32793);
var temp__4657__auto___32847__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32847__$1)){
var spec_32848 = temp__4657__auto___32847__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32848));
} else {
}

var G__32849 = seq__32790;
var G__32850 = chunk__32791;
var G__32851 = count__32792;
var G__32852 = (i__32793 + (1));
seq__32790 = G__32849;
chunk__32791 = G__32850;
count__32792 = G__32851;
i__32793 = G__32852;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32790);
if(temp__4657__auto____$1){
var seq__32790__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32790__$1)){
var c__25986__auto__ = cljs.core.chunk_first.call(null,seq__32790__$1);
var G__32853 = cljs.core.chunk_rest.call(null,seq__32790__$1);
var G__32854 = c__25986__auto__;
var G__32855 = cljs.core.count.call(null,c__25986__auto__);
var G__32856 = (0);
seq__32790 = G__32853;
chunk__32791 = G__32854;
count__32792 = G__32855;
i__32793 = G__32856;
continue;
} else {
var role = cljs.core.first.call(null,seq__32790__$1);
var temp__4657__auto___32857__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32857__$2)){
var spec_32858 = temp__4657__auto___32857__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32858));
} else {
}

var G__32859 = cljs.core.next.call(null,seq__32790__$1);
var G__32860 = null;
var G__32861 = (0);
var G__32862 = (0);
seq__32790 = G__32859;
chunk__32791 = G__32860;
count__32792 = G__32861;
i__32793 = G__32862;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1484074948349