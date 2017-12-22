var postcssImport  = require('postcss-import');
module.exports = {
    plugins: [
        postcssImport,
        require('autoprefixer'),
    ]
};