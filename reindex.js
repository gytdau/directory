
const fs = require('fs');
const path = require('path');


// Function copied from https://gist.github.com/kethinov/6658166#gistcomment-1295057
function walkSync (dir, filelist = []) {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = walkSync(dirFile, filelist);
        }
        catch (err) {
            if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filelist = [...filelist, dirFile];
            else throw err;
        }
    });
    return filelist;
}

const data = 
walkSync(".")
.filter((name) => name.endsWith(".md"))
.filter((name) => name !== "_sidebar.md")
.map(name => {
    name = name.substring(0, name.length-3);
    if (name == "README") {
        return `* [directory](README)\n`
    }
    return `* [${name}](${name})\n`
})
.join("");

fs.writeFile("_sidebar.md", data, () => {
    console.log("Success.")
})
