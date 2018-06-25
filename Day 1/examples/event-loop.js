// always start with this for clarity and speed.
"use strict";

// this is how modules are "imported"
const fs = require("fs");

// console.log() works in Node.js too
console.log("sync ready");

// NOTE: readFileSync() I/O is executed in the main thread,
// could throw an Error.
let buf = fs.readFileSync("/etc/hosts");
// You can use console.log(buf.toString()) to output file content
console.log("done reading.");

console.log("async ready");

// NOTE: readFile() I/O is executed in a worker thread,
// could callback an Error.
fs.readFile("/etc/hosts", function callback(err, buf) {
    console.log(buf.toString());
    console.log("done async reading.");
});
console.log("done reading ?");
