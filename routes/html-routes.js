//*****************************************
//html routes 
//*****************************************

//dependencies
//========================================

var path = require("path");

//routes
//========================================

module.exports = function(app){

	//index route for index.html
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	//index route for add.html
	app.get("/add", function(req, res){
		res.sendFile(path.join(__dirname, "../public/form.html"));
	});

		//index route for index.html
	app.get("/all", function(req, res){
		res.sendFile(path.join(__dirname, "../public/form.html"));
	});
}