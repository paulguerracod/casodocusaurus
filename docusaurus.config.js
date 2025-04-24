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
          routeBasePath: '/',
        },
        blog: false,
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
        respectPrefersColorScheme: false,
      },
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Facturalo Docs',
        logo: {
          alt: 'Facturalo Logo',
          src: 'img/logo.svg',
          width: 160,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
        style: 'dark',
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Facturalo. Todos los derechos reservados.`,
        links: [],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.github,
        additionalLanguages: ['json', 'bash'],
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 90,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],
  
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],
};

export default config;