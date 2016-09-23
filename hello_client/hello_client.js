var unirest = require('unirest');

unirest.get('http://localhost:8080/header').end(function(response) {
    console.log('header:',response.headers['content-type']);
//   console.log('Status:', response.statusCode);
//  console.log('Headers: ', response.headers);
//   console.log('Body:', response.body);
});