// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27422 = [];
var len__26280__auto___27428 = arguments.length;
var i__26281__auto___27429 = (0);
while(true){
if((i__26281__auto___27429 < len__26280__auto___27428)){
args27422.push((arguments[i__26281__auto___27429]));

var G__27430 = (i__26281__auto___27429 + (1));
i__26281__auto___27429 = G__27430;
continue;
} else {
}
break;
}

var G__27424 = args27422.length;
switch (G__27424) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27422.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27425 = (function (f,blockable,meta27426){
this.f = f;
this.blockable = blockable;
this.meta27426 = meta27426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27427,meta27426__$1){
var self__ = this;
var _27427__$1 = this;
return (new cljs.core.async.t_cljs$core$async27425(self__.f,self__.blockable,meta27426__$1));
});

cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27427){
var self__ = this;
var _27427__$1 = this;
return self__.meta27426;
});

cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27426","meta27426",-29498427,null)], null);
});

cljs.core.async.t_cljs$core$async27425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27425";

cljs.core.async.t_cljs$core$async27425.cljs$lang$ctorPrWriter = (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async27425");
});

cljs.core.async.__GT_t_cljs$core$async27425 = (function cljs$core$async$__GT_t_cljs$core$async27425(f__$1,blockable__$1,meta27426){
return (new cljs.core.async.t_cljs$core$async27425(f__$1,blockable__$1,meta27426));
});

}

return (new cljs.core.async.t_cljs$core$async27425(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27434 = [];
var len__26280__auto___27437 = arguments.length;
var i__26281__auto___27438 = (0);
while(true){
if((i__26281__auto___27438 < len__26280__auto___27437)){
args27434.push((arguments[i__26281__auto___27438]));

var G__27439 = (i__26281__auto___27438 + (1));
i__26281__auto___27438 = G__27439;
continue;
} else {
}
break;
}

var G__27436 = args27434.length;
switch (G__27436) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27434.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27441 = [];
var len__26280__auto___27444 = arguments.length;
var i__26281__auto___27445 = (0);
while(true){
if((i__26281__auto___27445 < len__26280__auto___27444)){
args27441.push((arguments[i__26281__auto___27445]));

var G__27446 = (i__26281__auto___27445 + (1));
i__26281__auto___27445 = G__27446;
continue;
} else {
}
break;
}

var G__27443 = args27441.length;
switch (G__27443) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27441.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27448 = [];
var len__26280__auto___27451 = arguments.length;
var i__26281__auto___27452 = (0);
while(true){
if((i__26281__auto___27452 < len__26280__auto___27451)){
args27448.push((arguments[i__26281__auto___27452]));

var G__27453 = (i__26281__auto___27452 + (1));
i__26281__auto___27452 = G__27453;
continue;
} else {
}
break;
}

var G__27450 = args27448.length;
switch (G__27450) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27448.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27455 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27455);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27455,ret){
return (function (){
return fn1.call(null,val_27455);
});})(val_27455,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27456 = [];
var len__26280__auto___27459 = arguments.length;
var i__26281__auto___27460 = (0);
while(true){
if((i__26281__auto___27460 < len__26280__auto___27459)){
args27456.push((arguments[i__26281__auto___27460]));

var G__27461 = (i__26281__auto___27460 + (1));
i__26281__auto___27460 = G__27461;
continue;
} else {
}
break;
}

var G__27458 = args27456.length;
switch (G__27458) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27456.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26090__auto___27463 = n;
var x_27464 = (0);
while(true){
if((x_27464 < n__26090__auto___27463)){
(a[x_27464] = (0));

var G__27465 = (x_27464 + (1));
x_27464 = G__27465;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27466 = (i + (1));
i = G__27466;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27470 = (function (flag,meta27471){
this.flag = flag;
this.meta27471 = meta27471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27472,meta27471__$1){
var self__ = this;
var _27472__$1 = this;
return (new cljs.core.async.t_cljs$core$async27470(self__.flag,meta27471__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27472){
var self__ = this;
var _27472__$1 = this;
return self__.meta27471;
});})(flag))
;

cljs.core.async.t_cljs$core$async27470.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27470.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27470.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27471","meta27471",-1871913545,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27470";

cljs.core.async.t_cljs$core$async27470.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async27470");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27470 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27470(flag__$1,meta27471){
return (new cljs.core.async.t_cljs$core$async27470(flag__$1,meta27471));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27470(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27476 = (function (flag,cb,meta27477){
this.flag = flag;
this.cb = cb;
this.meta27477 = meta27477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27478,meta27477__$1){
var self__ = this;
var _27478__$1 = this;
return (new cljs.core.async.t_cljs$core$async27476(self__.flag,self__.cb,meta27477__$1));
});

cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27478){
var self__ = this;
var _27478__$1 = this;
return self__.meta27477;
});

cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27477","meta27477",-1464961940,null)], null);
});

cljs.core.async.t_cljs$core$async27476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27476";

cljs.core.async.t_cljs$core$async27476.cljs$lang$ctorPrWriter = (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async27476");
});

cljs.core.async.__GT_t_cljs$core$async27476 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27476(flag__$1,cb__$1,meta27477){
return (new cljs.core.async.t_cljs$core$async27476(flag__$1,cb__$1,meta27477));
});

}

return (new cljs.core.async.t_cljs$core$async27476(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27480_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27480_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27481_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27481_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25172__auto__ = wport;
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27482 = (i + (1));
i = G__27482;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25172__auto__ = ret;
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25160__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25160__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25160__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26287__auto__ = [];
var len__26280__auto___27488 = arguments.length;
var i__26281__auto___27489 = (0);
while(true){
if((i__26281__auto___27489 < len__26280__auto___27488)){
args__26287__auto__.push((arguments[i__26281__auto___27489]));

var G__27490 = (i__26281__auto___27489 + (1));
i__26281__auto___27489 = G__27490;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((1) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26288__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27485){
var map__27486 = p__27485;
var map__27486__$1 = ((((!((map__27486 == null)))?((((map__27486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27486):map__27486);
var opts = map__27486__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27483){
var G__27484 = cljs.core.first.call(null,seq27483);
var seq27483__$1 = cljs.core.next.call(null,seq27483);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27484,seq27483__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27491 = [];
var len__26280__auto___27541 = arguments.length;
var i__26281__auto___27542 = (0);
while(true){
if((i__26281__auto___27542 < len__26280__auto___27541)){
args27491.push((arguments[i__26281__auto___27542]));

var G__27543 = (i__26281__auto___27542 + (1));
i__26281__auto___27542 = G__27543;
continue;
} else {
}
break;
}

var G__27493 = args27491.length;
switch (G__27493) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27491.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27377__auto___27545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___27545){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___27545){
return (function (state_27517){
var state_val_27518 = (state_27517[(1)]);
if((state_val_27518 === (7))){
var inst_27513 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27519_27546 = state_27517__$1;
(statearr_27519_27546[(2)] = inst_27513);

(statearr_27519_27546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (1))){
var state_27517__$1 = state_27517;
var statearr_27520_27547 = state_27517__$1;
(statearr_27520_27547[(2)] = null);

(statearr_27520_27547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (4))){
var inst_27496 = (state_27517[(7)]);
var inst_27496__$1 = (state_27517[(2)]);
var inst_27497 = (inst_27496__$1 == null);
var state_27517__$1 = (function (){var statearr_27521 = state_27517;
(statearr_27521[(7)] = inst_27496__$1);

return statearr_27521;
})();
if(cljs.core.truth_(inst_27497)){
var statearr_27522_27548 = state_27517__$1;
(statearr_27522_27548[(1)] = (5));

} else {
var statearr_27523_27549 = state_27517__$1;
(statearr_27523_27549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (13))){
var state_27517__$1 = state_27517;
var statearr_27524_27550 = state_27517__$1;
(statearr_27524_27550[(2)] = null);

(statearr_27524_27550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (6))){
var inst_27496 = (state_27517[(7)]);
var state_27517__$1 = state_27517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27517__$1,(11),to,inst_27496);
} else {
if((state_val_27518 === (3))){
var inst_27515 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27517__$1,inst_27515);
} else {
if((state_val_27518 === (12))){
var state_27517__$1 = state_27517;
var statearr_27525_27551 = state_27517__$1;
(statearr_27525_27551[(2)] = null);

(statearr_27525_27551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (2))){
var state_27517__$1 = state_27517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27517__$1,(4),from);
} else {
if((state_val_27518 === (11))){
var inst_27506 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
if(cljs.core.truth_(inst_27506)){
var statearr_27526_27552 = state_27517__$1;
(statearr_27526_27552[(1)] = (12));

} else {
var statearr_27527_27553 = state_27517__$1;
(statearr_27527_27553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (9))){
var state_27517__$1 = state_27517;
var statearr_27528_27554 = state_27517__$1;
(statearr_27528_27554[(2)] = null);

(statearr_27528_27554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (5))){
var state_27517__$1 = state_27517;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27529_27555 = state_27517__$1;
(statearr_27529_27555[(1)] = (8));

} else {
var statearr_27530_27556 = state_27517__$1;
(statearr_27530_27556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (14))){
var inst_27511 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27531_27557 = state_27517__$1;
(statearr_27531_27557[(2)] = inst_27511);

(statearr_27531_27557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (10))){
var inst_27503 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27532_27558 = state_27517__$1;
(statearr_27532_27558[(2)] = inst_27503);

(statearr_27532_27558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (8))){
var inst_27500 = cljs.core.async.close_BANG_.call(null,to);
var state_27517__$1 = state_27517;
var statearr_27533_27559 = state_27517__$1;
(statearr_27533_27559[(2)] = inst_27500);

(statearr_27533_27559[(1)] = (10));


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
});})(c__27377__auto___27545))
;
return ((function (switch__27265__auto__,c__27377__auto___27545){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_27537 = [null,null,null,null,null,null,null,null];
(statearr_27537[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_27537[(1)] = (1));

return statearr_27537;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_27517){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_27517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e27538){if((e27538 instanceof Object)){
var ex__27269__auto__ = e27538;
var statearr_27539_27560 = state_27517;
(statearr_27539_27560[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27561 = state_27517;
state_27517 = G__27561;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_27517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_27517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___27545))
})();
var state__27379__auto__ = (function (){var statearr_27540 = f__27378__auto__.call(null);
(statearr_27540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___27545);

return statearr_27540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___27545))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27749){
var vec__27750 = p__27749;
var v = cljs.core.nth.call(null,vec__27750,(0),null);
var p = cljs.core.nth.call(null,vec__27750,(1),null);
var job = vec__27750;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27377__auto___27936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___27936,res,vec__27750,v,p,job,jobs,results){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___27936,res,vec__27750,v,p,job,jobs,results){
return (function (state_27757){
var state_val_27758 = (state_27757[(1)]);
if((state_val_27758 === (1))){
var state_27757__$1 = state_27757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27757__$1,(2),res,v);
} else {
if((state_val_27758 === (2))){
var inst_27754 = (state_27757[(2)]);
var inst_27755 = cljs.core.async.close_BANG_.call(null,res);
var state_27757__$1 = (function (){var statearr_27759 = state_27757;
(statearr_27759[(7)] = inst_27754);

return statearr_27759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27757__$1,inst_27755);
} else {
return null;
}
}
});})(c__27377__auto___27936,res,vec__27750,v,p,job,jobs,results))
;
return ((function (switch__27265__auto__,c__27377__auto___27936,res,vec__27750,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0 = (function (){
var statearr_27763 = [null,null,null,null,null,null,null,null];
(statearr_27763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__);

(statearr_27763[(1)] = (1));

return statearr_27763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1 = (function (state_27757){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_27757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e27764){if((e27764 instanceof Object)){
var ex__27269__auto__ = e27764;
var statearr_27765_27937 = state_27757;
(statearr_27765_27937[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27938 = state_27757;
state_27757 = G__27938;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = function(state_27757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1.call(this,state_27757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___27936,res,vec__27750,v,p,job,jobs,results))
})();
var state__27379__auto__ = (function (){var statearr_27766 = f__27378__auto__.call(null);
(statearr_27766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___27936);

return statearr_27766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___27936,res,vec__27750,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27767){
var vec__27768 = p__27767;
var v = cljs.core.nth.call(null,vec__27768,(0),null);
var p = cljs.core.nth.call(null,vec__27768,(1),null);
var job = vec__27768;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26090__auto___27939 = n;
var __27940 = (0);
while(true){
if((__27940 < n__26090__auto___27939)){
var G__27771_27941 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27771_27941) {
case "compute":
var c__27377__auto___27943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27940,c__27377__auto___27943,G__27771_27941,n__26090__auto___27939,jobs,results,process,async){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (__27940,c__27377__auto___27943,G__27771_27941,n__26090__auto___27939,jobs,results,process,async){
return (function (state_27784){
var state_val_27785 = (state_27784[(1)]);
if((state_val_27785 === (1))){
var state_27784__$1 = state_27784;
var statearr_27786_27944 = state_27784__$1;
(statearr_27786_27944[(2)] = null);

(statearr_27786_27944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (2))){
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27784__$1,(4),jobs);
} else {
if((state_val_27785 === (3))){
var inst_27782 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27784__$1,inst_27782);
} else {
if((state_val_27785 === (4))){
var inst_27774 = (state_27784[(2)]);
var inst_27775 = process.call(null,inst_27774);
var state_27784__$1 = state_27784;
if(cljs.core.truth_(inst_27775)){
var statearr_27787_27945 = state_27784__$1;
(statearr_27787_27945[(1)] = (5));

} else {
var statearr_27788_27946 = state_27784__$1;
(statearr_27788_27946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (5))){
var state_27784__$1 = state_27784;
var statearr_27789_27947 = state_27784__$1;
(statearr_27789_27947[(2)] = null);

(statearr_27789_27947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (6))){
var state_27784__$1 = state_27784;
var statearr_27790_27948 = state_27784__$1;
(statearr_27790_27948[(2)] = null);

(statearr_27790_27948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (7))){
var inst_27780 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
var statearr_27791_27949 = state_27784__$1;
(statearr_27791_27949[(2)] = inst_27780);

(statearr_27791_27949[(1)] = (3));


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
});})(__27940,c__27377__auto___27943,G__27771_27941,n__26090__auto___27939,jobs,results,process,async))
;
return ((function (__27940,switch__27265__auto__,c__27377__auto___27943,G__27771_27941,n__26090__auto___27939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0 = (function (){
var statearr_27795 = [null,null,null,null,null,null,null];
(statearr_27795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__);

(statearr_27795[(1)] = (1));

return statearr_27795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1 = (function (state_27784){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_27784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e27796){if((e27796 instanceof Object)){
var ex__27269__auto__ = e27796;
var statearr_27797_27950 = state_27784;
(statearr_27797_27950[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27951 = state_27784;
state_27784 = G__27951;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = function(state_27784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1.call(this,state_27784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__;
})()
;})(__27940,switch__27265__auto__,c__27377__auto___27943,G__27771_27941,n__26090__auto___27939,jobs,results,process,async))
})();
var state__27379__auto__ = (function (){var statearr_27798 = f__27378__auto__.call(null);
(statearr_27798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___27943);

return statearr_27798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(__27940,c__27377__auto___27943,G__27771_27941,n__26090__auto___27939,jobs,results,process,async))
);


break;
case "async":
var c__27377__auto___27952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27940,c__27377__auto___27952,G__27771_27941,n__26090__auto___27939,jobs,results,process,async){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (__27940,c__27377__auto___27952,G__27771_27941,n__26090__auto___27939,jobs,results,process,async){
return (function (state_27811){
var state_val_27812 = (state_27811[(1)]);
if((state_val_27812 === (1))){
var state_27811__$1 = state_27811;
var statearr_27813_27953 = state_27811__$1;
(statearr_27813_27953[(2)] = null);

(statearr_27813_27953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (2))){
var state_27811__$1 = state_27811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27811__$1,(4),jobs);
} else {
if((state_val_27812 === (3))){
var inst_27809 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27811__$1,inst_27809);
} else {
if((state_val_27812 === (4))){
var inst_27801 = (state_27811[(2)]);
var inst_27802 = async.call(null,inst_27801);
var state_27811__$1 = state_27811;
if(cljs.core.truth_(inst_27802)){
var statearr_27814_27954 = state_27811__$1;
(statearr_27814_27954[(1)] = (5));

} else {
var statearr_27815_27955 = state_27811__$1;
(statearr_27815_27955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (5))){
var state_27811__$1 = state_27811;
var statearr_27816_27956 = state_27811__$1;
(statearr_27816_27956[(2)] = null);

(statearr_27816_27956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (6))){
var state_27811__$1 = state_27811;
var statearr_27817_27957 = state_27811__$1;
(statearr_27817_27957[(2)] = null);

(statearr_27817_27957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27812 === (7))){
var inst_27807 = (state_27811[(2)]);
var state_27811__$1 = state_27811;
var statearr_27818_27958 = state_27811__$1;
(statearr_27818_27958[(2)] = inst_27807);

(statearr_27818_27958[(1)] = (3));


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
});})(__27940,c__27377__auto___27952,G__27771_27941,n__26090__auto___27939,jobs,results,process,async))
;
return ((function (__27940,switch__27265__auto__,c__27377__auto___27952,G__27771_27941,n__26090__auto___27939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0 = (function (){
var statearr_27822 = [null,null,null,null,null,null,null];
(statearr_27822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__);

(statearr_27822[(1)] = (1));

return statearr_27822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1 = (function (state_27811){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_27811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e27823){if((e27823 instanceof Object)){
var ex__27269__auto__ = e27823;
var statearr_27824_27959 = state_27811;
(statearr_27824_27959[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27960 = state_27811;
state_27811 = G__27960;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = function(state_27811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1.call(this,state_27811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__;
})()
;})(__27940,switch__27265__auto__,c__27377__auto___27952,G__27771_27941,n__26090__auto___27939,jobs,results,process,async))
})();
var state__27379__auto__ = (function (){var statearr_27825 = f__27378__auto__.call(null);
(statearr_27825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___27952);

return statearr_27825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(__27940,c__27377__auto___27952,G__27771_27941,n__26090__auto___27939,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27961 = (__27940 + (1));
__27940 = G__27961;
continue;
} else {
}
break;
}

var c__27377__auto___27962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___27962,jobs,results,process,async){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___27962,jobs,results,process,async){
return (function (state_27847){
var state_val_27848 = (state_27847[(1)]);
if((state_val_27848 === (1))){
var state_27847__$1 = state_27847;
var statearr_27849_27963 = state_27847__$1;
(statearr_27849_27963[(2)] = null);

(statearr_27849_27963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (2))){
var state_27847__$1 = state_27847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27847__$1,(4),from);
} else {
if((state_val_27848 === (3))){
var inst_27845 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27847__$1,inst_27845);
} else {
if((state_val_27848 === (4))){
var inst_27828 = (state_27847[(7)]);
var inst_27828__$1 = (state_27847[(2)]);
var inst_27829 = (inst_27828__$1 == null);
var state_27847__$1 = (function (){var statearr_27850 = state_27847;
(statearr_27850[(7)] = inst_27828__$1);

return statearr_27850;
})();
if(cljs.core.truth_(inst_27829)){
var statearr_27851_27964 = state_27847__$1;
(statearr_27851_27964[(1)] = (5));

} else {
var statearr_27852_27965 = state_27847__$1;
(statearr_27852_27965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (5))){
var inst_27831 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27847__$1 = state_27847;
var statearr_27853_27966 = state_27847__$1;
(statearr_27853_27966[(2)] = inst_27831);

(statearr_27853_27966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (6))){
var inst_27828 = (state_27847[(7)]);
var inst_27833 = (state_27847[(8)]);
var inst_27833__$1 = cljs.core.async.chan.call(null,(1));
var inst_27834 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27835 = [inst_27828,inst_27833__$1];
var inst_27836 = (new cljs.core.PersistentVector(null,2,(5),inst_27834,inst_27835,null));
var state_27847__$1 = (function (){var statearr_27854 = state_27847;
(statearr_27854[(8)] = inst_27833__$1);

return statearr_27854;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27847__$1,(8),jobs,inst_27836);
} else {
if((state_val_27848 === (7))){
var inst_27843 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
var statearr_27855_27967 = state_27847__$1;
(statearr_27855_27967[(2)] = inst_27843);

(statearr_27855_27967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (8))){
var inst_27833 = (state_27847[(8)]);
var inst_27838 = (state_27847[(2)]);
var state_27847__$1 = (function (){var statearr_27856 = state_27847;
(statearr_27856[(9)] = inst_27838);

return statearr_27856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27847__$1,(9),results,inst_27833);
} else {
if((state_val_27848 === (9))){
var inst_27840 = (state_27847[(2)]);
var state_27847__$1 = (function (){var statearr_27857 = state_27847;
(statearr_27857[(10)] = inst_27840);

return statearr_27857;
})();
var statearr_27858_27968 = state_27847__$1;
(statearr_27858_27968[(2)] = null);

(statearr_27858_27968[(1)] = (2));


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
});})(c__27377__auto___27962,jobs,results,process,async))
;
return ((function (switch__27265__auto__,c__27377__auto___27962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0 = (function (){
var statearr_27862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__);

(statearr_27862[(1)] = (1));

return statearr_27862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1 = (function (state_27847){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_27847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e27863){if((e27863 instanceof Object)){
var ex__27269__auto__ = e27863;
var statearr_27864_27969 = state_27847;
(statearr_27864_27969[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27970 = state_27847;
state_27847 = G__27970;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = function(state_27847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1.call(this,state_27847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___27962,jobs,results,process,async))
})();
var state__27379__auto__ = (function (){var statearr_27865 = f__27378__auto__.call(null);
(statearr_27865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___27962);

return statearr_27865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___27962,jobs,results,process,async))
);


var c__27377__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto__,jobs,results,process,async){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto__,jobs,results,process,async){
return (function (state_27903){
var state_val_27904 = (state_27903[(1)]);
if((state_val_27904 === (7))){
var inst_27899 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27905_27971 = state_27903__$1;
(statearr_27905_27971[(2)] = inst_27899);

(statearr_27905_27971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (20))){
var state_27903__$1 = state_27903;
var statearr_27906_27972 = state_27903__$1;
(statearr_27906_27972[(2)] = null);

(statearr_27906_27972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (1))){
var state_27903__$1 = state_27903;
var statearr_27907_27973 = state_27903__$1;
(statearr_27907_27973[(2)] = null);

(statearr_27907_27973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (4))){
var inst_27868 = (state_27903[(7)]);
var inst_27868__$1 = (state_27903[(2)]);
var inst_27869 = (inst_27868__$1 == null);
var state_27903__$1 = (function (){var statearr_27908 = state_27903;
(statearr_27908[(7)] = inst_27868__$1);

return statearr_27908;
})();
if(cljs.core.truth_(inst_27869)){
var statearr_27909_27974 = state_27903__$1;
(statearr_27909_27974[(1)] = (5));

} else {
var statearr_27910_27975 = state_27903__$1;
(statearr_27910_27975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (15))){
var inst_27881 = (state_27903[(8)]);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27903__$1,(18),to,inst_27881);
} else {
if((state_val_27904 === (21))){
var inst_27894 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27911_27976 = state_27903__$1;
(statearr_27911_27976[(2)] = inst_27894);

(statearr_27911_27976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (13))){
var inst_27896 = (state_27903[(2)]);
var state_27903__$1 = (function (){var statearr_27912 = state_27903;
(statearr_27912[(9)] = inst_27896);

return statearr_27912;
})();
var statearr_27913_27977 = state_27903__$1;
(statearr_27913_27977[(2)] = null);

(statearr_27913_27977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (6))){
var inst_27868 = (state_27903[(7)]);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27903__$1,(11),inst_27868);
} else {
if((state_val_27904 === (17))){
var inst_27889 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
if(cljs.core.truth_(inst_27889)){
var statearr_27914_27978 = state_27903__$1;
(statearr_27914_27978[(1)] = (19));

} else {
var statearr_27915_27979 = state_27903__$1;
(statearr_27915_27979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (3))){
var inst_27901 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27903__$1,inst_27901);
} else {
if((state_val_27904 === (12))){
var inst_27878 = (state_27903[(10)]);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27903__$1,(14),inst_27878);
} else {
if((state_val_27904 === (2))){
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27903__$1,(4),results);
} else {
if((state_val_27904 === (19))){
var state_27903__$1 = state_27903;
var statearr_27916_27980 = state_27903__$1;
(statearr_27916_27980[(2)] = null);

(statearr_27916_27980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (11))){
var inst_27878 = (state_27903[(2)]);
var state_27903__$1 = (function (){var statearr_27917 = state_27903;
(statearr_27917[(10)] = inst_27878);

return statearr_27917;
})();
var statearr_27918_27981 = state_27903__$1;
(statearr_27918_27981[(2)] = null);

(statearr_27918_27981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (9))){
var state_27903__$1 = state_27903;
var statearr_27919_27982 = state_27903__$1;
(statearr_27919_27982[(2)] = null);

(statearr_27919_27982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (5))){
var state_27903__$1 = state_27903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27920_27983 = state_27903__$1;
(statearr_27920_27983[(1)] = (8));

} else {
var statearr_27921_27984 = state_27903__$1;
(statearr_27921_27984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (14))){
var inst_27881 = (state_27903[(8)]);
var inst_27883 = (state_27903[(11)]);
var inst_27881__$1 = (state_27903[(2)]);
var inst_27882 = (inst_27881__$1 == null);
var inst_27883__$1 = cljs.core.not.call(null,inst_27882);
var state_27903__$1 = (function (){var statearr_27922 = state_27903;
(statearr_27922[(8)] = inst_27881__$1);

(statearr_27922[(11)] = inst_27883__$1);

return statearr_27922;
})();
if(inst_27883__$1){
var statearr_27923_27985 = state_27903__$1;
(statearr_27923_27985[(1)] = (15));

} else {
var statearr_27924_27986 = state_27903__$1;
(statearr_27924_27986[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (16))){
var inst_27883 = (state_27903[(11)]);
var state_27903__$1 = state_27903;
var statearr_27925_27987 = state_27903__$1;
(statearr_27925_27987[(2)] = inst_27883);

(statearr_27925_27987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (10))){
var inst_27875 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27926_27988 = state_27903__$1;
(statearr_27926_27988[(2)] = inst_27875);

(statearr_27926_27988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (18))){
var inst_27886 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27927_27989 = state_27903__$1;
(statearr_27927_27989[(2)] = inst_27886);

(statearr_27927_27989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (8))){
var inst_27872 = cljs.core.async.close_BANG_.call(null,to);
var state_27903__$1 = state_27903;
var statearr_27928_27990 = state_27903__$1;
(statearr_27928_27990[(2)] = inst_27872);

(statearr_27928_27990[(1)] = (10));


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
});})(c__27377__auto__,jobs,results,process,async))
;
return ((function (switch__27265__auto__,c__27377__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0 = (function (){
var statearr_27932 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__);

(statearr_27932[(1)] = (1));

return statearr_27932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1 = (function (state_27903){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_27903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e27933){if((e27933 instanceof Object)){
var ex__27269__auto__ = e27933;
var statearr_27934_27991 = state_27903;
(statearr_27934_27991[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27992 = state_27903;
state_27903 = G__27992;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__ = function(state_27903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1.call(this,state_27903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27266__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto__,jobs,results,process,async))
})();
var state__27379__auto__ = (function (){var statearr_27935 = f__27378__auto__.call(null);
(statearr_27935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto__);

return statearr_27935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto__,jobs,results,process,async))
);

return c__27377__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27993 = [];
var len__26280__auto___27996 = arguments.length;
var i__26281__auto___27997 = (0);
while(true){
if((i__26281__auto___27997 < len__26280__auto___27996)){
args27993.push((arguments[i__26281__auto___27997]));

var G__27998 = (i__26281__auto___27997 + (1));
i__26281__auto___27997 = G__27998;
continue;
} else {
}
break;
}

var G__27995 = args27993.length;
switch (G__27995) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27993.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28000 = [];
var len__26280__auto___28003 = arguments.length;
var i__26281__auto___28004 = (0);
while(true){
if((i__26281__auto___28004 < len__26280__auto___28003)){
args28000.push((arguments[i__26281__auto___28004]));

var G__28005 = (i__26281__auto___28004 + (1));
i__26281__auto___28004 = G__28005;
continue;
} else {
}
break;
}

var G__28002 = args28000.length;
switch (G__28002) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28000.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28007 = [];
var len__26280__auto___28060 = arguments.length;
var i__26281__auto___28061 = (0);
while(true){
if((i__26281__auto___28061 < len__26280__auto___28060)){
args28007.push((arguments[i__26281__auto___28061]));

var G__28062 = (i__26281__auto___28061 + (1));
i__26281__auto___28061 = G__28062;
continue;
} else {
}
break;
}

var G__28009 = args28007.length;
switch (G__28009) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28007.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27377__auto___28064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___28064,tc,fc){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___28064,tc,fc){
return (function (state_28035){
var state_val_28036 = (state_28035[(1)]);
if((state_val_28036 === (7))){
var inst_28031 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
var statearr_28037_28065 = state_28035__$1;
(statearr_28037_28065[(2)] = inst_28031);

(statearr_28037_28065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (1))){
var state_28035__$1 = state_28035;
var statearr_28038_28066 = state_28035__$1;
(statearr_28038_28066[(2)] = null);

(statearr_28038_28066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (4))){
var inst_28012 = (state_28035[(7)]);
var inst_28012__$1 = (state_28035[(2)]);
var inst_28013 = (inst_28012__$1 == null);
var state_28035__$1 = (function (){var statearr_28039 = state_28035;
(statearr_28039[(7)] = inst_28012__$1);

return statearr_28039;
})();
if(cljs.core.truth_(inst_28013)){
var statearr_28040_28067 = state_28035__$1;
(statearr_28040_28067[(1)] = (5));

} else {
var statearr_28041_28068 = state_28035__$1;
(statearr_28041_28068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (13))){
var state_28035__$1 = state_28035;
var statearr_28042_28069 = state_28035__$1;
(statearr_28042_28069[(2)] = null);

(statearr_28042_28069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (6))){
var inst_28012 = (state_28035[(7)]);
var inst_28018 = p.call(null,inst_28012);
var state_28035__$1 = state_28035;
if(cljs.core.truth_(inst_28018)){
var statearr_28043_28070 = state_28035__$1;
(statearr_28043_28070[(1)] = (9));

} else {
var statearr_28044_28071 = state_28035__$1;
(statearr_28044_28071[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (3))){
var inst_28033 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28035__$1,inst_28033);
} else {
if((state_val_28036 === (12))){
var state_28035__$1 = state_28035;
var statearr_28045_28072 = state_28035__$1;
(statearr_28045_28072[(2)] = null);

(statearr_28045_28072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (2))){
var state_28035__$1 = state_28035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28035__$1,(4),ch);
} else {
if((state_val_28036 === (11))){
var inst_28012 = (state_28035[(7)]);
var inst_28022 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28035__$1,(8),inst_28022,inst_28012);
} else {
if((state_val_28036 === (9))){
var state_28035__$1 = state_28035;
var statearr_28046_28073 = state_28035__$1;
(statearr_28046_28073[(2)] = tc);

(statearr_28046_28073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (5))){
var inst_28015 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28016 = cljs.core.async.close_BANG_.call(null,fc);
var state_28035__$1 = (function (){var statearr_28047 = state_28035;
(statearr_28047[(8)] = inst_28015);

return statearr_28047;
})();
var statearr_28048_28074 = state_28035__$1;
(statearr_28048_28074[(2)] = inst_28016);

(statearr_28048_28074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (14))){
var inst_28029 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
var statearr_28049_28075 = state_28035__$1;
(statearr_28049_28075[(2)] = inst_28029);

(statearr_28049_28075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (10))){
var state_28035__$1 = state_28035;
var statearr_28050_28076 = state_28035__$1;
(statearr_28050_28076[(2)] = fc);

(statearr_28050_28076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (8))){
var inst_28024 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
if(cljs.core.truth_(inst_28024)){
var statearr_28051_28077 = state_28035__$1;
(statearr_28051_28077[(1)] = (12));

} else {
var statearr_28052_28078 = state_28035__$1;
(statearr_28052_28078[(1)] = (13));

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
});})(c__27377__auto___28064,tc,fc))
;
return ((function (switch__27265__auto__,c__27377__auto___28064,tc,fc){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_28056 = [null,null,null,null,null,null,null,null,null];
(statearr_28056[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_28056[(1)] = (1));

return statearr_28056;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_28035){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_28035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e28057){if((e28057 instanceof Object)){
var ex__27269__auto__ = e28057;
var statearr_28058_28079 = state_28035;
(statearr_28058_28079[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28080 = state_28035;
state_28035 = G__28080;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_28035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_28035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___28064,tc,fc))
})();
var state__27379__auto__ = (function (){var statearr_28059 = f__27378__auto__.call(null);
(statearr_28059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___28064);

return statearr_28059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___28064,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27377__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto__){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto__){
return (function (state_28144){
var state_val_28145 = (state_28144[(1)]);
if((state_val_28145 === (7))){
var inst_28140 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
var statearr_28146_28167 = state_28144__$1;
(statearr_28146_28167[(2)] = inst_28140);

(statearr_28146_28167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (1))){
var inst_28124 = init;
var state_28144__$1 = (function (){var statearr_28147 = state_28144;
(statearr_28147[(7)] = inst_28124);

return statearr_28147;
})();
var statearr_28148_28168 = state_28144__$1;
(statearr_28148_28168[(2)] = null);

(statearr_28148_28168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (4))){
var inst_28127 = (state_28144[(8)]);
var inst_28127__$1 = (state_28144[(2)]);
var inst_28128 = (inst_28127__$1 == null);
var state_28144__$1 = (function (){var statearr_28149 = state_28144;
(statearr_28149[(8)] = inst_28127__$1);

return statearr_28149;
})();
if(cljs.core.truth_(inst_28128)){
var statearr_28150_28169 = state_28144__$1;
(statearr_28150_28169[(1)] = (5));

} else {
var statearr_28151_28170 = state_28144__$1;
(statearr_28151_28170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (6))){
var inst_28131 = (state_28144[(9)]);
var inst_28124 = (state_28144[(7)]);
var inst_28127 = (state_28144[(8)]);
var inst_28131__$1 = f.call(null,inst_28124,inst_28127);
var inst_28132 = cljs.core.reduced_QMARK_.call(null,inst_28131__$1);
var state_28144__$1 = (function (){var statearr_28152 = state_28144;
(statearr_28152[(9)] = inst_28131__$1);

return statearr_28152;
})();
if(inst_28132){
var statearr_28153_28171 = state_28144__$1;
(statearr_28153_28171[(1)] = (8));

} else {
var statearr_28154_28172 = state_28144__$1;
(statearr_28154_28172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (3))){
var inst_28142 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28144__$1,inst_28142);
} else {
if((state_val_28145 === (2))){
var state_28144__$1 = state_28144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28144__$1,(4),ch);
} else {
if((state_val_28145 === (9))){
var inst_28131 = (state_28144[(9)]);
var inst_28124 = inst_28131;
var state_28144__$1 = (function (){var statearr_28155 = state_28144;
(statearr_28155[(7)] = inst_28124);

return statearr_28155;
})();
var statearr_28156_28173 = state_28144__$1;
(statearr_28156_28173[(2)] = null);

(statearr_28156_28173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (5))){
var inst_28124 = (state_28144[(7)]);
var state_28144__$1 = state_28144;
var statearr_28157_28174 = state_28144__$1;
(statearr_28157_28174[(2)] = inst_28124);

(statearr_28157_28174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (10))){
var inst_28138 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
var statearr_28158_28175 = state_28144__$1;
(statearr_28158_28175[(2)] = inst_28138);

(statearr_28158_28175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (8))){
var inst_28131 = (state_28144[(9)]);
var inst_28134 = cljs.core.deref.call(null,inst_28131);
var state_28144__$1 = state_28144;
var statearr_28159_28176 = state_28144__$1;
(statearr_28159_28176[(2)] = inst_28134);

(statearr_28159_28176[(1)] = (10));


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
});})(c__27377__auto__))
;
return ((function (switch__27265__auto__,c__27377__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27266__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27266__auto____0 = (function (){
var statearr_28163 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28163[(0)] = cljs$core$async$reduce_$_state_machine__27266__auto__);

(statearr_28163[(1)] = (1));

return statearr_28163;
});
var cljs$core$async$reduce_$_state_machine__27266__auto____1 = (function (state_28144){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_28144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e28164){if((e28164 instanceof Object)){
var ex__27269__auto__ = e28164;
var statearr_28165_28177 = state_28144;
(statearr_28165_28177[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28178 = state_28144;
state_28144 = G__28178;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27266__auto__ = function(state_28144){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27266__auto____1.call(this,state_28144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27266__auto____0;
cljs$core$async$reduce_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27266__auto____1;
return cljs$core$async$reduce_$_state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto__))
})();
var state__27379__auto__ = (function (){var statearr_28166 = f__27378__auto__.call(null);
(statearr_28166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto__);

return statearr_28166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto__))
);

return c__27377__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28179 = [];
var len__26280__auto___28231 = arguments.length;
var i__26281__auto___28232 = (0);
while(true){
if((i__26281__auto___28232 < len__26280__auto___28231)){
args28179.push((arguments[i__26281__auto___28232]));

var G__28233 = (i__26281__auto___28232 + (1));
i__26281__auto___28232 = G__28233;
continue;
} else {
}
break;
}

var G__28181 = args28179.length;
switch (G__28181) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28179.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27377__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto__){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto__){
return (function (state_28206){
var state_val_28207 = (state_28206[(1)]);
if((state_val_28207 === (7))){
var inst_28188 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28208_28235 = state_28206__$1;
(statearr_28208_28235[(2)] = inst_28188);

(statearr_28208_28235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (1))){
var inst_28182 = cljs.core.seq.call(null,coll);
var inst_28183 = inst_28182;
var state_28206__$1 = (function (){var statearr_28209 = state_28206;
(statearr_28209[(7)] = inst_28183);

return statearr_28209;
})();
var statearr_28210_28236 = state_28206__$1;
(statearr_28210_28236[(2)] = null);

(statearr_28210_28236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (4))){
var inst_28183 = (state_28206[(7)]);
var inst_28186 = cljs.core.first.call(null,inst_28183);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28206__$1,(7),ch,inst_28186);
} else {
if((state_val_28207 === (13))){
var inst_28200 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28211_28237 = state_28206__$1;
(statearr_28211_28237[(2)] = inst_28200);

(statearr_28211_28237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (6))){
var inst_28191 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28191)){
var statearr_28212_28238 = state_28206__$1;
(statearr_28212_28238[(1)] = (8));

} else {
var statearr_28213_28239 = state_28206__$1;
(statearr_28213_28239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (3))){
var inst_28204 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28206__$1,inst_28204);
} else {
if((state_val_28207 === (12))){
var state_28206__$1 = state_28206;
var statearr_28214_28240 = state_28206__$1;
(statearr_28214_28240[(2)] = null);

(statearr_28214_28240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (2))){
var inst_28183 = (state_28206[(7)]);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28183)){
var statearr_28215_28241 = state_28206__$1;
(statearr_28215_28241[(1)] = (4));

} else {
var statearr_28216_28242 = state_28206__$1;
(statearr_28216_28242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (11))){
var inst_28197 = cljs.core.async.close_BANG_.call(null,ch);
var state_28206__$1 = state_28206;
var statearr_28217_28243 = state_28206__$1;
(statearr_28217_28243[(2)] = inst_28197);

(statearr_28217_28243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (9))){
var state_28206__$1 = state_28206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28218_28244 = state_28206__$1;
(statearr_28218_28244[(1)] = (11));

} else {
var statearr_28219_28245 = state_28206__$1;
(statearr_28219_28245[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (5))){
var inst_28183 = (state_28206[(7)]);
var state_28206__$1 = state_28206;
var statearr_28220_28246 = state_28206__$1;
(statearr_28220_28246[(2)] = inst_28183);

(statearr_28220_28246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (10))){
var inst_28202 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28221_28247 = state_28206__$1;
(statearr_28221_28247[(2)] = inst_28202);

(statearr_28221_28247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (8))){
var inst_28183 = (state_28206[(7)]);
var inst_28193 = cljs.core.next.call(null,inst_28183);
var inst_28183__$1 = inst_28193;
var state_28206__$1 = (function (){var statearr_28222 = state_28206;
(statearr_28222[(7)] = inst_28183__$1);

return statearr_28222;
})();
var statearr_28223_28248 = state_28206__$1;
(statearr_28223_28248[(2)] = null);

(statearr_28223_28248[(1)] = (2));


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
});})(c__27377__auto__))
;
return ((function (switch__27265__auto__,c__27377__auto__){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_28227 = [null,null,null,null,null,null,null,null];
(statearr_28227[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_28227[(1)] = (1));

return statearr_28227;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_28206){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_28206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e28228){if((e28228 instanceof Object)){
var ex__27269__auto__ = e28228;
var statearr_28229_28249 = state_28206;
(statearr_28229_28249[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28250 = state_28206;
state_28206 = G__28250;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_28206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_28206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto__))
})();
var state__27379__auto__ = (function (){var statearr_28230 = f__27378__auto__.call(null);
(statearr_28230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto__);

return statearr_28230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto__))
);

return c__27377__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25835__auto__ = (((_ == null))?null:_);
var m__25836__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,_);
} else {
var m__25836__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25835__auto__ = (((m == null))?null:m);
var m__25836__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25836__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25835__auto__ = (((m == null))?null:m);
var m__25836__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,m,ch);
} else {
var m__25836__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25835__auto__ = (((m == null))?null:m);
var m__25836__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,m);
} else {
var m__25836__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28476 = (function (ch,cs,meta28477){
this.ch = ch;
this.cs = cs;
this.meta28477 = meta28477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28478,meta28477__$1){
var self__ = this;
var _28478__$1 = this;
return (new cljs.core.async.t_cljs$core$async28476(self__.ch,self__.cs,meta28477__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28478){
var self__ = this;
var _28478__$1 = this;
return self__.meta28477;
});})(cs))
;

cljs.core.async.t_cljs$core$async28476.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28476.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28476.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28476.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28476.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28476.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28477","meta28477",-1272062400,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28476";

cljs.core.async.t_cljs$core$async28476.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async28476");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28476 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28476(ch__$1,cs__$1,meta28477){
return (new cljs.core.async.t_cljs$core$async28476(ch__$1,cs__$1,meta28477));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28476(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27377__auto___28701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___28701,cs,m,dchan,dctr,done){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___28701,cs,m,dchan,dctr,done){
return (function (state_28613){
var state_val_28614 = (state_28613[(1)]);
if((state_val_28614 === (7))){
var inst_28609 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28615_28702 = state_28613__$1;
(statearr_28615_28702[(2)] = inst_28609);

(statearr_28615_28702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (20))){
var inst_28512 = (state_28613[(7)]);
var inst_28524 = cljs.core.first.call(null,inst_28512);
var inst_28525 = cljs.core.nth.call(null,inst_28524,(0),null);
var inst_28526 = cljs.core.nth.call(null,inst_28524,(1),null);
var state_28613__$1 = (function (){var statearr_28616 = state_28613;
(statearr_28616[(8)] = inst_28525);

return statearr_28616;
})();
if(cljs.core.truth_(inst_28526)){
var statearr_28617_28703 = state_28613__$1;
(statearr_28617_28703[(1)] = (22));

} else {
var statearr_28618_28704 = state_28613__$1;
(statearr_28618_28704[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (27))){
var inst_28554 = (state_28613[(9)]);
var inst_28561 = (state_28613[(10)]);
var inst_28556 = (state_28613[(11)]);
var inst_28481 = (state_28613[(12)]);
var inst_28561__$1 = cljs.core._nth.call(null,inst_28554,inst_28556);
var inst_28562 = cljs.core.async.put_BANG_.call(null,inst_28561__$1,inst_28481,done);
var state_28613__$1 = (function (){var statearr_28619 = state_28613;
(statearr_28619[(10)] = inst_28561__$1);

return statearr_28619;
})();
if(cljs.core.truth_(inst_28562)){
var statearr_28620_28705 = state_28613__$1;
(statearr_28620_28705[(1)] = (30));

} else {
var statearr_28621_28706 = state_28613__$1;
(statearr_28621_28706[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (1))){
var state_28613__$1 = state_28613;
var statearr_28622_28707 = state_28613__$1;
(statearr_28622_28707[(2)] = null);

(statearr_28622_28707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (24))){
var inst_28512 = (state_28613[(7)]);
var inst_28531 = (state_28613[(2)]);
var inst_28532 = cljs.core.next.call(null,inst_28512);
var inst_28490 = inst_28532;
var inst_28491 = null;
var inst_28492 = (0);
var inst_28493 = (0);
var state_28613__$1 = (function (){var statearr_28623 = state_28613;
(statearr_28623[(13)] = inst_28490);

(statearr_28623[(14)] = inst_28493);

(statearr_28623[(15)] = inst_28531);

(statearr_28623[(16)] = inst_28491);

(statearr_28623[(17)] = inst_28492);

return statearr_28623;
})();
var statearr_28624_28708 = state_28613__$1;
(statearr_28624_28708[(2)] = null);

(statearr_28624_28708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (39))){
var state_28613__$1 = state_28613;
var statearr_28628_28709 = state_28613__$1;
(statearr_28628_28709[(2)] = null);

(statearr_28628_28709[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (4))){
var inst_28481 = (state_28613[(12)]);
var inst_28481__$1 = (state_28613[(2)]);
var inst_28482 = (inst_28481__$1 == null);
var state_28613__$1 = (function (){var statearr_28629 = state_28613;
(statearr_28629[(12)] = inst_28481__$1);

return statearr_28629;
})();
if(cljs.core.truth_(inst_28482)){
var statearr_28630_28710 = state_28613__$1;
(statearr_28630_28710[(1)] = (5));

} else {
var statearr_28631_28711 = state_28613__$1;
(statearr_28631_28711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (15))){
var inst_28490 = (state_28613[(13)]);
var inst_28493 = (state_28613[(14)]);
var inst_28491 = (state_28613[(16)]);
var inst_28492 = (state_28613[(17)]);
var inst_28508 = (state_28613[(2)]);
var inst_28509 = (inst_28493 + (1));
var tmp28625 = inst_28490;
var tmp28626 = inst_28491;
var tmp28627 = inst_28492;
var inst_28490__$1 = tmp28625;
var inst_28491__$1 = tmp28626;
var inst_28492__$1 = tmp28627;
var inst_28493__$1 = inst_28509;
var state_28613__$1 = (function (){var statearr_28632 = state_28613;
(statearr_28632[(18)] = inst_28508);

(statearr_28632[(13)] = inst_28490__$1);

(statearr_28632[(14)] = inst_28493__$1);

(statearr_28632[(16)] = inst_28491__$1);

(statearr_28632[(17)] = inst_28492__$1);

return statearr_28632;
})();
var statearr_28633_28712 = state_28613__$1;
(statearr_28633_28712[(2)] = null);

(statearr_28633_28712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (21))){
var inst_28535 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28637_28713 = state_28613__$1;
(statearr_28637_28713[(2)] = inst_28535);

(statearr_28637_28713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (31))){
var inst_28561 = (state_28613[(10)]);
var inst_28565 = done.call(null,null);
var inst_28566 = cljs.core.async.untap_STAR_.call(null,m,inst_28561);
var state_28613__$1 = (function (){var statearr_28638 = state_28613;
(statearr_28638[(19)] = inst_28565);

return statearr_28638;
})();
var statearr_28639_28714 = state_28613__$1;
(statearr_28639_28714[(2)] = inst_28566);

(statearr_28639_28714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (32))){
var inst_28554 = (state_28613[(9)]);
var inst_28555 = (state_28613[(20)]);
var inst_28553 = (state_28613[(21)]);
var inst_28556 = (state_28613[(11)]);
var inst_28568 = (state_28613[(2)]);
var inst_28569 = (inst_28556 + (1));
var tmp28634 = inst_28554;
var tmp28635 = inst_28555;
var tmp28636 = inst_28553;
var inst_28553__$1 = tmp28636;
var inst_28554__$1 = tmp28634;
var inst_28555__$1 = tmp28635;
var inst_28556__$1 = inst_28569;
var state_28613__$1 = (function (){var statearr_28640 = state_28613;
(statearr_28640[(9)] = inst_28554__$1);

(statearr_28640[(22)] = inst_28568);

(statearr_28640[(20)] = inst_28555__$1);

(statearr_28640[(21)] = inst_28553__$1);

(statearr_28640[(11)] = inst_28556__$1);

return statearr_28640;
})();
var statearr_28641_28715 = state_28613__$1;
(statearr_28641_28715[(2)] = null);

(statearr_28641_28715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (40))){
var inst_28581 = (state_28613[(23)]);
var inst_28585 = done.call(null,null);
var inst_28586 = cljs.core.async.untap_STAR_.call(null,m,inst_28581);
var state_28613__$1 = (function (){var statearr_28642 = state_28613;
(statearr_28642[(24)] = inst_28585);

return statearr_28642;
})();
var statearr_28643_28716 = state_28613__$1;
(statearr_28643_28716[(2)] = inst_28586);

(statearr_28643_28716[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (33))){
var inst_28572 = (state_28613[(25)]);
var inst_28574 = cljs.core.chunked_seq_QMARK_.call(null,inst_28572);
var state_28613__$1 = state_28613;
if(inst_28574){
var statearr_28644_28717 = state_28613__$1;
(statearr_28644_28717[(1)] = (36));

} else {
var statearr_28645_28718 = state_28613__$1;
(statearr_28645_28718[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (13))){
var inst_28502 = (state_28613[(26)]);
var inst_28505 = cljs.core.async.close_BANG_.call(null,inst_28502);
var state_28613__$1 = state_28613;
var statearr_28646_28719 = state_28613__$1;
(statearr_28646_28719[(2)] = inst_28505);

(statearr_28646_28719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (22))){
var inst_28525 = (state_28613[(8)]);
var inst_28528 = cljs.core.async.close_BANG_.call(null,inst_28525);
var state_28613__$1 = state_28613;
var statearr_28647_28720 = state_28613__$1;
(statearr_28647_28720[(2)] = inst_28528);

(statearr_28647_28720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (36))){
var inst_28572 = (state_28613[(25)]);
var inst_28576 = cljs.core.chunk_first.call(null,inst_28572);
var inst_28577 = cljs.core.chunk_rest.call(null,inst_28572);
var inst_28578 = cljs.core.count.call(null,inst_28576);
var inst_28553 = inst_28577;
var inst_28554 = inst_28576;
var inst_28555 = inst_28578;
var inst_28556 = (0);
var state_28613__$1 = (function (){var statearr_28648 = state_28613;
(statearr_28648[(9)] = inst_28554);

(statearr_28648[(20)] = inst_28555);

(statearr_28648[(21)] = inst_28553);

(statearr_28648[(11)] = inst_28556);

return statearr_28648;
})();
var statearr_28649_28721 = state_28613__$1;
(statearr_28649_28721[(2)] = null);

(statearr_28649_28721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (41))){
var inst_28572 = (state_28613[(25)]);
var inst_28588 = (state_28613[(2)]);
var inst_28589 = cljs.core.next.call(null,inst_28572);
var inst_28553 = inst_28589;
var inst_28554 = null;
var inst_28555 = (0);
var inst_28556 = (0);
var state_28613__$1 = (function (){var statearr_28650 = state_28613;
(statearr_28650[(27)] = inst_28588);

(statearr_28650[(9)] = inst_28554);

(statearr_28650[(20)] = inst_28555);

(statearr_28650[(21)] = inst_28553);

(statearr_28650[(11)] = inst_28556);

return statearr_28650;
})();
var statearr_28651_28722 = state_28613__$1;
(statearr_28651_28722[(2)] = null);

(statearr_28651_28722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (43))){
var state_28613__$1 = state_28613;
var statearr_28652_28723 = state_28613__$1;
(statearr_28652_28723[(2)] = null);

(statearr_28652_28723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (29))){
var inst_28597 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28653_28724 = state_28613__$1;
(statearr_28653_28724[(2)] = inst_28597);

(statearr_28653_28724[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (44))){
var inst_28606 = (state_28613[(2)]);
var state_28613__$1 = (function (){var statearr_28654 = state_28613;
(statearr_28654[(28)] = inst_28606);

return statearr_28654;
})();
var statearr_28655_28725 = state_28613__$1;
(statearr_28655_28725[(2)] = null);

(statearr_28655_28725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (6))){
var inst_28545 = (state_28613[(29)]);
var inst_28544 = cljs.core.deref.call(null,cs);
var inst_28545__$1 = cljs.core.keys.call(null,inst_28544);
var inst_28546 = cljs.core.count.call(null,inst_28545__$1);
var inst_28547 = cljs.core.reset_BANG_.call(null,dctr,inst_28546);
var inst_28552 = cljs.core.seq.call(null,inst_28545__$1);
var inst_28553 = inst_28552;
var inst_28554 = null;
var inst_28555 = (0);
var inst_28556 = (0);
var state_28613__$1 = (function (){var statearr_28656 = state_28613;
(statearr_28656[(30)] = inst_28547);

(statearr_28656[(9)] = inst_28554);

(statearr_28656[(29)] = inst_28545__$1);

(statearr_28656[(20)] = inst_28555);

(statearr_28656[(21)] = inst_28553);

(statearr_28656[(11)] = inst_28556);

return statearr_28656;
})();
var statearr_28657_28726 = state_28613__$1;
(statearr_28657_28726[(2)] = null);

(statearr_28657_28726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (28))){
var inst_28553 = (state_28613[(21)]);
var inst_28572 = (state_28613[(25)]);
var inst_28572__$1 = cljs.core.seq.call(null,inst_28553);
var state_28613__$1 = (function (){var statearr_28658 = state_28613;
(statearr_28658[(25)] = inst_28572__$1);

return statearr_28658;
})();
if(inst_28572__$1){
var statearr_28659_28727 = state_28613__$1;
(statearr_28659_28727[(1)] = (33));

} else {
var statearr_28660_28728 = state_28613__$1;
(statearr_28660_28728[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (25))){
var inst_28555 = (state_28613[(20)]);
var inst_28556 = (state_28613[(11)]);
var inst_28558 = (inst_28556 < inst_28555);
var inst_28559 = inst_28558;
var state_28613__$1 = state_28613;
if(cljs.core.truth_(inst_28559)){
var statearr_28661_28729 = state_28613__$1;
(statearr_28661_28729[(1)] = (27));

} else {
var statearr_28662_28730 = state_28613__$1;
(statearr_28662_28730[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (34))){
var state_28613__$1 = state_28613;
var statearr_28663_28731 = state_28613__$1;
(statearr_28663_28731[(2)] = null);

(statearr_28663_28731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (17))){
var state_28613__$1 = state_28613;
var statearr_28664_28732 = state_28613__$1;
(statearr_28664_28732[(2)] = null);

(statearr_28664_28732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (3))){
var inst_28611 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28613__$1,inst_28611);
} else {
if((state_val_28614 === (12))){
var inst_28540 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28665_28733 = state_28613__$1;
(statearr_28665_28733[(2)] = inst_28540);

(statearr_28665_28733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (2))){
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28613__$1,(4),ch);
} else {
if((state_val_28614 === (23))){
var state_28613__$1 = state_28613;
var statearr_28666_28734 = state_28613__$1;
(statearr_28666_28734[(2)] = null);

(statearr_28666_28734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (35))){
var inst_28595 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28667_28735 = state_28613__$1;
(statearr_28667_28735[(2)] = inst_28595);

(statearr_28667_28735[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (19))){
var inst_28512 = (state_28613[(7)]);
var inst_28516 = cljs.core.chunk_first.call(null,inst_28512);
var inst_28517 = cljs.core.chunk_rest.call(null,inst_28512);
var inst_28518 = cljs.core.count.call(null,inst_28516);
var inst_28490 = inst_28517;
var inst_28491 = inst_28516;
var inst_28492 = inst_28518;
var inst_28493 = (0);
var state_28613__$1 = (function (){var statearr_28668 = state_28613;
(statearr_28668[(13)] = inst_28490);

(statearr_28668[(14)] = inst_28493);

(statearr_28668[(16)] = inst_28491);

(statearr_28668[(17)] = inst_28492);

return statearr_28668;
})();
var statearr_28669_28736 = state_28613__$1;
(statearr_28669_28736[(2)] = null);

(statearr_28669_28736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (11))){
var inst_28490 = (state_28613[(13)]);
var inst_28512 = (state_28613[(7)]);
var inst_28512__$1 = cljs.core.seq.call(null,inst_28490);
var state_28613__$1 = (function (){var statearr_28670 = state_28613;
(statearr_28670[(7)] = inst_28512__$1);

return statearr_28670;
})();
if(inst_28512__$1){
var statearr_28671_28737 = state_28613__$1;
(statearr_28671_28737[(1)] = (16));

} else {
var statearr_28672_28738 = state_28613__$1;
(statearr_28672_28738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (9))){
var inst_28542 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28673_28739 = state_28613__$1;
(statearr_28673_28739[(2)] = inst_28542);

(statearr_28673_28739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (5))){
var inst_28488 = cljs.core.deref.call(null,cs);
var inst_28489 = cljs.core.seq.call(null,inst_28488);
var inst_28490 = inst_28489;
var inst_28491 = null;
var inst_28492 = (0);
var inst_28493 = (0);
var state_28613__$1 = (function (){var statearr_28674 = state_28613;
(statearr_28674[(13)] = inst_28490);

(statearr_28674[(14)] = inst_28493);

(statearr_28674[(16)] = inst_28491);

(statearr_28674[(17)] = inst_28492);

return statearr_28674;
})();
var statearr_28675_28740 = state_28613__$1;
(statearr_28675_28740[(2)] = null);

(statearr_28675_28740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (14))){
var state_28613__$1 = state_28613;
var statearr_28676_28741 = state_28613__$1;
(statearr_28676_28741[(2)] = null);

(statearr_28676_28741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (45))){
var inst_28603 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28677_28742 = state_28613__$1;
(statearr_28677_28742[(2)] = inst_28603);

(statearr_28677_28742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (26))){
var inst_28545 = (state_28613[(29)]);
var inst_28599 = (state_28613[(2)]);
var inst_28600 = cljs.core.seq.call(null,inst_28545);
var state_28613__$1 = (function (){var statearr_28678 = state_28613;
(statearr_28678[(31)] = inst_28599);

return statearr_28678;
})();
if(inst_28600){
var statearr_28679_28743 = state_28613__$1;
(statearr_28679_28743[(1)] = (42));

} else {
var statearr_28680_28744 = state_28613__$1;
(statearr_28680_28744[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (16))){
var inst_28512 = (state_28613[(7)]);
var inst_28514 = cljs.core.chunked_seq_QMARK_.call(null,inst_28512);
var state_28613__$1 = state_28613;
if(inst_28514){
var statearr_28681_28745 = state_28613__$1;
(statearr_28681_28745[(1)] = (19));

} else {
var statearr_28682_28746 = state_28613__$1;
(statearr_28682_28746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (38))){
var inst_28592 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28683_28747 = state_28613__$1;
(statearr_28683_28747[(2)] = inst_28592);

(statearr_28683_28747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (30))){
var state_28613__$1 = state_28613;
var statearr_28684_28748 = state_28613__$1;
(statearr_28684_28748[(2)] = null);

(statearr_28684_28748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (10))){
var inst_28493 = (state_28613[(14)]);
var inst_28491 = (state_28613[(16)]);
var inst_28501 = cljs.core._nth.call(null,inst_28491,inst_28493);
var inst_28502 = cljs.core.nth.call(null,inst_28501,(0),null);
var inst_28503 = cljs.core.nth.call(null,inst_28501,(1),null);
var state_28613__$1 = (function (){var statearr_28685 = state_28613;
(statearr_28685[(26)] = inst_28502);

return statearr_28685;
})();
if(cljs.core.truth_(inst_28503)){
var statearr_28686_28749 = state_28613__$1;
(statearr_28686_28749[(1)] = (13));

} else {
var statearr_28687_28750 = state_28613__$1;
(statearr_28687_28750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (18))){
var inst_28538 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28688_28751 = state_28613__$1;
(statearr_28688_28751[(2)] = inst_28538);

(statearr_28688_28751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (42))){
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28613__$1,(45),dchan);
} else {
if((state_val_28614 === (37))){
var inst_28581 = (state_28613[(23)]);
var inst_28572 = (state_28613[(25)]);
var inst_28481 = (state_28613[(12)]);
var inst_28581__$1 = cljs.core.first.call(null,inst_28572);
var inst_28582 = cljs.core.async.put_BANG_.call(null,inst_28581__$1,inst_28481,done);
var state_28613__$1 = (function (){var statearr_28689 = state_28613;
(statearr_28689[(23)] = inst_28581__$1);

return statearr_28689;
})();
if(cljs.core.truth_(inst_28582)){
var statearr_28690_28752 = state_28613__$1;
(statearr_28690_28752[(1)] = (39));

} else {
var statearr_28691_28753 = state_28613__$1;
(statearr_28691_28753[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (8))){
var inst_28493 = (state_28613[(14)]);
var inst_28492 = (state_28613[(17)]);
var inst_28495 = (inst_28493 < inst_28492);
var inst_28496 = inst_28495;
var state_28613__$1 = state_28613;
if(cljs.core.truth_(inst_28496)){
var statearr_28692_28754 = state_28613__$1;
(statearr_28692_28754[(1)] = (10));

} else {
var statearr_28693_28755 = state_28613__$1;
(statearr_28693_28755[(1)] = (11));

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
});})(c__27377__auto___28701,cs,m,dchan,dctr,done))
;
return ((function (switch__27265__auto__,c__27377__auto___28701,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27266__auto__ = null;
var cljs$core$async$mult_$_state_machine__27266__auto____0 = (function (){
var statearr_28697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28697[(0)] = cljs$core$async$mult_$_state_machine__27266__auto__);

(statearr_28697[(1)] = (1));

return statearr_28697;
});
var cljs$core$async$mult_$_state_machine__27266__auto____1 = (function (state_28613){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_28613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e28698){if((e28698 instanceof Object)){
var ex__27269__auto__ = e28698;
var statearr_28699_28756 = state_28613;
(statearr_28699_28756[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28757 = state_28613;
state_28613 = G__28757;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27266__auto__ = function(state_28613){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27266__auto____1.call(this,state_28613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27266__auto____0;
cljs$core$async$mult_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27266__auto____1;
return cljs$core$async$mult_$_state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___28701,cs,m,dchan,dctr,done))
})();
var state__27379__auto__ = (function (){var statearr_28700 = f__27378__auto__.call(null);
(statearr_28700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___28701);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___28701,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28758 = [];
var len__26280__auto___28761 = arguments.length;
var i__26281__auto___28762 = (0);
while(true){
if((i__26281__auto___28762 < len__26280__auto___28761)){
args28758.push((arguments[i__26281__auto___28762]));

var G__28763 = (i__26281__auto___28762 + (1));
i__26281__auto___28762 = G__28763;
continue;
} else {
}
break;
}

var G__28760 = args28758.length;
switch (G__28760) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28758.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25835__auto__ = (((m == null))?null:m);
var m__25836__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,m,ch);
} else {
var m__25836__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25835__auto__ = (((m == null))?null:m);
var m__25836__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,m,ch);
} else {
var m__25836__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25835__auto__ = (((m == null))?null:m);
var m__25836__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,m);
} else {
var m__25836__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25835__auto__ = (((m == null))?null:m);
var m__25836__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,m,state_map);
} else {
var m__25836__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25835__auto__ = (((m == null))?null:m);
var m__25836__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,m,mode);
} else {
var m__25836__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26287__auto__ = [];
var len__26280__auto___28775 = arguments.length;
var i__26281__auto___28776 = (0);
while(true){
if((i__26281__auto___28776 < len__26280__auto___28775)){
args__26287__auto__.push((arguments[i__26281__auto___28776]));

var G__28777 = (i__26281__auto___28776 + (1));
i__26281__auto___28776 = G__28777;
continue;
} else {
}
break;
}

var argseq__26288__auto__ = ((((3) < args__26287__auto__.length))?(new cljs.core.IndexedSeq(args__26287__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26288__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28769){
var map__28770 = p__28769;
var map__28770__$1 = ((((!((map__28770 == null)))?((((map__28770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28770):map__28770);
var opts = map__28770__$1;
var statearr_28772_28778 = state;
(statearr_28772_28778[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28770,map__28770__$1,opts){
return (function (val){
var statearr_28773_28779 = state;
(statearr_28773_28779[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28770,map__28770__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28774_28780 = state;
(statearr_28774_28780[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28765){
var G__28766 = cljs.core.first.call(null,seq28765);
var seq28765__$1 = cljs.core.next.call(null,seq28765);
var G__28767 = cljs.core.first.call(null,seq28765__$1);
var seq28765__$2 = cljs.core.next.call(null,seq28765__$1);
var G__28768 = cljs.core.first.call(null,seq28765__$2);
var seq28765__$3 = cljs.core.next.call(null,seq28765__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28766,G__28767,G__28768,seq28765__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28948 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28949){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28949 = meta28949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28950,meta28949__$1){
var self__ = this;
var _28950__$1 = this;
return (new cljs.core.async.t_cljs$core$async28948(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28949__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28950){
var self__ = this;
var _28950__$1 = this;
return self__.meta28949;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28948.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28948.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28949","meta28949",1735068058,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28948";

cljs.core.async.t_cljs$core$async28948.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async28948");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28948 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28948(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28949){
return (new cljs.core.async.t_cljs$core$async28948(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28949));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28948(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27377__auto___29115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___29115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___29115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29052){
var state_val_29053 = (state_29052[(1)]);
if((state_val_29053 === (7))){
var inst_28967 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29054_29116 = state_29052__$1;
(statearr_29054_29116[(2)] = inst_28967);

(statearr_29054_29116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (20))){
var inst_28979 = (state_29052[(7)]);
var state_29052__$1 = state_29052;
var statearr_29055_29117 = state_29052__$1;
(statearr_29055_29117[(2)] = inst_28979);

(statearr_29055_29117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (27))){
var state_29052__$1 = state_29052;
var statearr_29056_29118 = state_29052__$1;
(statearr_29056_29118[(2)] = null);

(statearr_29056_29118[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (1))){
var inst_28954 = (state_29052[(8)]);
var inst_28954__$1 = calc_state.call(null);
var inst_28956 = (inst_28954__$1 == null);
var inst_28957 = cljs.core.not.call(null,inst_28956);
var state_29052__$1 = (function (){var statearr_29057 = state_29052;
(statearr_29057[(8)] = inst_28954__$1);

return statearr_29057;
})();
if(inst_28957){
var statearr_29058_29119 = state_29052__$1;
(statearr_29058_29119[(1)] = (2));

} else {
var statearr_29059_29120 = state_29052__$1;
(statearr_29059_29120[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (24))){
var inst_29026 = (state_29052[(9)]);
var inst_29012 = (state_29052[(10)]);
var inst_29003 = (state_29052[(11)]);
var inst_29026__$1 = inst_29003.call(null,inst_29012);
var state_29052__$1 = (function (){var statearr_29060 = state_29052;
(statearr_29060[(9)] = inst_29026__$1);

return statearr_29060;
})();
if(cljs.core.truth_(inst_29026__$1)){
var statearr_29061_29121 = state_29052__$1;
(statearr_29061_29121[(1)] = (29));

} else {
var statearr_29062_29122 = state_29052__$1;
(statearr_29062_29122[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (4))){
var inst_28970 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
if(cljs.core.truth_(inst_28970)){
var statearr_29063_29123 = state_29052__$1;
(statearr_29063_29123[(1)] = (8));

} else {
var statearr_29064_29124 = state_29052__$1;
(statearr_29064_29124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (15))){
var inst_28997 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
if(cljs.core.truth_(inst_28997)){
var statearr_29065_29125 = state_29052__$1;
(statearr_29065_29125[(1)] = (19));

} else {
var statearr_29066_29126 = state_29052__$1;
(statearr_29066_29126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (21))){
var inst_29002 = (state_29052[(12)]);
var inst_29002__$1 = (state_29052[(2)]);
var inst_29003 = cljs.core.get.call(null,inst_29002__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29004 = cljs.core.get.call(null,inst_29002__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29005 = cljs.core.get.call(null,inst_29002__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29052__$1 = (function (){var statearr_29067 = state_29052;
(statearr_29067[(12)] = inst_29002__$1);

(statearr_29067[(13)] = inst_29004);

(statearr_29067[(11)] = inst_29003);

return statearr_29067;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29052__$1,(22),inst_29005);
} else {
if((state_val_29053 === (31))){
var inst_29034 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
if(cljs.core.truth_(inst_29034)){
var statearr_29068_29127 = state_29052__$1;
(statearr_29068_29127[(1)] = (32));

} else {
var statearr_29069_29128 = state_29052__$1;
(statearr_29069_29128[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (32))){
var inst_29011 = (state_29052[(14)]);
var state_29052__$1 = state_29052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29052__$1,(35),out,inst_29011);
} else {
if((state_val_29053 === (33))){
var inst_29002 = (state_29052[(12)]);
var inst_28979 = inst_29002;
var state_29052__$1 = (function (){var statearr_29070 = state_29052;
(statearr_29070[(7)] = inst_28979);

return statearr_29070;
})();
var statearr_29071_29129 = state_29052__$1;
(statearr_29071_29129[(2)] = null);

(statearr_29071_29129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (13))){
var inst_28979 = (state_29052[(7)]);
var inst_28986 = inst_28979.cljs$lang$protocol_mask$partition0$;
var inst_28987 = (inst_28986 & (64));
var inst_28988 = inst_28979.cljs$core$ISeq$;
var inst_28989 = (cljs.core.PROTOCOL_SENTINEL === inst_28988);
var inst_28990 = (inst_28987) || (inst_28989);
var state_29052__$1 = state_29052;
if(cljs.core.truth_(inst_28990)){
var statearr_29072_29130 = state_29052__$1;
(statearr_29072_29130[(1)] = (16));

} else {
var statearr_29073_29131 = state_29052__$1;
(statearr_29073_29131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (22))){
var inst_29011 = (state_29052[(14)]);
var inst_29012 = (state_29052[(10)]);
var inst_29010 = (state_29052[(2)]);
var inst_29011__$1 = cljs.core.nth.call(null,inst_29010,(0),null);
var inst_29012__$1 = cljs.core.nth.call(null,inst_29010,(1),null);
var inst_29013 = (inst_29011__$1 == null);
var inst_29014 = cljs.core._EQ_.call(null,inst_29012__$1,change);
var inst_29015 = (inst_29013) || (inst_29014);
var state_29052__$1 = (function (){var statearr_29074 = state_29052;
(statearr_29074[(14)] = inst_29011__$1);

(statearr_29074[(10)] = inst_29012__$1);

return statearr_29074;
})();
if(cljs.core.truth_(inst_29015)){
var statearr_29075_29132 = state_29052__$1;
(statearr_29075_29132[(1)] = (23));

} else {
var statearr_29076_29133 = state_29052__$1;
(statearr_29076_29133[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (36))){
var inst_29002 = (state_29052[(12)]);
var inst_28979 = inst_29002;
var state_29052__$1 = (function (){var statearr_29077 = state_29052;
(statearr_29077[(7)] = inst_28979);

return statearr_29077;
})();
var statearr_29078_29134 = state_29052__$1;
(statearr_29078_29134[(2)] = null);

(statearr_29078_29134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (29))){
var inst_29026 = (state_29052[(9)]);
var state_29052__$1 = state_29052;
var statearr_29079_29135 = state_29052__$1;
(statearr_29079_29135[(2)] = inst_29026);

(statearr_29079_29135[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (6))){
var state_29052__$1 = state_29052;
var statearr_29080_29136 = state_29052__$1;
(statearr_29080_29136[(2)] = false);

(statearr_29080_29136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (28))){
var inst_29022 = (state_29052[(2)]);
var inst_29023 = calc_state.call(null);
var inst_28979 = inst_29023;
var state_29052__$1 = (function (){var statearr_29081 = state_29052;
(statearr_29081[(15)] = inst_29022);

(statearr_29081[(7)] = inst_28979);

return statearr_29081;
})();
var statearr_29082_29137 = state_29052__$1;
(statearr_29082_29137[(2)] = null);

(statearr_29082_29137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (25))){
var inst_29048 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29083_29138 = state_29052__$1;
(statearr_29083_29138[(2)] = inst_29048);

(statearr_29083_29138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (34))){
var inst_29046 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29084_29139 = state_29052__$1;
(statearr_29084_29139[(2)] = inst_29046);

(statearr_29084_29139[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (17))){
var state_29052__$1 = state_29052;
var statearr_29085_29140 = state_29052__$1;
(statearr_29085_29140[(2)] = false);

(statearr_29085_29140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (3))){
var state_29052__$1 = state_29052;
var statearr_29086_29141 = state_29052__$1;
(statearr_29086_29141[(2)] = false);

(statearr_29086_29141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (12))){
var inst_29050 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29052__$1,inst_29050);
} else {
if((state_val_29053 === (2))){
var inst_28954 = (state_29052[(8)]);
var inst_28959 = inst_28954.cljs$lang$protocol_mask$partition0$;
var inst_28960 = (inst_28959 & (64));
var inst_28961 = inst_28954.cljs$core$ISeq$;
var inst_28962 = (cljs.core.PROTOCOL_SENTINEL === inst_28961);
var inst_28963 = (inst_28960) || (inst_28962);
var state_29052__$1 = state_29052;
if(cljs.core.truth_(inst_28963)){
var statearr_29087_29142 = state_29052__$1;
(statearr_29087_29142[(1)] = (5));

} else {
var statearr_29088_29143 = state_29052__$1;
(statearr_29088_29143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (23))){
var inst_29011 = (state_29052[(14)]);
var inst_29017 = (inst_29011 == null);
var state_29052__$1 = state_29052;
if(cljs.core.truth_(inst_29017)){
var statearr_29089_29144 = state_29052__$1;
(statearr_29089_29144[(1)] = (26));

} else {
var statearr_29090_29145 = state_29052__$1;
(statearr_29090_29145[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (35))){
var inst_29037 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
if(cljs.core.truth_(inst_29037)){
var statearr_29091_29146 = state_29052__$1;
(statearr_29091_29146[(1)] = (36));

} else {
var statearr_29092_29147 = state_29052__$1;
(statearr_29092_29147[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (19))){
var inst_28979 = (state_29052[(7)]);
var inst_28999 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28979);
var state_29052__$1 = state_29052;
var statearr_29093_29148 = state_29052__$1;
(statearr_29093_29148[(2)] = inst_28999);

(statearr_29093_29148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (11))){
var inst_28979 = (state_29052[(7)]);
var inst_28983 = (inst_28979 == null);
var inst_28984 = cljs.core.not.call(null,inst_28983);
var state_29052__$1 = state_29052;
if(inst_28984){
var statearr_29094_29149 = state_29052__$1;
(statearr_29094_29149[(1)] = (13));

} else {
var statearr_29095_29150 = state_29052__$1;
(statearr_29095_29150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (9))){
var inst_28954 = (state_29052[(8)]);
var state_29052__$1 = state_29052;
var statearr_29096_29151 = state_29052__$1;
(statearr_29096_29151[(2)] = inst_28954);

(statearr_29096_29151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (5))){
var state_29052__$1 = state_29052;
var statearr_29097_29152 = state_29052__$1;
(statearr_29097_29152[(2)] = true);

(statearr_29097_29152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (14))){
var state_29052__$1 = state_29052;
var statearr_29098_29153 = state_29052__$1;
(statearr_29098_29153[(2)] = false);

(statearr_29098_29153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (26))){
var inst_29012 = (state_29052[(10)]);
var inst_29019 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29012);
var state_29052__$1 = state_29052;
var statearr_29099_29154 = state_29052__$1;
(statearr_29099_29154[(2)] = inst_29019);

(statearr_29099_29154[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (16))){
var state_29052__$1 = state_29052;
var statearr_29100_29155 = state_29052__$1;
(statearr_29100_29155[(2)] = true);

(statearr_29100_29155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (38))){
var inst_29042 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29101_29156 = state_29052__$1;
(statearr_29101_29156[(2)] = inst_29042);

(statearr_29101_29156[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (30))){
var inst_29004 = (state_29052[(13)]);
var inst_29012 = (state_29052[(10)]);
var inst_29003 = (state_29052[(11)]);
var inst_29029 = cljs.core.empty_QMARK_.call(null,inst_29003);
var inst_29030 = inst_29004.call(null,inst_29012);
var inst_29031 = cljs.core.not.call(null,inst_29030);
var inst_29032 = (inst_29029) && (inst_29031);
var state_29052__$1 = state_29052;
var statearr_29102_29157 = state_29052__$1;
(statearr_29102_29157[(2)] = inst_29032);

(statearr_29102_29157[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (10))){
var inst_28954 = (state_29052[(8)]);
var inst_28975 = (state_29052[(2)]);
var inst_28976 = cljs.core.get.call(null,inst_28975,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28977 = cljs.core.get.call(null,inst_28975,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28978 = cljs.core.get.call(null,inst_28975,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28979 = inst_28954;
var state_29052__$1 = (function (){var statearr_29103 = state_29052;
(statearr_29103[(16)] = inst_28977);

(statearr_29103[(17)] = inst_28978);

(statearr_29103[(18)] = inst_28976);

(statearr_29103[(7)] = inst_28979);

return statearr_29103;
})();
var statearr_29104_29158 = state_29052__$1;
(statearr_29104_29158[(2)] = null);

(statearr_29104_29158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (18))){
var inst_28994 = (state_29052[(2)]);
var state_29052__$1 = state_29052;
var statearr_29105_29159 = state_29052__$1;
(statearr_29105_29159[(2)] = inst_28994);

(statearr_29105_29159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (37))){
var state_29052__$1 = state_29052;
var statearr_29106_29160 = state_29052__$1;
(statearr_29106_29160[(2)] = null);

(statearr_29106_29160[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29053 === (8))){
var inst_28954 = (state_29052[(8)]);
var inst_28972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28954);
var state_29052__$1 = state_29052;
var statearr_29107_29161 = state_29052__$1;
(statearr_29107_29161[(2)] = inst_28972);

(statearr_29107_29161[(1)] = (10));


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
});})(c__27377__auto___29115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27265__auto__,c__27377__auto___29115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27266__auto__ = null;
var cljs$core$async$mix_$_state_machine__27266__auto____0 = (function (){
var statearr_29111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29111[(0)] = cljs$core$async$mix_$_state_machine__27266__auto__);

(statearr_29111[(1)] = (1));

return statearr_29111;
});
var cljs$core$async$mix_$_state_machine__27266__auto____1 = (function (state_29052){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_29052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e29112){if((e29112 instanceof Object)){
var ex__27269__auto__ = e29112;
var statearr_29113_29162 = state_29052;
(statearr_29113_29162[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29163 = state_29052;
state_29052 = G__29163;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27266__auto__ = function(state_29052){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27266__auto____1.call(this,state_29052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27266__auto____0;
cljs$core$async$mix_$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27266__auto____1;
return cljs$core$async$mix_$_state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___29115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27379__auto__ = (function (){var statearr_29114 = f__27378__auto__.call(null);
(statearr_29114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___29115);

return statearr_29114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___29115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25835__auto__ = (((p == null))?null:p);
var m__25836__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25836__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25835__auto__ = (((p == null))?null:p);
var m__25836__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,p,v,ch);
} else {
var m__25836__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29164 = [];
var len__26280__auto___29167 = arguments.length;
var i__26281__auto___29168 = (0);
while(true){
if((i__26281__auto___29168 < len__26280__auto___29167)){
args29164.push((arguments[i__26281__auto___29168]));

var G__29169 = (i__26281__auto___29168 + (1));
i__26281__auto___29168 = G__29169;
continue;
} else {
}
break;
}

var G__29166 = args29164.length;
switch (G__29166) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29164.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25835__auto__ = (((p == null))?null:p);
var m__25836__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,p);
} else {
var m__25836__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25835__auto__ = (((p == null))?null:p);
var m__25836__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25835__auto__)]);
if(!((m__25836__auto__ == null))){
return m__25836__auto__.call(null,p,v);
} else {
var m__25836__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25836__auto____$1 == null))){
return m__25836__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29172 = [];
var len__26280__auto___29297 = arguments.length;
var i__26281__auto___29298 = (0);
while(true){
if((i__26281__auto___29298 < len__26280__auto___29297)){
args29172.push((arguments[i__26281__auto___29298]));

var G__29299 = (i__26281__auto___29298 + (1));
i__26281__auto___29298 = G__29299;
continue;
} else {
}
break;
}

var G__29174 = args29172.length;
switch (G__29174) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29172.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25172__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25172__auto__)){
return or__25172__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25172__auto__,mults){
return (function (p1__29171_SHARP_){
if(cljs.core.truth_(p1__29171_SHARP_.call(null,topic))){
return p1__29171_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29171_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25172__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29175 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29176){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29176 = meta29176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29177,meta29176__$1){
var self__ = this;
var _29177__$1 = this;
return (new cljs.core.async.t_cljs$core$async29175(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29176__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29177){
var self__ = this;
var _29177__$1 = this;
return self__.meta29176;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29175.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29175.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29175.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29175.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29175.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29175.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29175.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29176","meta29176",78993760,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29175";

cljs.core.async.t_cljs$core$async29175.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async29175");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29175 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29175(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29176){
return (new cljs.core.async.t_cljs$core$async29175(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29176));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29175(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27377__auto___29301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___29301,mults,ensure_mult,p){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___29301,mults,ensure_mult,p){
return (function (state_29249){
var state_val_29250 = (state_29249[(1)]);
if((state_val_29250 === (7))){
var inst_29245 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29251_29302 = state_29249__$1;
(statearr_29251_29302[(2)] = inst_29245);

(statearr_29251_29302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (20))){
var state_29249__$1 = state_29249;
var statearr_29252_29303 = state_29249__$1;
(statearr_29252_29303[(2)] = null);

(statearr_29252_29303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (1))){
var state_29249__$1 = state_29249;
var statearr_29253_29304 = state_29249__$1;
(statearr_29253_29304[(2)] = null);

(statearr_29253_29304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (24))){
var inst_29228 = (state_29249[(7)]);
var inst_29237 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29228);
var state_29249__$1 = state_29249;
var statearr_29254_29305 = state_29249__$1;
(statearr_29254_29305[(2)] = inst_29237);

(statearr_29254_29305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (4))){
var inst_29180 = (state_29249[(8)]);
var inst_29180__$1 = (state_29249[(2)]);
var inst_29181 = (inst_29180__$1 == null);
var state_29249__$1 = (function (){var statearr_29255 = state_29249;
(statearr_29255[(8)] = inst_29180__$1);

return statearr_29255;
})();
if(cljs.core.truth_(inst_29181)){
var statearr_29256_29306 = state_29249__$1;
(statearr_29256_29306[(1)] = (5));

} else {
var statearr_29257_29307 = state_29249__$1;
(statearr_29257_29307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (15))){
var inst_29222 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29258_29308 = state_29249__$1;
(statearr_29258_29308[(2)] = inst_29222);

(statearr_29258_29308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (21))){
var inst_29242 = (state_29249[(2)]);
var state_29249__$1 = (function (){var statearr_29259 = state_29249;
(statearr_29259[(9)] = inst_29242);

return statearr_29259;
})();
var statearr_29260_29309 = state_29249__$1;
(statearr_29260_29309[(2)] = null);

(statearr_29260_29309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (13))){
var inst_29204 = (state_29249[(10)]);
var inst_29206 = cljs.core.chunked_seq_QMARK_.call(null,inst_29204);
var state_29249__$1 = state_29249;
if(inst_29206){
var statearr_29261_29310 = state_29249__$1;
(statearr_29261_29310[(1)] = (16));

} else {
var statearr_29262_29311 = state_29249__$1;
(statearr_29262_29311[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (22))){
var inst_29234 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
if(cljs.core.truth_(inst_29234)){
var statearr_29263_29312 = state_29249__$1;
(statearr_29263_29312[(1)] = (23));

} else {
var statearr_29264_29313 = state_29249__$1;
(statearr_29264_29313[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (6))){
var inst_29180 = (state_29249[(8)]);
var inst_29230 = (state_29249[(11)]);
var inst_29228 = (state_29249[(7)]);
var inst_29228__$1 = topic_fn.call(null,inst_29180);
var inst_29229 = cljs.core.deref.call(null,mults);
var inst_29230__$1 = cljs.core.get.call(null,inst_29229,inst_29228__$1);
var state_29249__$1 = (function (){var statearr_29265 = state_29249;
(statearr_29265[(11)] = inst_29230__$1);

(statearr_29265[(7)] = inst_29228__$1);

return statearr_29265;
})();
if(cljs.core.truth_(inst_29230__$1)){
var statearr_29266_29314 = state_29249__$1;
(statearr_29266_29314[(1)] = (19));

} else {
var statearr_29267_29315 = state_29249__$1;
(statearr_29267_29315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (25))){
var inst_29239 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29268_29316 = state_29249__$1;
(statearr_29268_29316[(2)] = inst_29239);

(statearr_29268_29316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (17))){
var inst_29204 = (state_29249[(10)]);
var inst_29213 = cljs.core.first.call(null,inst_29204);
var inst_29214 = cljs.core.async.muxch_STAR_.call(null,inst_29213);
var inst_29215 = cljs.core.async.close_BANG_.call(null,inst_29214);
var inst_29216 = cljs.core.next.call(null,inst_29204);
var inst_29190 = inst_29216;
var inst_29191 = null;
var inst_29192 = (0);
var inst_29193 = (0);
var state_29249__$1 = (function (){var statearr_29269 = state_29249;
(statearr_29269[(12)] = inst_29191);

(statearr_29269[(13)] = inst_29192);

(statearr_29269[(14)] = inst_29190);

(statearr_29269[(15)] = inst_29193);

(statearr_29269[(16)] = inst_29215);

return statearr_29269;
})();
var statearr_29270_29317 = state_29249__$1;
(statearr_29270_29317[(2)] = null);

(statearr_29270_29317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (3))){
var inst_29247 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29249__$1,inst_29247);
} else {
if((state_val_29250 === (12))){
var inst_29224 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29271_29318 = state_29249__$1;
(statearr_29271_29318[(2)] = inst_29224);

(statearr_29271_29318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (2))){
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29249__$1,(4),ch);
} else {
if((state_val_29250 === (23))){
var state_29249__$1 = state_29249;
var statearr_29272_29319 = state_29249__$1;
(statearr_29272_29319[(2)] = null);

(statearr_29272_29319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (19))){
var inst_29180 = (state_29249[(8)]);
var inst_29230 = (state_29249[(11)]);
var inst_29232 = cljs.core.async.muxch_STAR_.call(null,inst_29230);
var state_29249__$1 = state_29249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29249__$1,(22),inst_29232,inst_29180);
} else {
if((state_val_29250 === (11))){
var inst_29190 = (state_29249[(14)]);
var inst_29204 = (state_29249[(10)]);
var inst_29204__$1 = cljs.core.seq.call(null,inst_29190);
var state_29249__$1 = (function (){var statearr_29273 = state_29249;
(statearr_29273[(10)] = inst_29204__$1);

return statearr_29273;
})();
if(inst_29204__$1){
var statearr_29274_29320 = state_29249__$1;
(statearr_29274_29320[(1)] = (13));

} else {
var statearr_29275_29321 = state_29249__$1;
(statearr_29275_29321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (9))){
var inst_29226 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29276_29322 = state_29249__$1;
(statearr_29276_29322[(2)] = inst_29226);

(statearr_29276_29322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (5))){
var inst_29187 = cljs.core.deref.call(null,mults);
var inst_29188 = cljs.core.vals.call(null,inst_29187);
var inst_29189 = cljs.core.seq.call(null,inst_29188);
var inst_29190 = inst_29189;
var inst_29191 = null;
var inst_29192 = (0);
var inst_29193 = (0);
var state_29249__$1 = (function (){var statearr_29277 = state_29249;
(statearr_29277[(12)] = inst_29191);

(statearr_29277[(13)] = inst_29192);

(statearr_29277[(14)] = inst_29190);

(statearr_29277[(15)] = inst_29193);

return statearr_29277;
})();
var statearr_29278_29323 = state_29249__$1;
(statearr_29278_29323[(2)] = null);

(statearr_29278_29323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (14))){
var state_29249__$1 = state_29249;
var statearr_29282_29324 = state_29249__$1;
(statearr_29282_29324[(2)] = null);

(statearr_29282_29324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (16))){
var inst_29204 = (state_29249[(10)]);
var inst_29208 = cljs.core.chunk_first.call(null,inst_29204);
var inst_29209 = cljs.core.chunk_rest.call(null,inst_29204);
var inst_29210 = cljs.core.count.call(null,inst_29208);
var inst_29190 = inst_29209;
var inst_29191 = inst_29208;
var inst_29192 = inst_29210;
var inst_29193 = (0);
var state_29249__$1 = (function (){var statearr_29283 = state_29249;
(statearr_29283[(12)] = inst_29191);

(statearr_29283[(13)] = inst_29192);

(statearr_29283[(14)] = inst_29190);

(statearr_29283[(15)] = inst_29193);

return statearr_29283;
})();
var statearr_29284_29325 = state_29249__$1;
(statearr_29284_29325[(2)] = null);

(statearr_29284_29325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (10))){
var inst_29191 = (state_29249[(12)]);
var inst_29192 = (state_29249[(13)]);
var inst_29190 = (state_29249[(14)]);
var inst_29193 = (state_29249[(15)]);
var inst_29198 = cljs.core._nth.call(null,inst_29191,inst_29193);
var inst_29199 = cljs.core.async.muxch_STAR_.call(null,inst_29198);
var inst_29200 = cljs.core.async.close_BANG_.call(null,inst_29199);
var inst_29201 = (inst_29193 + (1));
var tmp29279 = inst_29191;
var tmp29280 = inst_29192;
var tmp29281 = inst_29190;
var inst_29190__$1 = tmp29281;
var inst_29191__$1 = tmp29279;
var inst_29192__$1 = tmp29280;
var inst_29193__$1 = inst_29201;
var state_29249__$1 = (function (){var statearr_29285 = state_29249;
(statearr_29285[(12)] = inst_29191__$1);

(statearr_29285[(13)] = inst_29192__$1);

(statearr_29285[(17)] = inst_29200);

(statearr_29285[(14)] = inst_29190__$1);

(statearr_29285[(15)] = inst_29193__$1);

return statearr_29285;
})();
var statearr_29286_29326 = state_29249__$1;
(statearr_29286_29326[(2)] = null);

(statearr_29286_29326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (18))){
var inst_29219 = (state_29249[(2)]);
var state_29249__$1 = state_29249;
var statearr_29287_29327 = state_29249__$1;
(statearr_29287_29327[(2)] = inst_29219);

(statearr_29287_29327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29250 === (8))){
var inst_29192 = (state_29249[(13)]);
var inst_29193 = (state_29249[(15)]);
var inst_29195 = (inst_29193 < inst_29192);
var inst_29196 = inst_29195;
var state_29249__$1 = state_29249;
if(cljs.core.truth_(inst_29196)){
var statearr_29288_29328 = state_29249__$1;
(statearr_29288_29328[(1)] = (10));

} else {
var statearr_29289_29329 = state_29249__$1;
(statearr_29289_29329[(1)] = (11));

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
});})(c__27377__auto___29301,mults,ensure_mult,p))
;
return ((function (switch__27265__auto__,c__27377__auto___29301,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_29293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29293[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_29293[(1)] = (1));

return statearr_29293;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_29249){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_29249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e29294){if((e29294 instanceof Object)){
var ex__27269__auto__ = e29294;
var statearr_29295_29330 = state_29249;
(statearr_29295_29330[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29331 = state_29249;
state_29249 = G__29331;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_29249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_29249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___29301,mults,ensure_mult,p))
})();
var state__27379__auto__ = (function (){var statearr_29296 = f__27378__auto__.call(null);
(statearr_29296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___29301);

return statearr_29296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___29301,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29332 = [];
var len__26280__auto___29335 = arguments.length;
var i__26281__auto___29336 = (0);
while(true){
if((i__26281__auto___29336 < len__26280__auto___29335)){
args29332.push((arguments[i__26281__auto___29336]));

var G__29337 = (i__26281__auto___29336 + (1));
i__26281__auto___29336 = G__29337;
continue;
} else {
}
break;
}

var G__29334 = args29332.length;
switch (G__29334) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29332.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29339 = [];
var len__26280__auto___29342 = arguments.length;
var i__26281__auto___29343 = (0);
while(true){
if((i__26281__auto___29343 < len__26280__auto___29342)){
args29339.push((arguments[i__26281__auto___29343]));

var G__29344 = (i__26281__auto___29343 + (1));
i__26281__auto___29343 = G__29344;
continue;
} else {
}
break;
}

var G__29341 = args29339.length;
switch (G__29341) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29339.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29346 = [];
var len__26280__auto___29417 = arguments.length;
var i__26281__auto___29418 = (0);
while(true){
if((i__26281__auto___29418 < len__26280__auto___29417)){
args29346.push((arguments[i__26281__auto___29418]));

var G__29419 = (i__26281__auto___29418 + (1));
i__26281__auto___29418 = G__29419;
continue;
} else {
}
break;
}

var G__29348 = args29346.length;
switch (G__29348) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29346.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27377__auto___29421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___29421,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___29421,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29387){
var state_val_29388 = (state_29387[(1)]);
if((state_val_29388 === (7))){
var state_29387__$1 = state_29387;
var statearr_29389_29422 = state_29387__$1;
(statearr_29389_29422[(2)] = null);

(statearr_29389_29422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (1))){
var state_29387__$1 = state_29387;
var statearr_29390_29423 = state_29387__$1;
(statearr_29390_29423[(2)] = null);

(statearr_29390_29423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (4))){
var inst_29351 = (state_29387[(7)]);
var inst_29353 = (inst_29351 < cnt);
var state_29387__$1 = state_29387;
if(cljs.core.truth_(inst_29353)){
var statearr_29391_29424 = state_29387__$1;
(statearr_29391_29424[(1)] = (6));

} else {
var statearr_29392_29425 = state_29387__$1;
(statearr_29392_29425[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (15))){
var inst_29383 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29393_29426 = state_29387__$1;
(statearr_29393_29426[(2)] = inst_29383);

(statearr_29393_29426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (13))){
var inst_29376 = cljs.core.async.close_BANG_.call(null,out);
var state_29387__$1 = state_29387;
var statearr_29394_29427 = state_29387__$1;
(statearr_29394_29427[(2)] = inst_29376);

(statearr_29394_29427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (6))){
var state_29387__$1 = state_29387;
var statearr_29395_29428 = state_29387__$1;
(statearr_29395_29428[(2)] = null);

(statearr_29395_29428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (3))){
var inst_29385 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29387__$1,inst_29385);
} else {
if((state_val_29388 === (12))){
var inst_29373 = (state_29387[(8)]);
var inst_29373__$1 = (state_29387[(2)]);
var inst_29374 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29373__$1);
var state_29387__$1 = (function (){var statearr_29396 = state_29387;
(statearr_29396[(8)] = inst_29373__$1);

return statearr_29396;
})();
if(cljs.core.truth_(inst_29374)){
var statearr_29397_29429 = state_29387__$1;
(statearr_29397_29429[(1)] = (13));

} else {
var statearr_29398_29430 = state_29387__$1;
(statearr_29398_29430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (2))){
var inst_29350 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29351 = (0);
var state_29387__$1 = (function (){var statearr_29399 = state_29387;
(statearr_29399[(7)] = inst_29351);

(statearr_29399[(9)] = inst_29350);

return statearr_29399;
})();
var statearr_29400_29431 = state_29387__$1;
(statearr_29400_29431[(2)] = null);

(statearr_29400_29431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (11))){
var inst_29351 = (state_29387[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29387,(10),Object,null,(9));
var inst_29360 = chs__$1.call(null,inst_29351);
var inst_29361 = done.call(null,inst_29351);
var inst_29362 = cljs.core.async.take_BANG_.call(null,inst_29360,inst_29361);
var state_29387__$1 = state_29387;
var statearr_29401_29432 = state_29387__$1;
(statearr_29401_29432[(2)] = inst_29362);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (9))){
var inst_29351 = (state_29387[(7)]);
var inst_29364 = (state_29387[(2)]);
var inst_29365 = (inst_29351 + (1));
var inst_29351__$1 = inst_29365;
var state_29387__$1 = (function (){var statearr_29402 = state_29387;
(statearr_29402[(7)] = inst_29351__$1);

(statearr_29402[(10)] = inst_29364);

return statearr_29402;
})();
var statearr_29403_29433 = state_29387__$1;
(statearr_29403_29433[(2)] = null);

(statearr_29403_29433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (5))){
var inst_29371 = (state_29387[(2)]);
var state_29387__$1 = (function (){var statearr_29404 = state_29387;
(statearr_29404[(11)] = inst_29371);

return statearr_29404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29387__$1,(12),dchan);
} else {
if((state_val_29388 === (14))){
var inst_29373 = (state_29387[(8)]);
var inst_29378 = cljs.core.apply.call(null,f,inst_29373);
var state_29387__$1 = state_29387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29387__$1,(16),out,inst_29378);
} else {
if((state_val_29388 === (16))){
var inst_29380 = (state_29387[(2)]);
var state_29387__$1 = (function (){var statearr_29405 = state_29387;
(statearr_29405[(12)] = inst_29380);

return statearr_29405;
})();
var statearr_29406_29434 = state_29387__$1;
(statearr_29406_29434[(2)] = null);

(statearr_29406_29434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (10))){
var inst_29355 = (state_29387[(2)]);
var inst_29356 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29387__$1 = (function (){var statearr_29407 = state_29387;
(statearr_29407[(13)] = inst_29355);

return statearr_29407;
})();
var statearr_29408_29435 = state_29387__$1;
(statearr_29408_29435[(2)] = inst_29356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29388 === (8))){
var inst_29369 = (state_29387[(2)]);
var state_29387__$1 = state_29387;
var statearr_29409_29436 = state_29387__$1;
(statearr_29409_29436[(2)] = inst_29369);

(statearr_29409_29436[(1)] = (5));


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
});})(c__27377__auto___29421,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27265__auto__,c__27377__auto___29421,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_29413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29413[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_29413[(1)] = (1));

return statearr_29413;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_29387){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_29387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e29414){if((e29414 instanceof Object)){
var ex__27269__auto__ = e29414;
var statearr_29415_29437 = state_29387;
(statearr_29415_29437[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29438 = state_29387;
state_29387 = G__29438;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_29387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_29387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___29421,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27379__auto__ = (function (){var statearr_29416 = f__27378__auto__.call(null);
(statearr_29416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___29421);

return statearr_29416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___29421,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29440 = [];
var len__26280__auto___29498 = arguments.length;
var i__26281__auto___29499 = (0);
while(true){
if((i__26281__auto___29499 < len__26280__auto___29498)){
args29440.push((arguments[i__26281__auto___29499]));

var G__29500 = (i__26281__auto___29499 + (1));
i__26281__auto___29499 = G__29500;
continue;
} else {
}
break;
}

var G__29442 = args29440.length;
switch (G__29442) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29440.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27377__auto___29502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___29502,out){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___29502,out){
return (function (state_29474){
var state_val_29475 = (state_29474[(1)]);
if((state_val_29475 === (7))){
var inst_29454 = (state_29474[(7)]);
var inst_29453 = (state_29474[(8)]);
var inst_29453__$1 = (state_29474[(2)]);
var inst_29454__$1 = cljs.core.nth.call(null,inst_29453__$1,(0),null);
var inst_29455 = cljs.core.nth.call(null,inst_29453__$1,(1),null);
var inst_29456 = (inst_29454__$1 == null);
var state_29474__$1 = (function (){var statearr_29476 = state_29474;
(statearr_29476[(7)] = inst_29454__$1);

(statearr_29476[(8)] = inst_29453__$1);

(statearr_29476[(9)] = inst_29455);

return statearr_29476;
})();
if(cljs.core.truth_(inst_29456)){
var statearr_29477_29503 = state_29474__$1;
(statearr_29477_29503[(1)] = (8));

} else {
var statearr_29478_29504 = state_29474__$1;
(statearr_29478_29504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (1))){
var inst_29443 = cljs.core.vec.call(null,chs);
var inst_29444 = inst_29443;
var state_29474__$1 = (function (){var statearr_29479 = state_29474;
(statearr_29479[(10)] = inst_29444);

return statearr_29479;
})();
var statearr_29480_29505 = state_29474__$1;
(statearr_29480_29505[(2)] = null);

(statearr_29480_29505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (4))){
var inst_29444 = (state_29474[(10)]);
var state_29474__$1 = state_29474;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29474__$1,(7),inst_29444);
} else {
if((state_val_29475 === (6))){
var inst_29470 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
var statearr_29481_29506 = state_29474__$1;
(statearr_29481_29506[(2)] = inst_29470);

(statearr_29481_29506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (3))){
var inst_29472 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29474__$1,inst_29472);
} else {
if((state_val_29475 === (2))){
var inst_29444 = (state_29474[(10)]);
var inst_29446 = cljs.core.count.call(null,inst_29444);
var inst_29447 = (inst_29446 > (0));
var state_29474__$1 = state_29474;
if(cljs.core.truth_(inst_29447)){
var statearr_29483_29507 = state_29474__$1;
(statearr_29483_29507[(1)] = (4));

} else {
var statearr_29484_29508 = state_29474__$1;
(statearr_29484_29508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (11))){
var inst_29444 = (state_29474[(10)]);
var inst_29463 = (state_29474[(2)]);
var tmp29482 = inst_29444;
var inst_29444__$1 = tmp29482;
var state_29474__$1 = (function (){var statearr_29485 = state_29474;
(statearr_29485[(11)] = inst_29463);

(statearr_29485[(10)] = inst_29444__$1);

return statearr_29485;
})();
var statearr_29486_29509 = state_29474__$1;
(statearr_29486_29509[(2)] = null);

(statearr_29486_29509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (9))){
var inst_29454 = (state_29474[(7)]);
var state_29474__$1 = state_29474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29474__$1,(11),out,inst_29454);
} else {
if((state_val_29475 === (5))){
var inst_29468 = cljs.core.async.close_BANG_.call(null,out);
var state_29474__$1 = state_29474;
var statearr_29487_29510 = state_29474__$1;
(statearr_29487_29510[(2)] = inst_29468);

(statearr_29487_29510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (10))){
var inst_29466 = (state_29474[(2)]);
var state_29474__$1 = state_29474;
var statearr_29488_29511 = state_29474__$1;
(statearr_29488_29511[(2)] = inst_29466);

(statearr_29488_29511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29475 === (8))){
var inst_29454 = (state_29474[(7)]);
var inst_29453 = (state_29474[(8)]);
var inst_29455 = (state_29474[(9)]);
var inst_29444 = (state_29474[(10)]);
var inst_29458 = (function (){var cs = inst_29444;
var vec__29449 = inst_29453;
var v = inst_29454;
var c = inst_29455;
return ((function (cs,vec__29449,v,c,inst_29454,inst_29453,inst_29455,inst_29444,state_val_29475,c__27377__auto___29502,out){
return (function (p1__29439_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29439_SHARP_);
});
;})(cs,vec__29449,v,c,inst_29454,inst_29453,inst_29455,inst_29444,state_val_29475,c__27377__auto___29502,out))
})();
var inst_29459 = cljs.core.filterv.call(null,inst_29458,inst_29444);
var inst_29444__$1 = inst_29459;
var state_29474__$1 = (function (){var statearr_29489 = state_29474;
(statearr_29489[(10)] = inst_29444__$1);

return statearr_29489;
})();
var statearr_29490_29512 = state_29474__$1;
(statearr_29490_29512[(2)] = null);

(statearr_29490_29512[(1)] = (2));


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
});})(c__27377__auto___29502,out))
;
return ((function (switch__27265__auto__,c__27377__auto___29502,out){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_29494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29494[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_29494[(1)] = (1));

return statearr_29494;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_29474){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_29474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e29495){if((e29495 instanceof Object)){
var ex__27269__auto__ = e29495;
var statearr_29496_29513 = state_29474;
(statearr_29496_29513[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29514 = state_29474;
state_29474 = G__29514;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_29474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_29474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___29502,out))
})();
var state__27379__auto__ = (function (){var statearr_29497 = f__27378__auto__.call(null);
(statearr_29497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___29502);

return statearr_29497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___29502,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29515 = [];
var len__26280__auto___29564 = arguments.length;
var i__26281__auto___29565 = (0);
while(true){
if((i__26281__auto___29565 < len__26280__auto___29564)){
args29515.push((arguments[i__26281__auto___29565]));

var G__29566 = (i__26281__auto___29565 + (1));
i__26281__auto___29565 = G__29566;
continue;
} else {
}
break;
}

var G__29517 = args29515.length;
switch (G__29517) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29515.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27377__auto___29568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___29568,out){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___29568,out){
return (function (state_29541){
var state_val_29542 = (state_29541[(1)]);
if((state_val_29542 === (7))){
var inst_29523 = (state_29541[(7)]);
var inst_29523__$1 = (state_29541[(2)]);
var inst_29524 = (inst_29523__$1 == null);
var inst_29525 = cljs.core.not.call(null,inst_29524);
var state_29541__$1 = (function (){var statearr_29543 = state_29541;
(statearr_29543[(7)] = inst_29523__$1);

return statearr_29543;
})();
if(inst_29525){
var statearr_29544_29569 = state_29541__$1;
(statearr_29544_29569[(1)] = (8));

} else {
var statearr_29545_29570 = state_29541__$1;
(statearr_29545_29570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29542 === (1))){
var inst_29518 = (0);
var state_29541__$1 = (function (){var statearr_29546 = state_29541;
(statearr_29546[(8)] = inst_29518);

return statearr_29546;
})();
var statearr_29547_29571 = state_29541__$1;
(statearr_29547_29571[(2)] = null);

(statearr_29547_29571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29542 === (4))){
var state_29541__$1 = state_29541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29541__$1,(7),ch);
} else {
if((state_val_29542 === (6))){
var inst_29536 = (state_29541[(2)]);
var state_29541__$1 = state_29541;
var statearr_29548_29572 = state_29541__$1;
(statearr_29548_29572[(2)] = inst_29536);

(statearr_29548_29572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29542 === (3))){
var inst_29538 = (state_29541[(2)]);
var inst_29539 = cljs.core.async.close_BANG_.call(null,out);
var state_29541__$1 = (function (){var statearr_29549 = state_29541;
(statearr_29549[(9)] = inst_29538);

return statearr_29549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29541__$1,inst_29539);
} else {
if((state_val_29542 === (2))){
var inst_29518 = (state_29541[(8)]);
var inst_29520 = (inst_29518 < n);
var state_29541__$1 = state_29541;
if(cljs.core.truth_(inst_29520)){
var statearr_29550_29573 = state_29541__$1;
(statearr_29550_29573[(1)] = (4));

} else {
var statearr_29551_29574 = state_29541__$1;
(statearr_29551_29574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29542 === (11))){
var inst_29518 = (state_29541[(8)]);
var inst_29528 = (state_29541[(2)]);
var inst_29529 = (inst_29518 + (1));
var inst_29518__$1 = inst_29529;
var state_29541__$1 = (function (){var statearr_29552 = state_29541;
(statearr_29552[(8)] = inst_29518__$1);

(statearr_29552[(10)] = inst_29528);

return statearr_29552;
})();
var statearr_29553_29575 = state_29541__$1;
(statearr_29553_29575[(2)] = null);

(statearr_29553_29575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29542 === (9))){
var state_29541__$1 = state_29541;
var statearr_29554_29576 = state_29541__$1;
(statearr_29554_29576[(2)] = null);

(statearr_29554_29576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29542 === (5))){
var state_29541__$1 = state_29541;
var statearr_29555_29577 = state_29541__$1;
(statearr_29555_29577[(2)] = null);

(statearr_29555_29577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29542 === (10))){
var inst_29533 = (state_29541[(2)]);
var state_29541__$1 = state_29541;
var statearr_29556_29578 = state_29541__$1;
(statearr_29556_29578[(2)] = inst_29533);

(statearr_29556_29578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29542 === (8))){
var inst_29523 = (state_29541[(7)]);
var state_29541__$1 = state_29541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29541__$1,(11),out,inst_29523);
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
});})(c__27377__auto___29568,out))
;
return ((function (switch__27265__auto__,c__27377__auto___29568,out){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_29560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29560[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_29560[(1)] = (1));

return statearr_29560;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_29541){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_29541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e29561){if((e29561 instanceof Object)){
var ex__27269__auto__ = e29561;
var statearr_29562_29579 = state_29541;
(statearr_29562_29579[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29580 = state_29541;
state_29541 = G__29580;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_29541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_29541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___29568,out))
})();
var state__27379__auto__ = (function (){var statearr_29563 = f__27378__auto__.call(null);
(statearr_29563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___29568);

return statearr_29563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___29568,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29588 = (function (f,ch,meta29589){
this.f = f;
this.ch = ch;
this.meta29589 = meta29589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29590,meta29589__$1){
var self__ = this;
var _29590__$1 = this;
return (new cljs.core.async.t_cljs$core$async29588(self__.f,self__.ch,meta29589__$1));
});

cljs.core.async.t_cljs$core$async29588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29590){
var self__ = this;
var _29590__$1 = this;
return self__.meta29589;
});

cljs.core.async.t_cljs$core$async29588.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29588.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29591 = (function (f,ch,meta29589,_,fn1,meta29592){
this.f = f;
this.ch = ch;
this.meta29589 = meta29589;
this._ = _;
this.fn1 = fn1;
this.meta29592 = meta29592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29593,meta29592__$1){
var self__ = this;
var _29593__$1 = this;
return (new cljs.core.async.t_cljs$core$async29591(self__.f,self__.ch,self__.meta29589,self__._,self__.fn1,meta29592__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29593){
var self__ = this;
var _29593__$1 = this;
return self__.meta29592;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29581_SHARP_){
return f1.call(null,(((p1__29581_SHARP_ == null))?null:self__.f.call(null,p1__29581_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29591.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29589","meta29589",310903650,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29588","cljs.core.async/t_cljs$core$async29588",-918715730,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29592","meta29592",-155858966,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29591";

cljs.core.async.t_cljs$core$async29591.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async29591");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29591 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29591(f__$1,ch__$1,meta29589__$1,___$2,fn1__$1,meta29592){
return (new cljs.core.async.t_cljs$core$async29591(f__$1,ch__$1,meta29589__$1,___$2,fn1__$1,meta29592));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29591(self__.f,self__.ch,self__.meta29589,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25160__auto__ = ret;
if(cljs.core.truth_(and__25160__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25160__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29588.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29589","meta29589",310903650,null)], null);
});

cljs.core.async.t_cljs$core$async29588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29588";

cljs.core.async.t_cljs$core$async29588.cljs$lang$ctorPrWriter = (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async29588");
});

cljs.core.async.__GT_t_cljs$core$async29588 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29588(f__$1,ch__$1,meta29589){
return (new cljs.core.async.t_cljs$core$async29588(f__$1,ch__$1,meta29589));
});

}

return (new cljs.core.async.t_cljs$core$async29588(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29597 = (function (f,ch,meta29598){
this.f = f;
this.ch = ch;
this.meta29598 = meta29598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29599,meta29598__$1){
var self__ = this;
var _29599__$1 = this;
return (new cljs.core.async.t_cljs$core$async29597(self__.f,self__.ch,meta29598__$1));
});

cljs.core.async.t_cljs$core$async29597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29599){
var self__ = this;
var _29599__$1 = this;
return self__.meta29598;
});

cljs.core.async.t_cljs$core$async29597.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29597.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29597.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29598","meta29598",1866844829,null)], null);
});

cljs.core.async.t_cljs$core$async29597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29597";

cljs.core.async.t_cljs$core$async29597.cljs$lang$ctorPrWriter = (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async29597");
});

cljs.core.async.__GT_t_cljs$core$async29597 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29597(f__$1,ch__$1,meta29598){
return (new cljs.core.async.t_cljs$core$async29597(f__$1,ch__$1,meta29598));
});

}

return (new cljs.core.async.t_cljs$core$async29597(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29603 = (function (p,ch,meta29604){
this.p = p;
this.ch = ch;
this.meta29604 = meta29604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29605,meta29604__$1){
var self__ = this;
var _29605__$1 = this;
return (new cljs.core.async.t_cljs$core$async29603(self__.p,self__.ch,meta29604__$1));
});

cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29605){
var self__ = this;
var _29605__$1 = this;
return self__.meta29604;
});

cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29604","meta29604",553503717,null)], null);
});

cljs.core.async.t_cljs$core$async29603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29603";

cljs.core.async.t_cljs$core$async29603.cljs$lang$ctorPrWriter = (function (this__25778__auto__,writer__25779__auto__,opt__25780__auto__){
return cljs.core._write.call(null,writer__25779__auto__,"cljs.core.async/t_cljs$core$async29603");
});

cljs.core.async.__GT_t_cljs$core$async29603 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29603(p__$1,ch__$1,meta29604){
return (new cljs.core.async.t_cljs$core$async29603(p__$1,ch__$1,meta29604));
});

}

return (new cljs.core.async.t_cljs$core$async29603(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29606 = [];
var len__26280__auto___29650 = arguments.length;
var i__26281__auto___29651 = (0);
while(true){
if((i__26281__auto___29651 < len__26280__auto___29650)){
args29606.push((arguments[i__26281__auto___29651]));

var G__29652 = (i__26281__auto___29651 + (1));
i__26281__auto___29651 = G__29652;
continue;
} else {
}
break;
}

var G__29608 = args29606.length;
switch (G__29608) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29606.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27377__auto___29654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___29654,out){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___29654,out){
return (function (state_29629){
var state_val_29630 = (state_29629[(1)]);
if((state_val_29630 === (7))){
var inst_29625 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29631_29655 = state_29629__$1;
(statearr_29631_29655[(2)] = inst_29625);

(statearr_29631_29655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (1))){
var state_29629__$1 = state_29629;
var statearr_29632_29656 = state_29629__$1;
(statearr_29632_29656[(2)] = null);

(statearr_29632_29656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (4))){
var inst_29611 = (state_29629[(7)]);
var inst_29611__$1 = (state_29629[(2)]);
var inst_29612 = (inst_29611__$1 == null);
var state_29629__$1 = (function (){var statearr_29633 = state_29629;
(statearr_29633[(7)] = inst_29611__$1);

return statearr_29633;
})();
if(cljs.core.truth_(inst_29612)){
var statearr_29634_29657 = state_29629__$1;
(statearr_29634_29657[(1)] = (5));

} else {
var statearr_29635_29658 = state_29629__$1;
(statearr_29635_29658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (6))){
var inst_29611 = (state_29629[(7)]);
var inst_29616 = p.call(null,inst_29611);
var state_29629__$1 = state_29629;
if(cljs.core.truth_(inst_29616)){
var statearr_29636_29659 = state_29629__$1;
(statearr_29636_29659[(1)] = (8));

} else {
var statearr_29637_29660 = state_29629__$1;
(statearr_29637_29660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (3))){
var inst_29627 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29629__$1,inst_29627);
} else {
if((state_val_29630 === (2))){
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29629__$1,(4),ch);
} else {
if((state_val_29630 === (11))){
var inst_29619 = (state_29629[(2)]);
var state_29629__$1 = state_29629;
var statearr_29638_29661 = state_29629__$1;
(statearr_29638_29661[(2)] = inst_29619);

(statearr_29638_29661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (9))){
var state_29629__$1 = state_29629;
var statearr_29639_29662 = state_29629__$1;
(statearr_29639_29662[(2)] = null);

(statearr_29639_29662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (5))){
var inst_29614 = cljs.core.async.close_BANG_.call(null,out);
var state_29629__$1 = state_29629;
var statearr_29640_29663 = state_29629__$1;
(statearr_29640_29663[(2)] = inst_29614);

(statearr_29640_29663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (10))){
var inst_29622 = (state_29629[(2)]);
var state_29629__$1 = (function (){var statearr_29641 = state_29629;
(statearr_29641[(8)] = inst_29622);

return statearr_29641;
})();
var statearr_29642_29664 = state_29629__$1;
(statearr_29642_29664[(2)] = null);

(statearr_29642_29664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29630 === (8))){
var inst_29611 = (state_29629[(7)]);
var state_29629__$1 = state_29629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29629__$1,(11),out,inst_29611);
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
});})(c__27377__auto___29654,out))
;
return ((function (switch__27265__auto__,c__27377__auto___29654,out){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_29646 = [null,null,null,null,null,null,null,null,null];
(statearr_29646[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_29646[(1)] = (1));

return statearr_29646;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_29629){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_29629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e29647){if((e29647 instanceof Object)){
var ex__27269__auto__ = e29647;
var statearr_29648_29665 = state_29629;
(statearr_29648_29665[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29666 = state_29629;
state_29629 = G__29666;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_29629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_29629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___29654,out))
})();
var state__27379__auto__ = (function (){var statearr_29649 = f__27378__auto__.call(null);
(statearr_29649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___29654);

return statearr_29649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___29654,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29667 = [];
var len__26280__auto___29670 = arguments.length;
var i__26281__auto___29671 = (0);
while(true){
if((i__26281__auto___29671 < len__26280__auto___29670)){
args29667.push((arguments[i__26281__auto___29671]));

var G__29672 = (i__26281__auto___29671 + (1));
i__26281__auto___29671 = G__29672;
continue;
} else {
}
break;
}

var G__29669 = args29667.length;
switch (G__29669) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29667.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27377__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto__){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto__){
return (function (state_29839){
var state_val_29840 = (state_29839[(1)]);
if((state_val_29840 === (7))){
var inst_29835 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29841_29882 = state_29839__$1;
(statearr_29841_29882[(2)] = inst_29835);

(statearr_29841_29882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (20))){
var inst_29805 = (state_29839[(7)]);
var inst_29816 = (state_29839[(2)]);
var inst_29817 = cljs.core.next.call(null,inst_29805);
var inst_29791 = inst_29817;
var inst_29792 = null;
var inst_29793 = (0);
var inst_29794 = (0);
var state_29839__$1 = (function (){var statearr_29842 = state_29839;
(statearr_29842[(8)] = inst_29816);

(statearr_29842[(9)] = inst_29791);

(statearr_29842[(10)] = inst_29792);

(statearr_29842[(11)] = inst_29794);

(statearr_29842[(12)] = inst_29793);

return statearr_29842;
})();
var statearr_29843_29883 = state_29839__$1;
(statearr_29843_29883[(2)] = null);

(statearr_29843_29883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (1))){
var state_29839__$1 = state_29839;
var statearr_29844_29884 = state_29839__$1;
(statearr_29844_29884[(2)] = null);

(statearr_29844_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (4))){
var inst_29780 = (state_29839[(13)]);
var inst_29780__$1 = (state_29839[(2)]);
var inst_29781 = (inst_29780__$1 == null);
var state_29839__$1 = (function (){var statearr_29845 = state_29839;
(statearr_29845[(13)] = inst_29780__$1);

return statearr_29845;
})();
if(cljs.core.truth_(inst_29781)){
var statearr_29846_29885 = state_29839__$1;
(statearr_29846_29885[(1)] = (5));

} else {
var statearr_29847_29886 = state_29839__$1;
(statearr_29847_29886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (15))){
var state_29839__$1 = state_29839;
var statearr_29851_29887 = state_29839__$1;
(statearr_29851_29887[(2)] = null);

(statearr_29851_29887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (21))){
var state_29839__$1 = state_29839;
var statearr_29852_29888 = state_29839__$1;
(statearr_29852_29888[(2)] = null);

(statearr_29852_29888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (13))){
var inst_29791 = (state_29839[(9)]);
var inst_29792 = (state_29839[(10)]);
var inst_29794 = (state_29839[(11)]);
var inst_29793 = (state_29839[(12)]);
var inst_29801 = (state_29839[(2)]);
var inst_29802 = (inst_29794 + (1));
var tmp29848 = inst_29791;
var tmp29849 = inst_29792;
var tmp29850 = inst_29793;
var inst_29791__$1 = tmp29848;
var inst_29792__$1 = tmp29849;
var inst_29793__$1 = tmp29850;
var inst_29794__$1 = inst_29802;
var state_29839__$1 = (function (){var statearr_29853 = state_29839;
(statearr_29853[(9)] = inst_29791__$1);

(statearr_29853[(10)] = inst_29792__$1);

(statearr_29853[(14)] = inst_29801);

(statearr_29853[(11)] = inst_29794__$1);

(statearr_29853[(12)] = inst_29793__$1);

return statearr_29853;
})();
var statearr_29854_29889 = state_29839__$1;
(statearr_29854_29889[(2)] = null);

(statearr_29854_29889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (22))){
var state_29839__$1 = state_29839;
var statearr_29855_29890 = state_29839__$1;
(statearr_29855_29890[(2)] = null);

(statearr_29855_29890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (6))){
var inst_29780 = (state_29839[(13)]);
var inst_29789 = f.call(null,inst_29780);
var inst_29790 = cljs.core.seq.call(null,inst_29789);
var inst_29791 = inst_29790;
var inst_29792 = null;
var inst_29793 = (0);
var inst_29794 = (0);
var state_29839__$1 = (function (){var statearr_29856 = state_29839;
(statearr_29856[(9)] = inst_29791);

(statearr_29856[(10)] = inst_29792);

(statearr_29856[(11)] = inst_29794);

(statearr_29856[(12)] = inst_29793);

return statearr_29856;
})();
var statearr_29857_29891 = state_29839__$1;
(statearr_29857_29891[(2)] = null);

(statearr_29857_29891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (17))){
var inst_29805 = (state_29839[(7)]);
var inst_29809 = cljs.core.chunk_first.call(null,inst_29805);
var inst_29810 = cljs.core.chunk_rest.call(null,inst_29805);
var inst_29811 = cljs.core.count.call(null,inst_29809);
var inst_29791 = inst_29810;
var inst_29792 = inst_29809;
var inst_29793 = inst_29811;
var inst_29794 = (0);
var state_29839__$1 = (function (){var statearr_29858 = state_29839;
(statearr_29858[(9)] = inst_29791);

(statearr_29858[(10)] = inst_29792);

(statearr_29858[(11)] = inst_29794);

(statearr_29858[(12)] = inst_29793);

return statearr_29858;
})();
var statearr_29859_29892 = state_29839__$1;
(statearr_29859_29892[(2)] = null);

(statearr_29859_29892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (3))){
var inst_29837 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29839__$1,inst_29837);
} else {
if((state_val_29840 === (12))){
var inst_29825 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29860_29893 = state_29839__$1;
(statearr_29860_29893[(2)] = inst_29825);

(statearr_29860_29893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (2))){
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29839__$1,(4),in$);
} else {
if((state_val_29840 === (23))){
var inst_29833 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29861_29894 = state_29839__$1;
(statearr_29861_29894[(2)] = inst_29833);

(statearr_29861_29894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (19))){
var inst_29820 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29862_29895 = state_29839__$1;
(statearr_29862_29895[(2)] = inst_29820);

(statearr_29862_29895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (11))){
var inst_29805 = (state_29839[(7)]);
var inst_29791 = (state_29839[(9)]);
var inst_29805__$1 = cljs.core.seq.call(null,inst_29791);
var state_29839__$1 = (function (){var statearr_29863 = state_29839;
(statearr_29863[(7)] = inst_29805__$1);

return statearr_29863;
})();
if(inst_29805__$1){
var statearr_29864_29896 = state_29839__$1;
(statearr_29864_29896[(1)] = (14));

} else {
var statearr_29865_29897 = state_29839__$1;
(statearr_29865_29897[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (9))){
var inst_29827 = (state_29839[(2)]);
var inst_29828 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29839__$1 = (function (){var statearr_29866 = state_29839;
(statearr_29866[(15)] = inst_29827);

return statearr_29866;
})();
if(cljs.core.truth_(inst_29828)){
var statearr_29867_29898 = state_29839__$1;
(statearr_29867_29898[(1)] = (21));

} else {
var statearr_29868_29899 = state_29839__$1;
(statearr_29868_29899[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (5))){
var inst_29783 = cljs.core.async.close_BANG_.call(null,out);
var state_29839__$1 = state_29839;
var statearr_29869_29900 = state_29839__$1;
(statearr_29869_29900[(2)] = inst_29783);

(statearr_29869_29900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (14))){
var inst_29805 = (state_29839[(7)]);
var inst_29807 = cljs.core.chunked_seq_QMARK_.call(null,inst_29805);
var state_29839__$1 = state_29839;
if(inst_29807){
var statearr_29870_29901 = state_29839__$1;
(statearr_29870_29901[(1)] = (17));

} else {
var statearr_29871_29902 = state_29839__$1;
(statearr_29871_29902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (16))){
var inst_29823 = (state_29839[(2)]);
var state_29839__$1 = state_29839;
var statearr_29872_29903 = state_29839__$1;
(statearr_29872_29903[(2)] = inst_29823);

(statearr_29872_29903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29840 === (10))){
var inst_29792 = (state_29839[(10)]);
var inst_29794 = (state_29839[(11)]);
var inst_29799 = cljs.core._nth.call(null,inst_29792,inst_29794);
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29839__$1,(13),out,inst_29799);
} else {
if((state_val_29840 === (18))){
var inst_29805 = (state_29839[(7)]);
var inst_29814 = cljs.core.first.call(null,inst_29805);
var state_29839__$1 = state_29839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29839__$1,(20),out,inst_29814);
} else {
if((state_val_29840 === (8))){
var inst_29794 = (state_29839[(11)]);
var inst_29793 = (state_29839[(12)]);
var inst_29796 = (inst_29794 < inst_29793);
var inst_29797 = inst_29796;
var state_29839__$1 = state_29839;
if(cljs.core.truth_(inst_29797)){
var statearr_29873_29904 = state_29839__$1;
(statearr_29873_29904[(1)] = (10));

} else {
var statearr_29874_29905 = state_29839__$1;
(statearr_29874_29905[(1)] = (11));

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
});})(c__27377__auto__))
;
return ((function (switch__27265__auto__,c__27377__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27266__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27266__auto____0 = (function (){
var statearr_29878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29878[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27266__auto__);

(statearr_29878[(1)] = (1));

return statearr_29878;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27266__auto____1 = (function (state_29839){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_29839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e29879){if((e29879 instanceof Object)){
var ex__27269__auto__ = e29879;
var statearr_29880_29906 = state_29839;
(statearr_29880_29906[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29907 = state_29839;
state_29839 = G__29907;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27266__auto__ = function(state_29839){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27266__auto____1.call(this,state_29839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27266__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27266__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto__))
})();
var state__27379__auto__ = (function (){var statearr_29881 = f__27378__auto__.call(null);
(statearr_29881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto__);

return statearr_29881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto__))
);

return c__27377__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29909 = [];
var len__26280__auto___29912 = arguments.length;
var i__26281__auto___29913 = (0);
while(true){
if((i__26281__auto___29913 < len__26280__auto___29912)){
args29909.push((arguments[i__26281__auto___29913]));

var G__29914 = (i__26281__auto___29913 + (1));
i__26281__auto___29913 = G__29914;
continue;
} else {
}
break;
}

var G__29911 = args29909.length;
switch (G__29911) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29909.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29916 = [];
var len__26280__auto___29919 = arguments.length;
var i__26281__auto___29920 = (0);
while(true){
if((i__26281__auto___29920 < len__26280__auto___29919)){
args29916.push((arguments[i__26281__auto___29920]));

var G__29921 = (i__26281__auto___29920 + (1));
i__26281__auto___29920 = G__29921;
continue;
} else {
}
break;
}

var G__29918 = args29916.length;
switch (G__29918) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29916.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29923 = [];
var len__26280__auto___29974 = arguments.length;
var i__26281__auto___29975 = (0);
while(true){
if((i__26281__auto___29975 < len__26280__auto___29974)){
args29923.push((arguments[i__26281__auto___29975]));

var G__29976 = (i__26281__auto___29975 + (1));
i__26281__auto___29975 = G__29976;
continue;
} else {
}
break;
}

var G__29925 = args29923.length;
switch (G__29925) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29923.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27377__auto___29978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___29978,out){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___29978,out){
return (function (state_29949){
var state_val_29950 = (state_29949[(1)]);
if((state_val_29950 === (7))){
var inst_29944 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
var statearr_29951_29979 = state_29949__$1;
(statearr_29951_29979[(2)] = inst_29944);

(statearr_29951_29979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (1))){
var inst_29926 = null;
var state_29949__$1 = (function (){var statearr_29952 = state_29949;
(statearr_29952[(7)] = inst_29926);

return statearr_29952;
})();
var statearr_29953_29980 = state_29949__$1;
(statearr_29953_29980[(2)] = null);

(statearr_29953_29980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (4))){
var inst_29929 = (state_29949[(8)]);
var inst_29929__$1 = (state_29949[(2)]);
var inst_29930 = (inst_29929__$1 == null);
var inst_29931 = cljs.core.not.call(null,inst_29930);
var state_29949__$1 = (function (){var statearr_29954 = state_29949;
(statearr_29954[(8)] = inst_29929__$1);

return statearr_29954;
})();
if(inst_29931){
var statearr_29955_29981 = state_29949__$1;
(statearr_29955_29981[(1)] = (5));

} else {
var statearr_29956_29982 = state_29949__$1;
(statearr_29956_29982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (6))){
var state_29949__$1 = state_29949;
var statearr_29957_29983 = state_29949__$1;
(statearr_29957_29983[(2)] = null);

(statearr_29957_29983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (3))){
var inst_29946 = (state_29949[(2)]);
var inst_29947 = cljs.core.async.close_BANG_.call(null,out);
var state_29949__$1 = (function (){var statearr_29958 = state_29949;
(statearr_29958[(9)] = inst_29946);

return statearr_29958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29949__$1,inst_29947);
} else {
if((state_val_29950 === (2))){
var state_29949__$1 = state_29949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29949__$1,(4),ch);
} else {
if((state_val_29950 === (11))){
var inst_29929 = (state_29949[(8)]);
var inst_29938 = (state_29949[(2)]);
var inst_29926 = inst_29929;
var state_29949__$1 = (function (){var statearr_29959 = state_29949;
(statearr_29959[(10)] = inst_29938);

(statearr_29959[(7)] = inst_29926);

return statearr_29959;
})();
var statearr_29960_29984 = state_29949__$1;
(statearr_29960_29984[(2)] = null);

(statearr_29960_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (9))){
var inst_29929 = (state_29949[(8)]);
var state_29949__$1 = state_29949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29949__$1,(11),out,inst_29929);
} else {
if((state_val_29950 === (5))){
var inst_29929 = (state_29949[(8)]);
var inst_29926 = (state_29949[(7)]);
var inst_29933 = cljs.core._EQ_.call(null,inst_29929,inst_29926);
var state_29949__$1 = state_29949;
if(inst_29933){
var statearr_29962_29985 = state_29949__$1;
(statearr_29962_29985[(1)] = (8));

} else {
var statearr_29963_29986 = state_29949__$1;
(statearr_29963_29986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (10))){
var inst_29941 = (state_29949[(2)]);
var state_29949__$1 = state_29949;
var statearr_29964_29987 = state_29949__$1;
(statearr_29964_29987[(2)] = inst_29941);

(statearr_29964_29987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29950 === (8))){
var inst_29926 = (state_29949[(7)]);
var tmp29961 = inst_29926;
var inst_29926__$1 = tmp29961;
var state_29949__$1 = (function (){var statearr_29965 = state_29949;
(statearr_29965[(7)] = inst_29926__$1);

return statearr_29965;
})();
var statearr_29966_29988 = state_29949__$1;
(statearr_29966_29988[(2)] = null);

(statearr_29966_29988[(1)] = (2));


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
});})(c__27377__auto___29978,out))
;
return ((function (switch__27265__auto__,c__27377__auto___29978,out){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_29970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29970[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_29970[(1)] = (1));

return statearr_29970;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_29949){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_29949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e29971){if((e29971 instanceof Object)){
var ex__27269__auto__ = e29971;
var statearr_29972_29989 = state_29949;
(statearr_29972_29989[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29990 = state_29949;
state_29949 = G__29990;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_29949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_29949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___29978,out))
})();
var state__27379__auto__ = (function (){var statearr_29973 = f__27378__auto__.call(null);
(statearr_29973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___29978);

return statearr_29973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___29978,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29991 = [];
var len__26280__auto___30061 = arguments.length;
var i__26281__auto___30062 = (0);
while(true){
if((i__26281__auto___30062 < len__26280__auto___30061)){
args29991.push((arguments[i__26281__auto___30062]));

var G__30063 = (i__26281__auto___30062 + (1));
i__26281__auto___30062 = G__30063;
continue;
} else {
}
break;
}

var G__29993 = args29991.length;
switch (G__29993) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29991.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27377__auto___30065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___30065,out){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___30065,out){
return (function (state_30031){
var state_val_30032 = (state_30031[(1)]);
if((state_val_30032 === (7))){
var inst_30027 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30033_30066 = state_30031__$1;
(statearr_30033_30066[(2)] = inst_30027);

(statearr_30033_30066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (1))){
var inst_29994 = (new Array(n));
var inst_29995 = inst_29994;
var inst_29996 = (0);
var state_30031__$1 = (function (){var statearr_30034 = state_30031;
(statearr_30034[(7)] = inst_29996);

(statearr_30034[(8)] = inst_29995);

return statearr_30034;
})();
var statearr_30035_30067 = state_30031__$1;
(statearr_30035_30067[(2)] = null);

(statearr_30035_30067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (4))){
var inst_29999 = (state_30031[(9)]);
var inst_29999__$1 = (state_30031[(2)]);
var inst_30000 = (inst_29999__$1 == null);
var inst_30001 = cljs.core.not.call(null,inst_30000);
var state_30031__$1 = (function (){var statearr_30036 = state_30031;
(statearr_30036[(9)] = inst_29999__$1);

return statearr_30036;
})();
if(inst_30001){
var statearr_30037_30068 = state_30031__$1;
(statearr_30037_30068[(1)] = (5));

} else {
var statearr_30038_30069 = state_30031__$1;
(statearr_30038_30069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (15))){
var inst_30021 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30039_30070 = state_30031__$1;
(statearr_30039_30070[(2)] = inst_30021);

(statearr_30039_30070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (13))){
var state_30031__$1 = state_30031;
var statearr_30040_30071 = state_30031__$1;
(statearr_30040_30071[(2)] = null);

(statearr_30040_30071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (6))){
var inst_29996 = (state_30031[(7)]);
var inst_30017 = (inst_29996 > (0));
var state_30031__$1 = state_30031;
if(cljs.core.truth_(inst_30017)){
var statearr_30041_30072 = state_30031__$1;
(statearr_30041_30072[(1)] = (12));

} else {
var statearr_30042_30073 = state_30031__$1;
(statearr_30042_30073[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (3))){
var inst_30029 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30031__$1,inst_30029);
} else {
if((state_val_30032 === (12))){
var inst_29995 = (state_30031[(8)]);
var inst_30019 = cljs.core.vec.call(null,inst_29995);
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30031__$1,(15),out,inst_30019);
} else {
if((state_val_30032 === (2))){
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30031__$1,(4),ch);
} else {
if((state_val_30032 === (11))){
var inst_30011 = (state_30031[(2)]);
var inst_30012 = (new Array(n));
var inst_29995 = inst_30012;
var inst_29996 = (0);
var state_30031__$1 = (function (){var statearr_30043 = state_30031;
(statearr_30043[(10)] = inst_30011);

(statearr_30043[(7)] = inst_29996);

(statearr_30043[(8)] = inst_29995);

return statearr_30043;
})();
var statearr_30044_30074 = state_30031__$1;
(statearr_30044_30074[(2)] = null);

(statearr_30044_30074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (9))){
var inst_29995 = (state_30031[(8)]);
var inst_30009 = cljs.core.vec.call(null,inst_29995);
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30031__$1,(11),out,inst_30009);
} else {
if((state_val_30032 === (5))){
var inst_30004 = (state_30031[(11)]);
var inst_29996 = (state_30031[(7)]);
var inst_29999 = (state_30031[(9)]);
var inst_29995 = (state_30031[(8)]);
var inst_30003 = (inst_29995[inst_29996] = inst_29999);
var inst_30004__$1 = (inst_29996 + (1));
var inst_30005 = (inst_30004__$1 < n);
var state_30031__$1 = (function (){var statearr_30045 = state_30031;
(statearr_30045[(11)] = inst_30004__$1);

(statearr_30045[(12)] = inst_30003);

return statearr_30045;
})();
if(cljs.core.truth_(inst_30005)){
var statearr_30046_30075 = state_30031__$1;
(statearr_30046_30075[(1)] = (8));

} else {
var statearr_30047_30076 = state_30031__$1;
(statearr_30047_30076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (14))){
var inst_30024 = (state_30031[(2)]);
var inst_30025 = cljs.core.async.close_BANG_.call(null,out);
var state_30031__$1 = (function (){var statearr_30049 = state_30031;
(statearr_30049[(13)] = inst_30024);

return statearr_30049;
})();
var statearr_30050_30077 = state_30031__$1;
(statearr_30050_30077[(2)] = inst_30025);

(statearr_30050_30077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (10))){
var inst_30015 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30051_30078 = state_30031__$1;
(statearr_30051_30078[(2)] = inst_30015);

(statearr_30051_30078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (8))){
var inst_30004 = (state_30031[(11)]);
var inst_29995 = (state_30031[(8)]);
var tmp30048 = inst_29995;
var inst_29995__$1 = tmp30048;
var inst_29996 = inst_30004;
var state_30031__$1 = (function (){var statearr_30052 = state_30031;
(statearr_30052[(7)] = inst_29996);

(statearr_30052[(8)] = inst_29995__$1);

return statearr_30052;
})();
var statearr_30053_30079 = state_30031__$1;
(statearr_30053_30079[(2)] = null);

(statearr_30053_30079[(1)] = (2));


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
});})(c__27377__auto___30065,out))
;
return ((function (switch__27265__auto__,c__27377__auto___30065,out){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_30057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30057[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_30057[(1)] = (1));

return statearr_30057;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_30031){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_30031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e30058){if((e30058 instanceof Object)){
var ex__27269__auto__ = e30058;
var statearr_30059_30080 = state_30031;
(statearr_30059_30080[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30081 = state_30031;
state_30031 = G__30081;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_30031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_30031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___30065,out))
})();
var state__27379__auto__ = (function (){var statearr_30060 = f__27378__auto__.call(null);
(statearr_30060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___30065);

return statearr_30060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___30065,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30082 = [];
var len__26280__auto___30156 = arguments.length;
var i__26281__auto___30157 = (0);
while(true){
if((i__26281__auto___30157 < len__26280__auto___30156)){
args30082.push((arguments[i__26281__auto___30157]));

var G__30158 = (i__26281__auto___30157 + (1));
i__26281__auto___30157 = G__30158;
continue;
} else {
}
break;
}

var G__30084 = args30082.length;
switch (G__30084) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30082.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27377__auto___30160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27377__auto___30160,out){
return (function (){
var f__27378__auto__ = (function (){var switch__27265__auto__ = ((function (c__27377__auto___30160,out){
return (function (state_30126){
var state_val_30127 = (state_30126[(1)]);
if((state_val_30127 === (7))){
var inst_30122 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
var statearr_30128_30161 = state_30126__$1;
(statearr_30128_30161[(2)] = inst_30122);

(statearr_30128_30161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (1))){
var inst_30085 = [];
var inst_30086 = inst_30085;
var inst_30087 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30126__$1 = (function (){var statearr_30129 = state_30126;
(statearr_30129[(7)] = inst_30086);

(statearr_30129[(8)] = inst_30087);

return statearr_30129;
})();
var statearr_30130_30162 = state_30126__$1;
(statearr_30130_30162[(2)] = null);

(statearr_30130_30162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (4))){
var inst_30090 = (state_30126[(9)]);
var inst_30090__$1 = (state_30126[(2)]);
var inst_30091 = (inst_30090__$1 == null);
var inst_30092 = cljs.core.not.call(null,inst_30091);
var state_30126__$1 = (function (){var statearr_30131 = state_30126;
(statearr_30131[(9)] = inst_30090__$1);

return statearr_30131;
})();
if(inst_30092){
var statearr_30132_30163 = state_30126__$1;
(statearr_30132_30163[(1)] = (5));

} else {
var statearr_30133_30164 = state_30126__$1;
(statearr_30133_30164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (15))){
var inst_30116 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
var statearr_30134_30165 = state_30126__$1;
(statearr_30134_30165[(2)] = inst_30116);

(statearr_30134_30165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (13))){
var state_30126__$1 = state_30126;
var statearr_30135_30166 = state_30126__$1;
(statearr_30135_30166[(2)] = null);

(statearr_30135_30166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (6))){
var inst_30086 = (state_30126[(7)]);
var inst_30111 = inst_30086.length;
var inst_30112 = (inst_30111 > (0));
var state_30126__$1 = state_30126;
if(cljs.core.truth_(inst_30112)){
var statearr_30136_30167 = state_30126__$1;
(statearr_30136_30167[(1)] = (12));

} else {
var statearr_30137_30168 = state_30126__$1;
(statearr_30137_30168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (3))){
var inst_30124 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30126__$1,inst_30124);
} else {
if((state_val_30127 === (12))){
var inst_30086 = (state_30126[(7)]);
var inst_30114 = cljs.core.vec.call(null,inst_30086);
var state_30126__$1 = state_30126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30126__$1,(15),out,inst_30114);
} else {
if((state_val_30127 === (2))){
var state_30126__$1 = state_30126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30126__$1,(4),ch);
} else {
if((state_val_30127 === (11))){
var inst_30090 = (state_30126[(9)]);
var inst_30094 = (state_30126[(10)]);
var inst_30104 = (state_30126[(2)]);
var inst_30105 = [];
var inst_30106 = inst_30105.push(inst_30090);
var inst_30086 = inst_30105;
var inst_30087 = inst_30094;
var state_30126__$1 = (function (){var statearr_30138 = state_30126;
(statearr_30138[(7)] = inst_30086);

(statearr_30138[(8)] = inst_30087);

(statearr_30138[(11)] = inst_30104);

(statearr_30138[(12)] = inst_30106);

return statearr_30138;
})();
var statearr_30139_30169 = state_30126__$1;
(statearr_30139_30169[(2)] = null);

(statearr_30139_30169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (9))){
var inst_30086 = (state_30126[(7)]);
var inst_30102 = cljs.core.vec.call(null,inst_30086);
var state_30126__$1 = state_30126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30126__$1,(11),out,inst_30102);
} else {
if((state_val_30127 === (5))){
var inst_30090 = (state_30126[(9)]);
var inst_30087 = (state_30126[(8)]);
var inst_30094 = (state_30126[(10)]);
var inst_30094__$1 = f.call(null,inst_30090);
var inst_30095 = cljs.core._EQ_.call(null,inst_30094__$1,inst_30087);
var inst_30096 = cljs.core.keyword_identical_QMARK_.call(null,inst_30087,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30097 = (inst_30095) || (inst_30096);
var state_30126__$1 = (function (){var statearr_30140 = state_30126;
(statearr_30140[(10)] = inst_30094__$1);

return statearr_30140;
})();
if(cljs.core.truth_(inst_30097)){
var statearr_30141_30170 = state_30126__$1;
(statearr_30141_30170[(1)] = (8));

} else {
var statearr_30142_30171 = state_30126__$1;
(statearr_30142_30171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (14))){
var inst_30119 = (state_30126[(2)]);
var inst_30120 = cljs.core.async.close_BANG_.call(null,out);
var state_30126__$1 = (function (){var statearr_30144 = state_30126;
(statearr_30144[(13)] = inst_30119);

return statearr_30144;
})();
var statearr_30145_30172 = state_30126__$1;
(statearr_30145_30172[(2)] = inst_30120);

(statearr_30145_30172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (10))){
var inst_30109 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
var statearr_30146_30173 = state_30126__$1;
(statearr_30146_30173[(2)] = inst_30109);

(statearr_30146_30173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (8))){
var inst_30086 = (state_30126[(7)]);
var inst_30090 = (state_30126[(9)]);
var inst_30094 = (state_30126[(10)]);
var inst_30099 = inst_30086.push(inst_30090);
var tmp30143 = inst_30086;
var inst_30086__$1 = tmp30143;
var inst_30087 = inst_30094;
var state_30126__$1 = (function (){var statearr_30147 = state_30126;
(statearr_30147[(7)] = inst_30086__$1);

(statearr_30147[(14)] = inst_30099);

(statearr_30147[(8)] = inst_30087);

return statearr_30147;
})();
var statearr_30148_30174 = state_30126__$1;
(statearr_30148_30174[(2)] = null);

(statearr_30148_30174[(1)] = (2));


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
});})(c__27377__auto___30160,out))
;
return ((function (switch__27265__auto__,c__27377__auto___30160,out){
return (function() {
var cljs$core$async$state_machine__27266__auto__ = null;
var cljs$core$async$state_machine__27266__auto____0 = (function (){
var statearr_30152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30152[(0)] = cljs$core$async$state_machine__27266__auto__);

(statearr_30152[(1)] = (1));

return statearr_30152;
});
var cljs$core$async$state_machine__27266__auto____1 = (function (state_30126){
while(true){
var ret_value__27267__auto__ = (function (){try{while(true){
var result__27268__auto__ = switch__27265__auto__.call(null,state_30126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27268__auto__;
}
break;
}
}catch (e30153){if((e30153 instanceof Object)){
var ex__27269__auto__ = e30153;
var statearr_30154_30175 = state_30126;
(statearr_30154_30175[(5)] = ex__27269__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27267__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30176 = state_30126;
state_30126 = G__30176;
continue;
} else {
return ret_value__27267__auto__;
}
break;
}
});
cljs$core$async$state_machine__27266__auto__ = function(state_30126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27266__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27266__auto____1.call(this,state_30126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27266__auto____0;
cljs$core$async$state_machine__27266__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27266__auto____1;
return cljs$core$async$state_machine__27266__auto__;
})()
;})(switch__27265__auto__,c__27377__auto___30160,out))
})();
var state__27379__auto__ = (function (){var statearr_30155 = f__27378__auto__.call(null);
(statearr_30155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27377__auto___30160);

return statearr_30155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27379__auto__);
});})(c__27377__auto___30160,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484074943089