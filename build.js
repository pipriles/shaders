#!/usr/bin/env node

require("esbuild")
  .build({
    entryPoints: ["src/index.js"],
    logLevel: "info",
    bundle: true,
    minify: true,
    sourcemap: true,
    loader: {
      '.frag': 'text'
    },
    outfile: "dist/main.js",
  })
  .catch(() => process.exit(1));
