var elasticsearch = require("elasticsearch");
var express = require("express");
var url = require("url");

var INDEX_NAME = "search-dev2";

var client = new elasticsearch.Client({
	host: "localhost:9200",
	log: "trace"
});

var API = express();
API.get("/gene/:id", function (req, res, next) {
	client
		.get({
		  index: INDEX_NAME,
		  type: "searchableItem",
		  id: req.params.id
		})
		.then(function (body) {
			var d = body._source;
			var result = {
				_id: body._id,
				name: d.name,
				url: d.url,
				description: d.description,
				category: "gene"
			} 

			return res.send(result);
		}, function (error) {
			console.trace(error.message);
			return res.send(error.message)
		});
});


API.get("/search", function (req, res, next) {
	var urlParts = url.parse(req.url, true);
	var query = urlParts.query.q;

	var queryBody;
	if (query === "") {
		queryBody = {
	      "match_all" : {}
	    }
	} else {
		// TODO
		queryBody = {
	      "match_all" : {}
	    }
	}

	client
		.search({
			index: INDEX_NAME,
			type: "searchableItem",
			body: {
				query: queryBody
			}
		})
		.then(function (body) {
			var hits = body.hits.hits;

			var source;
			var _results = hits.map( function(d, i) {
				source = d._source;
				return {
					_id: d._id,
					name: source.name,
					url: source.url,
					description: source.description,
					category: "gene"
				}
			});
			return res.send({
				results: _results,
				total: body.hits.total
			});
		}, function (error) {
			console.trace(error.message);
		});
});

module.exports = API;
