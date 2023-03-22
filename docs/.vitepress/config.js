export default {
    title: 'Get Storage',
    description: 'Get Storage',
    base : '/get-storage/',
    lastUpdated: true,
    lang: 'en-US',
    cleanUrls: true,

    themeConfig: {
      siteTitle: 'Get Storage',
      logo : '/logo.png',

      editLink: {
        pattern: 'https://github.com/tabpole/get-storage/tree/main/docs/:path',
        text: 'Edit this page on GitHub'
      },

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Documentation', link: 'content/overview.md' },
        { text: 'About', link: 'https://tabpole.github.io' },
        { text: 'Support', link: 'https://www.buymeacoffee.com/alpondith'},
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/jonataslaw/get_storage' },
      ],

      sidebar: [
        {
          text: 'Overview',
          link: 'content/overview.md'
        },
        {
          text: 'About',
          link: 'content/about.md'
        },
        {
          text: 'Benchmark',
          link: 'content/benchmark.md'
        },
        {
          text: 'Install',
          link: 'content/install.md'
        },
        {
          text: 'Uninstall',
          link: 'content/uninstall.md'
        },
        {
          text: 'Write',
          link: 'content/write.md'
        },
        {
          text: 'Read',
          link: 'content/read.md'
        },
        {
          text: 'Remove',
          link: 'content/remove.md'
        },
        {
          text: 'Erase',
          link: 'content/erase.md'
        },
        
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 tabpole.github.io'
      }
    },
  }