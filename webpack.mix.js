let mix = require('laravel-mix').mix;

mix.js('assets/js/app.js', './dist/js')
   .sass('assets/sass/app.scss', './dist/css');

mix.browserSync({
    proxy: 'http://riskdice.dev',
    host: 'riskdice.dev',
    open: 'external',
    files: [
        'dist/js/app.js',
        'dist/css/app.css',
        '*.html'
    ]
});