// const http = require("http")
import http from "http"

const PORT = 3000

const server = http.createServer((req, res)=>{
  const url = req.url;

  if(url === "/"){
    res.writeHead(200,{"content-type": "text/html"})
    res.write('<h1>Home</h1>')
  }else if(url === "/about"){
    res.writeHead(200,{"content-type": "text/html"})
    res.write('<h1>About</h1>')
  }else if(url === "/my-account"){
    res.writeHead(403,{"content-type": "text/plain"})
    res.write("You have no access to this page")
  }else{
    res.writeHead(404,{"content-type": "text/plain"})
    res.write("Page not found")
  }

  res.end()

})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});