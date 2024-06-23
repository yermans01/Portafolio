import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://yermans01.github.io",
  base: "/yermans01",
  integrations: [icon(), tailwind()],
});
