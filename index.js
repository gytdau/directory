const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');


// Function copied from https://gist.github.com/kethinov/6658166#gistcomment-1295057
function walkSync(dir, filelist = []) {
    fs.readdirSync(dir).forEach(file => {
        if (dir == "node_modules") {
            return
        }
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

chokidar.watch('.', { ignored: "_sidebar.md", ignoreInitial: true }).on("all", () => {
    let lastDirectory = ""

    const data =
        walkSync(".")
            .filter((name) => name.endsWith(".md"))
            .filter((name) => name !== "_sidebar.md")
            .map(name => {
                folders = name.substring(0, name.length - 3).split("/");
                proccesedName = folders.pop()
                // Handle README.md
                if (name == "README.md") {
                    return `* [directory](README)\n`
                } else if (proccesedName == "README") {
                    directory = folders.join("/")
                    directory += "/"
                    lastDirectory = directory
                    return `* [**${directory.slice(0, -1)}**](${directory})\n`
                }
                // Handle everything else
                directory = folders.join("/")
                if (directory.length > 0) {
                    directory += "/"
                }
                if (directory == lastDirectory) {
                    return `* [*${directory}*${proccesedName}](${directory + proccesedName})\n`
                } else {
                    lastDirectory = directory
                    return `* [**${directory}**${proccesedName}](${directory + proccesedName})\n`
                }
            })
            .join("");

    fs.writeFile("_sidebar.md", data, () => { })
})