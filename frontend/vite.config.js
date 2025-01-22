import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import authenticationConfig from "./src/config/authentication.config";

const baseURLPath = process.env.VITE_API_BASE_URL;

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": baseURLPath,
    },
  },
  plugins: [react()],
});
