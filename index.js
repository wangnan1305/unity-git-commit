/* eslint-disable   no-console */

const fs = require('fs');
const path = require('path');
const checker = require('./lib/checker');
const status = require('./lib/status');
const cli = require('cli-color');

function getGitPath(){
    let str = './';
    while(!fs.existsSync(path.join(__dirname + str) + '.git')){
        str += '../';
    }
    return str.slice(0,str.length - 3) + '.git' + '/COMMIT_EDITMSG';
}

function runner(message, customKeywords = [], custormPostfixes = []) {
    console.log(cli.green('检测中...\n'));
    const result = checker(message, customKeywords, custormPostfixes);
    if (result.status !== 0) {
        console.log(cli.red(`message：\n${message}\n`));
        console.log(cli.red(`× 提示：${status[result.status]}\n`));
        process.exitCode = 1;
    } else {
        console.log(cli.green(`message：\n${message}\n`));
        console.log(cli.green(`√ ${status[result.status]}\n`));
        process.exitCode = 0;
    }
}

module.exports = {
    runner,
    gitPath: getGitPath()
};
