var
    chprss = require('child_process'),
    fs = require('fs');


function execute(command, options) {
    return new Promise(function (resolve, reject) {
        chprss.exec(command, options, function (error, stdout, stderror) {
            // always good
            resolve(stdout.toString('utf8'));
        });
    });
}


Promise.all([
    execute('make compile'),
    execute('make diff')
]).then(function (result) {
    var
        str = '```\n' + result[0] + '\n```\n\n\n```\n' + result[1] + '\n```\n';

    fs.writeFileSync('readme.md', str);
}).catch(console.error);
