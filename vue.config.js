module.exports = {
    devServer: {
        proxy: [
            {
                "/graphql": "http://127.0.0.1:3000"
            }
        ]
    }
}