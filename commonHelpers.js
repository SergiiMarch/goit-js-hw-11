import{i as d,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const f="44791015-436dd02a5fc0b5187e9b97af9",h="https://pixabay.com/api/";function p(s){const r=`${h}?key=${f}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found");return e.hits}).catch(e=>{console.log(e),iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}function m(){a.innerHTML=""}function y(s){m();let r="";s.forEach(e=>{const n=`
            <div class="card">
              <a href="${e.largeImageURL}" class="gallery-item">
                <div class="card-img-top">
                  <img src="${e.webformatURL}" alt="${e.tags}">
                </div>
              </a>
              <div class="card-body">
                <h5 class="card-title">${e.tags}</h5>
                <div class="card-text">
                  <p>Likes: ${e.likes}</p>
                  <p>Views: ${e.views}</p>
                  <p>Comments: ${e.comments}</p>
                  <p>Downloads: ${e.downloads}</p>
                </div>
              </div>
            </div>`;r+=n}),a.insertAdjacentHTML("beforeend",r)}const g=document.querySelector(".button-js"),a=document.querySelector(".js-div"),v=document.querySelector(".search-js");let c;g.addEventListener("click",L);function L(s){s.preventDefault();const r=v.value.trim();if(r===""){d.warning({title:"Warning",message:"Please enter a search term"});return}b(),p(r).then(e=>{l(),y(e),c?c.refresh():c=new u(".gallery-item",{})}).catch(e=>{l(),console.log(e)})}function b(){a.innerHTML='<div class="loader"></div>'}function l(){const s=document.querySelector(".loader");s&&s.remove()}
//# sourceMappingURL=commonHelpers.js.map
