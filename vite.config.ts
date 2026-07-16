import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// GitHub Pages serves this project at /wallerama/.
// Lovable serves at root — it will set base to "/" automatically, or change it here.
export default defineConfig({
  base: "/wallerama/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
