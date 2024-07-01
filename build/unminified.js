import { build } from "vite";
import fs from "fs";

export default async function() {
  try {
    await build({
      build: {
        minify: false,
        outDir: "./dist/cdn",
        rollupOptions: {
          input: {
            "beer": "./src/cdn.ts",
          },
          output: {
            entryFileNames: "[name].js",
            chunkFileNames: "[name].js",
            assetFileNames: (info) => (info.name.includes(".css")) ? "[name].css" : "[name].[ext]",
            manualChunks: undefined,
          },
        },
      },
    });
  
    const cssContent = fs.readFileSync("./dist/cdn/beer.css", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.css", cssContent.replace(/url\("\//g, "url(\""));

    const jsContent = fs.readFileSync("./dist/cdn/beer.js", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.js", jsContent + "\nexport default globalThis.ui;");
  } catch(error) {
    console.log(error);
  }
}
