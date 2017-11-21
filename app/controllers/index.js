'use strict'

const router = require('koa-router')()

router.get(/^\//, function* (){
  yield this.render('vue', {
    layout: 'layout/default'
  })
})

module.exports = router