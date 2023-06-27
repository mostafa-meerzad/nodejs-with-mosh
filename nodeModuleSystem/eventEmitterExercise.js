const EventEmitter = require("events");

const loggingEvent = new EventEmitter()

loggingEvent.on("log", (arg)=>{
    console.log("log message: > ", arg)
})

loggingEvent.emit("log", {message:"hello from event emitter"})