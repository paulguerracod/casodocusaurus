// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Sidebar principal (estructura jerárquica como GitBook)
  docsSidebar: [
    {
      type: "category",
      label: "🚀 Introducción",
      collapsible: true,
      collapsed: false,
      items: [
        "introduccion/que-es",
        "introduccion/comenzando",
        "introduccion/primeros-pasos",
      ],
    },
    {
      type: "category",
      label: "📚 Conceptos Básicos",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Estructura de Contenido",
          items: [
            "conceptos-basicos/estructura/organizacion",
            "conceptos-basicos/estructura/plantillas",
            "conceptos-basicos/estructura/versionado",
          ],
        },
        {
          type: "category",
          label: "Colaboración",
          items: [
            "conceptos-basicos/colaboracion/permisos",
            "conceptos-basicos/colaboracion/revisiones",
            "conceptos-basicos/colaboracion/comentarios",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "⚙️ Configuración Avanzada",
      collapsible: true,
      collapsed: true,
      items: [
        "configuracion-avanzada/integraciones",
        "configuracion-avanzada/personalizacion",
        "configuracion-avanzada/migracion",
      ],
    },
    {
      type: "category",
      label: "🔧 Soporte Técnico",
      collapsible: true,
      collapsed: true,
      items: [
        "soporte/preguntas-frecuentes",
        "soporte/solucion-problemas",
        "soporte/contacto",
      ],
    },
    {
      type: "doc",
      label: "📄 Changelog",
      id: "changelog",
    },
  ],
};

export default sidebars;