/* empty css                      */import{a as P,S as E,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const q="https://pixabay.com/api/",v=15,M="57667249-14f1ef6221ae19d0d12b03187";async function d(t,r){const s={key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:v};return(await P.get(q,{params:s})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=document.querySelector(".load-more"),$=new E(".gallery a",{captionsData:"alt",captionDelay:250});function m(t){const r=t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:o,views:i,comments:S,downloads:b})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <ul class="gallery-info">
          <li>
            <p class="info-label">Likes</p>
            <p class="info-value">${o}</p>
          </li>
          <li>
            <p class="info-label">Views</p>
            <p class="info-value">${i}</p>
          </li>
          <li>
            <p class="info-label">Comments</p>
            <p class="info-value">${S}</p>
          </li>
          <li>
            <p class="info-label">Downloads</p>
            <p class="info-value">${b}</p>
          </li>
        </ul>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),$.refresh()}function B(){f.innerHTML=""}function y(){p.classList.remove("is-hidden")}function h(){p.classList.add("is-hidden")}function R(){g.classList.remove("is-hidden")}function u(){g.classList.add("is-hidden")}const O=15,A=document.querySelector(".form"),_=document.querySelector(".load-more"),x=document.querySelector(".gallery");let c="",l=1,L=0;A.addEventListener("submit",C);_.addEventListener("click",D);async function C(t){t.preventDefault();const r=t.target.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}c=r,l=1,B(),u(),y();try{const s=await d(c,l);if(L=s.totalHits,s.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(s.hits),w()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{h(),t.target.reset()}}async function D(){l+=1,u(),y();try{const t=await d(c,l);m(t.hits),G(),w()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{h()}}function w(){l*O>=L?(u(),n.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):R()}function G(){const t=x.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
