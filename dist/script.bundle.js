!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}({10:function(e,t,r){"use strict";var n=r(5),o=function(e){return e&&e.__esModule?e:{default:e}}(n);chrome.runtime.onMessage.addListener(function(e,t,r){e.text===o.default.reportText&&r(document.all[0].querySelector(o.default.topicQuerySelector).innerText)})},5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={topicQuerySelector:"#question-header a",reportText:"report_back_stackoverflow",matches:function(e){return o.default.STACKOVERFLOW_URL_REGEX.test(e)}}},6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={STACKOVERFLOW_URL_REGEX:/^https?:\/\/(?:[^.\/?#]+\.)?stackoverflow\.com/}}});