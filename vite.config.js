import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ ensures all paths resolve from root

  build: {
    outDir: "dist", // ✅ default build output directory
    assetsDir: "assets",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },

  server: {
    historyApiFallback: true, // ✅ allows client-side routing
    port: 5173, // optional: your dev port
    open: true,
    strictPort: true,
    watch: {
      usePolling: true, // ✅ improves file watching on macOS/Linux
    },
  },

  // ✅ Automatically injects React import in JSX (no need to import manually)
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
