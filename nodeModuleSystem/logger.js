const EventEmitter = require("events")

class Logger extends EventEmitter {

    log(message){
        
        console.log(message)
        this.emit("message logged", {id:1, url:"test/test"})
    }
}

module.exports = Logger