import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ ensures all paths are resolved from root
  build: {
    outDir: "dist", // ✅ default build output directory
  },
  server: {
    historyApiFallback: true, // ✅ allows client-side routing in dev server
    port: 5173, // optional: set custom port
  },
});
