const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	devtool:"eval-source-map",//用于生成source-map便于调试
	entry:__dirname + "/app/main.js",//唯一的入口文件
	output:{
		path:__dirname+"/build",//打包后文件存放的地方
		filename:"bundle-[hash].js"//打包后输出文件的文件名
	},
	devServer:{
		port:8080,//监听端口，如果省略，默认8080
		contentBase:"./public",//本地服务器所加载的页面所在目录
		historyApiFallback:true,//所有跳转页面只想index
		inline:true//实时刷新
	},
	module:{
		rules:[
		{
			test: /(\.jsx|\.js)$/,
				use:{
					loader:"babel-loader",
				},
				exclude:/node_modules/
			},
			{
				test:/\.css$/,//引入css处理方式
				use:[
				{
					loader:"style-loader"
				},{
					loader:"css-loader",
					options:{
						modules:true
					}
				},{
					loader:"postcss-loader"
				}
				]
			}

		]
	},
	plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ],
}