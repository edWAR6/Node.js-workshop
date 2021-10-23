const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  const url = req.url;
  if(url ==='/'){
    res.write('<h1>Hello World!<h1>');
  }else if(url ==='/products'){
    res.write('<h1>Product list<h1>');
  }else{
    res.write('<h1>404! Page not found<h1>');
  }

  res.end();
}).listen(3000, function(){
  console.log("server start at port 3000");
});
