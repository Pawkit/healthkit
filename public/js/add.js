$("#addSurvey").on("click", function(event){
	event.preventDefault();

	var newMeal = {
		food: $("#food-add").val().trim(),
		amount: $("#food-amount").val().trim(),
		fullness: $("#eaten-fullness").val().trim(),
		emotion: $("#emotion-now").val().trim(),
		note: $("#note-entry").val().trim(),
	};

	addToTable(newMeal);

	$.post("/api/new", newMeal)
	.done(function(data){
		console.log(data);
	});

	$("#food-add").val("");
	$("#food-amount").val("");
	$("#eaten-fullness").val("");
	$("#emotion-now").val("");
	$("#note-entry").val("");


});


function addToTable(meal){

 var tabl = $("#food-table");

 tabl.append(
      '<tr>' + 
          '<td>' + meal.food + '</td>' + 
          '<td>' + meal.amount + '</td>' + 
          '<td>' + meal.fullness + '</td>' + 
          '<td>' + meal.emotion + '</td>' +
          '<td>' + meal.note + '</td>' +
      '</tr>'
   );
};


function dailyReset() {
    $("#food-table tbody tr").remove();
};

setTimeout(dailyReset, 86400000);