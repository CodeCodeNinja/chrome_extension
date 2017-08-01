!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={topicQuerySelector:"#question-header a",reportText:"report_back_stackoverflow",matches:function(e){return r.default.STACKOVERFLOW_URL_REGEX.test(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={STACKOVERFLOW_URL_REGEX:/^https?:\/\/(?:[^.\/?#]+\.)?stackoverflow\.com/}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={host:"https://codecode.ninja",api:"https://codecode.ninja/api/v1"}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(4);var r=n(5),u=o(r),c=n(9),i=o(c),a=n(2),s=o(a),l=n(0),f=o(l);document.addEventListener("DOMContentLoaded",function(){document.getElementById("close-btn").addEventListener("click",function(e){window.close()});var e=function(){document.querySelector(".create-snippet-form").className+=" hide",document.querySelector(".secondary-message").className+=" show"},t=function(){e();var t=document.createElement("p");t.onclick=function(e){chrome.tabs.create({url:s.default.host+"/cards"})},t.innerHTML='\n        <h2>Snipped created!</h2>\n        <p><a href="#">Convert your new snippet into an interactive flashcard</a></p>\n    ',document.querySelector(".secondary-message").appendChild(t)},n=function(){e();var t=document.createElement("p");t.onclick=function(e){chrome.tabs.create({url:s.default.host+"/login"})},t.innerHTML='\n        <h2>You are not logged in</h2>\n        <p><a href="codecode.ninja">Click here to log into Code Code Ninja so you can securely use this extension.</a></p>\n    ',document.querySelector(".secondary-message").appendChild(t)};document.getElementById("createSnippet").addEventListener("click",function(e){e.preventDefault(),chrome.tabs.getSelected(null,function(e){var n=document.querySelector("form"),o=new FormData(n);(0,u.default)("POST","/snippets",o,function(e){console.log(e),t()})})},!1),chrome.cookies.get({url:s.default.host,name:"DFTT_END_USER_EMAIL"},function(e){e?console.log(e.value):n()});var o=[f.default];i.default.init(o)},!1)},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),r=function(e){return e&&e.__esModule?e:{default:e}}(o),u=function(e,t,n,o){var u=new XMLHttpRequest;u.onreadystatechange=function(){4===u.readyState&&200===u.status?o(u.responseText):404===u.status&&4===u.readyState&&o({error:"An error occured"})},u.open(e.toUpperCase(),r.default.api+t,!0),u.send(n)};t.default=u},function(e,t,n){"use strict";(function(t){function o(e){return e&&e.__esModule?e:{default:e}}var r=n(2),u=o(r),c=n(8),i=o(c);"production"==t.ENV?e.exports=u.default:e.exports=i.default}).call(t,n(7))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function c(){m&&p&&(m=!1,p.length?h=p.concat(h):v=-1,h.length&&i())}function i(){if(!m){var e=r(c);m=!0;for(var t=h.length;t;){for(p=h,h=[];++v<t;)p&&p[v].run();v=-1,t=h.length}p=null,m=!1,u(e)}}function a(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var p,h=[],m=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new a(e,t)),1!==h.length||m||r(i)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={host:"http://localhost:5000",api:"http://localhost:5000/api/v1"}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(){function e(){o(this,e)}return r(e,null,[{key:"init",value:function(e){this.sitesConfig=e,this.pasteClipboardIntoTextBox(),this.pasteFromActiveTab()}},{key:"pasteClipboardIntoTextBox",value:function(){document.getElementById("code").select(),document.execCommand("paste"),document.getElementById("createSnippet").focus()}},{key:"pasteFromActiveTab",value:function(){var e=this;chrome.tabs.getSelected(null,function(t){e.pasteSourceUrl(t.url),e.pasteTopic(t)})}},{key:"pasteTopic",value:function(e){var t=function(e){document.getElementById("topic").value=e};this.sitesConfig.forEach(function(n){n.matches(e.url)&&chrome.tabs.sendMessage(e.id,{text:n.reportText},t)})}},{key:"pasteSourceUrl",value:function(e){document.getElementById("source_url").value=e}}]),e}();t.default=u}]);