import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://who-holds-the-camera.pages.dev",
  output: "static",
  integrations: [sitemap()]
});
