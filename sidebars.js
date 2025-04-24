// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "docs/intro",
      label: "🏠 Introducción",
      className: 'menu-item-icon', // Para íconos personalizados
    },
    {
      type: "category",
      label: "📚 Guías Prácticas",
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "tutorial-basics/create-a-document",
          label: "Crear Documentación",
        },
        {
          type: "doc",
          id: "tutorial-basics/create-a-page",
          label: "Crear Páginas",
        },
        {
          type: "doc",
          id: "tutorial-basics/deploy-your-site",
          label: "Despliegue",
        },
      ],
      className: 'menu-category-gitbook',
    },
    {
      type: "category",
      label: "⚙️ Configuración",
      items: [
        "tutorial-extras/manage-docs-versions",
        "tutorial-extras/translate-your-site"
      ],
    },
  ],
};

export default sidebars;