import{_ as s,c as a,o as n,a as e}from"./app.0c5d518c.js";const F=JSON.parse('{"title":"Write","description":"","frontmatter":{"prev":{"text":"Uninstall","link":"getting_started/uninstall.md"},"next":{"text":"Read","link":"functionality/read.md"}},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Complete Example","slug":"complete-example","link":"#complete-example","children":[]}],"relativePath":"functionality/write.md","lastUpdated":1679465219000}'),l={name:"functionality/write.md"},p=e(`<h1 id="write" tabindex="-1">Write <a class="header-anchor" href="#write" aria-hidden="true">#</a></h1><p>Write data into Get Storage</p><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><p>The <code>write</code> method of the <code>GetStorage</code> class in the &quot;Get Storage&quot; package is used to write a value to a key in the storage system. The method takes two parameters: <code>key</code> and <code>value</code> . It does not have a return value. Instead, it saves the data to the storage and returns <code>void</code> .</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Synchronously</span></span>
<span class="line"><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// OR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Asynchronously with the async/await keywords</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// OR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Using the then method of the Future object</span></span>
<span class="line"><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">((_) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;Data has been saved successfully&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Note that the <code>then</code> method in the last example does not receive any value, as the write method does not return anything. It is called when the data has been successfully saved to the storage.</p><p><strong>Note</strong>: that the <code>write</code> method is asynchronous method, so you should use the <code>await</code> keyword when calling it.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>Here&#39;s an example of how to use the <code>write</code> method:</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> box </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Store a value with a key</span></span>
<span class="line"><span style="color:#A6ACCD;">box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;John&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>In this example, we are creating a new instance of the <code>GetStorage</code> class and using its <code>write</code> method to store a value of <code>&#39;John&#39;</code> with a key of <code>&#39;name&#39;</code>.</p><p>When you call the <code>write</code> method with a key and value, the storage system saves the value to disk under the specified key. The value can be of any data type, such as a string, integer, boolean, or even a complex object.</p><p>If the key already exists in the storage system, the <code>write</code> method will overwrite the existing value with the new one.</p><p>Alternatively, you can use the <code>write</code> method in one line like this:</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;John&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="complete-example" tabindex="-1">Complete Example <a class="header-anchor" href="#complete-example" aria-hidden="true">#</a></h2><p>Here is an example:</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:flutter/material.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:get_storage/get_storage.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">runApp</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StatelessWidget</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> box </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;">({super</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">@override</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Widget</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">BuildContext</span><span style="color:#A6ACCD;"> context) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// Store data</span></span>
<span class="line"><span style="color:#A6ACCD;">    box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;John&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// Retrieve data</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">      home</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Scaffold</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        appBar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AppBar</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">          title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Text</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;Get Storage Demo&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Center</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">          child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Text</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;Hello, $</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#C3E88D;">!&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,18),o=[p];function t(c,r,y,i,C,A){return n(),a("div",null,o)}const d=s(l,[["render",t]]);export{F as __pageData,d as default};
