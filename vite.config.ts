import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@emotion"],
      },
    }),
    tailwindcss(),
    svgr({
      // SVG 파일을 React 컴포넌트로 변환
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
    },
  },
})
