var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server.js");
var should = chai.should();

chai.use(chaiHttp);

describe("apiAll", function(){
	it("should list all apis on /api/all GET", function(done){
		chai.request(server)
		.get("/api/all")
		.end(function(err, res) {
			res.should.have.status(200);
			done()
		})
	})
}) 

