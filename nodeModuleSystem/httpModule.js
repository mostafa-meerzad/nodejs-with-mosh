const http = require("http");

// we don't use the following style of registering event-listeners in the real-world applications

// const server = http.createServer()
// server.on("connection", () => {
// console.log("connected to the server")
// })
// --------------------------------


const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("hello world")
        res.end()
        // console.log(first)
    }
    if(req.url === "/api/course"){
        res.write(JSON.stringify([1,2,3,4,5,6,7,8,]))
        res.end()
    }
});
server.listen("3000");

console.log("server listening on port 3000");
