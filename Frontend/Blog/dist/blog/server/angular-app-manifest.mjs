
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
    'index.csr.html': {size: 675, hash: '68a8a01e912864a67bab0a3c2940acc6a3c8a306d61c1e1356664ff41d5996c6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: 'c03c30ef8db44e9dcdb6c8f9459711f7b95389eb8775a2e8dadebc17eabf5c94', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 2524, hash: '1839faa4a2ab71ab035cb308d5c27d467575602d152854ae85551bda87c8a2bc', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'new/index.html': {size: 2485, hash: 'bd2db10ba88a4f784f401bfd5d20ef044acdb84add847e773060b7e7b2321350', text: () => import('./assets-chunks/new_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5604, hash: 'f3261e9f460ca0e5307b38c25024b920ee708d931e4f502d5da7991181e1bae8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-RQWMOJSK.css': {size: 62, hash: 'sqAhBHs/zH8', text: () => import('./assets-chunks/styles-RQWMOJSK_css.mjs').then(m => m.default)}
  },
};
