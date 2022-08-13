import{S as v,i as D,s as q,F as C,l as u,r as j,a as F,G,m as h,n as H,u as J,h as n,c as K,p as r,H as c,b as L,I as P,J as R,K as x,f as z,t as B,o as N,L as O}from"../chunks/index-bd671ba1.js";/* empty css                    */import{t as w,k as Q,d as b,i as $}from"../chunks/meta-7f2bde4e.js";import{t as I}from"../chunks/theme-57e70f6c.js";import"../chunks/index-2bbef698.js";const{document:o}=O;function U(g){let s,p,f,i,m,l,d,M,k,y,A,E,_;o.title=m=w;const T=g[1].default,a=C(T,g,g[0],null);return{c(){s=u("meta"),p=u("meta"),f=u("meta"),i=u("meta"),l=u("meta"),d=u("meta"),M=u("meta"),k=u("meta"),y=u("script"),A=j(`try {
			// prettier-ignore
			const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")

			const theme = localStorage.getItem('theme');
			let preference = theme || (isDarkMode ? 'dark' : 'light');

			// prettier-ignore
			if (preference) document.documentElement.setAttribute("data-theme", preference)
		} catch (err) {
			console.error(err);
		}`),E=F(),a&&a.c(),this.h()},l(t){const e=G('[data-svelte="svelte-wxchmu"]',o.head);s=h(e,"META",{name:!0,content:!0}),p=h(e,"META",{name:!0,content:!0}),f=h(e,"META",{property:!0,content:!0}),i=h(e,"META",{name:!0,content:!0}),l=h(e,"META",{property:!0,content:!0}),d=h(e,"META",{name:!0,content:!0}),M=h(e,"META",{property:!0,content:!0}),k=h(e,"META",{name:!0,content:!0}),y=h(e,"SCRIPT",{});var S=H(y);A=J(S,`try {
			// prettier-ignore
			const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")

			const theme = localStorage.getItem('theme');
			let preference = theme || (isDarkMode ? 'dark' : 'light');

			// prettier-ignore
			if (preference) document.documentElement.setAttribute("data-theme", preference)
		} catch (err) {
			console.error(err);
		}`),S.forEach(n),e.forEach(n),E=K(t),a&&a.l(t),this.h()},h(){r(s,"name","keywords"),r(s,"content",Q.join(", ")),r(p,"name","description"),r(p,"content",b),r(f,"property","og:description"),r(f,"content",b),r(i,"name","twitter:description"),r(i,"content",b),r(l,"property","og:title"),r(l,"content",w),r(d,"name","twitter:title"),r(d,"content",w),r(M,"property","og:image"),r(M,"content",$),r(k,"name","twitter:image"),r(k,"content",$)},m(t,e){c(o.head,s),c(o.head,p),c(o.head,f),c(o.head,i),c(o.head,l),c(o.head,d),c(o.head,M),c(o.head,k),c(o.head,y),c(y,A),L(t,E,e),a&&a.m(t,e),_=!0},p(t,[e]){(!_||e&0)&&m!==(m=w)&&(o.title=m),a&&a.p&&(!_||e&1)&&P(a,T,t,t[0],_?x(T,t[0],e,null):R(t[0]),null)},i(t){_||(z(a,t),_=!0)},o(t){B(a,t),_=!1},d(t){n(s),n(p),n(f),n(i),n(l),n(d),n(M),n(k),n(y),t&&n(E),a&&a.d(t)}}}function V(g,s,p){let{$$slots:f={},$$scope:i}=s;return N(()=>{const{matches:m}=window.matchMedia("(prefers-color-scheme: dark)");let l;l=localStorage.getItem("theme")?localStorage.getItem("theme"):m?"dark":"light",I.set(l),I.subscribe(d=>{localStorage.setItem("theme",d),document.documentElement.setAttribute("data-theme",d)})}),g.$$set=m=>{"$$scope"in m&&p(0,i=m.$$scope)},[i,f]}class et extends v{constructor(s){super(),D(this,s,V,U,q,{})}}export{et as default};
