var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	// causes error because of text after ID in URL
	// urlRoot: function (url) {
	// 	return `http://www.yeastgenome.org/backend/reference/${this.id}/overview?callback=?`;
	// }
});
