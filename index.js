//Server
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
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

app.use(express.json());

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

	// var name_ = req.body.name;
	// var userName_ = req.body.userName;
	// var email_ = req.body.email;
	// var password_ = req.body.password;
	// var rePassword_ = req.body.rePassword;
	res.sendStatus(200);
});

//API for SIGN IN
app.post('/signin',cors(corsOptions), function(req,res,next){

	console.log(req.body.userName);
	if(req.body.userName == "rajitha" && req.body.password == "rajitha")
		res.sendStatus(200);
	else if( req.body.userName == "admin" && req.body.password == "admin" )
		res.sendStatus(201);
		//res.sendFile('/home/rajithar/Desktop/FAST_TRACK_PROJECT/html/admin.html');
	else{
		res.sendStatus(404);	
	}
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
	if( true /* DB query success */)
		res.sendStatus(200);
	else 
		res.sendStatus(201);
});


//Retrieve Phone Models	
app.get('/db/retrievemodels',cors(corsOptions), function(req,res,next){
	console.log(req.body.price);
	if( true /* DB query success */)
		res.sendStatus(200);
	else 
		res.sendStatus(201);
});

//Add Brand
app.post('/db/addbrand',cors(corsOptions), function(req,res,next){
	console.log(req.body.brand);
	if( true /* DB query success */)
		res.sendStatus(200);
	else 
		res.sendStatus(201);
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

//New User Password
app.post('/db/changepassword',cors(corsOptions), function(req,res,next){
	console.log(req.body.newPassword);
	if( true /* DB query success */)
		res.sendStatus(200);
	else 
		res.sendStatus(201);
});
app.listen(8000);
