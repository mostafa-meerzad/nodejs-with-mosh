const url = "http://myLogger/log"

function logger (message){
    console.log(message)
}

// ------------------------ code lines bellow are common js --------------------
// module.exports.log = logger
// module.exports.endPoint = url // we can name the thing that we want to export anything we want 

// ------------------------- modern js ----------------------------
 export {logger}
