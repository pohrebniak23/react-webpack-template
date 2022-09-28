import { buildLoaders } from "./buildLoaders";
import { BuildOptions } from "./types/types"
import webpack from 'webpack';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, port } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name][contenthash].js',
      path: paths.build,
      clean: true
    },

    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(options),
    devServer: buildDevServer(options)
  }
}