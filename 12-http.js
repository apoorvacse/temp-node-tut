//HTTP-module// makes server,rq is incoming request,rs is response
const http=require('http')
const { connected } = require('process')
const server=http.createServer((req,res)=>{
  if(req.url ==='/'){
    res.end('welcome to our homepage')
  }
  if(req.url==='/about'){
    res.end('here is our short history')
  }
  //  default response
  res.end(`
  <h1> Oops!</h1>
  <p> we can't seem to find the page u r looking for</p>
  <a href="/">back home</a>
  `)
 
})
server.listen(5000)
//npm node package manager
/*use of npm=1 resuse our connecteduse others ocode 
share our code to others*/