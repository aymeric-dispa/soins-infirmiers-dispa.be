var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');
var connect = require('connect');
var fs = require("fs");
var bodyParser = require('body-parser');
var config = require('./config.json');
var app = express();
app.use(bodyParser.json());


//Mailgun config
var domain = config.mailgunDomain;
var apiKey = config.mailgunApiKey;
var mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});


var port = process.env.PORT || 5000;

app.use(history())
  .use(serveStatic(__dirname))
  .listen(port);

console.log('server started : ' + port);


//Rest API configuration
app.use(function (req, res, next) {
  var allowedOrigins = ['http://127.0.0.1:' + port, 'http://localhost:' + port, 'http://soins-infirmiers-dispa.be:' + port];
  var origin = req.headers.origin;
  console.log("origin:" + origin);
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
})


//REST API Service
app.post('/sendEmail', function (req, res) {
  var data = {
    from: req.body.from_name + '<' + req.body.from_email + '>',
    to: config.contactToEmail,
    cc: config.contactCcEmail,
    subject: config.contactSubjectEmail,
    text: req.body.content
  };


  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
      res.status(500);
      res.send(error);
    } else {
      console.log(body);
      res.send(body);
    }
  });
});
