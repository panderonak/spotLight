import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
