(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(12),a=(n(9),n(28)),c=n.n(a);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}window.store=i.a;var p=Object(r.lazy)(function(){return n.e(0).then(n.bind(null,29))}),m=Object(r.lazy)(function(){return n.e(2).then(n.bind(null,48))}),y=Object(r.lazy)(function(){return n.e(0).then(n.bind(null,41))}),d=Object(r.lazy)(function(){return n.e(0).then(n.bind(null,42))}),b=Object(r.lazy)(function(){return n.e(0).then(n.bind(null,43))}),h=Object(r.lazy)(function(){return n.e(3).then(n.bind(null,44))}),v=Object(r.lazy)(function(){return n.e(0).then(n.bind(null,47))}),E=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(t).call(this,e))}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(i=[{key:"render",value:function(){return o.a.createElement("div",{className:"container",style:{backgroundImage:"url(".concat(c.a,")")}},o.a.createElement(h,null),o.a.createElement("div",{className:"player-container"},o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(y,null,o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(v,null)),o.a.createElement("div",{className:"game-header"},o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(d,null)),o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(p,null))),o.a.createElement(m,null)))),o.a.createElement(b,null))}}])&&l(n.prototype,i),t}();t.default=E},24:function(e,t,n){"use strict";n.d(t,"g",function(){return o}),n.d(t,"j",function(){return i}),n.d(t,"f",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"i",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"e",function(){return f}),n.d(t,"b",function(){return p}),n.d(t,"k",function(){return m}),n.d(t,"h",function(){return y});var r=n(1);function o(e){return{type:r.h,payload:e}}function i(e){return{type:r.k,payload:e}}function a(e){return{type:r.g,payload:e}}function c(e){return{type:r.e,payload:e}}function u(e){return{type:r.j,payload:e}}function l(e){return{type:r.d,payload:e}}function s(e){return{type:r.a,payload:e}}function f(e){return{type:r.f,payload:e}}function p(e){return{type:r.c,payload:e}}function m(e){return{type:r.l,payload:e}}function y(e){return{type:r.i,payload:e}}},28:function(e,t,n){e.exports=n.p+"a05f1fb32996567bf53cc6d415cc5e55.png"},29:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n(24);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=n(0),f=(n(30),function(e){function t(e){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,(n=!(r=c(t).call(this,e))||"object"!==i(r)&&"function"!=typeof r?u(this):r).timer=0,n.countDown=n.countDown.bind(u(n)),n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,s.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.secondsToTime(this.props.timer.seconds);this.props.dispatch(Object(o.k)({time:e})),this.startTimer()}},{key:"getSnapshotBeforeUpdate",value:function(e,t){1==this.props.isTimerRunning&&0==e.isTimerRunning&&this.startTimer()}},{key:"secondsToTime",value:function(e){var t=Math.floor(e/3600),n=e%3600,r=Math.floor(n/60),o=n%60,i=Math.ceil(o);return{h:this.formatTime(t),m:this.formatTime(r),s:this.formatTime(i)}}},{key:"startTimer",value:function(){this.timer=setInterval(this.countDown,1e3)}},{key:"stopTimer",value:function(){clearInterval(this.timer)}},{key:"formatTime",value:function(e){return e<10?"0"+e.toString():e.toString()}},{key:"countDown",value:function(){var e=this.props.timer.seconds-1;this.props.dispatch(Object(o.k)({time:this.secondsToTime(e),seconds:e})),""!=this.props.gameStatus?this.stopTimer():0==e&&(this.stopTimer(),this.props.dispatch(Object(o.e)("loss")))}},{key:"render",value:function(){return s.createElement("div",{className:"timer"},this.props.timer.time.m,":",this.props.timer.time.s)}}])&&a(n.prototype,r),t}());t.default=Object(r.b)(function(e){return{gameStatus:e.status,timer:e.timer,isTimerRunning:e.isTimerRunning}})(f)},30:function(e,t,n){"use strict";const r=n(31);e.exports=(e,t={})=>{if(!Number.isFinite(e))throw new TypeError("Expected a finite number");t.compact&&(t.secondsDecimalDigits=0,t.millisecondsDecimalDigits=0);const n=[],o=(e,r,o,i)=>{if(0===e)return;const a=t.verbose?" "+((e,t)=>1===t?e:e+"s")(r,e):o;n.push((i||e)+a)};if(("number"==typeof t.secondsDecimalDigits?t.secondsDecimalDigits:1)<1){const t=1e3-e%1e3;t<500&&(e+=t)}const i=r(e);if(o(Math.trunc(i.days/365),"year","y"),o(i.days%365,"day","d"),o(i.hours,"hour","h"),o(i.minutes,"minute","m"),t.separateMilliseconds||t.formatSubMilliseconds||e<1e3)if(o(i.seconds,"second","s"),t.formatSubMilliseconds)o(i.milliseconds,"millisecond","ms"),o(i.microseconds,"microsecond","µs"),o(i.nanoseconds,"nanosecond","ns");else{const e=i.milliseconds+i.microseconds/1e3+i.nanoseconds/1e6,n="number"==typeof t.millisecondsDecimalDigits?t.millisecondsDecimalDigits:0,r=n?e.toFixed(n):Math.ceil(e);o(parseFloat(r,10),"millisecond","ms",r)}else{const n=e/1e3%60,r="number"==typeof t.secondsDecimalDigits?t.secondsDecimalDigits:1,i=n.toFixed(r),a=t.keepDecimalsOnWholeSeconds?i:i.replace(/\.0+$/,"");o(parseFloat(a,10),"second","s",a)}return 0===n.length?"0"+(t.verbose?" milliseconds":"ms"):t.compact?"~"+n[0]:"number"==typeof t.unitCount?"~"+n.slice(0,Math.max(t.unitCount,1)).join(" "):n.join(" ")}},31:function(e,t,n){"use strict";e.exports=e=>{if("number"!=typeof e)throw new TypeError("Expected a number");const t=e>0?Math.floor:Math.ceil;return{days:t(e/864e5),hours:t(e/36e5)%24,minutes:t(e/6e4)%60,seconds:t(e/1e3)%60,milliseconds:t(e)%1e3,microseconds:t(1e3*e)%1e3,nanoseconds:t(1e6*e)%1e3}}},41:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(9),a=n(24);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,l(t).call(this,e))}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleEvent",value:function(e){var t;37==e.keyCode?t="left":38==e.keyCode?t="up":39==e.keyCode?t="right":40==e.keyCode&&(t="down"),""!=this.props.gameStatus||this.props.total>=100?document.removeEventListener("keyup",this.handleEvent.bind(this),!1):t&&this.props.dispatch(Object(a.g)(t))}},{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleEvent.bind(this),!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleEvent.bind(this),!1)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.props.children)}}])&&u(n.prototype,r),t}();t.default=Object(i.b)(function(e){return{keyBoardAction:e.keyBoardAction,gameStatus:e.status,total:e.total}})(f)},42:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(9);t.default=Object(i.b)(function(e){return{total:e.total}})(function(e){return o.a.createElement("div",{className:"Score"},o.a.createElement("span",{className:"score-header"},"Score"),o.a.createElement("span",{className:"Score-Number"},e.total))})},43:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(9);t.default=Object(i.b)(function(e){return{fruitsCollection:e.fruitsCollection}})(function(e){var t=null;return e.fruitsCollection&&(t=e.fruitsCollection.map(function(e){return o.a.createElement("tr",null,o.a.createElement("td",{align:"center"},o.a.createElement("img",{className:"pointstable-image",src:e.url})),o.a.createElement("td",{align:"center"},o.a.createElement("span",null,e.points)))})),o.a.createElement("div",{className:"instruction-container"},o.a.createElement("h2",null,"Instructions"),o.a.createElement("ol",null,o.a.createElement("li",null,"use arrows to help the man to reach fruit"),o.a.createElement("li",null,"fruits will disappear in some time, grab it before disappear"),o.a.createElement("li",null,"Try to get 100 points before time goes out"),o.a.createElement("li",null,"points for each fruit displayed below")),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("th",null,"Fruit image"),o.a.createElement("th",null,"points")),o.a.createElement("tbody",null,t)))})},47:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(9),a=n(24);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,(n=!(r=l(t).call(this,e))||"object"!==c(r)&&"function"!=typeof r?s(this):r).click=n.clickHandler.bind(s(n)),n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"clickHandler",value:function(){this.props.dispatch(Object(a.b)())}},{key:"template",value:function(e,t,n){return o.a.createElement("div",{className:"backdrop"},o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-container"},o.a.createElement("div",{className:"modal-header"},e),o.a.createElement("div",{className:"modal-body"},t),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("span",{onClick:this.click,className:"restart-button"},n)))))}},{key:"showStatus",value:function(){return"win"==this.props.gameStatus?this.template("congrats","you win","restart game"):"loss"==this.props.gameStatus?this.template("oops","you lost","try again"):null}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.showStatus())}}])&&u(n.prototype,r),t}();t.default=Object(i.b)(function(e){return{gameStatus:e.status}})(p)}}]);