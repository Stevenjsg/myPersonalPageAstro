import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],
  base: "/cv",
  vite: {
    plugins: [tailwindcss()],
  },
});
// https://astro.build/config
