parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bHil":[function(require,module,exports) {
var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";pageContest.innerHTML='\n      <section class="page-list">\n        <div class="articles">Hey, this page is a PageList template, about: '.concat(e,"</div>\n      </section>\n      "),function(e,t){fetch("".concat(e+t)).then(function(e){return e.json()}).then(function(e){var t=e.name,n=e.released,a=e.description,i=document.querySelector(".page-detail .article");i.querySelector("h1.title").innerHTML=t,i.querySelector("p.realease-date span").innerHTML=n,i.querySelector("p.description").innerHTML=a})}("https://api.rawg.io/api/games/",e.replace(/\s+/g,"-"))};
},{}]},{},["bHil"], null)
//# sourceMappingURL=/PageList.b1eaa1a3.js.map