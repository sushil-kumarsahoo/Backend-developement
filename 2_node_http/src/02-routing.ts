import http,{createServer, type IncomingMessage,type ServerResponse} from 'node:http'

const PORT = 4000;

const server = createServer((req:IncomingMessage,res:ServerResponse)=>{
    const method = req.method ?? "GET";
    
//https://localhost:5001/users -> req.url -> /users
//https://localhost:5001/user?id=1 -> req.url -> /users?id=1 (relative url)  localhost:5001 -> base url

//http://localhost:3000/users?id=10
//                    └──────┘
//                    pathname

//We do this because req.url is just a string, while new URL() gives us a structured object that is much easier to work with.A string doesn't automatically give you useful properties such as:
// req.url.pathname
// req.url.searchParams

//new URL(...)  -> creates a URL object. ->new URL(relativeUrl, baseUrl)

    const requestUrl = new URL(req.url ?? "/", `https://${req.headers.host}`)
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