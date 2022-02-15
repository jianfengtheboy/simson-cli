const fs = require('fs')
const path = require('path')
const { error, success, warning } = require('../lib/utils')
const { existGit } = require('../lib/env')
const { typeQuestion, nameQuestion } = require('../lib/questions')
const { copyTemplate } = require('../lib/copy')

module.exports = async (name, args) => {
  try {
    let type = args.type

    if (!type) {
      const typeAnswer = await typeQuestion()
      type = typeAnswer.type
    }

    while (!name) {
      const nameAnswer = await nameQuestion()
      if (nameAnswer.name) {
        name = nameAnswer.name
      } else {
        warning('名称不能为空')
      }
    }

    // 环境检查
    if (!existGit()) {
      error('未安装git')
      process.exit(1)
    }

    // 复制模版
    const target = path.join(process.cwd(), name)
    copyTemplate(target, type, name)
    if (fs.existsSync(target)) {
      success('初始化' + name + '完成，感谢一路奋斗的你！')
    } else {
      error('初始化失败，请查看帮助或联系管理人员')
    }
  } catch (err) {
    error(err)
    error('初始化失败，请查看帮助或联系管理人员')
  }
}
