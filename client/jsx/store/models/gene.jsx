"use strict";
var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

var GeneModel = Backbone.Model.extend({
	urlRoot: "/api/genes",
	url: function () {
		return `${this.urlRoot}/${this.id}`;
	}
});

var GeneCollection = Backbone.Collection.extend({
	model: GeneModel,

	addFixtures: function () {
		var _initValues = [
			{
			  id: 1,
			  name: "POLG"
			}
		];

		this.add(_initValues);
	}
});

module.exports = {
	Model: GeneModel,
	Collection: GeneCollection
};
