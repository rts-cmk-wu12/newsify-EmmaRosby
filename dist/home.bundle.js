(()=>{var e,t,r,a,o={477:(e,t,r)=>{"use strict";r.a(e,(async(e,t)=>{try{var a=r(578),o=e([a]);a=(o.then?(await o)():o)[0],t()}catch(e){t(e)}}))},578:(e,t,r)=>{"use strict";r.a(e,(async(e,t)=>{try{r(879);const e=document.querySelector("#homeCategoryContainer"),{fetchHomeTopStories:a}=r(968),o=await a();console.log(o);const s=[...new Set(o.results.map((e=>e.section)))];console.log(s),s.forEach((function(t){const r=o.results.filter((e=>e.section===t)),a=document.createElement("details");a.innerHTML=`\n            <summary class="category__details__summary">\n                <img src="img/newsify_logo.svg" alt="logo">\n                <h2 class="dark-mode-font">${t}</h2>\n            </summary>`,r.forEach((e=>{const t=document.createElement("article");var r;t.innerHTML=`\n                <img src="./img/placeholder.svg" alt="">\n                    <div class="category__details__article__decsription">\n                        <h3 class="dark-mode-font">${e.title}</h3>\n                        <p class="dark-mode-font">${r=e.abstract,r.slice(0,60)+"..."}</p>\n                    </div>`,t.classList.add("category__details__article"),a.append(t),t.addEventListener("click",(()=>{window.open(e.url)}))})),a.classList.add("category__details"),e.append(a)})),t()}catch(e){t(e)}}),1)},968:e=>{const t="xzt2RrbEiigM4JZMC4hHDl4cHYJo2wju",r="https://api.nytimes.com/svc/";e.exports={fetchMostPopularByViews:async function(e=1){const a=new URL(`${e}.json`,r+"mostpopular/v2/viewed/");a.searchParams.set("api-key",t);const o=await fetch(a);return await o.json()},fetchHomeTopStories:async function(e="home"){const a=new URL(`${e}.json`,r+"topstories/v2/");a.searchParams.set("api-key",t);const o=await fetch(a);return await o.json()}}},879:e=>{"use strict";e.exports={}}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e](r,r.exports,n),r.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},n.a=(o,s,n)=>{var c;n&&((c=[]).d=-1);var i,l,p,m=new Set,d=o.exports,u=new Promise(((e,t)=>{p=t,l=e}));u[t]=d,u[e]=e=>(c&&e(c),m.forEach(e),u.catch((e=>{}))),o.exports=u,s((o=>{var s;i=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var s=[];s.d=0,o.then((e=>{n[t]=e,a(s)}),(e=>{n[r]=e,a(s)}));var n={};return n[e]=e=>e(s),n}}var c={};return c[e]=e=>{},c[t]=o,c})))(o);var n=()=>i.map((e=>{if(e[r])throw e[r];return e[t]})),l=new Promise((t=>{(s=()=>t(n)).r=0;var r=e=>e!==c&&!m.has(e)&&(m.add(e),e&&!e.d&&(s.r++,e.push(s)));i.map((t=>t[e](r)))}));return s.r?l:n()}),(e=>(e?p(u[r]=e):l(d),a(c)))),c&&c.d<0&&(c.d=0)},n(477)})();