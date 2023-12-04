let mix = require('laravel-mix');

mix.js('src/app.js', 'public')
.sass('src/css/style.scss', 'style.css')
.setPublicPath('public');