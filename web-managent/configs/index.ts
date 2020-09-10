
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import { routes } from './routes';
import { template } from './template';
const { NODE_ENV } =process.env
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
  hash: true,
  inlineLimit:50000,
}

config.chainWebpack=(conf, { env, webpack, createCSSRule })=> {
  conf.plugins.delete('progress');
  // 模块全局引入
  const plu = [{ _:"lodash",  moment:'moment', React:"react"}]
  conf.plugin('ProvidePlugin')
  .use(webpack.ProvidePlugin,plu)
  conf.plugin('HardSourceWebpackPlugin')
  .use(HardSourceWebpackPlugin, [{
    configHash(webpackConfig) {
      return process.env.NODE_ENV + '-' + process.env.BABEL_ENV;
    }
  }])// 开启缓存，进行二次构建优化
  if(NODE_ENV === 'production'){
    conf.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      }
    })
  }

}
if(NODE_ENV === 'development'){
  config.devtool = 'source-map';
  config.define = {
    api : 'localhost:9090'
  }
}
if(NODE_ENV === 'production'){
  config.terserOptions =  {
          compress: {
            drop_console: true,
            pure_funcs: ['console.error', 'debugger'],
          }
  }
  config.define = {
    api : 'www.baidu.com'
  }
}
