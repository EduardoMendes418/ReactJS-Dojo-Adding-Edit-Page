import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Features: path.resolve(__dirname, "./src/Features"),
      Layout: path.resolve(__dirname, "./src/Layout"),
      Pages: path.resolve(__dirname, "./src/Pages"),
    },
  },
});
