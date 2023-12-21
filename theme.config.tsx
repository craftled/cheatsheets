import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Cheat Sheets</span>,
  project: {
    link: "https://github.com/craftled/cheatsheets",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/craftled/cheatsheets/tree/main",
  footer: {
    text: "2023-2024 © Craftled Cheat Sheets. Technical cheat sheets for creators. Standing on the shoulders of giants.",
  },
};

export default config;
