const chalk = require('chalk');

const error = (message) => {
  console.error(chalk.red(message))
}

const log = (message) => {
  console.log(chalk.white(message))
}

const success = (message) => {
  console.log(chalk.green.bold(message))
}

const warning = (message) => {
  console.log(chalk.yellow.bold(message))
}

module.exports = {
  log,
  error,
  success,
  warning
}
