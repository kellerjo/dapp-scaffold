(this["webpackJsonpdapp-scaffold"]=this["webpackJsonpdapp-scaffold"]||[]).push([[0],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(10),r=new a.d("So11111111111111111111111111111111111111112"),o=new a.d("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),i=(new a.d("TokenLending1111111111111111111111111111111"),new a.d("SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8"),[{name:"mainnet-beta"},{name:"testnet"},{name:"devnet"},{name:"localnet"}]),c=function(e){i.find((function(t){return t.name===e}))},u=function(){return{token:o}}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(272);function i(e){var t=e.message,n=void 0===t?"":t,a=e.description,i=void 0===a?void 0:a,c=e.txid,u=void 0===c?"":c,s=e.type,l=void 0===s?"info":s,f=e.placement,d=void 0===f?"bottomLeft":f;u&&(i=r.a.createElement(r.a.Fragment,null)),o.a[l]({message:r.a.createElement("span",{style:{color:"black"}},n),description:r.a.createElement("span",{style:{color:"black",opacity:.5}},i),placement:d,style:{backgroundColor:"white"}})}},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(25),r=n(14),o=n(106),i=function e(t,n,a){Object(r.a)(this,e),this.id=void 0,this.parser=void 0,this.isNew=void 0,this.id=t,this.parser=a,this.isNew=n};i.type="CacheUpdate";var c=function e(t){Object(r.a)(this,e),this.id=void 0,this.id=t};c.type="CacheUpdate";var u=function e(t){Object(r.a)(this,e),this.ids=void 0,this.ids=t};u.type="MarketUpdate";var s=function e(){Object(r.a)(this,e)};s.type="CacheDelete";var l=function(){function e(){Object(r.a)(this,e),this.emitter=new o.EventEmitter}return Object(a.a)(e,[{key:"onMarket",value:function(e){var t=this;return this.emitter.on(u.type,e),function(){return t.emitter.removeListener(u.type,e)}}},{key:"onCache",value:function(e){var t=this;return this.emitter.on(i.type,e),function(){return t.emitter.removeListener(i.type,e)}}},{key:"raiseMarketUpdated",value:function(e){this.emitter.emit(u.type,new u(e))}},{key:"raiseCacheUpdated",value:function(e,t,n){this.emitter.emit(i.type,new i(e,t,n))}},{key:"raiseCacheDeleted",value:function(e){this.emitter.emit(c.type,new c(e))}},{key:"raiseCacheCleared",value:function(){this.emitter.emit(s.type,new s)}}]),e}()},273:function(e,t,n){},37:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return _})),n.d(t,"e",(function(){return L})),n.d(t,"a",(function(){return k})),n.d(t,"d",(function(){return C})),n.d(t,"f",(function(){return D}));var a=n(152),r=n(27),o=n(26),i=n(1),c=n.n(i),u=n(9),s=n(24),l=n(0),f=n.n(l),d=n(63),m=n(10),p=n(84),b=n(57),O=n(218),E=(n(90),n(113)),v=n(60),h=f.a.createContext(null),T=new Map,A=new Map,g=new Map,w=function(t,n){var a=e.from(n.data),r=M(a);return{pubkey:t,account:Object(s.a)({},n),info:r}},y=function(t,n){var a=e.from(n.data),r=R(a);return{pubkey:t,account:Object(s.a)({},n),info:r}},I=new Map,_={emitter:new O.a,query:function(){var e=Object(u.a)(c.a.mark((function e(t,n,a){var r,o,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r="string"===typeof n?new m.d(n):n,o=r.toBase58(),!(i=A.get(o))){e.next=5;break}return e.abrupt("return",i);case 5:if(!(u=T.get(o))){e.next=8;break}return e.abrupt("return",u);case 8:return u=t.getAccountInfo(r).then((function(e){if(!e)throw new Error("Account not found");return _.add(r,e,a)})),T.set(o,u),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),add:function(e,t,n){if(0!==t.data.length){var a="string"===typeof e?e:null===e||void 0===e?void 0:e.toBase58(),r=n||I.get(a);if(!r)throw new Error("Deserializer needs to be registered or passed as a parameter");_.registerParser(e,r),T.delete(a);var o=r(new m.d(a),t);if(o){var i=!A.has(a);return A.set(a,o),_.emitter.raiseCacheUpdated(a,i,r),o}}},get:function(e){var t;return t="string"!==typeof e?e.toBase58():e,A.get(t)},delete:function(e){var t;return t="string"!==typeof e?e.toBase58():e,!!A.get(t)&&(A.delete(t),_.emitter.raiseCacheDeleted(t),!0)},byParser:function(e){var t,n=[],a=Object(o.a)(I.keys());try{for(a.s();!(t=a.n()).done;){var r=t.value;I.get(r)===e&&n.push(r)}}catch(i){a.e(i)}finally{a.f()}return n},registerParser:function(e,t){if(e){var n="string"===typeof e?e:null===e||void 0===e?void 0:e.toBase58();I.set(n,t)}return e},addTransaction:function(e,t){return g.set(e,t),t},addBulkTransactions:function(e){var t,n=Object(o.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;g.set(a.signature.signature,a)}}catch(r){n.e(r)}finally{n.f()}return e},getTransaction:function(e){return g.get(e)},getAllTransactions:function(){return g},clear:function(){A.clear(),g.clear(),_.emitter.raiseCacheCleared()}},L=function(){return Object(l.useContext)(h)};var S=function(){var e=Object(d.c)(),t=Object(v.b)(),n=t.wallet,a=t.publicKey,o=Object(l.useState)(),i=Object(r.a)(o,2),c=i[0],u=i[1],s=Object(l.useCallback)((function(t){if(e&&a){var n=function(e,t){if(t)return{pubkey:e,account:t,info:{address:e,mint:E.a,owner:e,amount:new p.c(t.lamports),delegate:null,delegatedAmount:new p.c(0),isInitialized:!0,isFrozen:!1,isNative:!0,rentExemptReserve:null,closeAuthority:null}}}(a,t);if(void 0!==n){var r=a.toBase58();_.registerParser(r,y),A.set(r,n),_.emitter.raiseCacheUpdated(r,!1,y)}}}),[a,e]);return Object(l.useEffect)((function(){e&&a&&(e.getAccountInfo(a).then((function(e){e&&(s(e),u(e))})),e.onAccountChange(a,(function(e){e&&(s(e),u(e))})))}),[u,n,a,e,s]),{nativeAccount:c}},N=new Set,j=function(){var e=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return N.add(n.toBase58()),e.next=5,t.getTokenAccountsByOwner(n,{programId:Object(E.b)().token});case 5:e.sent.value.forEach((function(e){_.add(e.pubkey.toBase58(),e.account,y)}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function k(e){var t=e.children,n=void 0===t?null:t,a=Object(d.c)(),o=Object(v.b)(),i=o.publicKey,c=o.wallet,u=o.connected,s=Object(l.useState)([]),b=Object(r.a)(s,2),O=b[0],T=b[1],A=Object(l.useState)([]),g=Object(r.a)(A,2),w=g[0],I=g[1],L=S().nativeAccount,k=Object(l.useCallback)((function(){if(!i)return[];var e=i.toBase58();return _.byParser(y).map((function(e){return _.get(e)})).filter((function(t){return t&&t.info.owner.toBase58()===e})).map((function(e){return e}))}),[i]);return Object(l.useEffect)((function(){var e=k().filter((function(e){return void 0!==e}));I(e)}),[L,c,O,k]),Object(l.useEffect)((function(){var e=[];return _.emitter.onCache((function(e){if(e.isNew){var t=e.id,n=e.parser;a.onAccountChange(new m.d(t),(function(e){_.add(t,e,n)}))}})),function(){e.forEach((function(e){return a.removeAccountChangeListener(e)}))}}),[a]),Object(l.useEffect)((function(){if(a&&i){j(a,i).then((function(){T(k())}));var e=a.onProgramAccountChange(Object(E.b)().token,(function(e){var t=e.accountId;if(e.accountInfo.data.length===p.a.span){var n=R(e.accountInfo.data);N.has(n.owner.toBase58())&&(_.add(t,e.accountInfo,y),T(k()))}}),"singleGossip");return function(){a.removeProgramAccountChangeListener(e)}}T([])}),[a,u,i,k]),f.a.createElement(h.Provider,{value:{userAccounts:w,nativeAccount:L}},n)}var C=function(){var t=Object(u.a)(c.a.mark((function t(n,r,o){var i,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(Object(b.b)(r,99).map((function(e){return B(n,e,o)})));case 2:return i=t.sent,u=i.map((function(t){return t.array.map((function(t){if(t){var n=t.data,r=Object(a.a)(t,["data"]);return Object(s.a)(Object(s.a)({},r),{},{data:e.from(n[0],"base64")})}})).filter((function(e){return e}))})).flat(),t.abrupt("return",{keys:r,array:u});case 5:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(c.a.mark((function e(t,n,a){var r,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t._buildArgs([n],a,"base64"),e.next=3,t._rpcRequest("getMultipleAccounts",r);case 3:if(!(o=e.sent).error){e.next=6;break}throw new Error("failed to get info about account "+o.error.message);case 6:if(!o.result.value){e.next=9;break}return i=o.result.value,e.abrupt("return",{keys:n,array:i});case 9:throw new Error;case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();function D(e){var t=Object(d.c)(),n=Object(l.useState)(),a=Object(r.a)(n,2),o=a[0],i=a[1],c="string"===typeof e?e:null===e||void 0===e?void 0:e.toBase58();return Object(l.useEffect)((function(){if(c){_.query(t,c,w).then((function(e){return i(e.info)})).catch((function(e){return console.log(e)}));var e=_.emitter.onCache((function(e){e.id===c&&_.query(t,c,w).then((function(e){return i(e.info)}))}));return function(){e()}}}),[t,c]),o}var R=function(e){var t=p.a.decode(e);return t.mint=new m.d(t.mint),t.owner=new m.d(t.owner),t.amount=p.c.fromBuffer(t.amount),0===t.delegateOption?(t.delegate=null,t.delegatedAmount=new p.c(0)):(t.delegate=new m.d(t.delegate),t.delegatedAmount=p.c.fromBuffer(t.delegatedAmount)),t.isInitialized=0!==t.state,t.isFrozen=2===t.state,1===t.isNativeOption?(t.rentExemptReserve=p.c.fromBuffer(t.isNative),t.isNative=!0):(t.rentExemptReserve=null,t.isNative=!1),0===t.closeAuthorityOption?t.closeAuthority=null:t.closeAuthority=new m.d(t.closeAuthority),t},M=function(e){if(e.length!==p.b.span)throw new Error("Not a valid Mint");var t=p.b.decode(e);return 0===t.mintAuthorityOption?t.mintAuthority=null:t.mintAuthority=new m.d(t.mintAuthority),t.supply=p.c.fromBuffer(t.supply),t.isInitialized=0!==t.isInitialized,0===t.freezeAuthorityOption?t.freezeAuthority=null:t.freezeAuthority=new m.d(t.freezeAuthority),t}}).call(this,n(12).Buffer)},387:function(e,t,n){e.exports=n(669)},392:function(e,t,n){},393:function(e,t){},394:function(e,t){},416:function(e,t){},417:function(e,t){},478:function(e,t){},488:function(e,t){},496:function(e,t){},498:function(e,t){},544:function(e,t,n){},57:function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return p}));n(26);var a=n(27),r=n(0),o=n(56),i=n.n(o);n(71),new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:8});function c(e,t){var n=Object(r.useState)((function(){var n=localStorage.getItem(e);return n?JSON.parse(n):t})),o=Object(a.a)(n,2),i=o[0],c=o[1],u=Object(r.useCallback)((function(t){i!==t&&(c(t),null===t?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t)))}),[i,e]);return[i,u]}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))}function s(e,t){var n,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r="string"===typeof t?t:null===t||void 0===t?void 0:t.toBase58();if(!r)return"N/A";var o=null===(n=e.get(r))||void 0===n?void 0:n.symbol;return o||(a?"".concat(r.substring(0,5),"..."):r)}function l(e,t){var n,a="string"===typeof t?t:null===t||void 0===t?void 0:t.toBase58();if(a)return null===(n=e.get(a))||void 0===n?void 0:n.logoURI}var f=new Set(["USDC","wUSDC","USDT"]);function d(e,t){return Array.apply(0,new Array(Math.ceil(e.length/t))).map((function(n,a){return e.slice(a*t,(a+1)*t)}))}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(!e)return 0;var a=Math.floor("number"===typeof e?e:i.a.isBN(e)?e.toNumber():e.info.amount.toNumber()),r=Math.pow(10,(null===t||void 0===t?void 0:t.decimals)||0);return a/r*n}var p=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:9}),new Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2})},581:function(e,t){},585:function(e,t){},598:function(e,t){},600:function(e,t){},628:function(e,t){},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return T}));var a=n(1),r=n.n(a),o=n(30),i=n(9),c=n(27),u=n(57),s=n(10),l=n(0),f=n.n(l),d=(n(173),n(672),n(113)),m=n(37),p=n(157),b=[{name:"mainnet-beta",endpoint:"https://solana-api.projectserum.com/",chainID:p.a.MainnetBeta},{name:"testnet",endpoint:Object(s.i)("testnet"),chainID:p.a.Testnet},{name:"devnet",endpoint:Object(s.i)("devnet"),chainID:p.a.Devnet},{name:"localnet",endpoint:"http://127.0.0.1:8899",chainID:p.a.Devnet}],O=b[0].endpoint,E=f.a.createContext({endpoint:O,setEndpoint:function(){},slippage:.25,setSlippage:function(e){},connection:new s.a(O,"recent"),sendConnection:new s.a(O,"recent"),env:b[0].name,tokens:[],tokenMap:new Map});function v(e){var t=e.children,n=void 0===t?void 0:t,a=Object(u.h)("connectionEndpts",b[0].endpoint),O=Object(c.a)(a,2),v=O[0],h=O[1],T=Object(u.h)("slippage",.25.toString()),A=Object(c.a)(T,2),g=A[0],w=A[1],y=Object(l.useMemo)((function(){return new s.a(v,"recent")}),[v]),I=Object(l.useMemo)((function(){return new s.a(v,"recent")}),[v]),_=b.find((function(e){return e.endpoint===v}))||b[0],L=_.name,S=Object(l.useState)([]),N=Object(c.a)(S,2),j=N[0],k=N[1],C=Object(l.useState)(new Map),B=Object(c.a)(C,2),D=B[0],R=B[1];return Object(l.useEffect)((function(){m.c.clear(),Object(i.a)(r.a.mark((function e(){var t,n,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new p.b).resolve();case 2:return t=e.sent,n=t.filterByChainId(_.chainID).excludeByTag("nft").getList(),a=n.reduce((function(e,t){return e.set(t.address,t),e}),new Map),e.next=7,Object(m.d)(y,Object(o.a)(a.keys()),"single");case 7:(i=e.sent).keys.forEach((function(e,t){var n=i.array[t];n&&m.c.add(new s.d(e),n,m.b)})),R(a),k(n);case 11:case"end":return e.stop()}}),e)})))()}),[y,_]),Object(d.c)(L),Object(l.useEffect)((function(){var e=y.onAccountChange((new s.b).publicKey,(function(){}));return function(){y.removeAccountChangeListener(e)}}),[y]),Object(l.useEffect)((function(){var e=y.onSlotChange((function(){return null}));return function(){y.removeSlotChangeListener(e)}}),[y]),Object(l.useEffect)((function(){var e=I.onAccountChange((new s.b).publicKey,(function(){}));return function(){I.removeAccountChangeListener(e)}}),[I]),Object(l.useEffect)((function(){var e=I.onSlotChange((function(){return null}));return function(){I.removeSlotChangeListener(e)}}),[I]),f.a.createElement(E.Provider,{value:{endpoint:v,setEndpoint:h,slippage:parseFloat(g),setSlippage:function(e){return w(e.toString())},connection:y,sendConnection:I,tokens:j,tokenMap:D,env:L}},n)}function h(){return Object(l.useContext)(E).connection}function T(){var e=Object(l.useContext)(E);return{endpoint:e.endpoint,setEndpoint:e.setEndpoint,env:e.env,tokens:e.tokens,tokenMap:e.tokenMap}}},630:function(e,t){},635:function(e,t){},637:function(e,t){},644:function(e,t){},646:function(e,t){},658:function(e,t){},661:function(e,t){},668:function(e,t){},669:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(40),i=n.n(o),c=(n(392),n(273),n(149)),u=n(58),s=n(60),l=n(63),f=n(37),d=n(1),m=n.n(d),p=n(9),b=n(30),O=n(27),E={},v=n(57),h=n(88),T=n(10),A=n(218),g=n(24),w=function(e,t){var n=h.Orderbook.LAYOUT.decode(t.data);return{pubkey:e,account:Object(g.a)({},t),info:n}},y=new T.d("EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o"),I=function(e,t){var n=h.MARKETS.find((function(t){return t.address.equals(e)})),a=h.Market.getLayout((null===n||void 0===n?void 0:n.programId)||y).decode(t.data),r={pubkey:e,account:Object(g.a)({},t),info:a};return f.c.registerParser(r.info.baseMint,f.b),f.c.registerParser(r.info.quoteMint,f.b),f.c.registerParser(r.info.bids,w),f.c.registerParser(r.info.asks,w),r},_=n(90);function L(e,t){var n=Object(a.useMemo)((function(){return"string"===typeof e?e:null===e||void 0===e?void 0:e.toBase58()}),[e]),r=Object(_.a)().userAccounts,o=Object(a.useState)(0),i=Object(O.a)(o,2),c=i[0],u=i[1],s=k(),l=s.marketEmitter,d=s.midPriceInUSD,m=Object(f.f)(n),p=Object(a.useMemo)((function(){return r.filter((function(e){return n===e.info.mint.toBase58()&&(!t||t.equals(e.pubkey))})).sort((function(e,t){return t.info.amount.sub(e.info.amount).toNumber()}))}),[r,n,t]),b=Object(a.useMemo)((function(){return p.reduce((function(e,t){return e+t.info.amount.toNumber()}),0)}),[p]),E=Object(a.useMemo)((function(){return Object(v.d)(b,m)}),[m,b]);return Object(a.useEffect)((function(){var e=function(){u(E*d(n||""))},t=l.onMarket((function(t){e()}));return e(),function(){t()}}),[E,d,l,n,u]),{balance:E,balanceLamports:b,balanceInUSD:c,accounts:p,hasBalance:p.length>0&&E>0}}var S=r.a.createContext(null),N=new A.a;function j(e){var t=e.children,n=void 0===t?null:t,o=Object(l.d)().endpoint,i=Object(a.useMemo)((function(){return new Map}),[]),c=Object(a.useState)([]),u=Object(O.a)(c,2),s=u[0],d=u[1],v=Object(_.a)().userAccounts,A=Object(a.useMemo)((function(){return new T.a(o,"recent")}),[o]),g=Object(a.useMemo)((function(){return Object(b.a)(new Set(s).values()).reduce((function(e,t){var n=t,a=h.TOKEN_MINTS.find((function(e){return e.address.toBase58()===n})),r=E[n],o=h.MARKETS.filter((function(e){return!e.deprecated})).find((function(e){return e.name==="".concat(null===a||void 0===a?void 0:a.name,"/USDC")||e.name==="".concat(null===a||void 0===a?void 0:a.name,"/USDT")||e.address.toBase58()===r}));return o&&e.set(n,{marketInfo:o}),e}),new Map)}),[s]);Object(a.useEffect)((function(){var e=0,t=function(){var n=Object(p.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B(A,Object(b.a)(i.keys()));case 2:N.raiseMarketUpdated(new Set(Object(b.a)(g.keys()))),e=window.setTimeout((function(){return t()}),3e4);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return function(){var e=Object(p.a)(m.a.mark((function e(){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Map,Object(b.a)(g.keys()).forEach((function(e){var t=g.get(e);t&&n.set(t.marketInfo.address.toBase58(),e)})),a=Object(b.a)(g.values()).map((function(e){return e.marketInfo.address.toBase58()})),e.next=5,Object(f.d)(A,a.filter((function(e){return void 0===f.c.get(e)})),"single").then((function(e){var t=e.keys,r=e.array;return a.forEach((function(){})),r.map((function(e,a){var r=t[a],o=n.get(r);if(o){var i=g.get(o);if(i){var c=i.marketInfo.address;f.c.add(c,e,I)}}return e}))}));case 5:return r=new Set,a.forEach((function(e){var t=f.c.get(e);if(t){var n=t;f.c.get(n.info.baseMint)||r.add(n.info.baseMint.toBase58()),f.c.get(n.info.baseMint)||r.add(n.info.quoteMint.toBase58()),r.add(n.info.bids.toBase58()),r.add(n.info.asks.toBase58())}})),e.next=9,B(A,Object(b.a)(r.keys()));case 9:N.raiseMarketUpdated(new Set(Object(b.a)(g.keys()))),t();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){window.clearTimeout(e)}}),[g,i,A]);var w=Object(a.useCallback)((function(e){var t;return C(null===(t=g.get(e))||void 0===t?void 0:t.marketInfo.address.toBase58(),e)}),[g]),y=Object(a.useCallback)((function(e){var t=g.get(e),n=f.c.get((null===t||void 0===t?void 0:t.marketInfo.address.toBase58())||"");if(!n)return function(){};var a=n.info.bids.toBase58(),r=n.info.asks.toBase58();return i.set(a,(i.get(a)||0)+1),i.set(r,(i.get(r)||0)+1),function(){i.set(a,(i.get(a)||0)-1),i.set(r,(i.get(r)||0)-1),Object(b.a)(i.keys()).forEach((function(e){(i.get(e)||0)<=0&&i.delete(e)}))}}),[g,i]),L=Object(a.useCallback)((function(e){var t=Object(b.a)(new Set([].concat(Object(b.a)(s),Object(b.a)(e))).values());s.length!==t.length&&d(t)}),[d,s]);return Object(a.useEffect)((function(){L(v.map((function(e){return e.info.mint.toBase58()})))}),[v,L]),r.a.createElement(S.Provider,{value:{midPriceInUSD:w,marketEmitter:N,accountsToObserve:i,marketByMint:g,subscribeToMarket:y,precacheMarkets:L}},n)}var k=function(){return Object(a.useContext)(S)},C=function(e,t){var n,a,r,o,i=h.TOKEN_MINTS.find((function(e){return e.address.toBase58()===t}));if(v.a.has((null===i||void 0===i?void 0:i.name)||""))return 1;if(!e)return 0;var c=f.c.get(e);if(!c)return 0;var u=c.info,s=(null===(n=f.c.get(u.baseMint))||void 0===n?void 0:n.info.decimals)||0,l=(null===(a=f.c.get(u.quoteMint))||void 0===a?void 0:a.info.decimals)||0,d=new h.Market(u,s,l,void 0,u.programId),m=null===(r=f.c.get(u.bids))||void 0===r?void 0:r.info,p=null===(o=f.c.get(u.asks))||void 0===o?void 0:o.info;return m&&p?function(e,t){var n=e.getL2(1),a=t.getL2(1);return n.length>0&&a.length>0?(n[0][0]+a[0][0])/2:0}(new h.Orderbook(d,m.accountFlags,m.slab),new h.Orderbook(d,p.accountFlags,p.slab)):0},B=function(){var e=Object(p.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length){e.next=2;break}return e.abrupt("return",[]);case 2:return e.abrupt("return",Object(f.d)(t,n,"single").then((function(e){var t=e.keys;return e.array.map((function(e,n){var a=t[n];return f.c.add(new T.d(a),e)}))})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=n(671),R=n(98),M=n(71),U=n(677),P=n(103),x=n(679),F=n(673),G=function(){var e=Object(s.b)(),t=e.connected,n=e.disconnect,a=Object(l.d)(),o=a.endpoint,i=a.setEndpoint;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"grid"}},"Network:"," ",r.a.createElement(F.a,{onSelect:i,value:o,style:{marginBottom:20}},l.b.map((function(e){var t=e.name,n=e.endpoint;return r.a.createElement(F.a.Option,{value:n,key:n},t)}))),t&&r.a.createElement(P.a,{type:"primary",onClick:n},"Disconnect")))},W=function(e){var t=Object(s.b)().connected;return r.a.createElement("div",{className:"App-Bar-right"},r.a.createElement(R.c,{type:"primary"}),r.a.createElement("div",{style:{margin:5}}),t?r.a.createElement(R.a,{type:"ghost"}):null,r.a.createElement(U.a,{placement:"topRight",title:M.a.SETTINGS_TOOLTIP,content:r.a.createElement(G,null),trigger:"click"},r.a.createElement(P.a,{shape:"circle",size:"large",type:"text",icon:r.a.createElement(x.a,null)})),e.right)},H=D.a.Header,q=D.a.Content,Y=r.a.memo((function(e){var t=e.children;return r.a.createElement(R.b,null,r.a.createElement("div",{className:"App wormhole-bg"},r.a.createElement(D.a,{title:M.a.APP_TITLE},r.a.createElement(H,{className:"App-Bar"},r.a.createElement(c.b,{to:"/"},r.a.createElement("div",{className:"app-title"},r.a.createElement("h2",null,"Solana DAPP"))),r.a.createElement(W,null)),r.a.createElement(q,{style:{padding:"0 50px"}},t))))})),Q=n(676),z=n(678),K=n(373),V=n.n(K),J=n(35),X=n.n(J),Z=(n(544),function(e){var t,n=e.style,o=e.className,i="string"===typeof e.address?e.address:null===(t=e.address)||void 0===t?void 0:t.toBase58(),c=Object(a.useRef)();return Object(a.useEffect)((function(){i&&c.current&&(c.current.innerHTML="",c.current.className=o||"",c.current.appendChild(V()((null===n||void 0===n?void 0:n.width)||16,parseInt(X.a.decode(i).toString("hex").slice(5,15),16))))}),[i,n,o]),r.a.createElement("div",{className:"identicon-wrapper",ref:c,style:e.style})}),$=function(e){var t,n,a=Object(l.d)().tokenMap,o=Object(v.e)(a,e.mintAddress),i=e.size||20;return o?r.a.createElement("img",{alt:"Token icon",className:e.className,key:o,width:(null===(t=e.style)||void 0===t?void 0:t.width)||i.toString(),height:(null===(n=e.style)||void 0===n?void 0:n.height)||i.toString(),src:o,style:Object(g.a)({marginRight:"0.5rem",marginTop:"0.11rem",borderRadius:"10rem",backgroundColor:"white",backgroundClip:"padding-box"},e.style)}):r.a.createElement(Z,{address:e.mintAddress,style:Object(g.a)({marginRight:"0.5rem",width:i,height:i,marginTop:2},e.style)})},ee=n(113),te=function(){var e=k(),t=e.marketEmitter,n=e.midPriceInUSD,o=Object(l.d)().tokenMap,i="SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt",u=L(i),s=L(ee.a),d=function(){var e=Object(_.a)().userAccounts,t=Object(a.useState)(0),n=Object(O.a)(t,2),r=n[0],o=n[1],i=k(),c=i.marketEmitter,u=i.midPriceInUSD;return Object(a.useEffect)((function(){var t=function(){for(var t=0,n=0;n<e.length;n++){var a=e[n],r=a.info.mint.toBase58(),i=f.c.get(r);if(i)t+=Object(v.d)(a.info.amount.toNumber(),i.info)*u(r)}o(t)},n=c.onMarket((function(e){t()}));return t(),function(){n()}}),[e,c,u,o]),{balanceInUSD:r,accounts:e,hasBalance:e.length>0&&r>0}}().balanceInUSD;return Object(a.useEffect)((function(){var e=t.onMarket((function(){}));return function(){e()}}),[t,n,o]),r.a.createElement(Q.a,{gutter:[16,16],align:"middle"},r.a.createElement(z.a,{span:24},r.a.createElement("h2",null,"Your balances (",v.c.format(d),"):"),r.a.createElement("h2",null,"SOL: ",s.balance," (",v.c.format(s.balanceInUSD),")"),r.a.createElement("h2",{style:{display:"inline-flex",alignItems:"center"}},r.a.createElement($,{mintAddress:i})," SRM: ",null===u||void 0===u?void 0:u.balance," (",v.c.format(null===u||void 0===u?void 0:u.balanceInUSD),")")),r.a.createElement(z.a,{span:24},"hi!!!"),r.a.createElement(z.a,{span:12},r.a.createElement(R.c,{type:"ghost"})),r.a.createElement(z.a,{span:12},r.a.createElement(c.b,{to:"/faucet"},r.a.createElement(P.a,null,"Faucet"))),r.a.createElement(z.a,{span:24},r.a.createElement("div",{className:"builton"})))},ne=n(173),ae=n(152),re=n(674),oe=n(675),ie=function(e){var t=Object(R.d)().setVisible,n=Object(s.b)(),o=n.connected,i=n.connect,c=n.select,u=n.wallet,l=n.wallets,f=e.onClick,d=(e.children,e.disabled),m=e.allowWalletChange,p=Object(ae.a)(e,["onClick","children","disabled","allowWalletChange"]),b=Object(a.useCallback)((function(e){o?null===f||void 0===f||f(e):t(!0)}),[t,f,o]),O=r.a.createElement(re.a,null,l.map((function(e){return r.a.createElement(re.a.Item,{key:e.name,onClick:function(){return c(e.name)}},"Change Wallet to ",e.name)})));return u&&m?r.a.createElement(oe.a.Button,{onClick:o?f:i,disabled:o&&d,overlay:O},M.a.CONNECT_LABEL):r.a.createElement(P.a,Object.assign({},p,{onClick:b,disabled:o&&d}),o?e.children:M.a.CONNECT_LABEL)},ce=function(){var e=Object(l.c)(),t=Object(s.b)().publicKey,n=Object(a.useCallback)(Object(p.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,e.requestAirdrop(t,2*T.c);case 5:Object(ne.a)({message:M.a.ACCOUNT_FUNDED,type:"success"}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),Object(ne.a)({message:M.a.AIRDROP_FAIL,type:"error"}),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])}))),[t,e]);return r.a.createElement("div",{className:"flexColumn",style:{flex:1}},r.a.createElement("div",null,r.a.createElement("div",{className:"deposit-input-title",style:{margin:10}},M.a.FAUCET_INFO),r.a.createElement(ie,{type:"primary",onClick:n},M.a.GIVE_SOL)))},ue=n(116);function se(){var e=Object(a.useMemo)((function(){return[Object(ue.c)(),Object(ue.d)(),Object(ue.g)({options:{clientId:"BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ"}}),Object(ue.a)(),Object(ue.f)(),Object(ue.b)(),Object(ue.e)()]}),[]);return r.a.createElement(c.a,{basename:"/"},r.a.createElement(l.a,null,r.a.createElement(s.a,{wallets:e,autoConnect:!0},r.a.createElement(f.a,null,r.a.createElement(j,null,r.a.createElement(Y,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:function(){return r.a.createElement(te,null)}}),r.a.createElement(u.a,{exact:!0,path:"/faucet",children:r.a.createElement(ce,null)}))))))))}var le=function(){return r.a.createElement(se,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}));var a={CONNECT_LABEL:"Connect",BORROWING_POWER_USED:"Borrowing Power Used",BORROWING_POWER_VALUE:"Borrowing Power",BORROWED_VALUE:"You borrowed",GIVE_SOL:"Give me SOL",LIQUIDATION_INFO:"This view displays all loans that can be liquidated. A liquidation is a process where borrower collateral does not cover value of the loan. It is represented by health factor falling below 1.0. When a loan is liquidated, an liquidator can purchase collateral at a discount by repaing the portio of the loan. ",FAUCET_INFO:"This faucet will help you fund your accounts outside of Solana main network.",ACCOUNT_FUNDED:"Account funded.",AIRDROP_FAIL:"Airdrop failed, please check you're not on mainnet or your localnet is running.",REPAY_QUESTION:"How much would you like to repay?",REPAY_ACTION:"Repay",RESERVE_STATUS_TITLE:"Reserve Status & Configuration",AUDIT_WARNING:"Oyster is an unaudited software project used for internal purposes at the Solana Foundation. This app is not for public use.",FOOTER:'This page was produced by the Solana Foundation ("SF") for internal educational and inspiration purposes only. SF does not encourage, induce or sanction the deployment, integration or use of Oyster or any similar application (including its code) in violation of applicable laws or regulations and hereby prohibits any such deployment, integration or use. Anyone using this code or a derivation thereof must comply with applicable laws and regulations when releasing related software.',MENU_HOME:"Home",MENU_DASHBOARD:"Dashboard",DASHBOARD_INFO:"Connect to a wallet to view your deposits/loans.",TRANSACTIONS_INFO:"Connect to a wallet to view your transactions.",NO_LOANS_NO_DEPOSITS:"No loans or deposits.",MENU_DEPOSIT:"Deposit",DEPOSITS:"Deposits",BORROWS:"Borrows",LOAN_TO_VALUE:"Loan to value",MENU_BORROW:"Borrow",MENU_LIQUIDATE:"Liquidate",MENU_FAUCET:"Faucet",MENU_TRANSACTION:"Transactions",MARGIN_TRADING:"Margin Trading",APP_TITLE:"Solana DAPP",CONNECT_BUTTON:"Connect",WALLET_TOOLTIP:"Wallet public key",WALLET_BALANCE:"Wallet balance",SETTINGS_TOOLTIP:"Settings",SELECT_COLLATERAL:"Select collateral",COLLATERAL:"Collateral",BORROW_QUESTION:"How much would you like to borrow?",BORROW_ACTION:"Borrow",NO_COLLATERAL:"No collateral",NO_DEPOSITS:"No deposits",NO_LOANS:"No loans",NOTHING_BORROWED:"Nothing borrowed yet",NOTHING_BORROWED_MESSAGE:"There will be a list of all the assets you have borrowed. For now, it's empty since you have not borrowed.",BORROW_NOW:"Borrow now",LIQUIDATE_QUESTION:"How much would you like to liquidate?",LIQUIDATE_ACTION:"Liquidate",LIQUIDATE_NO_LOANS:"There are no loans to liquidate.",TABLE_TITLE_ASSET:"Asset",TABLE_TITLE_YOUR_LOAN_BALANCE:"Loan balance",TABLE_TITLE_LOAN_BALANCE:"Loan balance",TABLE_TITLE_COLLATERAL_BALANCE:"Collateral",TABLE_TITLE_DEPOSIT_BALANCE:"Your deposits",TABLE_TITLE_APY:"APY",TABLE_TITLE_LTV:"LTV",TABLE_TITLE_HEALTH:"Health Factor",TABLE_TITLE_BORROW_APY:"Borrow APY",TABLE_TITLE_DEPOSIT_APY:"Deposit APY",TABLE_TITLE_TOTAL_BORROWED:"Total Borrowed",TABLE_TITLE_MARKET_SIZE:"Market Size",TABLE_TITLE_ACTION:"Action",TABLE_TITLE_DEPOSITS:"Deposits",TABLE_TITLE_WITHDRAWS:"Withdraws",TABLE_TITLE_BORROWS:"Borrows",TABLE_TITLE_REPAY_OBLIGATIONS:"Repay Obligations",TABLE_TITLE_LIQUIDATE_OBLIGATIONS:"Liquidate Obligations",MAX_LTV:"Maximum LTV",LIQUIDATION_THRESHOLD:"Liquidation threshold",LIQUIDATION_PENALTY:"Liquidation penalty",TABLE_TITLE_MAX_BORROW:"Available for you",DASHBOARD_TITLE_LOANS:"Loans",DASHBOARD_TITLE_DEPOSITS:"Deposits",DEPOSIT_QUESTION:"How much would you like to deposit?",WITHDRAW_ACTION:"Withdraw",WITHDRAW_QUESTION:"How much would you like to withdraw?",DASHBOARD_ACTION:"Go to dashboard",GO_BACK_ACTION:"Go back",DEPOSIT_ACTION:"Deposit",TOTAL_TITLE:"Total",TRADING_TABLE_TITLE_MY_COLLATERAL:"Chosen Collateral",TRADING_TABLE_TITLE_DESIRED_ASSET:"Desired Asset",TRADING_TABLE_TITLE_MULTIPLIER:"Leverage",TRADING_TABLE_TITLE_ASSET_PRICE:"Asset Price",TRADING_TABLE_TITLE_LIQUIDATION_PRICE:"Liquidation Price",TRADING_TABLE_TITLE_APY:"APY",TRADING_TABLE_TITLE_ACTIONS:"Action",TRADING_ADD_POSITION:"Add Position",MARGIN_TRADE_ACTION:"Margin Trade",MARGIN_TRADE_CHOOSE_COLLATERAL_AND_LEVERAGE:"Please choose your collateral and leverage.",MARGIN_TRADE_QUESTION:"Please choose how much of this asset you wish to purchase.",TABLE_TITLE_BUYING_POWER:"Total Buying Power",NOT_ENOUGH_MARGIN_MESSAGE:"Not enough buying power in oyster to make this trade at this leverage.",SET_MORE_MARGIN_MESSAGE:"You need more margin to match this leverage amount to make this trade.",LEVERAGE_LIMIT_MESSAGE:"You will need more margin to make this trade.",NO_DEPOSIT_MESSAGE:"You need to deposit coin of this type into oyster before trading with it on margin.",NO_COLL_TYPE_MESSAGE:"Choose Collateral CCY",SAFER:"Safer",RISKIER:"Riskier"},r=n(56),o=n.n(r),i=new o.a(10),c=(i.pow(new o.a(18)),i.pow(new o.a(18))),u=(i.pow(new o.a(27)),new o.a(0))},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(37);function r(){return{userAccounts:Object(a.e)().userAccounts}}}},[[387,1,2]]]);