const { NODE_ENV } =process.env
import { routes } from './routes';
import { template } from './template'
export const  config = {
  ...template,
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  proxy: {
    '/api': {
      'target': '',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  dva: {
    hmr: true,
  },
  antd:{
    dark: false,
    compact: true,
  },
  dynamicImport: {
    loading: '@/components/common/Loading',
  },
  ignoreMomentLocale: true,
  plugins:[],
  hash: true,
}
if(NODE_ENV === 'development'){
  config.devtool = 'source-map';
  config.define = {}
}
if(NODE_ENV === 'production'){
  config.define = {}
  config.terserOptions =  {
          compress: {
            drop_console: true,
            pure_funcs: ['console.error'],
          }
  }
}
