const path = require('path')
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";
// const webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const port = process.env.port || 8686 // dev port

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: isDevelopment,
    productionSourceMap: false,
    devServer: {
        port: port,
        hot: true,
        open: true,
        progress: true
    },
    configureWebpack: (config) => {
        // if (isProduction) {
        //     config.plugins.push(new webpackBundleAnalyzer({
        //         analyzerPort: '8989',
        //     }))
        // }
        // 引入cdn 
        config["externals"] = {
            G6: "G6"
        }
        config.plugins.push(
            new webpack.DllReferencePlugin({
                context: process.cwd(),
                manifest: require('./public/vendor/vendor-manifest.json')
            }),
            // 将 dll 注入到 生成的 html 模板中
            new AddAssetHtmlPlugin({
                filepath: path.resolve(__dirname, './public/vendor/*.js'), // dll文件位置
                publicPath: './vendor', // dll 引用路径
                outputPath: './vendor' // dll最终输出的目录
            }),
            // new UglifyJsPlugin({
            //     uglifyOptions: {
            //         warnings: false,
            //         compress: {
            //             drop_console: isProduction,
            //             drop_debugger: isProduction,
            //             pure_funcs: ['console.log']
            //         }
            //     },
            //     sourceMap: false,
            //     parallel: true
            // })
        )
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@a', resolve('src/assets'))
            .set('@c', resolve('src/components'))
    }
}