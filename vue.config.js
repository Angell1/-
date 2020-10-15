//vue.config.js 常用配置

// module.exports = {
//     publicPath: '/',
//     outputDir: 'dist',
//     assetsDir: '',
//     //生成环境sorceMap
//     productionSourceMap: true,
//     //webpack配置
//     configureWebpack: () => {},
//     chainWebpack: () => {},
//
//     //css相关配置
//     css: {
//         // 启用css modules
//         modules: false,
//         // 是否使用css分离插件
//         extract: true,
//         // 开启csss source maps
//         sourceMap: false,
//         // css
//         loaderOptions: {},
//      },
//     devServer: {
//     host: '0.0.0.0',
//     port: 8080,
//     proxy: {},
//     },
//      pluginOptions: {
//          // ...     }
//      }
// }


module.exports = {
    devServer: {
    host: '0.0.0.0',
    port: 8080,
    open:true
    }
    // css:{
    //     loaderOptions:{
    //         sass:{
    //             data: '@import "@/assets/scss/_variable.scss";'
    //         }
    //     }
    // }

}
