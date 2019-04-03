//Server

//Include Libraries
var express = require('express');
var cors = require('cors');
var mysqlAdmin = require('node-mysql-admin');
var mysql = require('mysql')

var app = express();

//Enable CORS
app.use(cors());
//Enable use of JSON
app.use(express.json());
const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//Include the resource files
app.use("/css", express.static(__dirname + '/css'));
app.use("/javaScript", express.static(__dirname + '/javaScript'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/html", express.static(__dirname + '/html'));

//ER_NOT_SUPPORTED ERROR FIX
//https://o7planning.org/en/11959/connecting-to-mysql-database-using-nodejs
//Create the Database Connection
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	//insecureAuth : true,
	database : 'MobilePhoneShop'
});

//Connect to the MobilePhoneShop Database
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});


//Enabling CORS for the host which the front end runs
 var corsOptions = {
 	Origin: 'http://localhost:5500',
  	credentials: true
 };

 app.use(bodyParser.urlencoded({
	extended: true
  }))

// API for HomePage
app.get('/',cors(corsOptions), function(req, res, next){
	res.sendFile('/home/rajithar/Desktop/FAST_TRACK_PROJECT/html/homePage.html');
});

//API for SIGN UP
app.post('/signup', cors(corsOptions), function(req,res,next){

	var name_ = "'" + req.body.name + "',";
	var userName_ = "'" + req.body.userName + "',";
	var email_ = "'" + req.body.email + "',";
	var password_ = "'" + req.body.password + "'";
	var rePassword_ = req.body.rePassword;
	var query = name_+email_+userName_+password_;
	connection.query("INSERT INTO Users (name,email,user_name,password) VALUES ("+query+")",function(err, rows, fields){
		if(err){
			res.sendStatus(404);
		}
		else{
			res.sendStatus(200);
		}
	});

});

//API for SIGN IN
app.post('/signin',cors(corsOptions), function(req,res,next){

	//console.log(req.body.userName);
	var userName = req.body.userName;
	var password = req.body.password;
	var query = "SELECT password FROM Users WHERE user_name="+"'"+userName+"'";
	connection.query(query,function(err, rows, fields){
		if(err){
			res.sendStatus(404);
		}
		else{
			if( rows[0].password == password) 
				res.sendStatus(200);
			else
				res.sendStatus(404);
		}
	});
	
});

//API for USER
app.get('/user',function(req,res){
	res.sendFile('/home/rajithar/Desktop/FAST_TRACK_PROJECT/html/user.html');
});

//API for ADMIN
app.get('/admin',function(req,res){
	res.sendFile('/home/rajithar/Desktop/FAST_TRACK_PROJECT/html/admin.html');
});


//APLI's for DataBase Handling - HOMEPAGE

//Retrieve Phone Brands 
app.get('/db/retrievebrands',cors(corsOptions), function(req,res,next){
	connection.query('SELECT brand_name FROM Brands', function (err, rows, fields) {
		if (err) throw err
		//else{
		//res.setHeader('Content-Type', 'application/json');
		//res.send(200);
		console.log('The solution is: ', rows.length);
		//}
		var brandNames = [];
		for(var i=0; i<rows.length; i++){
			brandNames[i] = rows[i].brand_name;
		}
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(brandNames));
	})

});


//Retrieve Phone Models	
app.get('/db/retrievemodels',cors(corsOptions), function(req,res,next){
	console.log(req.body.price);
	connection.query('SELECT brand,model,price FROM PhoneModels', function (err, rows, fields) {
		if (err) throw err
		//else{
		//res.setHeader('Content-Type', 'application/json');
		//res.send(200);
		console.log('The solution is: ', rows);
		//}
		var phoneModels = [];
		for(var i=0; i<rows.length; i++){
			phoneModels[i] = rows[i].brand;
		}
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(phoneModels));
	})
});

//Add Brand
app.post('/db/addbrand',cors(corsOptions), function(req,res,next){
	//connection.query("INSERT INTO Brands ("+'brand_name'+") VALUES ("+req.body.brand+")", function (err, rows, fields) {
		connection.query("INSERT INTO Brands (brand_name) VALUES ("+req.body.brand+")", function (err, rows, fields) {
		if (err) throw err

		//res.setHeader('Content-Type', 'application/json');
    	//res.send(JSON.stringify(phoneModels));
	})
});

//Add Phone Model
app.post('/db/addphone',cors(corsOptions), function(req,res,next){
	console.log(req.body.brand);
	if( true /* DB query success */)
		res.sendStatus(200);
	else 
		res.sendStatus(201);
});

//APLI's for DataBase Handling - USER PAGE
//User Details for Smmmary Tab
app.get('/db/userdetails',cors(corsOptions), function(req,res,next){
	if( true /* DB query success */)
		res.sendStatus(200);
	else 
		res.sendStatus(201);
});

//User Details for Cart Tab
app.get('/db/cart',cors(corsOptions), function(req,res,next){
	if( true /* DB query success */)
		res.sendStatus(200);
	else 
		res.sendStatus(201);
});

//User Details for Purchased Tab
app.get('/db/purchased',cors(corsOptions), function(req,res,next){
	if( true /* DB query success */)
		res.sendStatus(200);
	else 
		res.sendStatus(201);
});

//User Details for Account Settings Tab

//New User Name
app.post('/db/changeusername',cors(corsOptions), function(req,res,next){
	console.log(req.body.newUserName);
	if( true /* DB query success */)
		res.sendStatus(200);
	else 
		res.sendStatus(201);
});

//way to return a JSON object with respose
// https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express
//New User Password
app.post('/db/changepassword',cors(corsOptions), function(req,res,next){
	console.log(req.body.newPassword);
	if( true /* DB query success */){
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify({ a: 10000 }));
		//res.sendStatus(200);
	}
	else 
		res.sendStatus(201);
});
app.listen(8000);
