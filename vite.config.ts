import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import cleanup from "rollup-plugin-cleanup";
import del from "rollup-plugin-delete";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import EsLint from "vite-plugin-linter";
import tsConfigPaths from "vite-tsconfig-paths";

import * as packageJson from "./package.json";
const { EsLinter, linterPlugin } = EsLint;
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    dts({
      include: ["src/components/"],
    }),
    del({
      targets: process.env.NODE_ENV === "production" ? ["dist/*"] : undefined,
    }),
    cleanup({
      comments: "none",
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "components/index.ts"),
      name: "HavenComponents",
      formats: ["es"],
      fileName: "haven-components",
    },
    commonjsOptions: {
      include: /node_modules/,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
}));
