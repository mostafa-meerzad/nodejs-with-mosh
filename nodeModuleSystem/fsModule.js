const fs = require("fs");

let fileContent = fs.readFileSync("./nodeModuleSystem/fsModule.js") // read content of a file synchronously
let fileContentAsync = fs.readFile("./nodeModuleSystem/fsModule.js", (err, data) => {
    console.log(`content of specified file path: ${data}`)
}) // read content of a file asynchronously

console.log(`content inside file: ${fileContent}`)

const currentDir = fs.readdirSync("./")
console.log("-------------------------------------------------------------------------")
console.log(currentDir)
