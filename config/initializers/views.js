'use strict'

const render = require('koa-ejs')

render(app, {
  root: 'views',
  layout: 'layout/default',
  viewExt: 'ejs',
  cache: false,
  debug: true,
  strict: true,
})
