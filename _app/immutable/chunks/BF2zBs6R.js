import{E as e,G as t,O as n,g as r,nt as i,q as a}from"./DhRgfJDB.js";import"./BelnbgrZ.js";import{t as o}from"./tHwB8B8Z.js";var s={slug:`schema`,title:`Schema`,date:`2022-03-26T00:00:00.000Z`,excerpt:`I'm working on the IQ test again.`,tags:[`code`,`math`]},{slug:c,title:l,date:u,excerpt:d,tags:f}=s,p=n(`<pre class="language-javascript"></pre>`),m=n(`<p>I’m working on the IQ test again. I’ll have to work on the best way to represent rules, and configuration for different graphics. Basically, I think I will have a 3x3 array, filled with blank config files - maybe they will have indexes and neighbor references. Then I will apply rules to this array, modifying the config files. The config files will be able to define a graphic, like a grid with shapes, nested shapes, dot patterns etc.</p> <p>The answer choices will have random parameters tweaked in this process, like modified rule numeric values or starting index.</p> <p>The other day, I made a function to return an arbitrary diagonal of a matrix.</p> <!>`,1);function h(n){var s=m(),c=a(t(s),6);o(c,{lang:`javascript`,filename:`utils.js`,children:(t,n)=>{var a=p();r(a,()=>`<code class="language-javascript"><span class="token comment">/**
 * The range of % is (-n, n). positiveMode restricts the range to [0, n).
 *
 * @param &#123;a value&#125; x
 * @param &#123;the modulus&#125; n
 * @returns x mod n | x ϵ [0,n)
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">positiveMod</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">%</span> n<span class="token punctuation">)</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">;</span>

<span class="token comment">/**
 * Pick a diagonal from a grid.
 *
 * @param &#123;3x3 grid&#125; grid
 * @param &#123;column index of first element&#125; diagonalIndex
 * @param &#123;1: right, -1: left&#125; direction
 * @returns &#123;array of elements in the diagonal, starting at the given index moving down and in the given direction&#125;
 */</span>

<span class="token comment">/**
 * 1 2 3  -1 -2 -3
 * 3 1 2  -2 -3 -1
 * 2 3 1  -3 -1 -2
 */</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getDiagonal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">grid<span class="token punctuation">,</span> diagonalIndex<span class="token punctuation">,</span> direction</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>diagonalIndex <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		diagonalIndex <span class="token operator">=</span> <span class="token function">positiveMod</span><span class="token punctuation">(</span>diagonalIndex<span class="token punctuation">,</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">const</span> output <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		output<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token function">positiveMod</span><span class="token punctuation">(</span>diagonalIndex <span class="token operator">+</span> direction <span class="token operator">*</span> i<span class="token punctuation">,</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> output<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,!0),i(a),e(t,a)},$$slots:{default:!0}}),e(n,s)}export{h as default,s as metadata};