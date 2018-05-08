// Dependencies
var http = require('http');
var url = require('url');

// The server should respond to all requests with a string
var server = http.createServer(function(req, res){

  // get the url and parse it
  var parsedUrl = url.parse(req.url, true);

  // get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\.+$/g, '');

  // Get the query string as an object
  var queryStringObject = parsedUrl.query;

  // Get the HTTP method
  var method = req.method.toLowerCase();

  // send the response
  res.end('Hello World\n');

  //log the request path
  console.log('Request received on path: '+ trimmedPath + ' with method: ', method, ' with query string: ', queryStringObject);
  
});

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
  console.log('The server is listening on port 3000 now');
});
