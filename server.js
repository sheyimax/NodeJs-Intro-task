var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    if(req.url=="/home" || req.url=="/"){
        var readStream = fs.createReadStream('home.html');
    }else if(req.url=="/about"){
        var readStream = fs.createReadStream('about.html');
    }else if(req.url=="/contact"){
        var readStream = fs.createReadStream('contact.html');
    }
    readStream.pipe(res);
}).listen(8080)
console.log("Server is Running on Port 8080");