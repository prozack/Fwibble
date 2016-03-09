var express = require('express');
var Path = require('path');
var app = express();
var port = 3000;
var assetFolder = Path.resolve(__dirname + '/../dist')
console.log(assetFolder)
app.use(express.static(assetFolder));
app.get('/*', function(req, res){
  res.sendFile(assetFolder + '/index.html');
})

app.listen(port);
console.log('Listening on port', port);












// if(process.env.NODE_ENV !== 'test'){  
//   // Catch-all Route
//   // This is for supporting browser history pushstate.

//   routes.get('/gameview.jsx', function(request, response){
//     response.sendFile( assetFolder + '/app/gameview/gameview.jsx')
//   });


//   // NOTE: Make sure this route is always LAST.
//   routes.get('/*', function(request, response){
//     response.sendFile( assetFolder + '/index.html');
//   });

//   // We're in development or production mode;
//   // Create and run a real server.

//   // Mount our main router
//   app.use('/', routes);

//   //Start the server!
//   var port = process.env.PORT || 4000;
//   app.listen(port);
//   console.log("Listening on port", port);
// }
// else {
//   // We're in test mode; make this file importable instea.
//   module.exports = routes;
// }