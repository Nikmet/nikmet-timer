if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const c=e=>s(e,o),t={module:{uri:o},exports:l,require:c};i[o]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/howler-9sHUc0Ya.js",revision:null},{url:"assets/index-Cwr-DMA8.css",revision:null},{url:"assets/index-DYMHlFia.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"cc58ee71133ac2587a180cb69792ab18"},{url:"favicon.ico",revision:"81bf16d0b36989fdea4998697021905d"},{url:"maskable-icon-512x512.png",revision:"c130bf00d9587c8ede20ed8d844f9df5"},{url:"pwa-192x192.png",revision:"b5e0a782565d52bc38c6409a574b3301"},{url:"pwa-512x512.png",revision:"9cf3d75df07b4bf3796f816160de0508"},{url:"pwa-64x64.png",revision:"cf2ac08fb973e8ab4d6f257f93cc2e59"},{url:"manifest.webmanifest",revision:"b68c0e89e42f1397369ceb3b3387c8a9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
