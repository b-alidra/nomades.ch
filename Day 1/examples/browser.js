// executed immediately by the main thread.
console.log("zero seconds");

// register a callback that will be executed once the operation is completed.
// In this case the "operation" is waiting two seconds.
setTimeout(() => console.log("two seconds."), 2000);

// the same as previously, although this operation will be completed faster.
// Thus, this callback will be executed before the previous one by the main
// thread.
setTimeout(() => console.log("one second."), 1000);

// As the first console.log(), this will be executed immediately by the main
// thread.
console.log("some seconds");
