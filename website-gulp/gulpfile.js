require('dotenv-extended').load(); // Expose environment variables on this document
const { src, dest, parallel, watch } = require('gulp');
const babel = require('gulp-babel');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const scss = require('gulp-sass');
const mocha = require('gulp-mocha');
scss.compiler = require('node-sass');

const js = () => browserify({entries: './src/index.js', extensions: ['.js', '.jsx'], debug: true})
.transform('babelify', {presets: ['@babel/env', '@babel/preset-react']})
.bundle()
.pipe(source('app.js'))
.pipe(dest('dist'));

const css = () => src('./src/style.scss')
.pipe(scss().on('error', scss.logError))
.pipe(dest('./dist'));

const tests = () => src('./src/test/*.spec.js', {read: false})
.pipe(mocha({
  compilers: babel,
  require: ['./setupTest.js'],
}));

watch('./src/**/*.scss', css);
watch('./src/**/*.js', js);

exports.test = tests;
exports.default = parallel(css, js);
