//********************************************
//routes for displaying and saving data to db
//********************************************

//Dependencies
//========================================

//require the meal model
var db = require('../models');

// var Food = require("../models/health.js").Food;
var Food = db.Food;
console.log(Food);

//routes
//=========================================
module.exports = function(app){
	//show all meals
	app.get("/api/all", function(req, res){
		console.log(req);
		Food.findAll({}).then(function(results){
			console.log(results);
			res.json(results);
		});
	});

	//show a specific meal based on food eaten
	app.get("/api/:meal", function(req, res){
		if (req.params.meal){
			Food.findAll({
				where: {
					food: req.params.food
				}
			}).then(function(results){
				res.json(results);
			});
		}
	});

	// //show a specific meal based on mealtime
	// app.get("/api/:meal", function(req, res){
	// 	if (req.params.meal){
	// 		Food.findAll({
	// 			where: {
	// 				mealtime: req.params.
	// 			}
	// 		}).then(function(results){
	// 			res.json(results);
	// 		});
	// 	}
	//});	

	//add a meal
	app.post("/api/new", function(req, res){
		console.log(req);

		Food.create({
			food: req.body.food,
			amount: req.body.amount,
			fullness: req.body.fullness,
			emotion: req.body.emotion,
			note: req.body.note,
			picture: req.body.picture
		});
	})

	//delete a meal
	app.post("/api/delete", function(req, res){

		Food.destroy({
			where: {
				id: req.body.id
			}
		});
	});

	//search for food
};