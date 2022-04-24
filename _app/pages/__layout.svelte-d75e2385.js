import{S as v,i as D,s as q,F as C,e as h,t as j,k as F,G,c as u,a as H,h as J,d as n,m as K,b as a,H as c,g as L,I as P,J as R,K as x,q as z,o as B,v as N,L as O}from"../chunks/vendor-787b9ffb.js";/* empty css                    */import{t as w,k as Q,d as b,i as $}from"../chunks/meta-40b0440a.js";import{t as I}from"../chunks/theme-c77d7a74.js";const{document:o}=O;function U(g){let s,p,f,i,m,l,d,M,k,y,A,E,_;o.title=m=w;const T=g[1].default,r=C(T,g,g[0],null);return{c(){s=h("meta"),p=h("meta"),f=h("meta"),i=h("meta"),l=h("meta"),d=h("meta"),M=h("meta"),k=h("meta"),y=h("script"),A=j(`try {
			// prettier-ignore
			const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")

			const theme = localStorage.getItem('theme');
			let preference = theme || (isDarkMode ? 'dark' : 'light');

			// prettier-ignore
			if (preference) document.documentElement.setAttribute("data-theme", preference)
		} catch (err) {
			console.error(err);
		}`),E=F(),r&&r.c(),this.h()},l(t){const e=G('[data-svelte="svelte-wxchmu"]',o.head);s=u(e,"META",{name:!0,content:!0}),p=u(e,"META",{name:!0,content:!0}),f=u(e,"META",{property:!0,content:!0}),i=u(e,"META",{name:!0,content:!0}),l=u(e,"META",{property:!0,content:!0}),d=u(e,"META",{name:!0,content:!0}),M=u(e,"META",{property:!0,content:!0}),k=u(e,"META",{name:!0,content:!0}),y=u(e,"SCRIPT",{});var S=H(y);A=J(S,`try {
			// prettier-ignore
			const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")

			const theme = localStorage.getItem('theme');
			let preference = theme || (isDarkMode ? 'dark' : 'light');

			// prettier-ignore
			if (preference) document.documentElement.setAttribute("data-theme", preference)
		} catch (err) {
			console.error(err);
		}`),S.forEach(n),e.forEach(n),E=K(t),r&&r.l(t),this.h()},h(){a(s,"name","keywords"),a(s,"content",Q.join(", ")),a(p,"name","description"),a(p,"content",b),a(f,"property","og:description"),a(f,"content",b),a(i,"name","twitter:description"),a(i,"content",b),a(l,"property","og:title"),a(l,"content",w),a(d,"name","twitter:title"),a(d,"content",w),a(M,"property","og:image"),a(M,"content",$),a(k,"name","twitter:image"),a(k,"content",$)},m(t,e){c(o.head,s),c(o.head,p),c(o.head,f),c(o.head,i),c(o.head,l),c(o.head,d),c(o.head,M),c(o.head,k),c(o.head,y),c(y,A),L(t,E,e),r&&r.m(t,e),_=!0},p(t,[e]){(!_||e&0)&&m!==(m=w)&&(o.title=m),r&&r.p&&(!_||e&1)&&P(r,T,t,t[0],_?x(T,t[0],e,null):R(t[0]),null)},i(t){_||(z(r,t),_=!0)},o(t){B(r,t),_=!1},d(t){n(s),n(p),n(f),n(i),n(l),n(d),n(M),n(k),n(y),t&&n(E),r&&r.d(t)}}}function V(g,s,p){let{$$slots:f={},$$scope:i}=s;return N(()=>{const{matches:m}=window.matchMedia("(prefers-color-scheme: dark)");let l;l=localStorage.getItem("theme")?localStorage.getItem("theme"):m?"dark":"light",I.set(l),I.subscribe(d=>{localStorage.setItem("theme",d),document.documentElement.setAttribute("data-theme",d)})}),g.$$set=m=>{"$$scope"in m&&p(0,i=m.$$scope)},[i,f]}class tt extends v{constructor(s){super();D(this,s,V,U,q,{})}}export{tt as default};
