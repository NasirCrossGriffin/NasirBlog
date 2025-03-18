
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/new"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 675, hash: '938c5f75a1a3b0931b7080a837118c379a5457a5d30eb608d3ccbd1a638f67d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: '443c41e223beb4fa27a6862b273a29de635917af8086ea304b9282651dae1d53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'new/index.html': {size: 4129, hash: 'cd0219604ea1d6b80df14972df406631c8facf3632fd07cdc55cd240b374297e', text: () => import('./assets-chunks/new_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4122, hash: '1074cd726386ce369cb82e4fca536cced5e9c948c840f56619c107196a9da427', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5669, hash: '3409ba9959c3ffab0db55a9fcbb345295bc12c575a990da150c109ce0d6fed53', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-RQWMOJSK.css': {size: 62, hash: 'sqAhBHs/zH8', text: () => import('./assets-chunks/styles-RQWMOJSK_css.mjs').then(m => m.default)}
  },
};
