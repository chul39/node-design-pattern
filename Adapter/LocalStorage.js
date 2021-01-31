var { writeFile, existsSync, readFileSync, unlink } = require('fs');

// As LocalStorage cannot be used outside the browser,
// adapter of LocalStorage is created for node.js environment.

class LocalStorage {

    constructor() {
        if (existsSync('localStorage.json')) {
            console.log('Loading items from localStorage.json');
            var txt = readFileSync('localStorage.json');
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFile('localStorage.json', JSON.stringify(this.items), error => {
            if (error) {
                console.error(error);
            }
        });
    }

    clear() {
        this.items = {};
        unlink('localStorage.json', () => {
            console.log('LocalStorage files removed');
        });
    }

}

module.exports = new LocalStorage();
