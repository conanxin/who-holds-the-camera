import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://camera.conanxin.com",
  output: "static",
  integrations: [sitemap()]
});
