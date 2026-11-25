import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

// Set VITE_BASE_PATH (for example, /devportfolio-pro/) when deploying under a subpath.
const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base,
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 1000,
  },
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: 4028,
    host: "0.0.0.0",
    // Allows Arena's proxied live preview host as well as local development hosts.
    allowedHosts: true,
  },
});
