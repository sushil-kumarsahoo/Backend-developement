import http,{type IncomingMessage,type ServerResponse} from 'node:http'

const PORT = 3000;

//http.createServer creates a low level http server
//call back is goint to run for every incoming http req

//req-> request object
//method - get,post,put,options
//headers - actual meta data sent by the client
//req body - data post/put

//res- response object
//status code , response headers, response body

//get - read data
//post - create data
//put - replace data
//patch - update partial data
//delete -  delete data


const server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    const method = req.method;
    const url = req.url;
    //in which path the client is actually requesting

    const userAgent = req.headers["user-agent"]

    res.statusCode = 200

    res.setHeader('Content-Type','text/plain')

    res.end(`Basic http node server: ${method}:${url}:${userAgent}`)
},);

server.listen(PORT,()=>{
    console.log(`server is now running on port ${3000} `);
    
})