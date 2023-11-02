console.log(a);
setTimeout(() => {
    console.log("h")
}, 1000);

console.log(x);

setImmediate(()=>{
    console.log(m);
})

const fs = require("fs");
fs.readFile('./Notes.txt', "utf-8", (err, data)=>{
    setTimeout(() => {
        console.log("h")
    }, 0);
})

setImmediate(()=>{
    console.log("G");
})

process.nextTick(()=>{
    console.log("hh");
})

// so in I/O=> now setimmedaite take more priority then settime out with 0ms else eska ulta
//in I/O and outside also => nextTick - immidate - settimeout


//read and delele
fs.readFile('./Notes.txt', "utf-8", (err, data)=>{
   // 5 seconds
})
fs.unlinkSync("./Notes.txt")

//first  romove, bcx readfile take some time to run its not good
//so we move unlink in to readFile;
