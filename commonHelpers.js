import{i as u,S as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const f="44791015-436dd02a5fc0b5187e9b97af9",p="https://pixabay.com/api/";function m(n){const r=`${p}?key=${f}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found");return e.hits}).catch(e=>{console.log(e),u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}function h(){a.innerHTML=""}function y(n){h();let r="";n.forEach(e=>{const s=`
            <div class="card">
              <a href="${e.largeImageURL}" class="gallery-item">
                <div class="card-img-top">
                  <img src="${e.webformatURL}" alt="${e.tags}">
                </div>
              </a>
             
                <div class="card-text">
                  <p>Likes: ${e.likes}</p>
                  <p>Views: ${e.views}</p>
                  <p>Comments: ${e.comments}</p>
                  <p>Downloads: ${e.downloads}</p>
               
              </div>
            </div>`;r+=s}),a.insertAdjacentHTML("beforeend",r)}const g=document.querySelector(".button-js"),a=document.querySelector(".js-div"),v=document.querySelector(".search-js");let c;g.addEventListener("click",L);function L(n){n.preventDefault();const r=v.value.trim();if(r===""){u.warning({title:"Warning",message:"Please enter a search term"});return}w(),m(r).then(e=>{l(),y(e),c?c.refresh():c=new d(".gallery-item",{captionsData:"alt",captionDelay:250})}).catch(e=>{l(),console.log(e)})}function w(){a.innerHTML='<div class="loader"></div>'}function l(){const n=document.querySelector(".loader");n&&n.remove()}
//# sourceMappingURL=commonHelpers.js.map
