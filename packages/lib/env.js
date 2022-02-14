const shell = require('shelljs')

const existGit = function() {
  let exist = false
  try {
    shell.exec('git --version')
    exist = true
  } catch (error) {
    exist = false
  }
  return exist
}

module.exports = {
  existGit
}
