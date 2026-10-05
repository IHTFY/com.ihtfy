import{t as e}from"../chunks/DK3Fl9T5.js";import{$ as t,D as n,E as r,G as i,H as a,O as o,P as s,Q as c,R as l,U as u,Z as d,b as f,c as p,f as m,j as h,q as g,tt as _,x as v}from"../chunks/DhRgfJDB.js";/* empty css                */import{n as y}from"../chunks/JKr_kdeF.js";import{t as b}from"../chunks/DtmoX9qz.js";var x=e({prerender:()=>!0,trailingSlash:()=>S}),S=`always`,C=`https://ihtfy.com`,w=[`Frankie Mercado`,`IHopeThisFindsYou`,`IHTFY`,`software`,`code`,`coding`,`math`],T=`IHTFY`,E=`${C}/images/site-preview.png`,D=h(o(`<meta name="keywords"/> <meta name="description"/> <meta property="og:description"/> <meta name="twitter:description"/> <meta property="og:title"/> <meta name="twitter:title"/> <meta property="og:image"/> <meta name="twitter:image"/> <script>
		const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		let savedTheme;
		try {
			savedTheme = localStorage.getItem('theme');
		} catch {
			/* Storage can be unavailable. */
		}
		document.documentElement.setAttribute(
			'data-theme',
			savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : isDarkMode ? 'dark' : 'light'
		);
	<\/script>`,1));function O(e,o){t(o,!0);let h=d(()=>y.data.post),x=d(()=>s(h)?`${s(h).title} | ${T}`:y.url.pathname===`/blog/`?`Blog | ${T}`:y.url.pathname===`/resume/`?`Resume | ${T}`:y.url.pathname===`/support/`?`Support | ${T}`:T),S=d(()=>s(h)?.excerpt??`I like to write code, do math, make music, and play with fire.`),O=d(()=>s(h)?`${C}/optimized-images/posts/${s(h).slug}/cover.png`:E),k=d(()=>s(h)?[...s(h).tags,...w]:w);f(()=>{let{matches:e}=window.matchMedia(`(prefers-color-scheme: dark)`),t;try{t=localStorage.getItem(`theme`)}catch{}return b.set(t===`light`||t===`dark`?t:e?`dark`:`light`),b.subscribe(e=>{document.documentElement.setAttribute(`data-theme`,e);try{localStorage.setItem(`theme`,e)}catch{}})});var A=n();m(`12qhfyh`,e=>{var t=D(),n=i(t),o=g(n,2),c=g(o,2),d=g(c,2),f=g(d,2),m=g(f,2),h=g(m,2),v=g(h,2);_(2),a(e=>{p(n,`content`,e),p(o,`content`,s(S)),p(c,`content`,s(S)),p(d,`content`,s(S)),p(f,`content`,s(x)),p(m,`content`,s(x)),p(h,`content`,s(O)),p(v,`content`,s(O))},[()=>s(k).join(`, `)]),l(()=>{u.title=s(x)??``}),r(e,t)});var j=i(A);v(j,()=>o.children),r(e,A),c()}export{O as component,x as universal};