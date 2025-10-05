const path = require('path');

module.exports = {
  mode: 'development', // или 'production' для сборки
  entry: './src/index.js', // ваша точка входа с import/export
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './src',
    open: true,
    hot: true,
    port: 9000,
  },
  devtool: 'inline-source-map', // удобная отладка с исходными картами
  // Ниже блока module можно удалить — для современных браузеров loader не нужен
};
