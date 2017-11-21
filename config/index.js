'use strict'

const  Koa = require('koa')
global.app = new Koa()

app.name = 'test'
app.listenPort = 3000
app.proxy = true

require('require-dir-all')('./initializers')