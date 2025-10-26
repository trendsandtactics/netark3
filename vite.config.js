import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ✅ Ensures all assets resolve from the site root
  base: "/",

  // ✅ Optimize build output
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false, // optional: disable for smaller builds
    chunkSizeWarningLimit: 1000, // optional: prevents warnings for large assets
  },

  // ✅ Development server config
  server: {
    port: 5173,
    open: true, // auto-open browser
    strictPort: true,
    watch: {
      usePolling: true, // improves file watching on macOS/Linux
    },
    // ✅ Required for React Router to handle client-side routing
    historyApiFallback: true,
  },

  // ✅ Optional: improve JSX compatibility
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
