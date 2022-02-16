#!/usr/bin/env node

'use strict';

const chalk = require('chalk')

const currNodeVersion = process.versions.node
const major = currNodeVersion.split('.')[0]
if (major < 10) {
  console.error(chalk.red(`You are running Node \n${currNodeVersion} \nvue-assist-cli requires Node 10 or higher.\nPlease update your version of Node`
  ))
  process.exit(1)
}

require('../packages/init')
