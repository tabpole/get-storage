import{_ as s,c as a,o as n,a as l}from"./app.0c5d518c.js";const F=JSON.parse('{"title":"Remove","description":"","frontmatter":{"prev":{"text":"Read","link":"functionality/read.md"},"next":{"text":"Erase","link":"functionality/erase.md"}},"headers":[{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Complete Example","slug":"complete-example","link":"#complete-example","children":[]}],"relativePath":"functionality/remove.md","lastUpdated":1679474043000}'),e={name:"functionality/remove.md"},o=l(`<h1 id="remove" tabindex="-1">Remove <a class="header-anchor" href="#remove" aria-hidden="true">#</a></h1><p>Remove data from Get Storage</p><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><p>The <code>remove</code> method in the <code>get_storage</code> package is used to remove data from the storage. Like the <code>write</code> method, it does not return anything and its output is <code>void</code>.</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Synchronously</span></span>
<span class="line"><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(key)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// OR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Asynchronously with the async/await keywords</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(key)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// OR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Using the then method of the Future object</span></span>
<span class="line"><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(key)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">((_) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;Data has been removed successfully&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Similar to the <code>write</code> method, the <code>then</code> method in the last example does not receive any value, as the <code>remove</code> method does not return anything. It is called when the data has been successfully removed from the storage.</p><p><strong>Note</strong>: that the <code>remove</code> method is asynchronous method, so you should use the <code>await</code> keyword when calling it.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>Here&#39;s an example of how to use the <code>write</code> method:</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Create an instance of GetStorage</span></span>
<span class="line"><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> box </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Store a value with a key</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;John Doe&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Retrieve the value</span></span>
<span class="line"><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(name)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Output: John</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Remove the value</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Attempt to retrieve the value again</span></span>
<span class="line"><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> removedName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(removedName)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Output: null</span></span>
<span class="line"></span></code></pre></div><p>In this example, First create an instance of <code>GetStorage</code> class. Then store a value with the key <code>name</code> using the write method. Next, retrieve the value using the <code>read</code> method and print it to the console.</p><p>After that, use the <code>remove</code> method to remove the value associated with the <code>name</code> key from the storage. Now, attempt to retrieve the value again using the <code>read</code> method, and since the value has been removed, the output is <code>null</code>.</p><p>Alternatively, you can use the <code>remove</code> method in one line like this:</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="complete-example" tabindex="-1">Complete Example <a class="header-anchor" href="#complete-example" aria-hidden="true">#</a></h2><p>Here is an example:</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:flutter/material.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:get_storage/get_storage.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">runApp</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StatelessWidget</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;">({super</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">@override</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Widget</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">build</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">BuildContext</span><span style="color:#A6ACCD;"> context) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MaterialApp</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">      home</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Scaffold</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        appBar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AppBar</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">          title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Text</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;Get Storage Demo&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        body</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Center</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">          child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ElevatedButton</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">            onPressed</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;">// Create an instance of GetStorage</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> box </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetStorage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;">// Store a value with a key</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;John Doe&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;">// Retrieve the value</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(name)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Output: John</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;">// Remove the value</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;">// Attempt to retrieve the value again</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> removedName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> box</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;name&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(removedName)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Output: null</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Text</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;Click me&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,17),p=[o];function t(c,r,y,C,A,i){return n(),a("div",null,p)}const d=s(e,[["render",t]]);export{F as __pageData,d as default};
