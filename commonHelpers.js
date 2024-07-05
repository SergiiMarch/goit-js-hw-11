(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const l="44791015-436dd02a5fc0b5187e9b97af9",a="https://pixabay.com/api/";function d(n){const e=`${a}?key=${l}&q=${n}&image_type=foto&orientation=horizontal&safesearch=true`;return console.log("Fetching images from URL:",e),fetch(e).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>console.log(o.hits)).catch(o=>console.log(o))}const u=document.querySelector(".button-js"),i=document.querySelector(".js-div");u.addEventListener("click",f);function f(n){n.preventDefault();const e=document.querySelector(".search-js").value.trim();d(e).then(o=>h(o)).catch(o=>console.log("error"))}function p(){i.innerHTML=""}function h(n){p(),n.forEach(e=>{const o=`
        <div class="card">
          <div class="card-img-top">
            <img src="${e.webformatURL}" alt="${e.tags}" width="360px">
          </div>
          <div class="card-body">
            <h5 class="card-title">${e.tags}</h5>
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
          </div>
        </div>`;i.insertAdjacentHTML("beforeend",o)})}
//# sourceMappingURL=commonHelpers.js.map
