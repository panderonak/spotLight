import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import authenticationConfig from "./src/config/authentication.config";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": `${authenticationConfig.baseURLPath}`,
    },
  },
  plugins: [react()],
});
