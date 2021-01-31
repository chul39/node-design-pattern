var path = require('path');
var FS_Proxy = require('./FS_Proxy');

var fs = new FS_Proxy(require('fs'));

// var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('Reading file...');
    console.log(contents);

}

// Not readable, return error
// fs.readFile(txtFile, 'UTF-8', result);

// Readable, the text will be printed
fs.readFile(mdFile, 'UTF-8', result);
