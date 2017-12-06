$.get("/api/all", function(data){
	console.log(data);
	for (var i=0; i<data.length; i++){
		var well = $("<div>");
		well.addClass("well");
		well.attr("id", "meal-well-" + i);
		$("well").append(well);

		$("meal-well-" + i).append("<h2>" + (i + 1)+ ". " + data[i].food+ "<h2>");
		$("meal-well-" + i).append("<h3>Amount: " + data[i].amount + "<h3>");
		$("meal-well-" + i).append("<h3>Fullness: " + data[i].fullness + "<h3>");
		$("meal-well-" + i).append("<h3>Note: " + data[i].note + "<h3>");
		$("meal-well-" + i).append("<h3>Picture: " + data[i].picture + "<h3>");


	}
});