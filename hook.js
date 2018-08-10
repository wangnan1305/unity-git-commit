const fs = require('fs');
const path = require('path');
const runner = require('./index').runner;
console.log(path.join(__dirname,'../../../../../../'))
console.log(fs.existsSync(path.join(__dirname,'../../../../../') + '.git'))
// console.log(path.dirname('./src/index/index.html')) //删除最后一条斜杠后的内容，包括斜杠本身 输出./src/index
// console.log(path.extname('./src/index/index.html'))   //输出最后一个.后的内容（包括.本身），.在最前面输出空
// console.log(path.basename('./src/index/page2.html','.html')) //输出page2
// console.log(path.join(__dirname + '/foo', 'bar', 'baz/asdf','quux','..')) //join会执行里面的路径，输出结果，..会忽略掉quux路径。参数length为0时输出.
// try {
//     let message = fs.readFileSync('../../../../.git/COMMIT_EDITMSG', 'utf-8');
//     const lines = message.split('\n');
//     if (!lines[lines.length - 1]) {
//         lines.pop();
//     }
//     message = lines.join('\n');
//     runner(message);
// } catch (e) {
//     console.log('检测程序运行出错...', e);
// }
