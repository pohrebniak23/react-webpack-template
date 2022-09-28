import { BuildOptions } from './types/types';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    new webpack.ProgressPlugin(),
  ]
}