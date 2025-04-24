// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "🏠 Introducción",
    },
    {
      type: "category",
      label: "📚 Tutorial Básico",
      items: [
        "tutorial-basics/create-a-document",
        "tutorial-basics/create-a-page",
        "tutorial-basics/create-a-blog-post"
      ],
    },
    {
      type: "category",
      label: "⚙️ Configuración Avanzada",
      items: [
        "tutorial-extras/manage-docs-versions",
        "tutorial-extras/translate-your-site"
      ],
    },
  ],
};

export default sidebars;