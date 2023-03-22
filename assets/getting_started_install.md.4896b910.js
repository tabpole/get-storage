import{_ as a,c as t,o as e,a as s}from"./app.0c5d518c.js";const h=JSON.parse('{"title":"Installation","description":"","frontmatter":{"prev":{"text":"Benchmark","link":"getting_started/benchmark.md"},"next":{"text":"Uninstall","link":"getting_started/uninstall.md"}},"headers":[{"level":2,"title":"pubspec.yaml","slug":"pubspec-yaml","link":"#pubspec-yaml","children":[]},{"level":2,"title":"Flutter CLI","slug":"flutter-cli","link":"#flutter-cli","children":[]},{"level":2,"title":"Initialization","slug":"initialization","link":"#initialization","children":[]}],"relativePath":"getting_started/install.md","lastUpdated":1679474043000}'),n={name:"getting_started/install.md"},o=s(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="pubspec-yaml" tabindex="-1">pubspec.yaml <a class="header-anchor" href="#pubspec-yaml" aria-hidden="true">#</a></h2><p>To install &quot;Get Storage&quot; package in your Flutter or Dart project, you can follow some steps. Firstly, Open your project in an editor, such as Visual Studio Code or Android Studio. Next, Open your project&#39;s pubspec.yaml file and add the following line to the dependencies section of your pubspec.yaml file.</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">get_storage</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^2.1.1</span></span>
<span class="line"></span></code></pre></div><p>This will add &quot;Get Storage&quot; package as a dependency to your project. Now, save the changes to your pubspec.yaml file. Next, In the terminal of your editor, navigate to the root directory of your project and run the following command to install the package.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span></span>
<span class="line"></span></code></pre></div><p>This will download and install the &quot;Get Storage&quot; package and its dependencies. You can now import the package in your Dart or Flutter code using the following statement.</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  import </span><span style="color:#C3E88D;">&#39;package:get_storage/get_storage.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>Note</strong>: You must initialize get_storage into the main method befor using it.</p><h2 id="flutter-cli" tabindex="-1">Flutter CLI <a class="header-anchor" href="#flutter-cli" aria-hidden="true">#</a></h2><p>Alternatively, You can also install &quot;Get Storage&quot; package using the Flutter command line tool. To install the package, follow described steps. Firstly open a terminal window and navigate to the root directory of your Flutter project. Now, Run the following command.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get_storage</span></span>
<span class="line"></span></code></pre></div><p>This command will add the &quot;Get Storage&quot; package to your <code>pubspec.yaml</code> file and install it. You can also run the following command.</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">packages</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span></span>
<span class="line"></span></code></pre></div><p>This command will download and install any dependencies listed in your <code>pubspec.yaml</code> file, including &quot;Get Storage&quot;. You can now import the package in your Dart or Flutter code using the following statement.</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:get_storage/get_storage.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>Note</strong>: You must initialize get_storage into the main method befor using it.</p><h2 id="initialization" tabindex="-1">Initialization <a class="header-anchor" href="#initialization" aria-hidden="true">#</a></h2><p>After installing the package you must make sure to initialize <code>get_storage</code> to your main method. To initialize &quot;Get Storage&quot; into the main method of your Flutter app, you can follow described steps. Firstly, import the GetStorage package into your <code>main.dart</code> file by adding the following import statement at the top of the file.</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:get_storage/get_storage.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Now, in the main method of your app, before calling runApp method, call the init method of the GetStorage class to initialize the storage system.</p><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">runApp</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>The init method is an asynchronous method, so you need to use the async and await keywords to wait for the initialization to complete before running the app.</p><p>That&#39;s it! You have now initialized &quot;Get Storage&quot; into the main method of your Flutter app and can start using it to store and retrieve data.</p>`,24),l=[o];function p(i,r,c,d,u,y){return e(),t("div",null,l)}const m=a(n,[["render",p]]);export{h as __pageData,m as default};
