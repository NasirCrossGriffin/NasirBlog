
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
    'index.csr.html': {size: 675, hash: '6794cdc50a635a31f8a26e317b3135984f9d0195380a07d1ac9f4073a0a83255', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: 'ae2d9252af453428a7f17f05764a76cadb1d5116b21f57d263d655dae5a89bf3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'new/index.html': {size: 4129, hash: '2b33655b4642983247cd1cd72d8e66a5d1cdce4d7fded993f5927876b86828e5', text: () => import('./assets-chunks/new_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4122, hash: '8413417d52a24c151510cd32051280a6d69fdb1e8c1f0f88addc9caed86e70be', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7249, hash: '1e5b0f13eb9e3ae1e5a9e366689a65bb3423e1b19b5ff1cfc293b63a912a0f9d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-RQWMOJSK.css': {size: 62, hash: 'sqAhBHs/zH8', text: () => import('./assets-chunks/styles-RQWMOJSK_css.mjs').then(m => m.default)}
  },
};
