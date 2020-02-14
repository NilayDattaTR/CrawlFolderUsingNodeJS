const fs = require("fs");
const joinPath = require("path.join");
const root = __dirname + '/Files';

function crawlFiles() {
    const list = fs.readdirSync(root);
    const filepath = list.map(el => {
        return '/' + el + '/index.html';
    })
    console.log(filepath);
}
crawlFiles();