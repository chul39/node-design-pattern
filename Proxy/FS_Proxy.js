class FS_Proxy {

    // Construct the proxy class with the real fs.
    constructor(fs_subject) {
        this.fs = fs_subject;
    }

    // Overwrite specific method.
    // In this case, readFile() is overwritten so that it can only read .md file.
    readFile(path, format, callback) {

        if (!path.match(/.md$|.MD$/)) {
            return callback(new Error(`Not Markdown files.`));
        }

        this.fs.readFile(path, format, (error, contents) => {

            if (error) {
                console.error(error);
                return callback(error);
            }

            return callback(null, contents);

        })

    }

}

module.exports = FS_Proxy;