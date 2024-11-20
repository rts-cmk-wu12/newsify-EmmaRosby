module.exports = {
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/i,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        clean: true,
    },
    entry: {
        index: './src/index.js',
        api: './src/api.js',
        main: './src/main.js',
        setting: './src/settings.js',
    }
}