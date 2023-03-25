export default {
    title: 'Get Storage',
    description: 'Get Storage Documentation',
    base : '/get-storage/',
    lastUpdated: true,
    lang: 'en-US',
    cleanUrls: true,

    markdown: {
      theme: 'material-theme-palenight',
      lineNumbers: true,
      anchors: {
        slugify(str) {
          return encodeURIComponent(str)
        }
      }
    },

    themeConfig: {
      siteTitle: 'Get Storage',
      logo : '/logo.png',

      algolia: {
        appId: '2KZAN3QQD4',
        apiKey: '90651c09ce819c1ac41b9da48e228586',
        indexName: 'get-storage'
      },

      editLink: {
        pattern: 'https://github.com/tabpole/get-storage/tree/main/docs/:path',
        text: 'Edit this page on GitHub'
      },

      // Navigation Section
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Documentation', link: 'getting_started/overview.md' },
        { text: 'About', link: 'https://tabpole.github.io' },
        { text: 'Support', link: 'https://www.buymeacoffee.com/alpondith'},
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/jonataslaw/get_storage' },
      ],

      // Sidebar Section
      sidebar: [

        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Overview',link: 'getting_started/overview.md' },
            { text: 'About',link: 'getting_started/about.md' },
            { text: 'Benchmark',link: 'getting_started/benchmark.md' },
            { text: 'Install',link: 'getting_started/install.md' },
            { text: 'Uninstall',link: 'getting_started/uninstall.md' },
          ],
        },

        {
          text: 'Functionality',
          collapsed: false,
          items: [
            { text: 'Write',link: 'functionality/write.md' },
            { text: 'Read',link: 'functionality/read.md' },
            { text: 'Remove',link: 'functionality/remove.md' },
            { text: 'Erase',link: 'functionality/erase.md' },
            { text: 'Container',link: 'functionality/container.md' },
          ],
        },
        
      ],

      // Footer Section
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 tabpole.github.io'
      },
    },
  }