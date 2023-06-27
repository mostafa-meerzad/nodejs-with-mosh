const EventEmitter = require("events");

const emitter = new EventEmitter();
// we need to first define the eventListener and then raise an event this way that handler function can handle the event.

// emitter.addListener("messageLogged", () => {
//     console.log("message logged by a custom emitter")
// })

// on is the alias for addListener
emitter.on("messageLogged", (arg) => {
  console.log("message logged by a custom emitter");
  console.log("following is the arguments passed by event emitter")
  console.log(arg)
});
emitter.emit("messageLogged", {id:"message ID", url:"test/test.com"});
