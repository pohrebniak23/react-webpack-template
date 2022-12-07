import { buildLoaders } from "./buildLoaders";
import { BuildOptions } from "./types/config"
import webpack from 'webpack';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, port } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name][contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devServer: buildDevServer(options)
  }
}