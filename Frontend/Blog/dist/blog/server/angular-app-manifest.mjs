
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
    'index.csr.html': {size: 675, hash: '16cfceb67a4f6f40d090f088f9e742a9d6d99f04951cd0a405defd8ce0beef93', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: '0fd15f96b890b267ee70d22496f73d49c71f1c20e8762ae6b93a48e3cb328539', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4122, hash: '583166dc2292f1dd775d647347e8dd98b164c5bdb68ebc306395cdb4e17e3bd4', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'new/index.html': {size: 4129, hash: '52e8d66c4d35be2886ee2354cef3c39ec23a62a69ad37c7ef71e71706c3bfab2', text: () => import('./assets-chunks/new_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7469, hash: 'c5890ec4c49a47e3aadb474e1c0388bdf1291bb9c464c5390c7e75f64361019a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-RQWMOJSK.css': {size: 62, hash: 'sqAhBHs/zH8', text: () => import('./assets-chunks/styles-RQWMOJSK_css.mjs').then(m => m.default)}
  },
};
