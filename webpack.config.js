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
        /* path: path.resolve(__dirname, 'docs'), */
    },
    entry: {
        index: './src/index.js',
        api: './src/api.js',
        main: './src/main.js',
        setting: './src/settings.js',
        home: './src/home.js',
        popular: './src/popular.js',
        archive: './src/archive.js',
    },

}