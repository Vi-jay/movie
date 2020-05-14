var pkg = require('./package.json');
var path = require('path');
var AutoDllPlugin = require('autodll-webpack-plugin');
var processEnv = process.env || {};
var resolve = function (dir) { return path.join(__dirname, dir); };
var isProd = processEnv.NODE_ENV === 'production';
var config = {
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
    chainWebpack: function (config) {
        config.when(isProd, function () {
            var vendor = Object.keys(pkg.dependencies).filter(function (k) { return !/\.css|vue/.test(k); });
            config.plugin("autoDll").use(AutoDllPlugin, [{
                    inject: true,
                    filename: '[name]_[hash].js',
                    entry: { vendor: vendor }
                }]);
        });
        config.resolve.alias.set("assets", resolve('src/assets'));
        config.resolve.extensions.prepend('.ts');
    },
};
module.exports = config;
//# sourceMappingURL=vue.config.js.map
