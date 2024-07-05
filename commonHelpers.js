(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l="44791015-436dd02a5fc0b5187e9b97af9",u="https://pixabay.com/api/";function d(n){const t=`${u}?key=${l}&q=${n}&image_type=foto&orientation=horizontal&safesearch=true`;fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>console.log(o)).catch(o=>console.log(o))}const f=document.querySelector(".button-js"),i=document.querySelector(".js-div");f.addEventListener("click",a);function a(n){n.preventDefault();const t=document.querySelector(".search-js").value.trim();d(t).then(o=>h(o)).catch(o=>console.log("error"))}function p(){i.innerHTML=""}function h(n){p(),n.forEach(t=>{const o=`<div>
    <img src="${t.webformatURL}" alt="${t.tags}" />
    <div>
      <p>${t.likes}</p>
      <p>${t.views}</p>
      <p>${t.comments}</p>
      <p>${t.downloads}</p>
    </div>
  </div>`;i.insertAdjacentHTML("beforeend",o)})}
//# sourceMappingURL=commonHelpers.js.map
