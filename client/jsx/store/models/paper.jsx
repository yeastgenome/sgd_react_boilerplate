"use strict";
var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

var Model = Backbone.Model.extend({
	urlRoot: "http://www.yeastgenome.org/backend/reference",
	url: function () {
		return `${this.urlRoot}/${this.id}/overview?callback=?`;
	}
});

var Collection = Backbone.Collection.extend({
  model: Model,

  addFixtures: function () {
  	var _initValues = 
      [
        {
          id: 16821,
          title: "The RET1 gene of yeast encodes the second-largest su"
        },
        {
          id: 16822,
          title: "Activation of the Saccharomyces cerevisiae filamentation/invasion pa"
        }
      ];

    this.add(_initValues);
  }
});

module.exports = {
	Model: Model,
	Collection: Collection
};
