const inquirer = require('inquirer')

// 类型询问
const typeQuestion = () => {
  const { templateGits } = require('../config/config.json')
  const options = templateGits
  return inquirer.prompt([
    {
      name: 'type',
      type: 'list',
      message: '请选择你要创建的类型：',
      choices: options.map(option => option.name),
      filter: function (val) {
        const option = options.find(item => item.name === val)
        return option.type
      }
    }
  ])
}

// 名字询问
const nameQuestion = () => {
  return inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: '请输入名称：'
    }
  ])
}

// 模版询问
const addTemplateQuestion = () => {
  return inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: '请输入名称（如：Vue项目）：'
    },
    {
      name: 'type',
      type: 'input',
      message: '请输入类型（如：vue-project）：'
    },
    {
      name: 'url',
      type: 'input',
      message: '请输入git仓库地址：'
    }
  ])
}

module.exports = {
  typeQuestion,
  nameQuestion,
  addTemplateQuestion
}
