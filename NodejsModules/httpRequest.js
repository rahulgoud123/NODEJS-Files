/*const {createServer}=require('http')
const { hostname } = require('os')
const port=8000

const server=createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'}) //string data req
    res.end('Hello this program with http module')
})
server.listen(port,()=>{
    console.log(`Server is running at ${hostname} ${port}`)
})*/

//http request with multiple routes
const http=require('http')
const url=require('url')
const port=4000
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    //Extract the path and query parameters
    const path=parsedUrl.pathname;
    if(path==='/'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Welcome to Home page')
    }else if(path==='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('Welcome to about page')
        }else if(path==='/contact'){
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.end('Welcome to contact page')
            }else{
                res.writeHead(404,{'Content-Type':'text/plain'})
                res.end('Page not Found')
                }
})
server.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})