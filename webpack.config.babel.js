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
const getEntrySetting = () => {
    const entry = [
        path.join(__dirname, 'src/index')
    ];
    if (isDevEnv) {
        entry.push.apply(
            entry,
            [
                'webpack/hot/only-dev-server',
                'webpack-dev-server/client?http://localhost:3000'
            ]
        );
        // react-hot-loader should be put on the top of entry.
        entry.unshift('react-hot-loader/patch');
    }
    return entry;
}

const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    devtool: getDevtoolSetting(),
    plugins: getPluginsSetting(),
    entry: getEntrySetting()
}

const AppConfig = Object.assign({}, webpackConfig, {
    output: {
        path: path.join(__dirname, 'output/assets'),
		filename: 'app.js',
		publicPath: '/assets'
    }
});

module.exports = AppConfig;