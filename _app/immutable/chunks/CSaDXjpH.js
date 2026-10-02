import{A as e,E as t,G as n,O as r,g as i,nt as a,q as o,tt as s}from"./DhRgfJDB.js";import"./BelnbgrZ.js";import"./BQuGVkh4.js";import{t as c}from"./De_LvXwg.js";import{t as l}from"./tHwB8B8Z.js";var u={slug:`prime`,title:`Prime`,date:`2015-08-29T00:00:00.000Z`,excerpt:`Plotting twin primes`,tags:[`code`,`art`,`math`]},{slug:d,title:f,date:p,excerpt:m,tags:h}=u,g=r(`<pre class="language-javascript"></pre>`),_=r(`<pre class="language-python"></pre>`),v=r(`<p>I made this in March of 2014. I was playing around with pygame and was learning how to assign colors to specific pixels. Composite numbers are black, twin primes are green, and other primes are blue. Pixels are enumerated from 0 starting at the top left and read like a book. Note: ‘2’ should be blue, but I never fixed that.</p> <!> <p><img src="/optimized-images/posts/prime/primes.png" alt="720"/></p> <h3 id="new-js-version">New JS Version<a aria-hidden="true" tabindex="-1" href="#new-js-version"><span class="heading-link">#</span></a></h3> <!> <h3 id="a-4k-version">A 4K Version<a aria-hidden="true" tabindex="-1" href="#a-4k-version"><span class="heading-link">#</span></a></h3> <p><a href="/optimized-images/posts/prime/prime4096x2190.png">4K Version</a> (578 kB)</p> <h3 id="old-python-version">Old Python Version<a aria-hidden="true" tabindex="-1" href="#old-python-version"><span class="heading-link">#</span></a></h3> <!>`,1);function y(r){var u=v(),d=o(n(u),2);c(d,{type:`info`,date:`2019-10-06`,children:(n,r)=>{s();var i=e(`2019-10-06
I created a JavaScript version that uses HTML5 canvas, and the '2' bug is fixed. It prompts you to enter a width and height of the image (defaults to 300x300), and then prompts for download.`);t(n,i)},$$slots:{default:!0}});var f=o(d,6);l(f,{filename:`primes.js`,lang:`javascript`,children:(e,n)=>{var r=g();i(r,()=>`<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">primesUpTo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> primes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> x<span class="token punctuation">;</span> n <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> elig <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> primes<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> n <span class="token operator">**</span> <span class="token number">0.5</span><span class="token punctuation">;</span> p<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> primes<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        elig <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>elig<span class="token punctuation">)</span> primes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> primes<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> w <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'width'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">300</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'height'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">300</span><span class="token punctuation">;</span>

canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> w<span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> h<span class="token punctuation">;</span>

<span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> imageData <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createImageData</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> primes <span class="token operator">=</span> <span class="token function">primesUpTo</span><span class="token punctuation">(</span>w <span class="token operator">*</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> found <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// Iterate through every pixel</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> imageData<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">===</span> primes<span class="token punctuation">[</span>found<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">===</span> primes<span class="token punctuation">[</span>found <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> i <span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">===</span> primes<span class="token punctuation">[</span>found <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>
      imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
      imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    found<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Draw image data to the canvas</span>
ctx<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'Download?'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  link<span class="token punctuation">.</span>download <span class="token operator">=</span> &#96;prime$<span class="token punctuation">&#123;</span>w<span class="token punctuation">&#125;</span>x$<span class="token punctuation">&#123;</span>h<span class="token punctuation">&#125;</span><span class="token punctuation">.</span>png&#96;<span class="token punctuation">;</span>
  link<span class="token punctuation">.</span>href <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">'image/octet-stream'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,!0),a(r),t(e,r)},$$slots:{default:!0}});var p=o(f,8);l(p,{filename:`primes.py`,lang:`python`,children:(e,n)=>{var r=_();i(r,()=>`<code class="language-python"><span class="token keyword">import</span> pygame<span class="token punctuation">,</span> sys
<span class="token keyword">from</span> pygame<span class="token punctuation">.</span><span class="token builtin">locals</span>
<span class="token keyword">import</span> <span class="token operator">*</span>

pygame<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>

FPS <span class="token operator">=</span> <span class="token number">60</span><span class="token comment"># frames per second setting</span>
fpsClock <span class="token operator">=</span> pygame<span class="token punctuation">.</span>time<span class="token punctuation">.</span>Clock<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Window size</span>
ASPECTRATIO <span class="token operator">=</span> <span class="token number">16</span> <span class="token operator">/</span> <span class="token number">9</span>
WINDOWHEIGHT <span class="token operator">=</span> <span class="token number">720</span>
WINDOWWIDTH <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>WINDOWHEIGHT <span class="token operator">*</span> ASPECTRATIO<span class="token punctuation">)</span>

DISPLAYSURF <span class="token operator">=</span> pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token builtin">set</span>_mode<span class="token punctuation">(</span><span class="token punctuation">(</span>WINDOWWIDTH<span class="token punctuation">,</span> WINDOWHEIGHT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># Window size</span>
pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token builtin">set</span>_caption<span class="token punctuation">(</span><span class="token string">'Number Visualization'</span><span class="token punctuation">)</span><span class="token comment"># Window title</span>

<span class="token keyword">def</span> <span class="token function">primes</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">elif</span> n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
s <span class="token operator">=</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
s <span class="token operator">=</span> <span class="token punctuation">[</span>x
  <span class="token keyword">for</span> x <span class="token keyword">in</span> s
  <span class="token keyword">if</span> x
<span class="token punctuation">]</span>
mroot <span class="token operator">=</span> n <span class="token operator">**</span> <span class="token number">0.5</span>
half <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
i <span class="token operator">=</span> <span class="token number">0</span>
m <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">while</span> m <span class="token operator">&lt;=</span> mroot<span class="token punctuation">:</span>
  <span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>
  j <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">*</span> m <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">//</span><span class="token number">2</span>
s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> j <span class="token operator">&lt;</span> half<span class="token punctuation">:</span>
  s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
j <span class="token operator">+=</span> m
i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
m <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">3</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>x
  <span class="token keyword">for</span> x <span class="token keyword">in</span> s
  <span class="token keyword">if</span> x
<span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#mouse position</span>
mousex <span class="token operator">=</span> <span class="token number">0</span>
mousey <span class="token operator">=</span> <span class="token number">0</span>

RED <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
GREEN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
BLUE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
BLACK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
WHITE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>

pList <span class="token operator">=</span> primes<span class="token punctuation">(</span>WINDOWWIDTH <span class="token operator">*</span> WINDOWHEIGHT <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
pList <span class="token operator">=</span> pList <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

twinColor <span class="token operator">=</span> GREEN
regColor <span class="token operator">=</span> BLUE

<span class="token comment"># main game loop</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
  pixObj <span class="token operator">=</span> pygame<span class="token punctuation">.</span>PixelArray<span class="token punctuation">(</span>DISPLAYSURF<span class="token punctuation">)</span>
i <span class="token operator">=</span> <span class="token number">0</span>
j <span class="token operator">=</span> <span class="token number">0</span>
nextP <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> WINDOWWIDTH <span class="token operator">*</span> WINDOWHEIGHT<span class="token punctuation">)</span><span class="token punctuation">:</span>
  n <span class="token operator">=</span> i <span class="token operator">*</span> WINDOWWIDTH <span class="token operator">+</span> j
<span class="token keyword">if</span> n <span class="token operator">==</span> pList<span class="token punctuation">[</span>nextP<span class="token punctuation">]</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> nextP <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>pList<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pList<span class="token punctuation">[</span>nextP <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> pList<span class="token punctuation">[</span>nextP<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>pList<span class="token punctuation">[</span>nextP<span class="token punctuation">]</span> <span class="token operator">-</span> pList<span class="token punctuation">[</span>nextP <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    pixObj<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> twinColor
<span class="token keyword">else</span> <span class="token punctuation">:</span>
  pixObj<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> regColor
nextP <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">if</span> i <span class="token operator">&lt;</span> WINDOWHEIGHT<span class="token punctuation">:</span>
  <span class="token keyword">if</span> j <span class="token operator">&lt;</span> WINDOWWIDTH <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
  j <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">else</span> <span class="token punctuation">:</span>
  <span class="token keyword">if</span> i <span class="token operator">&lt;</span> WINDOWHEIGHT<span class="token punctuation">:</span>
  i <span class="token operator">+=</span> <span class="token number">1</span>
j <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">if</span> x <span class="token operator">==</span> WINDOWWIDTH <span class="token operator">*</span> WINDOWHEIGHT<span class="token punctuation">:</span>
  pixObj<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> WHITE <span class="token operator">-</span> <span class="token number">1</span>
<span class="token keyword">del</span> pixObj
<span class="token keyword">for</span> event <span class="token keyword">in</span> pygame<span class="token punctuation">.</span>event<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> QUIT<span class="token punctuation">:</span>
  pygame<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> MOUSEMOTION<span class="token punctuation">:</span>
  mousex<span class="token punctuation">,</span> mousey <span class="token operator">=</span> event<span class="token punctuation">.</span>pos

<span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> MOUSEBUTTONDOWN<span class="token punctuation">:</span>
  <span class="token keyword">if</span> event<span class="token punctuation">.</span>button <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> twinColor <span class="token operator">==</span> GREEN<span class="token punctuation">:</span>
  twinColor <span class="token operator">=</span> BLUE
<span class="token keyword">else</span> <span class="token punctuation">:</span>
  <span class="token keyword">if</span> twinColor <span class="token operator">==</span> BLUE<span class="token punctuation">:</span>
  twinColor <span class="token operator">=</span> GREEN
<span class="token keyword">if</span> event<span class="token punctuation">.</span>button <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> regColor <span class="token operator">==</span> GREEN<span class="token punctuation">:</span>
  regColor <span class="token operator">=</span> BLUE
<span class="token keyword">else</span> <span class="token punctuation">:</span>
  <span class="token keyword">if</span> regColor <span class="token operator">==</span> BLUE<span class="token punctuation">:</span>
  regColor <span class="token operator">=</span> GREEN
pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">)</span>
fpsClock<span class="token punctuation">.</span>tick<span class="token punctuation">(</span>FPS<span class="token punctuation">)</span>
pygame<span class="token punctuation">.</span>image<span class="token punctuation">.</span>save<span class="token punctuation">(</span>DISPLAYSURF<span class="token punctuation">,</span> <span class="token string">"primes.png"</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
  main<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,!0),a(r),t(e,r)},$$slots:{default:!0}}),t(r,u)}export{y as default,u as metadata};