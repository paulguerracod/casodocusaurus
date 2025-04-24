// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const isGitHub = process.env.DEPLOY_TARGET === "gh-pages";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/facturacion.png',

  url: 'https://paulguerracod.github.io',
  baseUrl: '/casodocusaurus/',

  organizationName: 'paulguerracod',
  projectName: 'casodocusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/paulguerracod/casodocusaurus/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/paulguerracod/casodocusaurus/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'My Site',

      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentación',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/paulguerracod/casodocusaurus',
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;