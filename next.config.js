// const path = require("path");
// const glob = require("glob");

// module.exports = {
//   webpack: (config, { dev }) => {
//     config.module.rules.push(
//       {
//         test: /\.(css|scss)/,
//         loader: "emit-file-loader",
//         options: {
//           name: "dist/[path][name].[ext]"
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ["babel-loader", "raw-loader", "postcss-loader"]
//       }
//     );
//     return config;
//   }
// };
const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = withTypescript(
  withCss({
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin());

      return config;
    }
  })
);
