// ------------------------------- common js pattern ------------------

// logger variable here is the object that log module exports as it's exports object
// var logger = require("./nodeModuleSystem/log") // common js pattern

// console.log("calling the logger module")
// logger.log("hello from logger")
// console.log(logger)

//  -------------------------- modern js --------------------------

// import { logger } from "./nodeModuleSystem/log.js";

// console.log("calling logger module")
// logger("logger module says Hello!")

const Logger = require("./nodeModuleSystem/logger");

const logger = new Logger();
logger.on("message logged", (arg) => {
  console.log(arg);
});

logger.log("a message for logger method");
// console.log(Logger)
