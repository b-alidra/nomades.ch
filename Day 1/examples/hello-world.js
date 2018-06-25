"use strict"; // always 2
// "http" and "util", like "fs", are standard Node.js module.
// see https://nodejs.org/dist/latest-v8.x/docs/api/
const http = require("http");
const util = require("util");

// the port on which our server will listen on.
const port = 8080;

// create a http server to handle requests.
const server = http.createServer((req, res) => {
    // util.inspect() is helpful for debugging. See also console.dir().
    console.log(util.inspect(req.socket.address(), {colors:true}));
    res.end(`Welcome to ${req.url}\n`); // ES6 Template literals
});

// listen() will register into the event loop.
server.listen(port, () => console.log("listening on port " + port));

// just like "done reading?" in our previous example, this will be printed
// *before* the server is listening.
console.log("EOF");
