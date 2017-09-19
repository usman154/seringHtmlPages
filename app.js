var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function(req, res){
  console.log("request URL "+req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream(path.join(path.join(__dirname,'split'),'index.html'), 'utf8' ).pipe(res)
  }
  else if(req.url === '/assets/css/split.css' ){
    res.writeHead(200, {'Content-type' : 'text/css'});
    fs.createReadStream(path.join(path.join(__dirname,'split/assets/css'),'split.css'), 'utf8' ).pipe(res)
  }
  else if(req.url === '/images/background.jpg' ){
    res.writeHead(200, {'Content-type' : 'image/jpg'});
    fs.createReadStream(path.join(path.join(__dirname,'split/images'),'background.jpg')  ).pipe(res)
  }
  else if(req.url === '/about' ){
    res.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream(path.join(path.join(__dirname,'split'),'about.html'), 'utf8' ).pipe(res)
  }
  else if(req.url === '/contact' ){
    res.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream(path.join(path.join(__dirname,'split'),'contact.html'), 'utf8' ).pipe(res)
  }
  else {
    res.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream(path.join(path.join(__dirname,'split'),'404.html'), 'utf8' ).pipe(res)
  }
})
server.listen(3000, 'localhost');
