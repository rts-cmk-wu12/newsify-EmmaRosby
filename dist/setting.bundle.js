(()=>{var e={359:()=>{const e=document.querySelector("#toggleDarkMode"),o=document.querySelector("body"),t=document.querySelector("header"),r=document.querySelector("footer"),l=document.querySelectorAll(".dark-mode-font"),a=document.querySelectorAll(".dark-mode-img"),c=document.querySelectorAll(".light-mode-img");let s="dark"===localStorage.getItem("theme");function n(e){a.forEach((o=>{o.style.display=e?"block":"none"})),c.forEach((o=>{o.style.display=e?"none":"block"}))}s?(o.style.backgroundColor="#222222",t.style.backgroundColor="#222222",r.style.backgroundColor="#222222",l.forEach((e=>e.style.color="#D9D9D9")),n(!0)):(o.style.backgroundColor="#FFFFFF",l.forEach((e=>e.style.color="#404040")),n(!1)),e.addEventListener("click",(()=>{s?(o.style.backgroundColor="#FFFFFF",t.style.backgroundColor="#FFFFFF",r.style.backgroundColor="#FFFFFF",l.forEach((e=>e.style.color="#404040")),n(!1),localStorage.setItem("theme","light")):(o.style.backgroundColor="#222222",t.style.backgroundColor="#222222",r.style.backgroundColor="#222222",l.forEach((e=>e.style.color="#D9D9D9")),n(!0),localStorage.setItem("theme","dark")),s=!s,console.log("isDark:",s)}))}},o={};function t(r){var l=o[r];if(void 0!==l)return l.exports;var a=o[r]={exports:{}};return e[r](a,a.exports,t),a.exports}(()=>{"use strict";const e=JSON.parse('{"V":["arts","automobiles","books/review","business","fashion","food","health","home","insider","magazine","movies","nyregion","obituaries","opinion","politics","realestate","science","sports","sundayreview","technology","theater","t-magazine","travel","upshot","us","world"]}').V;console.log(e);const o=document.querySelector(".toggle");let r=JSON.parse(localStorage.getItem("toggleStates"))||{};localStorage.getItem("toggleStates")||(r=e.reduce(((e,o)=>(e[`toggle-${o}`]=!0,e)),{}),localStorage.setItem("toggleStates",JSON.stringify(r))),e.forEach((function(e){const t=document.createElement("div"),l=`toggle-${e}`;t.innerHTML=`\n        <div class="toggle__category-wrapper__category">\n            <img src="img/newsify_logo.svg" alt="logo">\n            <h3 class="dark-mode-font">${e}</h3>\n        </div>\n        <label class="toggle__category-wrapper__switch" id="${l}">\n            <input type="checkbox" ${r[l]?"checked":""}>\n            <span class="toggle__category-wrapper__switch__slider"></span>\n        </label>\n    `,t.classList.add("toggle__category-wrapper"),o.append(t);const a=t.querySelector('input[type="checkbox"]');a.addEventListener("change",(()=>{r[l]=a.checked,localStorage.setItem("toggleStates",JSON.stringify(r))}))})),t(359)})()})();