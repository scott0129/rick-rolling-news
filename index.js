var http = require('http');
var fs = require('fs');

const port = process.env.PORT || 5000;

http.createServer(function(req, res){
    console.log(req.url);
    switch (req.url) {
        case "/":
            fs.readFile('index.html',function (err, data){
                res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
                res.write(data);
                res.end();
            });
            break
        case "/RollingNews.png":
            fs.readFile('RollingNews.png',function (err, data){
                res.write(data);
                res.end();
            });
            break
        default:
            fs.readFile('redirect.html',function (err, data){
                res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
                res.write(data);
                res.end();
            });
    }

}).listen(port);

console.log(`Server is running on port ${port}`);
