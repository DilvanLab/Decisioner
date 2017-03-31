// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25172__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25172__auto__){
return or__25172__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25172__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30360_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30360_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30365 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30366 = null;
var count__30367 = (0);
var i__30368 = (0);
while(true){
if((i__30368 < count__30367)){
var n = cljs.core._nth.call(null,chunk__30366,i__30368);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30369 = seq__30365;
var G__30370 = chunk__30366;
var G__30371 = count__30367;
var G__30372 = (i__30368 + (1));
seq__30365 = G__30369;
chunk__30366 = G__30370;
count__30367 = G__30371;
i__30368 = G__30372;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30365);
if(temp__4657__auto__){
var seq__30365__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30365__$1)){
var c__25986__auto__ = cljs.core.chunk_first.call(null,seq__30365__$1);
var G__30373 = cljs.core.chunk_rest.call(null,seq__30365__$1);
var G__30374 = c__25986__auto__;
var G__30375 = cljs.core.count.call(null,c__25986__auto__);
var G__30376 = (0);
seq__30365 = G__30373;
chunk__30366 = G__30374;
count__30367 = G__30375;
i__30368 = G__30376;
continue;
} else {
var n = cljs.core.first.call(null,seq__30365__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30377 = cljs.core.next.call(null,seq__30365__$1);
var G__30378 = null;
var G__30379 = (0);
var G__30380 = (0);
seq__30365 = G__30377;
chunk__30366 = G__30378;
count__30367 = G__30379;
i__30368 = G__30380;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30431_30442 = cljs.core.seq.call(null,deps);
var chunk__30432_30443 = null;
var count__30433_30444 = (0);
var i__30434_30445 = (0);
while(true){
if((i__30434_30445 < count__30433_30444)){
var dep_30446 = cljs.core._nth.call(null,chunk__30432_30443,i__30434_30445);
topo_sort_helper_STAR_.call(null,dep_30446,(depth + (1)),state);

var G__30447 = seq__30431_30442;
var G__30448 = chunk__30432_30443;
var G__30449 = count__30433_30444;
var G__30450 = (i__30434_30445 + (1));
seq__30431_30442 = G__30447;
chunk__30432_30443 = G__30448;
count__30433_30444 = G__30449;
i__30434_30445 = G__30450;
continue;
} else {
var temp__4657__auto___30451 = cljs.core.seq.call(null,seq__30431_30442);
if(temp__4657__auto___30451){
var seq__30431_30452__$1 = temp__4657__auto___30451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30431_30452__$1)){
var c__25986__auto___30453 = cljs.core.chunk_first.call(null,seq__30431_30452__$1);
var G__30454 = cljs.core.chunk_rest.call(null,seq__30431_30452__$1);
var G__30455 = c__25986__auto___30453;
var G__30456 = cljs.core.count.call(null,c__25986__auto___30453);
var G__30457 = (0);
seq__30431_30442 = G__30454;
chunk__30432_30443 = G__30455;
count__30433_30444 = G__30456;
i__30434_30445 = G__30457;
continue;
} else {
var dep_30458 = cljs.core.first.call(null,seq__30431_30452__$1);
topo_sort_helper_STAR_.call(null,dep_30458,(depth + (1)),state);

var G__30459 = cljs.core.next.call(null,seq__30431_30452__$1);
var G__30460 = null;
var G__30461 = (0);
var G__30462 = (0);
seq__30431_30442 = G__30459;
chunk__30432_30443 = G__30460;
count__30433_30444 = G__30461;
i__30434_30445 = G__30462;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30435){
var vec__30439 = p__30435;
var seq__30440 = cljs.core.seq.call(null,vec__30439);
var first__30441 = cljs.core.first.call(null,seq__30440);
var seq__30440__$1 = cljs.core.next.call(null,seq__30440);
var x = first__30441;
var xs = seq__30440__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30439,seq__30440,first__30441,seq__30440__$1,x,xs,get_deps__$1){
return (function (p1__30381_SHARP_){
return clojure.set.difference.call(null,p1__30381_SHARP_,x);
});})(vec__30439,seq__30440,first__30441,seq__30440__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30475 = cljs.core.seq.call(null,provides);
var chunk__30476 = null;
var count__30477 = (0);
var i__30478 = (0);
while(true){
if((i__30478 < count__30477)){
var prov = cljs.core._nth.call(null,chunk__30476,i__30478);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30479_30487 = cljs.core.seq.call(null,requires);
var chunk__30480_30488 = null;
var count__30481_30489 = (0);
var i__30482_30490 = (0);
while(true){
if((i__30482_30490 < count__30481_30489)){
var req_30491 = cljs.core._nth.call(null,chunk__30480_30488,i__30482_30490);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30491,prov);

var G__30492 = seq__30479_30487;
var G__30493 = chunk__30480_30488;
var G__30494 = count__30481_30489;
var G__30495 = (i__30482_30490 + (1));
seq__30479_30487 = G__30492;
chunk__30480_30488 = G__30493;
count__30481_30489 = G__30494;
i__30482_30490 = G__30495;
continue;
} else {
var temp__4657__auto___30496 = cljs.core.seq.call(null,seq__30479_30487);
if(temp__4657__auto___30496){
var seq__30479_30497__$1 = temp__4657__auto___30496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30479_30497__$1)){
var c__25986__auto___30498 = cljs.core.chunk_first.call(null,seq__30479_30497__$1);
var G__30499 = cljs.core.chunk_rest.call(null,seq__30479_30497__$1);
var G__30500 = c__25986__auto___30498;
var G__30501 = cljs.core.count.call(null,c__25986__auto___30498);
var G__30502 = (0);
seq__30479_30487 = G__30499;
chunk__30480_30488 = G__30500;
count__30481_30489 = G__30501;
i__30482_30490 = G__30502;
continue;
} else {
var req_30503 = cljs.core.first.call(null,seq__30479_30497__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30503,prov);

var G__30504 = cljs.core.next.call(null,seq__30479_30497__$1);
var G__30505 = null;
var G__30506 = (0);
var G__30507 = (0);
seq__30479_30487 = G__30504;
chunk__30480_30488 = G__30505;
count__30481_30489 = G__30506;
i__30482_30490 = G__30507;
continue;
}
} else {
}
}
break;
}

var G__30508 = seq__30475;
var G__30509 = chunk__30476;
var G__30510 = count__30477;
var G__30511 = (i__30478 + (1));
seq__30475 = G__30508;
chunk__30476 = G__30509;
count__30477 = G__30510;
i__30478 = G__30511;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30475);
if(temp__4657__auto__){
var seq__30475__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30475__$1)){
var c__25986__auto__ = cljs.core.chunk_first.call(null,seq__30475__$1);
var G__30512 = cljs.core.chunk_rest.call(null,seq__30475__$1);
var G__30513 = c__25986__auto__;
var G__30514 = cljs.core.count.call(null,c__25986__auto__);
var G__30515 = (0);
seq__30475 = G__30512;
chunk__30476 = G__30513;
count__30477 = G__30514;
i__30478 = G__30515;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30475__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30483_30516 = cljs.core.seq.call(null,requires);
var chunk__30484_30517 = null;
var count__30485_30518 = (0);
var i__30486_30519 = (0);
while(true){
if((i__30486_30519 < count__30485_30518)){
var req_30520 = cljs.core._nth.call(null,chunk__30484_30517,i__30486_30519);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30520,prov);

var G__30521 = seq__30483_30516;
var G__30522 = chunk__30484_30517;
var G__30523 = count__30485_30518;
var G__30524 = (i__30486_30519 + (1));
seq__30483_30516 = G__30521;
chunk__30484_30517 = G__30522;
count__30485_30518 = G__30523;
i__30486_30519 = G__30524;
continue;
} else {
var temp__4657__auto___30525__$1 = cljs.core.seq.call(null,seq__30483_30516);
if(temp__4657__auto___30525__$1){
var seq__30483_30526__$1 = temp__4657__auto___30525__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30483_30526__$1)){
var c__25986__auto___30527 = cljs.core.chunk_first.call(null,seq__30483_30526__$1);
var G__30528 = cljs.core.chunk_rest.call(null,seq__30483_30526__$1);
var G__30529 = c__25986__auto___30527;
var G__30530 = cljs.core.count.call(null,c__25986__auto___30527);
var G__30531 = (0);
seq__30483_30516 = G__30528;
chunk__30484_30517 = G__30529;
count__30485_30518 = G__30530;
i__30486_30519 = G__30531;
continue;
} else {
var req_30532 = cljs.core.first.call(null,seq__30483_30526__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30532,prov);

var G__30533 = cljs.core.next.call(null,seq__30483_30526__$1);
var G__30534 = null;
var G__30535 = (0);
var G__30536 = (0);
seq__30483_30516 = G__30533;
chunk__30484_30517 = G__30534;
count__30485_30518 = G__30535;
i__30486_30519 = G__30536;
continue;
}
} else {
}
}
break;
}

var G__30537 = cljs.core.next.call(null,seq__30475__$1);
var G__30538 = null;
var G__30539 = (0);
var G__30540 = (0);
seq__30475 = G__30537;
chunk__30476 = G__30538;
count__30477 = G__30539;
i__30478 = G__30540;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30545_30549 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30546_30550 = null;
var count__30547_30551 = (0);
var i__30548_30552 = (0);
while(true){
if((i__30548_30552 < count__30547_30551)){
var ns_30553 = cljs.core._nth.call(null,chunk__30546_30550,i__30548_30552);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30553);

var G__30554 = seq__30545_30549;
var G__30555 = chunk__30546_30550;
var G__30556 = count__30547_30551;
var G__30557 = (i__30548_30552 + (1));
seq__30545_30549 = G__30554;
chunk__30546_30550 = G__30555;
count__30547_30551 = G__30556;
i__30548_30552 = G__30557;
continue;
} else {
var temp__4657__auto___30558 = cljs.core.seq.call(null,seq__30545_30549);
if(temp__4657__auto___30558){
var seq__30545_30559__$1 = temp__4657__auto___30558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30545_30559__$1)){
var c__25986__auto___30560 = cljs.core.chunk_first.call(null,seq__30545_30559__$1);
var G__30561 = cljs.core.chunk_rest.call(null,seq__30545_30559__$1);
var G__30562 = c__25986__auto___30560;
var G__30563 = cljs.core.count.call(null,c__25986__auto___30560);
var G__30564 = (0);
seq__30545_30549 = G__30561;
chunk__30546_30550 = G__30562;
count__30547_30551 = G__30563;
i__30548_30552 = G__30564;
continue;
} else {
var ns_30565 = cljs.core.first.call(null,seq__30545_30559__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30565);

var G__30566 = cljs.core.next.call(null,seq__30545_30559__$1);
var G__30567 = null;
var G__30568 = (0);
var G__30569 = (0);
seq__30545_30549 = G__30566;
chunk__30546_30550 = G__30567;
count__30547_30551 = G__30568;
i__30548_30552 = G__30569;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25172__auto__ = goog.require__;
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30570__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30571__i = 0, G__30571__a = new Array(arguments.length -  0);
while (G__30571__i < G__30571__a.length) {G__30571__a[G__30571__i] = arguments[G__30571__i + 0]; ++G__30571__i;}
  args = new cljs.core.IndexedSeq(G__30571__a,0);
} 
return G__30570__delegate.call(this,args);};
G__30570.cljs$lang$maxFixedArity = 0;
G__30570.cljs$lang$applyTo = (function (arglist__30572){
var args = cljs.core.seq(arglist__30572);
return G__30570__delegate(args);
});
G__30570.cljs$core$IFn$_invoke$arity$variadic = G__30570__delegate;
return G__30570;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30574 = cljs.core._EQ_;
var expr__30575 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30574.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30575))){
var path_parts = ((function (pred__30574,expr__30575){
return (function (p1__30573_SHARP_){
return clojure.string.split.call(null,p1__30573_SHARP_,/[\/\\]/);
});})(pred__30574,expr__30575))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30574,expr__30575){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30577){if((e30577 instanceof Error)){
var e = e30577;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30577;

}
}})());
});
;})(path_parts,sep,root,pred__30574,expr__30575))
} else {
if(cljs.core.truth_(pred__30574.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30575))){
return ((function (pred__30574,expr__30575){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30574,expr__30575){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30574,expr__30575))
);

return deferred.addErrback(((function (deferred,pred__30574,expr__30575){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30574,expr__30575))
);
});
;})(pred__30574,expr__30575))
} else {
return ((function (pred__30574,expr__30575){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30574,expr__30575))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30578,callback){
var map__30581 = p__30578;
var map__30581__$1 = ((((!((map__30581 == null)))?((((map__30581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var file_msg = map__30581__$1;
var request_url = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30581,map__30581__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30581,map__30581__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27377__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto__){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto__){
return (function (state_30605){
var state_val_30606 = (state_30605[(1)]);
if((state_val_30606 === (7))){
var inst_30601 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
var statearr_30607_30627 = state_30605__$1;
(statearr_30607_30627[(2)] = inst_30601);

(statearr_30607_30627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (1))){
var state_30605__$1 = state_30605;
var statearr_30608_30628 = state_30605__$1;
(statearr_30608_30628[(2)] = null);

(statearr_30608_30628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (4))){
var inst_30585 = (state_30605[(7)]);
var inst_30585__$1 = (state_30605[(2)]);
var state_30605__$1 = (function (){var statearr_30609 = state_30605;
(statearr_30609[(7)] = inst_30585__$1);

return statearr_30609;
})();
if(cljs.core.truth_(inst_30585__$1)){
var statearr_30610_30629 = state_30605__$1;
(statearr_30610_30629[(1)] = (5));

} else {
var statearr_30611_30630 = state_30605__$1;
(statearr_30611_30630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (6))){
var state_30605__$1 = state_30605;
var statearr_30612_30631 = state_30605__$1;
(statearr_30612_30631[(2)] = null);

(statearr_30612_30631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (3))){
var inst_30603 = (state_30605[(2)]);
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30605__$1,inst_30603);
} else {
if((state_val_30606 === (2))){
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30605__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30606 === (11))){
var inst_30597 = (state_30605[(2)]);
var state_30605__$1 = (function (){var statearr_30613 = state_30605;
(statearr_30613[(8)] = inst_30597);

return statearr_30613;
})();
var statearr_30614_30632 = state_30605__$1;
(statearr_30614_30632[(2)] = null);

(statearr_30614_30632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (9))){
var inst_30591 = (state_30605[(9)]);
var inst_30589 = (state_30605[(10)]);
var inst_30593 = inst_30591.call(null,inst_30589);
var state_30605__$1 = state_30605;
var statearr_30615_30633 = state_30605__$1;
(statearr_30615_30633[(2)] = inst_30593);

(statearr_30615_30633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (5))){
var inst_30585 = (state_30605[(7)]);
var inst_30587 = figwheel.client.file_reloading.blocking_load.call(null,inst_30585);
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30605__$1,(8),inst_30587);
} else {
if((state_val_30606 === (10))){
var inst_30589 = (state_30605[(10)]);
var inst_30595 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30589);
var state_30605__$1 = state_30605;
var statearr_30616_30634 = state_30605__$1;
(statearr_30616_30634[(2)] = inst_30595);

(statearr_30616_30634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30606 === (8))){
var inst_30591 = (state_30605[(9)]);
var inst_30585 = (state_30605[(7)]);
var inst_30589 = (state_30605[(2)]);
var inst_30590 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30591__$1 = cljs.core.get.call(null,inst_30590,inst_30585);
var state_30605__$1 = (function (){var statearr_30617 = state_30605;
(statearr_30617[(9)] = inst_30591__$1);

(statearr_30617[(10)] = inst_30589);

return statearr_30617;
})();
if(cljs.core.truth_(inst_30591__$1)){
var statearr_30618_30635 = state_30605__$1;
(statearr_30618_30635[(1)] = (9));

} else {
var statearr_30619_30636 = state_30605__$1;
(statearr_30619_30636[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27377__auto__))
;
return ((function (switch__27265__auto__,c__27377__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27266__auto__ = null;
var figwheel$client$file_reloading$state_machine__27266__auto____0 = (function (){
var statearr_30623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30623[(0)] = figwheel$client$file_reloading$state_machine__27266__auto__);

(statearr_30623[(1)] = (1));

return statearr_30623;
});
var figwheel$client$file_reloading$state_machine__27266__auto____1 = (function (state_30605){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_30605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e30624){if((e30624 instanceof Object)){
var ex__27269__auto__ = e30624;
var statearr_30625_30637 = state_30605;
(statearr_30625_30637[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30638 = state_30605;
state_30605 = G__30638;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27266__auto__ = function(state_30605){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27266__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27266__auto____1.call(this,state_30605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27266__auto____0;
figwheel$client$file_reloading$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27266__auto____1;
return figwheel$client$file_reloading$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto__))
})();
var state__27379__auto__ = (function (){var statearr_30626 = f__27378__auto__.call(null);
(statearr_30626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto__);

return statearr_30626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto__))
);

return c__27377__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30639,callback){
var map__30642 = p__30639;
var map__30642__$1 = ((((!((map__30642 == null)))?((((map__30642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30642):map__30642);
var file_msg = map__30642__$1;
var namespace = cljs.core.get.call(null,map__30642__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30642,map__30642__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30642,map__30642__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30644){
var map__30647 = p__30644;
var map__30647__$1 = ((((!((map__30647 == null)))?((((map__30647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30647):map__30647);
var file_msg = map__30647__$1;
var namespace = cljs.core.get.call(null,map__30647__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25160__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25160__auto__){
var or__25172__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
var or__25172__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25172__auto____$1)){
return or__25172__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25160__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30649,callback){
var map__30652 = p__30649;
var map__30652__$1 = ((((!((map__30652 == null)))?((((map__30652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30652):map__30652);
var file_msg = map__30652__$1;
var request_url = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27377__auto___30756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___30756,out){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___30756,out){
return (function (state_30738){
var state_val_30739 = (state_30738[(1)]);
if((state_val_30739 === (1))){
var inst_30712 = cljs.core.seq.call(null,files);
var inst_30713 = cljs.core.first.call(null,inst_30712);
var inst_30714 = cljs.core.next.call(null,inst_30712);
var inst_30715 = files;
var state_30738__$1 = (function (){var statearr_30740 = state_30738;
(statearr_30740[(7)] = inst_30715);

(statearr_30740[(8)] = inst_30714);

(statearr_30740[(9)] = inst_30713);

return statearr_30740;
})();
var statearr_30741_30757 = state_30738__$1;
(statearr_30741_30757[(2)] = null);

(statearr_30741_30757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (2))){
var inst_30715 = (state_30738[(7)]);
var inst_30721 = (state_30738[(10)]);
var inst_30720 = cljs.core.seq.call(null,inst_30715);
var inst_30721__$1 = cljs.core.first.call(null,inst_30720);
var inst_30722 = cljs.core.next.call(null,inst_30720);
var inst_30723 = (inst_30721__$1 == null);
var inst_30724 = cljs.core.not.call(null,inst_30723);
var state_30738__$1 = (function (){var statearr_30742 = state_30738;
(statearr_30742[(11)] = inst_30722);

(statearr_30742[(10)] = inst_30721__$1);

return statearr_30742;
})();
if(inst_30724){
var statearr_30743_30758 = state_30738__$1;
(statearr_30743_30758[(1)] = (4));

} else {
var statearr_30744_30759 = state_30738__$1;
(statearr_30744_30759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (3))){
var inst_30736 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30738__$1,inst_30736);
} else {
if((state_val_30739 === (4))){
var inst_30721 = (state_30738[(10)]);
var inst_30726 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30721);
var state_30738__$1 = state_30738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30738__$1,(7),inst_30726);
} else {
if((state_val_30739 === (5))){
var inst_30732 = cljs.core.async.close_BANG_.call(null,out);
var state_30738__$1 = state_30738;
var statearr_30745_30760 = state_30738__$1;
(statearr_30745_30760[(2)] = inst_30732);

(statearr_30745_30760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (6))){
var inst_30734 = (state_30738[(2)]);
var state_30738__$1 = state_30738;
var statearr_30746_30761 = state_30738__$1;
(statearr_30746_30761[(2)] = inst_30734);

(statearr_30746_30761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30739 === (7))){
var inst_30722 = (state_30738[(11)]);
var inst_30728 = (state_30738[(2)]);
var inst_30729 = cljs.core.async.put_BANG_.call(null,out,inst_30728);
var inst_30715 = inst_30722;
var state_30738__$1 = (function (){var statearr_30747 = state_30738;
(statearr_30747[(7)] = inst_30715);

(statearr_30747[(12)] = inst_30729);

return statearr_30747;
})();
var statearr_30748_30762 = state_30738__$1;
(statearr_30748_30762[(2)] = null);

(statearr_30748_30762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27377__auto___30756,out))
;
return ((function (switch__27265__auto__,c__27377__auto___30756,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto____0 = (function (){
var statearr_30752 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30752[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto__);

(statearr_30752[(1)] = (1));

return statearr_30752;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto____1 = (function (state_30738){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_30738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e30753){if((e30753 instanceof Object)){
var ex__27269__auto__ = e30753;
var statearr_30754_30763 = state_30738;
(statearr_30754_30763[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30764 = state_30738;
state_30738 = G__30764;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto__ = function(state_30738){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto____1.call(this,state_30738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___30756,out))
})();
var state__27379__auto__ = (function (){var statearr_30755 = f__27378__auto__.call(null);
(statearr_30755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___30756);

return statearr_30755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___30756,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30765,opts){
var map__30769 = p__30765;
var map__30769__$1 = ((((!((map__30769 == null)))?((((map__30769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769):map__30769);
var eval_body = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25160__auto__ = eval_body;
if(cljs.core.truth_(and__25160__auto__)){
return typeof eval_body === 'string';
} else {
return and__25160__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30771){var e = e30771;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30772_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30772_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30781){
var vec__30782 = p__30781;
var k = cljs.core.nth.call(null,vec__30782,(0),null);
var v = cljs.core.nth.call(null,vec__30782,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30785){
var vec__30786 = p__30785;
var k = cljs.core.nth.call(null,vec__30786,(0),null);
var v = cljs.core.nth.call(null,vec__30786,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30792,p__30793){
var map__31041 = p__30792;
var map__31041__$1 = ((((!((map__31041 == null)))?((((map__31041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31041):map__31041);
var opts = map__31041__$1;
var before_jsload = cljs.core.get.call(null,map__31041__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31041__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31041__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31042 = p__30793;
var map__31042__$1 = ((((!((map__31042 == null)))?((((map__31042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31042):map__31042);
var msg = map__31042__$1;
var files = cljs.core.get.call(null,map__31042__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31042__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31042__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27377__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31196){
var state_val_31197 = (state_31196[(1)]);
if((state_val_31197 === (7))){
var inst_31058 = (state_31196[(7)]);
var inst_31059 = (state_31196[(8)]);
var inst_31056 = (state_31196[(9)]);
var inst_31057 = (state_31196[(10)]);
var inst_31064 = cljs.core._nth.call(null,inst_31057,inst_31059);
var inst_31065 = figwheel.client.file_reloading.eval_body.call(null,inst_31064,opts);
var inst_31066 = (inst_31059 + (1));
var tmp31198 = inst_31058;
var tmp31199 = inst_31056;
var tmp31200 = inst_31057;
var inst_31056__$1 = tmp31199;
var inst_31057__$1 = tmp31200;
var inst_31058__$1 = tmp31198;
var inst_31059__$1 = inst_31066;
var state_31196__$1 = (function (){var statearr_31201 = state_31196;
(statearr_31201[(7)] = inst_31058__$1);

(statearr_31201[(8)] = inst_31059__$1);

(statearr_31201[(9)] = inst_31056__$1);

(statearr_31201[(10)] = inst_31057__$1);

(statearr_31201[(11)] = inst_31065);

return statearr_31201;
})();
var statearr_31202_31288 = state_31196__$1;
(statearr_31202_31288[(2)] = null);

(statearr_31202_31288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (20))){
var inst_31099 = (state_31196[(12)]);
var inst_31107 = figwheel.client.file_reloading.sort_files.call(null,inst_31099);
var state_31196__$1 = state_31196;
var statearr_31203_31289 = state_31196__$1;
(statearr_31203_31289[(2)] = inst_31107);

(statearr_31203_31289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (27))){
var state_31196__$1 = state_31196;
var statearr_31204_31290 = state_31196__$1;
(statearr_31204_31290[(2)] = null);

(statearr_31204_31290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (1))){
var inst_31048 = (state_31196[(13)]);
var inst_31045 = before_jsload.call(null,files);
var inst_31046 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31047 = (function (){return ((function (inst_31048,inst_31045,inst_31046,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30789_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30789_SHARP_);
});
;})(inst_31048,inst_31045,inst_31046,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31048__$1 = cljs.core.filter.call(null,inst_31047,files);
var inst_31049 = cljs.core.not_empty.call(null,inst_31048__$1);
var state_31196__$1 = (function (){var statearr_31205 = state_31196;
(statearr_31205[(14)] = inst_31046);

(statearr_31205[(13)] = inst_31048__$1);

(statearr_31205[(15)] = inst_31045);

return statearr_31205;
})();
if(cljs.core.truth_(inst_31049)){
var statearr_31206_31291 = state_31196__$1;
(statearr_31206_31291[(1)] = (2));

} else {
var statearr_31207_31292 = state_31196__$1;
(statearr_31207_31292[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (24))){
var state_31196__$1 = state_31196;
var statearr_31208_31293 = state_31196__$1;
(statearr_31208_31293[(2)] = null);

(statearr_31208_31293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (39))){
var inst_31149 = (state_31196[(16)]);
var state_31196__$1 = state_31196;
var statearr_31209_31294 = state_31196__$1;
(statearr_31209_31294[(2)] = inst_31149);

(statearr_31209_31294[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (46))){
var inst_31191 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
var statearr_31210_31295 = state_31196__$1;
(statearr_31210_31295[(2)] = inst_31191);

(statearr_31210_31295[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (4))){
var inst_31093 = (state_31196[(2)]);
var inst_31094 = cljs.core.List.EMPTY;
var inst_31095 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31094);
var inst_31096 = (function (){return ((function (inst_31093,inst_31094,inst_31095,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30790_SHARP_){
var and__25160__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30790_SHARP_);
if(cljs.core.truth_(and__25160__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30790_SHARP_));
} else {
return and__25160__auto__;
}
});
;})(inst_31093,inst_31094,inst_31095,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31097 = cljs.core.filter.call(null,inst_31096,files);
var inst_31098 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31099 = cljs.core.concat.call(null,inst_31097,inst_31098);
var state_31196__$1 = (function (){var statearr_31211 = state_31196;
(statearr_31211[(17)] = inst_31093);

(statearr_31211[(18)] = inst_31095);

(statearr_31211[(12)] = inst_31099);

return statearr_31211;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31212_31296 = state_31196__$1;
(statearr_31212_31296[(1)] = (16));

} else {
var statearr_31213_31297 = state_31196__$1;
(statearr_31213_31297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (15))){
var inst_31083 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
var statearr_31214_31298 = state_31196__$1;
(statearr_31214_31298[(2)] = inst_31083);

(statearr_31214_31298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (21))){
var inst_31109 = (state_31196[(19)]);
var inst_31109__$1 = (state_31196[(2)]);
var inst_31110 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31109__$1);
var state_31196__$1 = (function (){var statearr_31215 = state_31196;
(statearr_31215[(19)] = inst_31109__$1);

return statearr_31215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31196__$1,(22),inst_31110);
} else {
if((state_val_31197 === (31))){
var inst_31194 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31196__$1,inst_31194);
} else {
if((state_val_31197 === (32))){
var inst_31149 = (state_31196[(16)]);
var inst_31154 = inst_31149.cljs$lang$protocol_mask$partition0$;
var inst_31155 = (inst_31154 & (64));
var inst_31156 = inst_31149.cljs$core$ISeq$;
var inst_31157 = (cljs.core.PROTOCOL_SENTINEL === inst_31156);
var inst_31158 = (inst_31155) || (inst_31157);
var state_31196__$1 = state_31196;
if(cljs.core.truth_(inst_31158)){
var statearr_31216_31299 = state_31196__$1;
(statearr_31216_31299[(1)] = (35));

} else {
var statearr_31217_31300 = state_31196__$1;
(statearr_31217_31300[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (40))){
var inst_31171 = (state_31196[(20)]);
var inst_31170 = (state_31196[(2)]);
var inst_31171__$1 = cljs.core.get.call(null,inst_31170,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31172 = cljs.core.get.call(null,inst_31170,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31173 = cljs.core.not_empty.call(null,inst_31171__$1);
var state_31196__$1 = (function (){var statearr_31218 = state_31196;
(statearr_31218[(20)] = inst_31171__$1);

(statearr_31218[(21)] = inst_31172);

return statearr_31218;
})();
if(cljs.core.truth_(inst_31173)){
var statearr_31219_31301 = state_31196__$1;
(statearr_31219_31301[(1)] = (41));

} else {
var statearr_31220_31302 = state_31196__$1;
(statearr_31220_31302[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (33))){
var state_31196__$1 = state_31196;
var statearr_31221_31303 = state_31196__$1;
(statearr_31221_31303[(2)] = false);

(statearr_31221_31303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (13))){
var inst_31069 = (state_31196[(22)]);
var inst_31073 = cljs.core.chunk_first.call(null,inst_31069);
var inst_31074 = cljs.core.chunk_rest.call(null,inst_31069);
var inst_31075 = cljs.core.count.call(null,inst_31073);
var inst_31056 = inst_31074;
var inst_31057 = inst_31073;
var inst_31058 = inst_31075;
var inst_31059 = (0);
var state_31196__$1 = (function (){var statearr_31222 = state_31196;
(statearr_31222[(7)] = inst_31058);

(statearr_31222[(8)] = inst_31059);

(statearr_31222[(9)] = inst_31056);

(statearr_31222[(10)] = inst_31057);

return statearr_31222;
})();
var statearr_31223_31304 = state_31196__$1;
(statearr_31223_31304[(2)] = null);

(statearr_31223_31304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (22))){
var inst_31109 = (state_31196[(19)]);
var inst_31112 = (state_31196[(23)]);
var inst_31117 = (state_31196[(24)]);
var inst_31113 = (state_31196[(25)]);
var inst_31112__$1 = (state_31196[(2)]);
var inst_31113__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31112__$1);
var inst_31114 = (function (){var all_files = inst_31109;
var res_SINGLEQUOTE_ = inst_31112__$1;
var res = inst_31113__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31109,inst_31112,inst_31117,inst_31113,inst_31112__$1,inst_31113__$1,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30791_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30791_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31109,inst_31112,inst_31117,inst_31113,inst_31112__$1,inst_31113__$1,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31115 = cljs.core.filter.call(null,inst_31114,inst_31112__$1);
var inst_31116 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31117__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31116);
var inst_31118 = cljs.core.not_empty.call(null,inst_31117__$1);
var state_31196__$1 = (function (){var statearr_31224 = state_31196;
(statearr_31224[(26)] = inst_31115);

(statearr_31224[(23)] = inst_31112__$1);

(statearr_31224[(24)] = inst_31117__$1);

(statearr_31224[(25)] = inst_31113__$1);

return statearr_31224;
})();
if(cljs.core.truth_(inst_31118)){
var statearr_31225_31305 = state_31196__$1;
(statearr_31225_31305[(1)] = (23));

} else {
var statearr_31226_31306 = state_31196__$1;
(statearr_31226_31306[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (36))){
var state_31196__$1 = state_31196;
var statearr_31227_31307 = state_31196__$1;
(statearr_31227_31307[(2)] = false);

(statearr_31227_31307[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (41))){
var inst_31171 = (state_31196[(20)]);
var inst_31175 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31176 = cljs.core.map.call(null,inst_31175,inst_31171);
var inst_31177 = cljs.core.pr_str.call(null,inst_31176);
var inst_31178 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31177)].join('');
var inst_31179 = figwheel.client.utils.log.call(null,inst_31178);
var state_31196__$1 = state_31196;
var statearr_31228_31308 = state_31196__$1;
(statearr_31228_31308[(2)] = inst_31179);

(statearr_31228_31308[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (43))){
var inst_31172 = (state_31196[(21)]);
var inst_31182 = (state_31196[(2)]);
var inst_31183 = cljs.core.not_empty.call(null,inst_31172);
var state_31196__$1 = (function (){var statearr_31229 = state_31196;
(statearr_31229[(27)] = inst_31182);

return statearr_31229;
})();
if(cljs.core.truth_(inst_31183)){
var statearr_31230_31309 = state_31196__$1;
(statearr_31230_31309[(1)] = (44));

} else {
var statearr_31231_31310 = state_31196__$1;
(statearr_31231_31310[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (29))){
var inst_31115 = (state_31196[(26)]);
var inst_31109 = (state_31196[(19)]);
var inst_31112 = (state_31196[(23)]);
var inst_31117 = (state_31196[(24)]);
var inst_31149 = (state_31196[(16)]);
var inst_31113 = (state_31196[(25)]);
var inst_31145 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31148 = (function (){var all_files = inst_31109;
var res_SINGLEQUOTE_ = inst_31112;
var res = inst_31113;
var files_not_loaded = inst_31115;
var dependencies_that_loaded = inst_31117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31115,inst_31109,inst_31112,inst_31117,inst_31149,inst_31113,inst_31145,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31147){
var map__31232 = p__31147;
var map__31232__$1 = ((((!((map__31232 == null)))?((((map__31232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31232):map__31232);
var namespace = cljs.core.get.call(null,map__31232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31115,inst_31109,inst_31112,inst_31117,inst_31149,inst_31113,inst_31145,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31149__$1 = cljs.core.group_by.call(null,inst_31148,inst_31115);
var inst_31151 = (inst_31149__$1 == null);
var inst_31152 = cljs.core.not.call(null,inst_31151);
var state_31196__$1 = (function (){var statearr_31234 = state_31196;
(statearr_31234[(28)] = inst_31145);

(statearr_31234[(16)] = inst_31149__$1);

return statearr_31234;
})();
if(inst_31152){
var statearr_31235_31311 = state_31196__$1;
(statearr_31235_31311[(1)] = (32));

} else {
var statearr_31236_31312 = state_31196__$1;
(statearr_31236_31312[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (44))){
var inst_31172 = (state_31196[(21)]);
var inst_31185 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31172);
var inst_31186 = cljs.core.pr_str.call(null,inst_31185);
var inst_31187 = [cljs.core.str("not required: "),cljs.core.str(inst_31186)].join('');
var inst_31188 = figwheel.client.utils.log.call(null,inst_31187);
var state_31196__$1 = state_31196;
var statearr_31237_31313 = state_31196__$1;
(statearr_31237_31313[(2)] = inst_31188);

(statearr_31237_31313[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (6))){
var inst_31090 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
var statearr_31238_31314 = state_31196__$1;
(statearr_31238_31314[(2)] = inst_31090);

(statearr_31238_31314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (28))){
var inst_31115 = (state_31196[(26)]);
var inst_31142 = (state_31196[(2)]);
var inst_31143 = cljs.core.not_empty.call(null,inst_31115);
var state_31196__$1 = (function (){var statearr_31239 = state_31196;
(statearr_31239[(29)] = inst_31142);

return statearr_31239;
})();
if(cljs.core.truth_(inst_31143)){
var statearr_31240_31315 = state_31196__$1;
(statearr_31240_31315[(1)] = (29));

} else {
var statearr_31241_31316 = state_31196__$1;
(statearr_31241_31316[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (25))){
var inst_31113 = (state_31196[(25)]);
var inst_31129 = (state_31196[(2)]);
var inst_31130 = cljs.core.not_empty.call(null,inst_31113);
var state_31196__$1 = (function (){var statearr_31242 = state_31196;
(statearr_31242[(30)] = inst_31129);

return statearr_31242;
})();
if(cljs.core.truth_(inst_31130)){
var statearr_31243_31317 = state_31196__$1;
(statearr_31243_31317[(1)] = (26));

} else {
var statearr_31244_31318 = state_31196__$1;
(statearr_31244_31318[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (34))){
var inst_31165 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
if(cljs.core.truth_(inst_31165)){
var statearr_31245_31319 = state_31196__$1;
(statearr_31245_31319[(1)] = (38));

} else {
var statearr_31246_31320 = state_31196__$1;
(statearr_31246_31320[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (17))){
var state_31196__$1 = state_31196;
var statearr_31247_31321 = state_31196__$1;
(statearr_31247_31321[(2)] = recompile_dependents);

(statearr_31247_31321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (3))){
var state_31196__$1 = state_31196;
var statearr_31248_31322 = state_31196__$1;
(statearr_31248_31322[(2)] = null);

(statearr_31248_31322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (12))){
var inst_31086 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
var statearr_31249_31323 = state_31196__$1;
(statearr_31249_31323[(2)] = inst_31086);

(statearr_31249_31323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (2))){
var inst_31048 = (state_31196[(13)]);
var inst_31055 = cljs.core.seq.call(null,inst_31048);
var inst_31056 = inst_31055;
var inst_31057 = null;
var inst_31058 = (0);
var inst_31059 = (0);
var state_31196__$1 = (function (){var statearr_31250 = state_31196;
(statearr_31250[(7)] = inst_31058);

(statearr_31250[(8)] = inst_31059);

(statearr_31250[(9)] = inst_31056);

(statearr_31250[(10)] = inst_31057);

return statearr_31250;
})();
var statearr_31251_31324 = state_31196__$1;
(statearr_31251_31324[(2)] = null);

(statearr_31251_31324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (23))){
var inst_31115 = (state_31196[(26)]);
var inst_31109 = (state_31196[(19)]);
var inst_31112 = (state_31196[(23)]);
var inst_31117 = (state_31196[(24)]);
var inst_31113 = (state_31196[(25)]);
var inst_31120 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31122 = (function (){var all_files = inst_31109;
var res_SINGLEQUOTE_ = inst_31112;
var res = inst_31113;
var files_not_loaded = inst_31115;
var dependencies_that_loaded = inst_31117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31115,inst_31109,inst_31112,inst_31117,inst_31113,inst_31120,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31121){
var map__31252 = p__31121;
var map__31252__$1 = ((((!((map__31252 == null)))?((((map__31252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31252):map__31252);
var request_url = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31115,inst_31109,inst_31112,inst_31117,inst_31113,inst_31120,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31123 = cljs.core.reverse.call(null,inst_31117);
var inst_31124 = cljs.core.map.call(null,inst_31122,inst_31123);
var inst_31125 = cljs.core.pr_str.call(null,inst_31124);
var inst_31126 = figwheel.client.utils.log.call(null,inst_31125);
var state_31196__$1 = (function (){var statearr_31254 = state_31196;
(statearr_31254[(31)] = inst_31120);

return statearr_31254;
})();
var statearr_31255_31325 = state_31196__$1;
(statearr_31255_31325[(2)] = inst_31126);

(statearr_31255_31325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (35))){
var state_31196__$1 = state_31196;
var statearr_31256_31326 = state_31196__$1;
(statearr_31256_31326[(2)] = true);

(statearr_31256_31326[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (19))){
var inst_31099 = (state_31196[(12)]);
var inst_31105 = figwheel.client.file_reloading.expand_files.call(null,inst_31099);
var state_31196__$1 = state_31196;
var statearr_31257_31327 = state_31196__$1;
(statearr_31257_31327[(2)] = inst_31105);

(statearr_31257_31327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (11))){
var state_31196__$1 = state_31196;
var statearr_31258_31328 = state_31196__$1;
(statearr_31258_31328[(2)] = null);

(statearr_31258_31328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (9))){
var inst_31088 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
var statearr_31259_31329 = state_31196__$1;
(statearr_31259_31329[(2)] = inst_31088);

(statearr_31259_31329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (5))){
var inst_31058 = (state_31196[(7)]);
var inst_31059 = (state_31196[(8)]);
var inst_31061 = (inst_31059 < inst_31058);
var inst_31062 = inst_31061;
var state_31196__$1 = state_31196;
if(cljs.core.truth_(inst_31062)){
var statearr_31260_31330 = state_31196__$1;
(statearr_31260_31330[(1)] = (7));

} else {
var statearr_31261_31331 = state_31196__$1;
(statearr_31261_31331[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (14))){
var inst_31069 = (state_31196[(22)]);
var inst_31078 = cljs.core.first.call(null,inst_31069);
var inst_31079 = figwheel.client.file_reloading.eval_body.call(null,inst_31078,opts);
var inst_31080 = cljs.core.next.call(null,inst_31069);
var inst_31056 = inst_31080;
var inst_31057 = null;
var inst_31058 = (0);
var inst_31059 = (0);
var state_31196__$1 = (function (){var statearr_31262 = state_31196;
(statearr_31262[(7)] = inst_31058);

(statearr_31262[(32)] = inst_31079);

(statearr_31262[(8)] = inst_31059);

(statearr_31262[(9)] = inst_31056);

(statearr_31262[(10)] = inst_31057);

return statearr_31262;
})();
var statearr_31263_31332 = state_31196__$1;
(statearr_31263_31332[(2)] = null);

(statearr_31263_31332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (45))){
var state_31196__$1 = state_31196;
var statearr_31264_31333 = state_31196__$1;
(statearr_31264_31333[(2)] = null);

(statearr_31264_31333[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (26))){
var inst_31115 = (state_31196[(26)]);
var inst_31109 = (state_31196[(19)]);
var inst_31112 = (state_31196[(23)]);
var inst_31117 = (state_31196[(24)]);
var inst_31113 = (state_31196[(25)]);
var inst_31132 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31134 = (function (){var all_files = inst_31109;
var res_SINGLEQUOTE_ = inst_31112;
var res = inst_31113;
var files_not_loaded = inst_31115;
var dependencies_that_loaded = inst_31117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31115,inst_31109,inst_31112,inst_31117,inst_31113,inst_31132,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31133){
var map__31265 = p__31133;
var map__31265__$1 = ((((!((map__31265 == null)))?((((map__31265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31265):map__31265);
var namespace = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31115,inst_31109,inst_31112,inst_31117,inst_31113,inst_31132,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31135 = cljs.core.map.call(null,inst_31134,inst_31113);
var inst_31136 = cljs.core.pr_str.call(null,inst_31135);
var inst_31137 = figwheel.client.utils.log.call(null,inst_31136);
var inst_31138 = (function (){var all_files = inst_31109;
var res_SINGLEQUOTE_ = inst_31112;
var res = inst_31113;
var files_not_loaded = inst_31115;
var dependencies_that_loaded = inst_31117;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31115,inst_31109,inst_31112,inst_31117,inst_31113,inst_31132,inst_31134,inst_31135,inst_31136,inst_31137,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31115,inst_31109,inst_31112,inst_31117,inst_31113,inst_31132,inst_31134,inst_31135,inst_31136,inst_31137,state_val_31197,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31139 = setTimeout(inst_31138,(10));
var state_31196__$1 = (function (){var statearr_31267 = state_31196;
(statearr_31267[(33)] = inst_31137);

(statearr_31267[(34)] = inst_31132);

return statearr_31267;
})();
var statearr_31268_31334 = state_31196__$1;
(statearr_31268_31334[(2)] = inst_31139);

(statearr_31268_31334[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (16))){
var state_31196__$1 = state_31196;
var statearr_31269_31335 = state_31196__$1;
(statearr_31269_31335[(2)] = reload_dependents);

(statearr_31269_31335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (38))){
var inst_31149 = (state_31196[(16)]);
var inst_31167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31149);
var state_31196__$1 = state_31196;
var statearr_31270_31336 = state_31196__$1;
(statearr_31270_31336[(2)] = inst_31167);

(statearr_31270_31336[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (30))){
var state_31196__$1 = state_31196;
var statearr_31271_31337 = state_31196__$1;
(statearr_31271_31337[(2)] = null);

(statearr_31271_31337[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (10))){
var inst_31069 = (state_31196[(22)]);
var inst_31071 = cljs.core.chunked_seq_QMARK_.call(null,inst_31069);
var state_31196__$1 = state_31196;
if(inst_31071){
var statearr_31272_31338 = state_31196__$1;
(statearr_31272_31338[(1)] = (13));

} else {
var statearr_31273_31339 = state_31196__$1;
(statearr_31273_31339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (18))){
var inst_31103 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
if(cljs.core.truth_(inst_31103)){
var statearr_31274_31340 = state_31196__$1;
(statearr_31274_31340[(1)] = (19));

} else {
var statearr_31275_31341 = state_31196__$1;
(statearr_31275_31341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (42))){
var state_31196__$1 = state_31196;
var statearr_31276_31342 = state_31196__$1;
(statearr_31276_31342[(2)] = null);

(statearr_31276_31342[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (37))){
var inst_31162 = (state_31196[(2)]);
var state_31196__$1 = state_31196;
var statearr_31277_31343 = state_31196__$1;
(statearr_31277_31343[(2)] = inst_31162);

(statearr_31277_31343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31197 === (8))){
var inst_31069 = (state_31196[(22)]);
var inst_31056 = (state_31196[(9)]);
var inst_31069__$1 = cljs.core.seq.call(null,inst_31056);
var state_31196__$1 = (function (){var statearr_31278 = state_31196;
(statearr_31278[(22)] = inst_31069__$1);

return statearr_31278;
})();
if(inst_31069__$1){
var statearr_31279_31344 = state_31196__$1;
(statearr_31279_31344[(1)] = (10));

} else {
var statearr_31280_31345 = state_31196__$1;
(statearr_31280_31345[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27265__auto__,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto____0 = (function (){
var statearr_31284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31284[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto__);

(statearr_31284[(1)] = (1));

return statearr_31284;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto____1 = (function (state_31196){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_31196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e31285){if((e31285 instanceof Object)){
var ex__27269__auto__ = e31285;
var statearr_31286_31346 = state_31196;
(statearr_31286_31346[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31347 = state_31196;
state_31196 = G__31347;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto__ = function(state_31196){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto____1.call(this,state_31196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27379__auto__ = (function (){var statearr_31287 = f__27378__auto__.call(null);
(statearr_31287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto__);

return statearr_31287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto__,map__31041,map__31041__$1,opts,before_jsload,on_jsload,reload_dependents,map__31042,map__31042__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27377__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31350,link){
var map__31353 = p__31350;
var map__31353__$1 = ((((!((map__31353 == null)))?((((map__31353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31353):map__31353);
var file = cljs.core.get.call(null,map__31353__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31353,map__31353__$1,file){
return (function (p1__31348_SHARP_,p2__31349_SHARP_){
if(cljs.core._EQ_.call(null,p1__31348_SHARP_,p2__31349_SHARP_)){
return p1__31348_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31353,map__31353__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31359){
var map__31360 = p__31359;
var map__31360__$1 = ((((!((map__31360 == null)))?((((map__31360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31360):map__31360);
var match_length = cljs.core.get.call(null,map__31360__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31360__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31355_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31355_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31362 = [];
var len__26280__auto___31365 = arguments.length;
var i__26281__auto___31366 = (0);
while(true){
if((i__26281__auto___31366 < len__26280__auto___31365)){
args31362.push((arguments[i__26281__auto___31366]));

var G__31367 = (i__26281__auto___31366 + (1));
i__26281__auto___31366 = G__31367;
continue;
} else {
}
break;
}

var G__31364 = args31362.length;
switch (G__31364) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31362.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31369_SHARP_,p2__31370_SHARP_){
return cljs.core.assoc.call(null,p1__31369_SHARP_,cljs.core.get.call(null,p2__31370_SHARP_,key),p2__31370_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31371){
var map__31374 = p__31371;
var map__31374__$1 = ((((!((map__31374 == null)))?((((map__31374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31374):map__31374);
var f_data = map__31374__$1;
var file = cljs.core.get.call(null,map__31374__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31376,p__31377){
var map__31386 = p__31376;
var map__31386__$1 = ((((!((map__31386 == null)))?((((map__31386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31386):map__31386);
var opts = map__31386__$1;
var on_cssload = cljs.core.get.call(null,map__31386__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31387 = p__31377;
var map__31387__$1 = ((((!((map__31387 == null)))?((((map__31387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31387):map__31387);
var files_msg = map__31387__$1;
var files = cljs.core.get.call(null,map__31387__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31390_31394 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31391_31395 = null;
var count__31392_31396 = (0);
var i__31393_31397 = (0);
while(true){
if((i__31393_31397 < count__31392_31396)){
var f_31398 = cljs.core._nth.call(null,chunk__31391_31395,i__31393_31397);
figwheel.client.file_reloading.reload_css_file.call(null,f_31398);

var G__31399 = seq__31390_31394;
var G__31400 = chunk__31391_31395;
var G__31401 = count__31392_31396;
var G__31402 = (i__31393_31397 + (1));
seq__31390_31394 = G__31399;
chunk__31391_31395 = G__31400;
count__31392_31396 = G__31401;
i__31393_31397 = G__31402;
continue;
} else {
var temp__4657__auto___31403 = cljs.core.seq.call(null,seq__31390_31394);
if(temp__4657__auto___31403){
var seq__31390_31404__$1 = temp__4657__auto___31403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31390_31404__$1)){
var c__25986__auto___31405 = cljs.core.chunk_first.call(null,seq__31390_31404__$1);
var G__31406 = cljs.core.chunk_rest.call(null,seq__31390_31404__$1);
var G__31407 = c__25986__auto___31405;
var G__31408 = cljs.core.count.call(null,c__25986__auto___31405);
var G__31409 = (0);
seq__31390_31394 = G__31406;
chunk__31391_31395 = G__31407;
count__31392_31396 = G__31408;
i__31393_31397 = G__31409;
continue;
} else {
var f_31410 = cljs.core.first.call(null,seq__31390_31404__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31410);

var G__31411 = cljs.core.next.call(null,seq__31390_31404__$1);
var G__31412 = null;
var G__31413 = (0);
var G__31414 = (0);
seq__31390_31394 = G__31411;
chunk__31391_31395 = G__31412;
count__31392_31396 = G__31413;
i__31393_31397 = G__31414;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31386,map__31386__$1,opts,on_cssload,map__31387,map__31387__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31386,map__31386__$1,opts,on_cssload,map__31387,map__31387__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484074944766