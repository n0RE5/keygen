import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, DefinePlugin } from "webpack";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BuildOptions } from "./types/types";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ 
            template: options.paths.html,
            publicPath: '/'
         }),
        new DefinePlugin({
            __ENV__: JSON.stringify(options.mode)
        })
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({ 
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    return plugins
}