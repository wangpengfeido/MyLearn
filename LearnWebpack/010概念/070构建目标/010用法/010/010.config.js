const path = require('path');
const webpack = require('webpack');

let webConfig = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name]_web.js',
        path: path.resolve(__dirname, './010dist'),
    },
    // 指定构建目标
    target: 'web',               // 默认值
};

let nodeConfig= {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name]_node.js',
        path: path.resolve(__dirname, './010dist'),
    },
    // 指定构建目标
    target: 'node',
};

// 可以打包两份分离的配置来创建同构的库
module.exports = [webConfig, nodeConfig];




// 注意 target 与output.libraryTarget的区别
// target是指定构建的代码在何种环境中运行
// output.libraryTarget是指定最终导出的库可以以何种方式引用









