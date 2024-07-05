(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const l="44791015-436dd02a5fc0b5187e9b97af9",a="https://pixabay.com/api/";function d(n){const o=`${a}?key=${l}&q=${n}&image_type=foto&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{throw new Error}).catch(e=>console.log(e))}function u(){i.innerHTML=" "}function f(n){u();let o="";n.forEach(e=>{const c=`
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
          </div>`;o+=c}),i.insertAdjacentHTML("beforeend",o)}const p=document.querySelector(".button-js"),i=document.querySelector(".js-div");p.addEventListener("click",h);function h(n){n.preventDefault();const o=document.querySelector(".search-js").value.trim();d(o).then(e=>f(e)).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers.js.map
