import {ProjectOptions} from "@vue/cli-service/types/ProjectOptions";

const pkg = require('./package.json');
const path = require('path');
const AutoDllPlugin = require('autodll-webpack-plugin');
type Env = { [props: string]: any };
const processEnv: Env = process.env || {};
const resolve = dir => path.join(__dirname, dir);
const isProd = processEnv.NODE_ENV === 'production';
const config: ProjectOptions = {
    devServer: {},
    publicPath: isProd ? "./" : "",
    configureWebpack: {
        entry: "./src/main.ts",
        module: {
            rules: [{
                test: /\.ts$/,
                loaders: [{
                    loader: 'ts-loader', options: {
                        transpileOnly: true,
                        appendTsSuffixTo: ['\\.vue$'],
                        happyPackMode: true
                    }
                }, {
                    loader: 'cache-loader',
                    options: {
                        cacheDirectory: resolve("node_modules/.cache/ts-loader"),
                        cacheIdentifier: Math.random().toString(16).substr(2)
                    }
                }]
            }]
        }
    },
    productionSourceMap: !!+processEnv.SOURCE_MAP,
    chainWebpack: (config) => {
        config.when(isProd, () => {
            const vendor = Object.keys(pkg.dependencies).filter(k => !/\.css|vue/.test(k));
            config.plugin("autoDll").use(AutoDllPlugin, [{
                inject: true,
                filename: '[name]_[hash].js',
                entry: {vendor}
            }]);
        });
        config.resolve.alias.set("assets", resolve('src/assets'));
        config.resolve.extensions.prepend('.ts');
    },
};

module.exports = config;
