var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var mongoose=require("mongoose");
Grupos=require("./models/grupoModel");
bodyParser=require("body-parser");

mongoose.Promise=global.Promise;
//mongoose.connect('');

app.use(bodyParser.urlencoded({extendes:true}));
app.use(bodyParser.json());

var routes=require("./routes/grupoRoute");
routes(app);

app.listen(port);
console.log("Web en ejecución");
