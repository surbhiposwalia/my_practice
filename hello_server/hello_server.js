var express=require('express');
var app=express();
// app.get('/',function(request,response){
// response.json({
//         name: 'Kim Gordon',
//         instrument: 'Bass'
//     });   
// });
app.get('/header',function(request,response){
  
response.json(request.headers);   
// console.log(request.headers);
});
// app.get('/header/:header_name',function(request,response){
// var header_name = request.params.header_name;
// var header_value = request.headers[header_name];
// var json_response = {
// };
// json_response[header_name] =  header_value;

// response.json(json_response);
// });

// app.get('/jedi/:firstname/:lastname' , function(request, response){
//     var first =request.params.lastname.slice(0,3);
//     var last=request.params.firstname.slice(0,2);
//     response.send(["hello",first , last].join(""));
// });

module.exports=app;
  // console.log(response);
    //var myresponse = {
        
        // "host":request.headers.host,
        // "user-agent":request.headers['user-agent'],
        // "accept":request.headers.accept
   // };
// app.listen(process.env.PORT||8080, process.env.IP);
