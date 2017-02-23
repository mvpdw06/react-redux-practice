import path from 'path';
import webpack from 'webpack';

const env = process.env.NODE_ENV || 'development';
const isDevEnv = env === 'development';

// webpack settings
const getDevtoolSetting = () => {
    return isDevEnv ?
    'cheap-module-eval-source-map' :
    'cheap-module-source-map';
}
const getPluginsSetting = () => {
    const plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ];
    if (isDevEnv) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
    } else {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        );
    }
    return plugins;
}

const webpackConfig = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/]
            }
        ]
    },
    devtool: getDevtoolSetting(),
    plugins: getPluginsSetting()
}

const AppConfig = Object.assign({}, webpackConfig, {
    entry: [
        'react-hot-loader/patch',
		path.join(__dirname, 'src/index'),
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server'
    ],
    output: {
        path: path.join(__dirname, 'output/assets'),
		filename: 'app.js',
		publicPath: '/assets'
    }
});

module.exports = AppConfig;