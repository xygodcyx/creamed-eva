const path = require('node:path')
const chalk = require('chalk')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const jsonFmt = require('gulp-json-fmt')
const imageminPngquant = require('imagemin-pngquant')
const ora = require('ora')

async function CompressImages() {
  const spinner = ora('开始压缩图片')
  spinner.start()
  return new Promise((resolve) => {
    const targetPath = path.resolve(__dirname, 'docs/**/*.png')
    const destPath = path.resolve(__dirname, 'docs')
    gulp
      .src(targetPath)
      .pipe(
        imagemin({
          progressive: true,
          plugins: [imageminPngquant()],
        }),
      )
      .pipe(gulp.dest(destPath))
      .on('end', () => {
        spinner.stop()
        console.log(chalk.green('压缩图片成功'))
        resolve()
      })
  })
}

async function CompressJSON() {
  const spinner = ora('开始压缩JSON')
  spinner.start()
  return new Promise((resolve) => {
    const targetPath = path.resolve(__dirname, 'docs/**/*.json')
    const destPath = path.resolve(__dirname, 'docs')
    gulp
      .src(targetPath)
      .pipe(jsonFmt())
      .pipe(gulp.dest(destPath))
      .on('end', () => {
        spinner.stop()
        console.log(chalk.green('压缩JSON成功'))
        resolve()
      })
  })
}

exports.default = gulp.series(CompressImages, CompressJSON)
