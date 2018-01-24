"use strict";

var ExtractTextPlugin = require(`extract-text-webpack-plugin`);

var _require = require(`gatsby-1-config-css-modules`),
    cssModulesConfig = _require.cssModulesConfig;

exports.modifyWebpackConfig = function (_ref, options) {
    var config = _ref.config,
        stage = _ref.stage;

    var sassFiles = /\.s[ac]ss$/;
    var sassModulesFiles = /\.module\.s[ac]ss$/;
    var sassLoader = `sass?${JSON.stringify(options)}`;

    switch (stage) {
        case `develop`:
        {
            config.loader(`sass`, {
                test: sassFiles,
                exclude: sassModulesFiles,
                loaders: [`style`, `css`, 'resolve-url-loader', 'sass-loader?sourceMap']
            });
            return config;
        }
        default:
        {
            return config;
        }
    }
};