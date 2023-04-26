import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "#global-store": path.resolve(__dirname, "./src/global-store/store.ts"),
      "#presenters": path.resolve(__dirname, "./src/presenters"),
      "#repositories": path.resolve(__dirname, "./src/repositories/index.ts"),
      "#assets": path.resolve(__dirname, "./src/assets"),
      "#lib": path.resolve(__dirname, "./src/lib"),
      src: path.resolve(__dirname, "./src"),
    },
  },
});
