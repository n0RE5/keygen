import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): Configuration {
    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev && 'inline-source-map',
    }
}