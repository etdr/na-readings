import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  layout: 'src/routes/r/_layout.svelte',

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
