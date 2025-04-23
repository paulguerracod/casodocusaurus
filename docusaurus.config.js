// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación Facturalo',
  tagline: 'Sistema de Facturación Electrónica',
  favicon: 'img/favicon.ico',

  url: 'https://927361945.facturalo.co',
  baseUrl: '/docusaurus/',

  organizationName: 'paulguerracod',
  projectName: 'casodocusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/paulguerracod/casodocusaurus/tree/main/',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false, // Deshabilitar blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Facturalo Docs',
        logo: {
          alt: 'Facturalo Logo',
          src: 'img/logo.svg',
          width: 120,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Facturalo. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.github,
        additionalLanguages: ['json', 'bash'],
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
      },
    ],
  ],
};

export default config;