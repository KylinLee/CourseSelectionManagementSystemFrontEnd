module.exports = {
    devServer: {
        proxy: {
            "/graphql": {target: "http://127.0.0.1:3000"}
        }
    }
}