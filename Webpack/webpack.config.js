const path = require('path');
module.exports = {
    //入口
    entry: "./src/main.js",//相对路径
    // 输出
    output: {
        // 所有文件的输出地址
        path: path.resolve(__dirname, "dist"),//绝对路径
        // 入口文件打包输出文件名
        filename: "static/js/main.js",
        // 自动清空上次打包的内容
        // 原理：在打包前，将整个path目录的内容清空，然后在打包
        clean: true,
    },
    // 加载器
    module: {
        rules: [
            // loader的配置
            {
                test: /\.css$/i,//会检测对应结尾的文件，才可以使用下面规则
                use: [//规则的执行顺序时从下到上，从右到左
                    "style-loader", //将js中的css通过创建style标签添加到html文件中生效
                    "css-loader"//能将css资源编译成commonjs的模块添加到js中
                ],
            },
            {
                // loader:'xxx'只能使用一个loader
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',//重复上面的步骤
                    'less-loader',//将less资源编译为css文件
                ],
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',//重复上面的步骤
                    'stylus-loader',//将stylus资源编译为css文件
                ],
            },
            {
                test: /\.(png|jpe?g|png|svg)&/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        // 将小于10kb的图片自动转为base64
                        // 优点：减少请求数量   缺点：体积变大一点
                        maxSize: 10 * 1024 // 10kb
                    }
                },
                // 图片输出地址
                generator: {
                    filename: "static/images/[hash][ext][query]",
                }
            },
            // 处理其他资源
            {
                test: /\.(ttf|woff2?|map3|map4|avi)&/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash][ext][query]",
                }
            }


        ],
    },
    // 插件
    plugins: [],
    // 模式
    mode: "development",
}