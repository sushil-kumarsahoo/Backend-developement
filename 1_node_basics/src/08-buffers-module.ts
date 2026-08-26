
// buffers - raw binary data
// binary data means - when u have ur data stored in bytes

import { buffer } from "node:stream/consumers";

//reading files
//receiving https req bodies
// working with streams
//handling images , pdf files , videos
//encrypt and hashing

// string - human readable text
// buffer - raw bytes

const textBuffer = Buffer.from("Node")

console.log(textBuffer);
console.log(textBuffer.toString("utf-8"));
console.log(textBuffer.length);

// .alloc

const fixedBuffer = Buffer.alloc(5)
console.log("Empty fixed buffer :",fixedBuffer);

fixedBuffer.write("API")
console.log("fixed buffer write :",fixedBuffer);
console.log("fixed buffer as a text :", fixedBuffer.toString("utf-8"));

const chunks = [
    Buffer.from("hello"),
    Buffer.from("Node"),
    Buffer.from("js")
]

const combineBuffer = Buffer.concat(chunks)
console.log(combineBuffer);
console.log(combineBuffer.toString("utf-8"));
