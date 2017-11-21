'use strict'

const router = require('koa-router')

router.get('/', () => {
  this.body = { project: 'vue_test' }
})

module.exports = router