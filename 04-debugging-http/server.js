'use strict';

var http = require('http');

function returnError(req, res) {
  res.writeHead(404, {
    'Content-Type': 'application/json',
    /*'Access-Control-Allow-Origin': '*'*/ });
  res.end('<error>Not found</error>');
  //res.end('{ "error": "Not found" }');
}

function returnQuestions(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' });

  var questions = [
    { title: 'question #1', content: 'content #1' },
    { title: 'question #2', content: 'content #2' }
  ];
  res.end(JSON.stringify(questions, null, 2));
  //res.end('{ "error": "Not found" }');
}

http.createServer(function(req, res) {
  returnError(req, res);
  //returnQuestions(req, res);
}).listen(3000);