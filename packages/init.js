const { program } = require('commander')
const { log } = require('./lib/utils')

program.version(require('../package.json').version)

program
  .command('create [name]')
  .description('根据类型创建项目')
  .option('-t, --type', '模版类型')
  .action(require('./commands/create'))
  .on('-h, --help', () => {
    log('使用 sim create NAME -t=TYPE 进行初始化操作')
    log('NAME 名称 规则：sun-web-类型-名称，例如：sun-web-app-ui 移动端，sun-web-component-table table组件')
    log('TYPE 类型 规则：')
    log('vue: vue项目')
    log('component: 组件')
    log('layout: 布局')
  })

program
  .command('template')
  .description('模板相关操作')
  .option('-ls', '列出所有模板', 'ls')
  .option('-add', '新增模板git', 'add')
  .helpOption('-h, --help', '显示帮助内容')
  .action(require('./commands/template'))
  .on('-h, --help', () => {
    log('使用 sim template -ls列出所有模板')
    log('使用 sim template -add新增模板git地址')
  })

program.parse(process.args)
