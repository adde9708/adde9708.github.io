// rspress.config.ts
import { defineConfig } from "rspress/config";

import mermaid from "rspress-plugin-mermaid";

export default defineConfig({
  title: "SynCrypt",
  description:
    "Decentralized, end-to-end encrypted , privacy-preserving data synchronization, and a encrypted knowledge vault.",

  base: "/docs/",
  plugins: [
    mermaid({
      mermaidConfig: {
        theme: "dark",
      },
    }),
  ],
  themeConfig: {
    sidebar: {
      "/": [
        {
          text: "Introduction",
          items: [
            { text: "What is SynCrypt?", link: "/" },
            { text: "Vision & Motivation", link: "/tech/vision" },
            { text: "Core Principles", link: "/tech/principles" },
          ],
        },
        {
          text: "Technical Documentation",
          items: [
            { text: "System Overview", link: "/tech/architecture" },
            { text: "Data Model & Storage", link: "/tech/storage-model" },
            { text: "Sync Protocol", link: "/tech/sync-protocol" },
            { text: "Graph Model", link: "/tech/graph" },
            { text: "Security Model", link: "/tech/security" },
          ],
        },
        {
          text: "Brand",
          items: [
            { text: "Brand Overview", link: "/brand/" },
            { text: "Colors", link: "/brand/colors" },
            { text: "Typography", link: "/brand/typography" },
            { text: "Motion & Animation", link: "/brand/motion" },
            { text: "Iconography", link: "/brand/iconography" },
          ],
        },
        {
          text: "Developer Style Guide",
          items: [
            { text: "Overview", link: "/style-guide/" },
            { text: "Design Tokens", link: "/style-guide/tokens" },
            { text: "Components", link: "/style-guide/components" },
            { text: "Animations", link: "/style-guide/animations" },
            { text: "Layout Rules", link: "/style-guide/layout" },
          ],
        },
        {
          text: "Project",
          items: [
            { text: "Roadmap", link: "/roadmap" },
            { text: "Glossary", link: "/tech/glossary" },
          ],
        },
      ],
    },
  },
});
