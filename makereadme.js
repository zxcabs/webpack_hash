var
    chprss = require('child_process'),
    fs = require('fs');


function execute(command, options) {
    return new Promise(function (resolve, reject) {
        chprss.exec(command, options, function (error, stdout, stderror) {
            // always good
            resolve('$ ' + command + '\n\n' + stdout.toString('utf8'));
        });
    });
}


Promise.all([
    execute('cat package.json'),
    execute('make compile'),
    execute('make diff'),
    execute('npm ls')
]).then(function (result) {
    var
        str = '```\n' + result.join('\n```\n\n\n```\n') + '\n```\n';

    fs.writeFileSync('readme.md', str);
}).catch(console.error);
