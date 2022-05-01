#!/usr/bin/env node

require('esbuild').build({
  entryPoints: ['src/index.js'],
  logLevel: "info",
  bundle: true,
  loader: {
    '.frag': 'text'
  },
  outfile: 'dist/main.js',
  watch: true,
}).catch(() => {
  // Call "stop" on the web server to stop serving
  process.exit(1);
})
