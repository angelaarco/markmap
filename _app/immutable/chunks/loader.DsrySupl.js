var f=Object.defineProperty;var g=(s,t,e)=>t in s?f(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var d=(s,t,e)=>g(s,typeof t!="symbol"?t+"":t,e);import{s as p}from"./toast.C9bm6Q7O.js";const h=class h{constructor(t,e){d(this,"desc");this.type=t,this.data=e,this.desc=h.descriptions[t]||"Unknown"}asUrl(){switch(this.type){case"gist":{const[t,e]=this.data.split(":");return`https://gist.githubusercontent.com/raw/${t}/${e||"markmap.md"}`}case"github":{const[t,e]=this.data.split(":"),[n,i]=t.split("@");return`https://raw.githubusercontent.com/${n}/${i||"main"}/${e||"README.md"}`}default:return this.data}}asData(){switch(this.type){case"gist":case"github":return`${this.type}:${this.data}`;default:return this.data}}async load(){const t=this.asUrl(),e=await fetch(t);return b(e),e.text()}static parse(t){if(t instanceof h)return t;let e,n;for(const i of["gist","github"])if(t.startsWith(`${i}:`)){e=i,n=t.slice(i.length+1);break}if(!e){const i=new URL(t);if(i.origin==="https://raw.githubusercontent.com"){const[,o,r,a,...c]=i.pathname.split("/");e="github",n=[`${o}/${r}`,a&&`@${a}`,c.length&&`:${c.join("/")}`].filter(Boolean).join("")}else if(i.origin==="https://gist.githubusercontent.com"||i.origin==="https://gist.github.com"){const{pathname:o}=i;let r,a;o.startsWith("/raw/")?([,,r,...a]=i.pathname.split("/"),a[0]==="raw"&&a.shift()):[,,r,,...a]=i.pathname.split("/"),e="gist",n=[r,a.length&&`${a.join("/")}`].filter(Boolean).join(":")}}return e||(e="url",n=t),new h(e,n)}};d(h,"descriptions",{gist:"GitHub Gist",github:"GitHub Raw",url:"URL"});let l=h;const m=l.parse("gist:af76a4c245b302206b16aec503dbe07b");function w(s){return s.replace(/[<&]/g,t=>({"<":"&lt;","&":"&amp;"})[t])}function b(s){if(!s.ok)throw new TypeError(`Failed to fetch, got response "${s.status} ${s.statusText}"`);return s}function $(s){return l.parse(s).load()}const v=(s=>()=>s++)(0);function x(s){let t;async function e(){const n=v();t=n;const i=new URLSearchParams(window.location.hash.slice(1));let o=i.get("gist");const r=i.get("d");if(o&&!r){o.includes(":")||(o=`gist:${o}`);const u=`#?d=${o}`;await Promise.resolve(),window.location.hash=u;return}let a,c;try{c=await $(r||m)}catch(u){a=u}if(n===t&&(c&&s(c),a))if(a.name==="TypeError"&&/failed to fetch/i.test(a.message))p({title:"Failed to fetch",html:['<div class="mt-1">Please check your network and resource</div>',r&&`<div class="mt-1 text-xs text-gray-600">${w(r)}</div>`].filter(Boolean).join("")});else throw a}return e}function y(s){const t=x(s);return window.addEventListener("hashchange",t),t(),{check:t,dispose:()=>window.removeEventListener("hashchange",t)}}export{l as U,m as d,$ as l,y as s};
