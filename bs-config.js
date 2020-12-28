const dist = 'out/';

const BROWSER_SYNC = {
  files: [`${dist}_next/**/*`, `${dist}**/*.html`],
  ghostMode: {
    clicks: false,
    scroll: false,
    forms: false,
  },
  // open: 'external',
  server: {
    baseDir: dist,
    middleware: [],
    // proxy: 'http://127.0.0.1:9999/',
  },
  logFileChanges: false,
};

module.exports = BROWSER_SYNC;
