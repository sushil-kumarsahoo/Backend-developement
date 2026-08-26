
// piece by piece
//not loading the data everything at once
//read large files
//upload files
//downloading files
//video/audio processing
//compressions

import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

//streams types
//readable stream - source of data
//writeable stream - destination where the data is written
//transform stream - read the data, change it and pass that forward


//The stream internally takes each item and puts it into its internal buffer.
//A stream is an object that participates in a data-flow system.
//For a Readable stream, Node internally reads/produces data and makes it available to whoever is consuming the stream.


//chunk arrives
//     ↓
// transform()
//      ↓
// callback(null, "HELLO")
//      ↓
// Node stream machinery
//      ↓
// next stream


const readableStream = Readable.from([
    "hello",
    "from",
    "node.js",
    "streams"
])

//Transform is a class provided by Node.js.  
//new is the JavaScript new operator.It creates an object (instance) from the Transform class.
//receive data → process data → produce data

//The callback has two jobs here:
//1. Tell Node that processing is finished.
//2. Give Node the transformed chunk (when there is no error).

//Why is the callback needed?
// Because the transform() method itself doesn't return the transformed chunk to the pipeline.

const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const text = chunk.toString()

        callback(null, text.toUpperCase())
    }
})

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log('received chunk', chunk.toString());
        callback()
    }
})

//pipeline() returns a Promise.

async function main(): Promise<void> {
    try {
        await pipeline(readableStream, uppercaseTransform, writableStream)
        console.log("stream completed");

    } catch (error) {
        const msg = error instanceof Error ? error.message : "unknown error"
        console.log("stream failed", msg);

    }
}

main()