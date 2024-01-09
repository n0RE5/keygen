import { type Configuration } from "webpack";
import webpack from "webpack";
import path from "path";
import { BuildMode, BuildPaths } from "./config/build/types/types";
import { buildWebpack } from "./config/build/buildWebpack";

interface EnvVariables {
  mode?: BuildMode
  port?: number
}

export default (env: EnvVariables) => {
  const paths: BuildPaths  = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const config: Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  })

  return config
}