const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "🏠 Inicio",
      collapsible: false,
      items: ["intro"],
      className: "sidebar-icon-home",
    },
    {
      type: "category",
      label: "📄 Documentación",
      items: [
        {
          type: "doc",
          id: "facturacion/emitir-comprobante",
          label: "📤 Emitir Comprobante",
        },
        {
          type: "doc",
          id: "facturacion/anular-comprobante",
          label: "🗑️ Anular Comprobante",
        },
      ],
      className: "sidebar-icon-docs",
    },
    {
      type: "category",
      label: "⚙️ Configuración",
      items: [
        {
          type: "doc",
          id: "configuracion/api-keys",
          label: "🔑 API Keys",
        },
        {
          type: "doc",
          id: "configuracion/integraciones",
          label: "🔗 Integraciones",
        },
      ],
      className: "sidebar-icon-config",
    },
  ],
};