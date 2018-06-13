const fs = require('fs');

function watchDir(dirName) {
    fs.readdir(dirName, (err, files) => {
        if (err) throw err;
        else
            for (let each of files) {
                each = dirName+'/'+each;
                fs.stat(each, (err, file) => {
                    if (err) console.log(err);
                    if (file.isDirectory()) watchDir(each);
                    else fs.watchFile(each, (curr, prev) => {
                        console.log(`name: ${each} time :${curr.mtime}`);
                    });
                })
            }
    })
}

watchDir('wiki');