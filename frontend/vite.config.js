import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": process.env.VITE_API_BASE_URL,
    },
  },
  plugins: [react()],
});
