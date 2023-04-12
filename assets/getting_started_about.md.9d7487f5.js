import{_ as e,c as t,o as a,Q as o}from"./chunks/framework.03864012.js";const m=JSON.parse('{"title":"About Get Storage","description":"","frontmatter":{"prev":{"text":"Overview","link":"getting_started/overview.md"},"next":{"text":"Benchmark","link":"getting_started/benchmark.md"}},"headers":[],"relativePath":"getting_started/about.md","lastUpdated":1679734386000}'),i={name:"getting_started/about.md"},r=o('<h1 id="about-get-storage" tabindex="-1">About Get Storage <a class="header-anchor" href="#about-get-storage" aria-label="Permalink to &quot;About Get Storage&quot;">​</a></h1><p>&quot;Get Storage&quot; is a package for the Dart programming language, which provides an easy-to-use and lightweight solution for storing key-value pairs persistently on disk. It is designed to be efficient and fast, even for large amounts of data. The package is particularly useful for storing small to medium-sized data, such as user settings, cached data, and other configuration information in a Flutter or Dart application.</p><p>The package supports both synchronous and asynchronous APIs for accessing and manipulating stored data. It also provides encryption capabilities to store data securely in an encrypted form using the AES algorithm. The package uses the Flutter framework&#39;s Path Provider to determine the directory in which to store data.</p><p>Some of the key features of &quot;Get Storage&quot; include a simple and intuitive API for storing and retrieving data, support for storing different data types, such as strings, integers, booleans, lists, and maps, efficient performance, and cross-platform compatibility with Flutter and Dart applications.</p><p>Overall, &quot;Get Storage&quot; is a useful and versatile package that can help developers to efficiently manage and store data in their applications. It can be particularly useful for mobile app developers who need to store small to medium-sized data in a fast and efficient manner.</p><h2 id="what-get-storage-is" tabindex="-1">What Get Storage is <a class="header-anchor" href="#what-get-storage-is" aria-label="Permalink to &quot;What Get Storage is&quot;">​</a></h2><p>Persistent key/value storage for Android, iOS, Web, Linux, Mac and Fuchsia and Windows, that combines fast memory access with persistent storage.</p><h2 id="what-get-storage-is-not" tabindex="-1">What Get Storage is NOT <a class="header-anchor" href="#what-get-storage-is-not" aria-label="Permalink to &quot;What Get Storage is NOT&quot;">​</a></h2><p>Get Storage is not a database. Get is super compact to offer you a solution ultra-light, high-speed read/write storage to work synchronously. If you want to store data persistently on disk with immediate memory access, use it, if you want a database, with indexing and specific disk storage tools, there are incredible solutions that are already available, like Hive and Sqflite/Moor.</p><p>As soon as you declare &quot;write&quot; the file is immediately written in memory and can now be accessed immediately with <code>box.read()</code>. You can also wait for the callback that it was written to disk using <code>await box.write()</code>.</p><h2 id="when-to-use-get-storage" tabindex="-1">When to use Get Storage <a class="header-anchor" href="#when-to-use-get-storage" aria-label="Permalink to &quot;When to use Get Storage&quot;">​</a></h2><ul><li>simple Maps storage.</li><li>cache of http requests</li><li>storage of simple user information.</li><li>simple and persistent state storage</li><li>any situation you currently use sharedPreferences.</li></ul><h2 id="when-not-to-use-get-storage" tabindex="-1">When not to use Get Storage <a class="header-anchor" href="#when-not-to-use-get-storage" aria-label="Permalink to &quot;When not to use Get Storage&quot;">​</a></h2><ul><li>you need indexing or query capabilities..</li><li>Not suitable for large or complex data.</li></ul><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>You can use this lib even as a modest persistent state manager using Getx SimpleBuilder</p>',16),s=[r];function n(l,d,u,c,h,g){return a(),t("div",null,s)}const f=e(i,[["render",n]]);export{m as __pageData,f as default};
