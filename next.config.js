const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript(
  withCss({
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer)
        config.plugins.push(
          new ForkTsCheckerWebpackPlugin({
            tsconfig: path.resolve(__dirname, 'tsconfig.server.json'),
          }),
        );
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'client'),
      };
      return config;
    },
  }),
);
