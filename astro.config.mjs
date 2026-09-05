import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bambergsoftware.com",
  integrations: [sitemap()],
});
