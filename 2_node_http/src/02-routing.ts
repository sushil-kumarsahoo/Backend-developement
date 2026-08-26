import http,{createServer, type IncomingMessage,type ServerResponse} from 'node:http'

const PORT = 4000;

const server = createServer((req:IncomingMessage,res:ServerResponse)=>{
    const method = req.method ?? "GET";
    
//https://localhost:5001/users -> req.url: /users
//https://localhost:5001/user?id=1 -> req.url: /users?id=1

    const requestUrl = new URL(req.url ?? "/", `https:${req.headers.host}`)
    const pathanme = requestUrl.pathname
    res.setHeader("content-type","text/plain")

    if(method == "GET" && pathanme === "/health"){
        res.statusCode = 200;
        res.end("server is healthy")
        return
    }
    if(method == "GET" && pathanme === "/users"){
        res.statusCode = 200;
        res.end("list of users")
        return
    }
    if(method == "POST" && pathanme === "/users"){
        res.statusCode = 201;
        res.end("user created successfully")
        return
    }
    res.statusCode = 404
    res.end("route not found")
})

server.listen(PORT,()=>{
    console.log(`server is now running on port ${4000} `);
    
})