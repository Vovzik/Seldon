function popup(){const e=document.querySelectorAll(".js__popup-link"),t=document.querySelectorAll(".js__popup-close"),o=document.querySelector(".popupvideo__video-js"),n=document.querySelector("body");for(let t=0;t<e.length;t++)e[t].addEventListener("click",n=>{e[t].classList.contains("video__js")&&o.play();const l=e[t].dataset.modal;s(document.querySelector(`[data-popup="${l}"]`)),n.preventDefault()});for(let e=0;e<t.length;e++)t[e].addEventListener("click",o=>{l(t[e].closest(".js__popup-open")),o.preventDefault()});function s(e){if(e){const t=document.querySelector(".js__popup-open.open");t?l(t,!1):function(){const e=window.innerWidth-document.querySelector("body").offsetWidth+"px";n.style.paddingRight=e,n.classList.add("lock")}(),e.classList.add("open"),e.addEventListener("click",e=>{e.target.closest(".js__popup-content")||l(e.target.closest(".js__popup-open"))})}}function l(e,t=!0){e.classList.remove("open"),o.pause(),t&&(o.pause(),setTimeout((function(){n.style.paddingRight="0px",n.classList.remove("lock")}),400))}}function videoreviewSlider(){new Swiper(".videoreview__swiper-container",{slidesPerView:5,loop:!1,spaceBetween:65,pagination:{el:".videoreview__swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:2,spaceBetween:30},501:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:4,spaceBetween:30},1024:{slidesPerView:5,spaceBetween:65}}})}function ready(){function e(e,t,o,...n){let s=null;const l=i=>{s||(s=i);const r=Math.min((i-s)/o,1);for(let o=0;o<n.length;o++){const o=n[0][0],s=n[0][1],l=n[0][2],i=n[0][3];o.innerHTML=Math.floor(r*(t+e)),s.innerHTML=Math.floor(r*(t+e))+"%",l.innerHTML=Math.floor(r*(t+e)),i.innerHTML=Math.floor(r*(t+e))}r<1&&window.requestAnimationFrame(l)};window.requestAnimationFrame(l)}!function(){const e=document.querySelectorAll(".js__header-burgerclick"),t=document.querySelectorAll(".js__header-burger"),o=document.querySelector(".header__nav-js"),n=document.querySelector("body");for(let s=0;s<e.length;s++)e[s].addEventListener("click",()=>{for(let e=0;e<3;e++)t[e].classList.toggle("open"),o.classList.toggle("open"),n.classList.toggle("lock")});const s=document.querySelectorAll(".header__list-click"),l=document.querySelectorAll(".header__submenu-openjs");for(let e=0;e<s.length;e++)s[e]&&s[e].addEventListener("click",()=>{l[e].classList.toggle("open")})}(),function(){const e=document.querySelectorAll(".item"),t=document.querySelectorAll(".control"),o=document.querySelectorAll(".item-header"),n=document.querySelectorAll(".item-description");let s=0;const l={init:()=>{t.forEach(e=>e.addEventListener("click",e=>{l.clickedControl(e)})),t[s].classList.add("active"),e[s].classList.add("active")},nextSlide:()=>{l.reset(),s===e.length-1&&(s=-1),s++,t[s].classList.add("active"),e[s].classList.add("active"),l.transitionDelay(o),l.transitionDelay(n)},clickedControl:t=>{l.reset(),clearInterval(i);const r=t.target,c=Number(r.dataset.index);r.classList.add("active"),e.forEach((e,t)=>{t===c&&e.classList.add("active")}),s=c,l.transitionDelay(o),l.transitionDelay(n),i=setInterval(l.nextSlide,5e3)},reset:()=>{e.forEach(e=>e.classList.remove("active")),t.forEach(e=>e.classList.remove("active"))},transitionDelay:e=>{let t;e.forEach(e=>{const o=e.childNodes;let n,s=1;t="item-header"===e.classList.value?.015:.007,o.forEach(o=>{o.classList&&(n=e.parentNode.classList.contains("active")?s*t+.76:s*t,o.firstElementChild.style.transitionDelay=n+"s",s++)})})}};let i;t[0]&&(l.init(),i=setInterval(l.nextSlide,5e3))}(),window.innerWidth<=500&&new Swiper(".programs__swiper-container",{slidesPerView:1.5,spaceBetween:28,loop:!1}),window.innerWidth<=500&&new Swiper(".opportunities__swiper-container",{slidesPerView:1.5,spaceBetween:28,loop:!1}),window.innerWidth<=500&&new Swiper(".products__swiper-container",{slidesPerView:1.5,spaceBetween:28,loop:!1});const t=document.querySelectorAll(".advantage__benefit-jsvalue");for(let o=0;o<t.length;o++)t[o]&&e(100,0,5e3,t);window.innerWidth<=500&&new Swiper(".news__swiper-container",{slidesPerView:1.5,loop:!1}),new Swiper(".reviews__swiper-container",{slidesPerView:2,loop:!1,spaceBetween:50,pagination:{el:".reviews__swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2}}}),new Swiper(".partners__swiper-container",{slidesPerView:5,loop:!1,spaceBetween:73,pagination:{el:".partners__swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:2,spaceBetween:46},501:{slidesPerView:3,spaceBetween:46},768:{slidesPerView:4,spaceBetween:46},1024:{slidesPerView:5,spaceBetween:73}}});const o=document.querySelectorAll(".form__focus-js");for(let e=0;e<o.length;e++)o[e]&&(o[e].addEventListener("focus",()=>{o[e].classList.add("open")}),o[e].addEventListener("blur",()=>{""===o[e].value?o[e].classList.remove("open"):o[e].classList.add("open")}));console.log("video");function n(e){const t=document.querySelectorAll(".megafon__js-path"),o=document.querySelectorAll(".js__inner-procent"),n=document.querySelectorAll(".megafon__input");for(let e=0;e<n.length;e++){const s=t[e].attributes[6].value=239+parseInt(2.4*o[e].innerHTML);t[e].attributes[6].value=239;let l=setInterval(()=>{let o=n[e].value++;o<s?t[e].attributes[6].value=o:clearInterval(l)},5)}}n(),(()=>{const e=document.querySelectorAll(".megafon__input");new Swiper(".megafon__swiper-container",{slidesPerView:1,loop:!1,pagination:{el:".megafon__swiper-pagination",clickable:!0},effect:"fade",fadeEffect:{crossFade:!0}}).on("slideChange",(function(){for(let t=0;t<e.length;t++)e[t].value=239;n(),console.log("click")}))})(),function(){const e=document.querySelectorAll(".howtouse__pagination-js"),t=new Swiper(".howtouse__swiper-container",{slidesPerView:1,loop:!1,pagination:{el:".howtouse__swiper-pagination",clickable:!0},effect:"fade",fadeEffect:{crossFade:!0}});t.on("slideChange",(function(){e.forEach(e=>e.classList.add("hidden")),document.querySelectorAll('[data-scene="preparation"]')[t.activeIndex].classList.remove("hidden")}))}(),function(){const e=document.querySelectorAll(".success__js-path"),t=document.querySelectorAll(".success__js-data"),o=document.querySelectorAll(".success__input");for(let n=0;n<e.length;n++){const s=e[n].attributes[6].value=128+parseInt(1.28*t[n].innerHTML);e[n].attributes[6].value=128;setInterval(()=>{let t=o[n].value++;t<s&&(e[n].attributes[6].value=t)},5)}}(),function(){const e=document.querySelector(".detailed__img-js"),t=document.querySelector(".detailed__video-js"),o=document.querySelectorAll(".detailed__js-timecode");e&&e.addEventListener("click",()=>{t.play(),e.style.display="none"});for(let e=0;e<o.length;e++)o[e]&&o[e].addEventListener("click",()=>{const n=parseFloat(o[e].dataset.time);t.currentTime=n})}(),function(){const e=document.querySelector(".js__address-map");e&&ymaps.ready((function(){let t,o=[[55.761836568962494,37.68322149999997],[56.109094568600625,47.26446349999999]],n=new ymaps.Map(e,{center:[55.75399399999374,37.62209300000001],zoom:7});for(t=0;t<o.length;++t){let e=[new ymaps.Placemark(o[t],{},{iconLayout:"default#image",iconImageHref:"./images/contacts/map3.png",iconImageSize:[74,74],iconImageOffset:[-35,-80]})];n.geoObjects.add(e[0])}n.controls.remove("geolocationControl"),n.controls.remove("searchControl"),n.controls.remove("trafficControl"),n.controls.remove("typeSelector"),n.controls.remove("fullscreenControl"),n.controls.remove("zoomControl"),n.controls.remove("rulerControl"),n.behaviors.disable(["scrollZoom"])}))}(),function(){const e=document.querySelectorAll(".accardion__js-click"),t=document.querySelectorAll(".accardion__open-js"),o=document.querySelectorAll(".accardion__js-svg");for(let n=0;n<e.length;n++)e[n]&&e[n].addEventListener("click",()=>{t[n].classList.toggle("open"),o[n].classList.toggle("open")})}(),function(){const e=document.getElementById("gallery-container");lightGallery(e,{speed:500,height:"100px",plugins:[lgZoom,lgThumbnail],thumbMargin:54,thumbHeight:"94px",thumbWidth:67,mobileSettings:{controls:!0,showCloseIcon:!0}})}(),$((function(){$(".phone").mask("+7(999) 999-9999")}))}popup(),videoreviewSlider(),document.addEventListener("DOMContentLoaded",ready);