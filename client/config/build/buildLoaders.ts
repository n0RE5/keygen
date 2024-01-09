import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'
    
    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ]
    }

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                auto: true,
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            },
        }, 
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader, 
          cssLoaderWithModules, 
          "sass-loader"
        ],
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    }

    return [
        tsLoader,
        scssLoader,
        svgrLoader,
        assetsLoader,
    ]
}