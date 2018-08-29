"use strict";

var ExtractTextPlugin = require(`extract-text-webpack-plugin`);

var _require = require(`gatsby-1-config-css-modules`),
    cssModulesConfig = _require.cssModulesConfig;

exports.modifyWebpackConfig = function (_ref, options) {
    var config = _ref.config,
        stage = _ref.stage;

    var sassFiles = /\.s[ac]ss$/;
    var sassModulesFiles = /\.module\.s[ac]ss$/;
    options['sourceMap'] = 'sourceMap';
    var sassLoader = `sass?${JSON.stringify(options)}`;

    config.merge({
        postcss(wp) {
            return [
                require('postcss-cssnext')({ browsers: ['last 2 versions', '> 2%']}),
            ]
        },
    });

    switch (stage) {
        case `develop`:
        {
            config.loader(`sass`, {
                test: sassFiles,
                exclude: sassModulesFiles,
                loaders: [`style`, `css`, `resolve-url-loader`, `postcss`, sassLoader]
            });
            return config;
        }
        case `build-css`:
        {
            config.loader(`sass`, {
                test: sassFiles,
                exclude: sassModulesFiles,
                loader: ExtractTextPlugin.extract([`css?minimize`, `resolve-url-loader`, `postcss`, sassLoader])
            });

            config.loader(`sassModules`, {
                test: sassModulesFiles,
                loader: ExtractTextPlugin.extract(`style`, [cssModulesConfig(stage), `resolve-url-loader`, sassLoader])
            });
            return config;
        }
        case `develop-html`:
        case `build-html`:
        case `build-javascript`:
        {
            config.loader(`sass`, {
                test: sassFiles,
                exclude: sassModulesFiles,
                loader: `null`
            });

            config.loader(`sassModules`, {
                test: sassModulesFiles,
                loader: ExtractTextPlugin.extract(`style`, [cssModulesConfig(stage), 'resolve-url-loader', sassLoader])
            });
            return config;
        }
        default:
        {
            return config;
        }
    }
};