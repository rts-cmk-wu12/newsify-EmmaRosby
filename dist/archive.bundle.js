(()=>{var e,t,r,a,o={978:(e,t,r)=>{"use strict";r.a(e,(async(e,t)=>{try{var a=r(81),o=e([a]);a=(o.then?(await o)():o)[0],t()}catch(e){t(e)}}))},81:(e,t,r)=>{"use strict";r.a(e,(async(e,t)=>{try{r(879);const a=document.querySelector("#archiveCategoryContainer"),{fetchHomeTopStories:o}=r(968),s=await o();function c(e,t){return e.slice(0,t)+"..."}console.log(s),s.results.forEach((function(e){for(var t=0;t<localStorage.length;t++)if(e.title==localStorage.key(t)){const t=document.createElement("article");t.innerHTML=`\n                <div class="category__details__article__all">\n                    <img src="./img/placeholder.svg" alt="">\n                    <div class="category__details__article__all__decsription">\n                        <h3 class="dark-mode-font">${c(e.title,30)}</h3>\n                        <p class="dark-mode-font">${c(e.abstract,60)}</p>\n                    </div>\n                </div>\n                <div class="swipeArticle-redBox"><img src="./img/trashcanWhite.svg" alt=""></div>`,t.classList.add("category__details__article"),a.append(t),t.addEventListener("click",(()=>{window.open(e.url)}))}})),t()}catch(n){t(n)}}),1)},968:e=>{const t="xzt2RrbEiigM4JZMC4hHDl4cHYJo2wju",r="https://api.nytimes.com/svc/";e.exports={fetchMostPopularByViews:async function(e=1){const a=new URL(`${e}.json`,r+"mostpopular/v2/viewed/");a.searchParams.set("api-key",t);const o=await fetch(a);return await o.json()},fetchHomeTopStories:async function(e="home"){const a=new URL(`${e}.json`,r+"topstories/v2/");a.searchParams.set("api-key",t);const o=await fetch(a);return await o.json()}}},879:e=>{"use strict";e.exports={}}},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e](r,r.exports,c),r.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,s,c)=>{var n;c&&((n=[]).d=-1);var i,l,p,d=new Set,u=o.exports,_=new Promise(((e,t)=>{p=t,l=e}));_[t]=u,_[e]=e=>(n&&e(n),d.forEach(e),_.catch((e=>{}))),o.exports=_,s((o=>{var s;i=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var s=[];s.d=0,o.then((e=>{c[t]=e,a(s)}),(e=>{c[r]=e,a(s)}));var c={};return c[e]=e=>e(s),c}}var n={};return n[e]=e=>{},n[t]=o,n})))(o);var c=()=>i.map((e=>{if(e[r])throw e[r];return e[t]})),l=new Promise((t=>{(s=()=>t(c)).r=0;var r=e=>e!==n&&!d.has(e)&&(d.add(e),e&&!e.d&&(s.r++,e.push(s)));i.map((t=>t[e](r)))}));return s.r?l:c()}),(e=>(e?p(_[r]=e):l(u),a(n)))),n&&n.d<0&&(n.d=0)},c(978)})();