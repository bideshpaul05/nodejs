const fs = require('fs')
const http = require('http')
const port = process.env.PORT ||8080
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    if(req.url=='/')
    {
        res.statusCode = 200
        const intro = fs.readFileSync('./index.html')
        res.end(intro.toString())
    }
    else if(req.url== '/about')
    {
        res.statusCode = 200
        const about = fs.readFileSync('./about.html')
        res.end(about.toString())
    }
    else if(req.url== '/contact')
    {
        res.statusCode = 200
        const contact = fs.readFileSync('./contact.html')
        res.end(contact.toString())
    }
    else {
        req.statusCode = 404
        const notfound= fs.readFileSync('./404.html')
        res.end(notfound.toString())
    }
    
})
server.listen(port,()=>{
    console.log(`server is listening on ${port} `)
})