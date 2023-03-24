import{_ as e,c as a,o as t,a as s}from"./app.3bafd648.js";const y=JSON.parse('{"title":"Uninstall","description":"","frontmatter":{"prev":{"text":"Install","link":"getting_started/install.md"},"next":{"text":"Write","link":"functionality/write.md"}},"headers":[{"level":2,"title":"pubspec.yaml","slug":"pubspec-yaml","link":"#pubspec-yaml","children":[]},{"level":2,"title":"Flutter CLI","slug":"flutter-cli","link":"#flutter-cli","children":[]}],"relativePath":"getting_started/uninstall.md","lastUpdated":1679474043000}'),n={name:"getting_started/uninstall.md"},l=s(`<h1 id="uninstall" tabindex="-1">Uninstall <a class="header-anchor" href="#uninstall" aria-hidden="true">#</a></h1><h2 id="pubspec-yaml" tabindex="-1">pubspec.yaml <a class="header-anchor" href="#pubspec-yaml" aria-hidden="true">#</a></h2><p>You can uninstall &quot;Get Storage&quot; package from your Flutter or Dart project by removing it from the <code>pubspec.yaml</code> file and then updating the project dependencies. Firstly, Open your project&#39;s <code>pubspec.yaml</code> file in an editor and remove the following line from the dependencies section.</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">get_storage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^2.1.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Save the changes to your <code>pubspec.yaml</code> file by which the package should be autometically removed. However, you can try an extra step. Go to the terminal of your editor and navigate to the root directory of your project. Now, run the following command to update the project dependencies.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will update your project dependencies and remove the &quot;Get Storage&quot; package from your project. If there are any other dependencies that are no longer needed after removing &quot;Get Storage&quot;, you can run the following command to remove them as well.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autoremove</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>That&#39;s it! You have now successfully uninstalled &quot;Get Storage&quot; package from your Flutter or Dart project.</p><h2 id="flutter-cli" tabindex="-1">Flutter CLI <a class="header-anchor" href="#flutter-cli" aria-hidden="true">#</a></h2><p>To uninstall &quot;Get Storage&quot; package from your Flutter or Dart project using the Flutter command line tool, you can follow described steps. Firstly, open a terminal window and navigate to the root directory of your Flutter project. Now, run the following command.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get_storage</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will remove the &quot;Get Storage&quot; package from your pubspec.yaml file and uninstall it from your project. If there are any other dependencies that are no longer needed after removing &quot;Get Storage&quot;, you can run the following command to remove them as well.</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autoremove</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>That&#39;s it! You have now successfully uninstalled &quot;Get Storage&quot; package from your Flutter or Dart project using the Flutter command line tool.</p>`,15),o=[l];function r(p,i,c,d,u,m){return t(),a("div",null,o)}const g=e(n,[["render",r]]);export{y as __pageData,g as default};
