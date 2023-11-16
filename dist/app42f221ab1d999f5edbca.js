(()=>{var e={402:function(e){var t;t=()=>(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{DropDownMenu:()=>s,ImageSlider:()=>a});const n=function(e,t){t.forEach((t=>e.appendChild(t)))},r=function(e,t,...n){const r=document.createElement(e);return t&&r.classList.add(t),n.forEach((e=>{r.setAttribute(e[0],e[1])})),r},i=function(e,t,n){const i=r("span",t);return i.classList.add(`material-symbols-${e}`),i.textContent=` ${n} `,i};class s{#e;#t;#n;#r;constructor(e="click"){this.#e=e,this.#t=[],this.#r=null}addMenuItem(e,t="#"){return this.#t.push({name:e,href:t})}addSubMenuItem(e,t,n){let r=this.#t.find((t=>t.name===e));void 0===r&&(r=this.#t[this.addMenuItem(e)-1]),Object.hasOwn(r,"subMenu")||(r.subMenu=[],r.dropDownIsOpen=!1),r.subMenu.push({subName:t,subLinkHRef:n})}getDOM(){const e=r("div","drop-down-menu");return this.#t.forEach((t=>{if(Object.hasOwn(t,"subMenu")){const s=r("div","drop-down-content"),a=r("a","drop-down-link",["href","#"]),o=r("span","drop-down-text");o.textContent=t.name,n(a,[o,i("outlined","drop-down-icon","arrow_drop_down")]),s.appendChild(a);const c=r("div","sub-menu");t.subMenu.forEach((e=>{const t=r("a","sub-link",["href",e.subLinkHRef]);t.textContent=e.subName,c.appendChild(t)})),c.style.maxHeight="0",c.style.opacity="0",s.appendChild(c),e.appendChild(s),"click"===this.#e?a.addEventListener("click",(()=>{if(a.classList.contains("active"))a.classList.remove("active"),a.querySelector(".drop-down-icon").style.transform="rotateX(0deg)",c.style.maxHeight="0",c.style.opacity="0",this.#r=null;else{null!==this.#r&&(this.#r.classList.remove("active"),this.#r.querySelector(".drop-down-icon").style.transform="rotateX(0deg)",this.#r.nextElementSibling.style.maxHeight="0",this.#r.nextElementSibling.style.opacity="0"),a.classList.add("active"),a.querySelector(".drop-down-icon").style.transform="rotateX(180deg)";const e=c.querySelector(".sub-link"),n=getComputedStyle(e).getPropertyValue("height").slice(0,-2)*t.subMenu.length;c.style.maxHeight=`${n}px`,c.style.opacity="1",this.#r=a}})):this.#e}else{const n=r("a","menu-link",["href",t.href]);n.textContent=t.name,e.appendChild(n)}})),e}}class a{#i;#s;#a;#o;constructor(e=0){this.#i=[],this.#a=[],this.#s=0,this.#o=e}addImage(e){this.#i.push(e)}getDOM(){const e=r("div","image-slider-frame"),t=r("div","images"),s=r("div","image-slider-ui"),a=r("div","image-indicators"),o=r("div","image-counter"),c=r("span","current-image-number");c.textContent=this.#s+1;const d=r("span","separator");d.textContent="/";const l=r("span","number-of-images");let u;l.textContent=this.#i.length,n(o,[c,d,l]);const p=n=>{this.#a[this.#s].classList.remove("current-indicator"),this.#s+=n,this.#s<0?this.#s=this.#i.length-1:this.#s>this.#i.length-1&&(this.#s=0),this.#a[this.#s].classList.add("current-indicator");const r=Number(getComputedStyle(e).getPropertyValue("width").slice(0,-2));t.scrollLeft=r*this.#s,setTimeout((()=>{c.textContent=this.#s+1}),r/2),this.#o>0&&(clearInterval(u),u=setInterval((()=>p(1)),this.#o))};this.#i.forEach(((e,n)=>{t.appendChild(e);const i=r("button","image-indicator",["data-index",n]);i.addEventListener("click",(()=>{const e=Number(i.getAttribute("data-index"));e!==this.#s&&p(e-this.#s)})),this.#a.push(i),a.appendChild(i)}));const h=r("button","arrow-button",["id","left"]);h.appendChild(i("outlined","button-icon","navigate_before")),h.addEventListener("click",(()=>p(-1)));const m=r("button","arrow-button",["id","right"]);return m.appendChild(i("outlined","button-icon","navigate_next")),m.addEventListener("click",(()=>p(1))),n(s,[a,o,h,m]),n(e,[t,s]),this.#a[0].classList.add("current-indicator"),t.scrollLeft=0,c.textContent=1,this.#o>0&&(u=setInterval((()=>p(1)),this.#o)),e}}return t})(),e.exports=t()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";const e=n.p+"635d74677747f.jpg",t=n.p+"1920x1080-px-action-adventure-Earth-fantasy-lord-1595123-wallhere.com.jpg",r=n.p+"abstract-digital-art-wallpaper-diabolica-463.jpg",i=n.p+"lord-of-the-rings-landscape-wallpapers-1080p-For-Desktop-Wallpaper.jpg",s=n.p+"mass-effect-ascension-wallpaper-176.jpg",a=n.p+"space-planet-digital-art-471.jpg",o=n.p+"wallpapersden.com_the-lord-of-the-rings-rise-to-war-hd-2021_1920x1080.jpg",c=n.p+"watch-dogs-legion-logo-anonymous-492.jpg";var d=n(402);const l=new d.DropDownMenu;l.addMenuItem("Home"),l.addMenuItem("Gallery"),l.addMenuItem("Wallpaper Sites"),l.addMenuItem("About"),l.addSubMenuItem("Wallpaper Sites","Wallpapers Wide","https://wallpaperswide.com/"),l.addSubMenuItem("Wallpaper Sites","Upsplash","https://unsplash.com/wallpapers/"),l.addSubMenuItem("Wallpaper Sites","Wallpaper Flare","https://www.wallpaperflare.com/"),document.body.appendChild(l.getDOM());const u=new d.ImageSlider(5e3);[e,t,r,i,s,a,o,c].forEach((e=>{u.addImage((()=>{const t=new Image;return t.src=e,t})())})),console.log(u),document.body.appendChild(u.getDOM())})()})();
//# sourceMappingURL=app42f221ab1d999f5edbca.js.map