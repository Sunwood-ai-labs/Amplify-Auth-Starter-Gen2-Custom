import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Sunwood ai labs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/cat1.svg',

  // Set the production url of your site here
  url: 'https://staging.d28wunjm2nr6tk.amplifyapp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/Amplify-Docusaurus-Starter-Gen2-Custom/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sunwood-ai-labs', // Usually your GitHub org/user name.
  projectName: 'Amplify-Docusaurus-Starter-Gen2-Custom', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Sunwood-ai-labs/Amplify-Docusaurus-Starter-Gen2-Custom/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // ブログのルートパスを/blogに設定
          routeBasePath: 'blog',
          blogSidebarTitle: '最新の記事',
          blogSidebarCount: 'ALL',
          postsPerPage: 5,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Sunwood ai labs Blog',
            description: 'Blog posts from Sunwood ai labs',
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Sunwood-ai-labs/Amplify-Docusaurus-Starter-Gen2-Custom/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/image_fx-social-card.jpg',
    navbar: {
      title: 'Sunwood ai labs',
      logo: {
        alt: 'Sunwood ai labs Logo',
        src: 'img/cat1.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: '/about',
          label: 'About Us',
          position: 'left',
        },
        {
          to: '/blog/tags',
          label: 'Tags',
          position: 'left',
        },
        {
          href: 'https://github.com/Sunwood-ai-labs/Amplify-Docusaurus-Starter-Gen2-Custom',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Sunwood-ai-labs/Amplify-Docusaurus-Starter-Gen2-Custom',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
