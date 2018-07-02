var config = {
    entry: ['./app/index.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 5500
    },
module: {
    rules: [
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
            presets: ['es2015', 'es6']
         }
      }
    ]
}
}
