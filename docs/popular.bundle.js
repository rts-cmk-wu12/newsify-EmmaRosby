(()=>{var e,t,o,r,a={213:(e,t,o)=>{"use strict";o.a(e,(async(e,t)=>{try{var r=o(620),a=(o(421),e([r]));r=(a.then?(await a)():a)[0],t()}catch(e){t(e)}}))},286:(e,t,o)=>{"use strict";o.r(t),o.d(t,{hideDisabledCategories:()=>n});const r=o(879).V,a=JSON.parse(localStorage.getItem("toggleStates")),s=/[^a-zA-Z]/g;function n(e,t){r.forEach((o=>{e.toLowerCase().replace(s,"")===o&&(a[`toggle-${o}`]||(t.style.display="none"))}))}},968:e=>{const t="xzt2RrbEiigM4JZMC4hHDl4cHYJo2wju",o="https://api.nytimes.com/svc/";e.exports={fetchMostPopularByViews:async function(e=1){const r=new URL(`${e}.json`,o+"mostpopular/v2/viewed/");r.searchParams.set("api-key",t);const a=await fetch(r);return await a.json()},fetchHomeTopStories:async function(e="home"){const r=new URL(`${e}.json`,o+"topstories/v2/");r.searchParams.set("api-key",t);const a=await fetch(r);return await a.json()}}},620:(e,t,o)=>{"use strict";o.a(e,(async(e,t)=>{try{o(879);const r=document.querySelector("#popularCategoryContainer"),{hideDisabledCategories:a}=o(286),{fetchMostPopularByViews:s}=o(968),n=await s();console.log(n);const i=[...new Set(n.results.map((e=>e.section)))];function c(e,t){return e.slice(0,t)+"..."}console.log(i),i.forEach((function(e){const t=n.results.filter((t=>t.section===e)),o=document.createElement("details");o.innerHTML=`\n            <summary class="category__details__summary">\n                <img src="img/newsify_logo.svg" alt="logo">\n                <h2 class="dark-mode-font">${e}</h2>\n            </summary>`,t.forEach((e=>{const t=document.createElement("article");t.innerHTML=`\n            <div class="category__details__article__all">\n                <img src="./img/placeholder.svg" alt="">\n                <div class="category__details__article__all__decsription">\n                    <h3 class="dark-mode-font">${c(e.title,30)}</h3>\n                    <p class="dark-mode-font">${c(e.abstract,60)}</p>\n                </div>\n            </div>\n            <div class="swipeArticle-greenBox"><img src="./img/bookmarkWhite.svg" alt=""></div>`,t.classList.add("category__details__article"),o.append(t),t.addEventListener("click",(()=>{window.open(e.url)}))})),o.classList.add("category__details"),r.append(o),a(e,o)})),t()}catch(l){t(l)}}),1)},421:()=>{const e=document.querySelector(".pull-to-refresh");let t=0,o=!1;document.addEventListener("touchstart",(e=>{t=e.touches[0].clientY})),document.addEventListener("touchmove",(o=>{o.touches[0].clientY-t>250&&0===window.scrollY&&(e.classList.add("visible"),o.preventDefault())})),document.addEventListener("touchend",(t=>{o=!1,e.classList.contains("visible")&&(e.classList.remove("visible"),location.reload())}))},879:e=>{"use strict";e.exports=JSON.parse('{"V":["arts","automobiles","books/review","business","fashion","food","health","home","insider","magazine","movies","nyregion","obituaries","opinion","politics","realestate","science","sports","sundayreview","technology","theater","t-magazine","travel","upshot","us","world"]}')}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return a[e](o,o.exports,n),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},n.a=(a,s,n)=>{var i;n&&((i=[]).d=-1);var c,l,d,u=new Set,p=a.exports,m=new Promise(((e,t)=>{d=t,l=e}));m[t]=p,m[e]=e=>(i&&e(i),u.forEach(e),m.catch((e=>{}))),a.exports=m,s((a=>{var s;c=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var s=[];s.d=0,a.then((e=>{n[t]=e,r(s)}),(e=>{n[o]=e,r(s)}));var n={};return n[e]=e=>e(s),n}}var i={};return i[e]=e=>{},i[t]=a,i})))(a);var n=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),l=new Promise((t=>{(s=()=>t(n)).r=0;var o=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(s.r++,e.push(s)));c.map((t=>t[e](o)))}));return s.r?l:n()}),(e=>(e?d(m[o]=e):l(p),r(i)))),i&&i.d<0&&(i.d=0)},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(213)})();