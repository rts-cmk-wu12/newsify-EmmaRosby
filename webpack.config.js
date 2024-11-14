module.exports = {
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/i,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
            }
        ]
    }
}