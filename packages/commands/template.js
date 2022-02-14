const { log, success, error } = require('../lib/utils')
const { addTemplateQuestion } = require('../lib/question')
const path = require('path')
const fs = require('fs')
const shell = require('shelljs')

module.exports = async (params) => {
  const { Ls, Add } = params
  const dbUrl = __dirname + '/../config/config.json'
  const db = require(dbUrl)
  if (Ls) {
    db.templateGits.forEach(git => {
      log(`${git.name} : ${git.url}`)
    })
  } else if (Add) {
    const result = await addTemplateQuestion()
    
  }
}

