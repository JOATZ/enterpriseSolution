module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'], // specify the root directory
                    extensions: ['.ios.js', '.android.js', '.js', '.json'],
                    alias: {
                        assets: './assets' // specify the alias
                    }
                }
            ]
        ]
    }
}
