const fs = require("fs");
const joinPath = require("path.join");
const root = __dirname + '/Files';

function crawlFiles() {
    if(fs.existsSync(root)) {
        const list = fs.readdirSync(root);
        const filepath = list.map(el => {
            return '/' + el + '/index.html';
        })
        const stringData = filepath.join('\n');
        console.log(stringData);
        fs.writeFile('links.txt', stringData, function(err) {
            if (err) {
                failure(err);
            } else {
                console.log("File saved successfully!");
            }
        });
    } else {
        alert('Files folder is missing !!');
    }
    
}
crawlFiles();