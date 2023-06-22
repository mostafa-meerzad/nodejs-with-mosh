const os = require("os");

let totalMemory = os.totalmem()
let freeMemory = os.freemem()
let numberOfCPUs = os.cpus().length
let test = os.type()
console.log(test)
console.log(`number of cpus: ${numberOfCPUs}`)
console.log(`total memory: ${totalMemory}`)
console.log(`free memory: ${freeMemory}`)

