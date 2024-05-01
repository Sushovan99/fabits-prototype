import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), TanStackRouterVite()],
    css: {
        postcss: {
            plugins: [
                autoprefixer({}), // add options if needed
            ],
        },
    },
});
