import{_ as n,c as a,o as s,a as t}from"./app.4120d566.js";const g='{"title":"\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0 \u30EC\u30D5\u30A1\u30EC\u30F3\u30B9","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Global Methods","slug":"global-methods"},{"level":3,"title":"generateChart","slug":"generatechart"},{"level":2,"title":"Instance Methods","slug":"instance-methods"},{"level":3,"title":"generateLegend()","slug":"generatelegend"},{"level":3,"title":"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u8FFD\u52A0","slug":"\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u8FFD\u52A0"},{"level":3,"title":"renderChart()","slug":"renderchart"},{"level":2,"title":"Chart.js \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8","slug":"chart-js-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"},{"level":2,"title":"Canvas","slug":"canvas"}],"relativePath":"ja/api/index.md","lastUpdated":1648801915000}',e={},p=t(`<h1 id="\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0-\u30EC\u30D5\u30A1\u30EC\u30F3\u30B9" tabindex="-1">\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0 \u30EC\u30D5\u30A1\u30EC\u30F3\u30B9 <a class="header-anchor" href="#\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0-\u30EC\u30D5\u30A1\u30EC\u30F3\u30B9" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><p><code>vue-chartjs</code>\u306B\u3088\u3063\u3066\u63D0\u4F9B\u3055\u308C\u308B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u306F\u3044\u304F\u3064\u304B\u306E\u57FA\u672C\u7684\u306A\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u5B9A\u7FA9\u3055\u308C\u3066\u3044\u307E\u3059\u3002 <code>\u62E1\u5F35</code>\u3057\u3066\u3044\u308B\u306E\u3067\u3001\u305D\u308C\u3089\u306F <em>\u898B\u3048\u306A\u3044</em> \u3067\u3059\u304C\u3001\u305D\u308C\u3089\u306E\u5024\u306F\u4E0A\u66F8\u304D\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\uFF1A</p><table><thead><tr><th>Prop\u540D</th><th>\u8AAC\u660E</th></tr></thead><tbody><tr><td>width</td><td>\u30C1\u30E3\u30FC\u30C8\u5E45</td></tr><tr><td>height</td><td>\u30C1\u30E3\u30FC\u30C8\u9AD8\u3055</td></tr><tr><td>chart-id</td><td>canvas\u8981\u7D20\u306Eid</td></tr><tr><td>css-classes</td><td>\u56F2\u3093\u3067\u3044\u308B div \u306E css \u30AF\u30E9\u30B9 (\u6587\u5B57\u5217)</td></tr><tr><td>styles</td><td>\u56F2\u3093\u3067\u3044\u308B div \u306E css \u30AF\u30E9\u30B9 (\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8)</td></tr><tr><td>plugins</td><td>chartjs \u30D7\u30E9\u30B0\u30A4\u30F3 (\u914D\u5217)</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><p><code>reactData</code>\u307E\u305F\u306F<code> reactProp</code>\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u4EE5\u4E0B\u306E\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u884C\u3055\u308C\u307E\u3059\u3002</p><table><thead><tr><th>Event\u540D</th><th>\u8AAC\u660E</th></tr></thead><tbody><tr><td><code>chart:render</code></td><td>\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u5B8C\u5168\u306B\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3057\u305F\u3068\u304D</td></tr><tr><td><code>chart:destroy</code></td><td>\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u30C1\u30E3\u30FC\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u524A\u9664\u3057\u305F\u3068\u304D</td></tr><tr><td><code>chart:update</code></td><td>\u30DF\u30C3\u30AF\u30B9\u30A4\u30F3\u304C\u518D\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u4EE3\u308F\u308A\u306B\u66F4\u65B0\u3092\u3057\u305F\u3068\u304D</td></tr><tr><td><code>labels:update</code></td><td>labels\u304C\u30BB\u30C3\u30C8\u3055\u308C\u305F\u3068\u304D</td></tr><tr><td><code>xlabels:update</code></td><td>xlabels\u304C\u30BB\u30C3\u30C8\u3055\u308C\u305F\u3068\u304D</td></tr><tr><td><code>ylabels:update</code></td><td>ylabels\u304C\u30BB\u30C3\u30C8\u3055\u308C\u305F\u3068\u304D</td></tr></tbody></table><h2 id="global-methods" tabindex="-1">Global Methods <a class="header-anchor" href="#global-methods" aria-hidden="true">#</a></h2><p>\u30B0\u30ED\u30FC\u30D0\u30EB\u30E1\u30BD\u30C3\u30C9\u306F\u30A4\u30F3\u30DD\u30FC\u30C8\u3057\u3066\u4F7F\u7528\u3057\u307E\u3059\u3002</p><h3 id="generatechart" tabindex="-1">generateChart <a class="header-anchor" href="#generatechart" aria-hidden="true">#</a></h3><ul><li><strong>Type:</strong> <code>Function</code></li><li><strong>Arguments</strong>: <code>chart-id</code>, <code>chart-type</code></li><li><strong>Usage:</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> generateChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>
<span class="token comment">// First argument is the chart-id, second the chart type.</span>
<span class="token keyword">const</span> CustomLine <span class="token operator">=</span> <span class="token function">generateChart</span><span class="token punctuation">(</span><span class="token string">&#39;custom-line&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;LineWithLine&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="instance-methods" tabindex="-1">Instance Methods <a class="header-anchor" href="#instance-methods" aria-hidden="true">#</a></h2><p>\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u30E1\u30BD\u30C3\u30C9\u306F\u72EC\u81EA\u306E\u30C1\u30E3\u30FC\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u3067\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><h3 id="generatelegend" tabindex="-1">generateLegend() <a class="header-anchor" href="#generatelegend" aria-hidden="true">#</a></h3><p>HTML\u306E\u51E1\u4F8B\u3092\u4F5C\u6210\u3059\u308B\u30D8\u30EB\u30D1\u30FC\u95A2\u6570</p><ul><li><strong>Type:</strong> <code>Function</code></li><li><strong>Arguments</strong>: <code>none</code></li><li><strong>Usage:</strong></li></ul><div class="language-js"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Line <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-chartjs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> Line<span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;datasets&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;options&#39;</span><span class="token punctuation">]</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">htmlLegend</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>datasets<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>htmlLegend <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateLegend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u8FFD\u52A0" tabindex="-1">\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u8FFD\u52A0 <a class="header-anchor" href="#\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u8FFD\u52A0" aria-hidden="true">#</a></h3><p>Chart.js\u3067\u306F\u3001\u30B0\u30ED\u30FC\u30D0\u30EB\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u30A4\u30F3\u30E9\u30A4\u30F3\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u5B9A\u7FA9\u3067\u304D\u307E\u3059\u3002 \u30B0\u30ED\u30FC\u30D0\u30EB\u30D7\u30E9\u30B0\u30A4\u30F3\u306F\u3001<a href="http://www.chartjs.org/docs/latest/developers/plugins.html" target="_blank" rel="noopener noreferrer">Chart.js docs</a>\u3067\u8AAC\u660E\u3055\u308C\u3066\u3044\u308B\u3088\u3046\u306B<code>vue-chartjs</code>\u3067\u3082\u554F\u984C\u306A\u304F\u52D5\u4F5C\u3057\u307E\u3059\u3002</p><p>\u30A4\u30F3\u30E9\u30A4\u30F3\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u8FFD\u52A0\u3057\u305F\u3044\u5834\u5408\u306B\u5099\u3048\u3066\u3001<code>vue-chartjs</code>\u306F<code>addPlugin()</code>\u3068\u547C\u3070\u308C\u308B\u30D8\u30EB\u30D1\u30FC\u30E1\u30BD\u30C3\u30C9\u3092\u516C\u958B\u3057\u307E\u3059\u3002</p><p><code>renderChart()</code>\u30E1\u30BD\u30C3\u30C9\u306E\u524D\u306B <code>addPlugin()</code>\u3092\u547C\u3073\u51FA\u3059\u3079\u304D\u3067\u3059\u3002</p><ul><li><strong>Type:</strong> <code>Function</code></li><li><strong>Arguments</strong>: <code>Array</code> of Plugins</li><li><strong>Usage:</strong></li></ul><div class="language-js"><pre><code><span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;my-plugin&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">beforeInit</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chart</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="renderchart" tabindex="-1">renderChart() <a class="header-anchor" href="#renderchart" aria-hidden="true">#</a></h3><p>Chart.js \u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u4F5C\u6210\u3057\u3066\u63CF\u753B\u3057\u307E\u3059\u3002</p><ul><li><strong>Type:</strong> <code>Function</code></li><li><strong>Arguments</strong>: <code>Chart Data</code>, <code>Chart Options</code></li><li><strong>Usage:</strong></li></ul><div class="language-js"><pre><code><span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">labels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;January&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;February&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">datasets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Data One&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#f87979&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">responsive</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="chart-js-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8" tabindex="-1">Chart.js \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8 <a class="header-anchor" href="#chart-js-\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8" aria-hidden="true">#</a></h2><p>\u72EC\u81EA\u306E\u30C1\u30E3\u30FC\u30C8\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u304B\u3089Chart.js\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306B\u306F <code>this.$data._chart</code> \u3067\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002</p><h2 id="canvas" tabindex="-1">Canvas <a class="header-anchor" href="#canvas" aria-hidden="true">#</a></h2><p>Canvas\u8981\u7D20\u306B\u306F <code>this.$refs.canvas</code> \u3067\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u307E\u3059\u3002</p>`,32),o=[p];function c(r,l,d,i,u,h){return s(),a("div",null,o)}var b=n(e,[["render",c]]);export{g as __pageData,b as default};
