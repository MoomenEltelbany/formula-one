import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://f1connectapi.vercel.app",
                changeOrigin: true,
            },
        },
    },
});
