import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // --- ADD THIS SECTION ---
  server: {
    host: "localhost",
  },
  // --------------------------
});
