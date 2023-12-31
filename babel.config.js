module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    extensions: ['.ios.js', '.android.js', '.js', '.json'],
                    alias: {
                        assets: './assets',
                        screens: './screens',
                        utils: './utils'
                    }
                }
            ]
        ]
    }
}
