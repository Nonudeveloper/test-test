"use strict";var precacheConfig=[["/test-test/index.html","aa9fb43659180e4474c6162a61af6e63"],["/test-test/static/css/main.bef45dad.css","4890184eb2013155cfd93d47e661eae2"],["/test-test/static/js/main.a8c189fe.js","453ad8217b1397c3b0e1667c3b7431d1"],["/test-test/static/media/RoadCrossed.cf460aa7.png","cf460aa7be4d62f7c5609dbdc662ca03"],["/test-test/static/media/RoadLeftRight.95b741f5.png","95b741f529006712b28cf2fe7de9445c"],["/test-test/static/media/RoadUpDown.f7873595.png","f78735959657f784725dc25613b675d6"],["/test-test/static/media/Roof.277c9f66.png","277c9f6681403742a2185b33401ab82d"],["/test-test/static/media/blonde.27cbfbeb.png","27cbfbeb52c9c8ef0e87444a84583940"],["/test-test/static/media/brunette.cda0c691.png","cda0c691a264e3e83ba34513111f473d"],["/test-test/static/media/building.302a5322.png","302a532232eeb5808600a532e013838f"],["/test-test/static/media/bush.97363ee6.png","97363ee68e13dad17059c1d52ac5d010"],["/test-test/static/media/character-blonde.27cbfbeb.png","27cbfbeb52c9c8ef0e87444a84583940"],["/test-test/static/media/character-brunette.cda0c691.png","cda0c691a264e3e83ba34513111f473d"],["/test-test/static/media/concrete.71d777ff.jpg","71d777ff6b8f9e9281932346d4a56252"],["/test-test/static/media/drone1.1215f3c2.png","1215f3c28c6b9e0e4dd59279c11fab08"],["/test-test/static/media/drone2.f355ca68.png","f355ca68059aa0cf76689c375e640213"],["/test-test/static/media/drone3.e2d2c2a8.png","e2d2c2a8aca72e992820b2388bc4fbb5"],["/test-test/static/media/fir-tree.bc24c86d.png","bc24c86d06c0f141ad726408cf65eb8f"],["/test-test/static/media/gem.fd48ef93.png","fd48ef93b2ba801987e023d4578c3928"],["/test-test/static/media/gnome1.ad077148.png","ad07714848fc81c5673d5e819626a14e"],["/test-test/static/media/gnome2.d4188874.png","d4188874919b2877cff9c326d3e40506"],["/test-test/static/media/grass.5cc318d6.jpg","5cc318d692d183de9ff24c5e64c98519"],["/test-test/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/test-test/static/media/palm-tree.4202d258.png","4202d25898282538f08761715f35dcc5"],["/test-test/static/media/passenger.4068caa3.png","4068caa36c3e74373acd81d0c0553e30"],["/test-test/static/media/passengers.0f444e22.png","0f444e22b03f1c30a7b55b8116399631"],["/test-test/static/media/stone1.106982ee.png","106982ee0d430c31e500b01de11e1a66"],["/test-test/static/media/stone2.2b60fc02.png","2b60fc028901ed38be5393728d951468"],["/test-test/static/media/trash1.baf74131.png","baf74131fb92db755416c2a6dce1c5a8"],["/test-test/static/media/trash2.31c21961.png","31c219611ec727d7c9c24b3c4b0fb82b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return s.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),s="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),e=urlsToCacheKeys.has(a));var n="/test-test//index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});