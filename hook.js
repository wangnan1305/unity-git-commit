#!/usr/bin/env node

const fs = require('fs');
const gitPath = require('./index').gitPath;
const data = `const fs = require('fs');
const runner = require('unity-git-commit').runner;
try {
    let message = fs.readFileSync('${gitPath}', 'utf-8');
    const lines = message.split('\\n');
    if (!lines[lines.length - 1]) {
        lines.pop();
    }
    message = lines.join('\\n');
    runner(message);
} catch (e) {
    console.log('检测程序运行出错...', e);
}`;
mkdirSync('./git-bash', 0, function (e) {
    if (e) {
        throw e;
    } else {
        fs.writeFile('./git-bash/commit-msg.js', data , function(err){
            if(e) throw e;
            console.log('create mkdir success')
        });
    }
});
function mkdirSync(url, mode, fn) {
    var arr = url.split('/');
    mode = mode || 0777;
    if (arr[0] === '.') {
        arr.shift();
    }
    if (arr[0] === '..') {
        arr.splice(0, 2, arr[0] + "/" + arr[1]);
    }
    arr.length && create(arr.shift());

    function create(p) {
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p, mode);
        }
        if (arr.length) {
            create(p + '/' + arr.shift());
        } else {
            fn && fn();
        }
    }
}


