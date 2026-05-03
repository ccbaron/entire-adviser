import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-03-14",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      title: "Entire Base | Consultoría tecnológica, automatización e IA",
      meta: [
        {
          name: "description",
          content:
            "Automatizamos procesos, integramos IA y desarrollamos soluciones web para empresas que quieren operar mejor.",
        },
        // Open Graph
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Entire Base | Consultoría tecnológica, automatización e IA",
        },
        {
          property: "og:description",
          content:
            "Automatizamos procesos, integramos IA y desarrollamos soluciones web para empresas que quieren operar mejor.",
        },
        { property: "og:url", content: "https://entire-base.vercel.app" },
        {
          property: "og:image",
          content: "https://entire-base.vercel.app/og-image.png",
        },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Entire Base | Consultoría tecnológica, automatización e IA",
        },
        {
          name: "twitter:description",
          content:
            "Automatizamos procesos, integramos IA y desarrollamos soluciones web para empresas que quieren operar mejor.",
        },
        {
          name: "twitter:image",
          content: "https://entire-base.vercel.app/og-image.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://entire-base.vercel.app" },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },
});
