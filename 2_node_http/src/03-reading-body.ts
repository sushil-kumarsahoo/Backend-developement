import http, { createServer, type IncomingMessage, type ServerResponse } from 'node:http'

const PORT = 4000;

type CreateBody = {
    name?: string;
    email?: string
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";
    const reqUrl = new URL(req.url ?? "/", `http:${req.headers.host}`)
    const pathName = reqUrl.pathname;

    // res.setHeader(headerName, value);
    //"Content-Type" → header name , "text/plain"  → header value
    //Content-Type tells the client what kind of data is in the response body.
    res.setHeader("Content-type", "text/plain");

    if (method === "POST" && pathName === "/users") {
        const chunks: Buffer[] = []
        //data event is going to run every time node receives a new body chunk

        //"data" is a predefined event emitted by the stream when a chunk is available.
        req.on("data", (chunk: Buffer) => {
            chunks.push(chunk)
        })

        //The actual request sent over the network may contain something like:
        // POST /users HTTP/1.1
        // Host: localhost:4000
        // Content-Type: application/json
        // Content-Length: 54
        // {"name":"Sushil","email":"sushil@gmail.com"}
        // So you didn't write it, but the client may have written it for you.

/*
Content-Length
Client
  │
  │ Content-Length: 100
  │
  │ sends data in pieces
  ▼
Node HTTP Parser
  │
  │ counts received bytes
  │
  │ 100 bytes received
  ▼
"END"

Transfer-Encoding: chunked

Client
  │
  │ chunk + size
  │ chunk + size
  │ chunk + size
  │
  │ 0 ← final chunk
  ▼
Node HTTP Parser
  │
  ▼
"END"
*/


        req.on("end", () => {
            try {
                const rawBody = Buffer.concat(chunks).toString('utf-8')

                if (!rawBody) {
                    res.statusCode = 404;
                    res.end("req body is required")
                    return
                }
                const body = JSON.parse(rawBody) as CreateBody

                if (!body.name || !body.email) {
                    res.statusCode = 404;
                    res.end("Both name and email is required")
                    return
                }
                res.statusCode = 201;
                res.end(`User created ${body.name} and ${body.email}`)

            }
            catch (error) {
                res.statusCode = 400;
                res.end("Invalid json body")
            }
        })

        req.on("error",()=>{
            res.statusCode = 500;
            res.end("Failed to read req body")
        })
        return
    }

    res.statusCode = 404;
    res.end("Route not found")
})

server.listen(PORT, () => {
    console.log(`server is now running on port ${4000} `);

})