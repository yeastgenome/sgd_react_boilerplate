"use strict";
var Backbone = require("backbone");
var Gene = require("./models/gene.jsx");
var popsicle = require("popsicle");

var $ = require("jquery");

// private data
var _genes = new Gene.Collection();
var _searchResults = [];
var _totalResults = 0;
var _query = "";

module.exports = class ApplicationStore {

  constructor (options) {
    options = options || {};
    this.baseUrl = options.baseUrl || "/api/";
  }

  // given the url, fetch everything needed to render that page on server (or before client js takes over)
  // callback(err)
  primeFromUrl (url, callback) {
    // gene show
    if (url.match(/gene\//)) {
      var id = url.split("/gene/")[1];
      return this.fetchItem(id, callback);
    // search
    }
    if (typeof callback === "function") return callback(null);
  }

  setupGeneFixtures (bootstrappedData) {
    _genes.addFixtures();
    return {
      success: true
    };
  }

  // callback(err, data)
  fetchItem (id, callback) {
    if (typeof callback === "function") {
      var existing = _genes.get(id);
      if (existing) {
        return callback(null, existing);
      } else {
        var url = this.baseUrl + "gene/" + id;
        popsicle(url).then( res => {
            var data = res.body;
            _genes.push(data);
            return callback(null, data);
        });
      }
    }
  }

  getGene (id) {
    return _genes.get(id);
  }
  
  // callback(err, results)
  fetchSearchResults (callback) {
  	var url = this.baseUrl + "search?q=" + _query;
  	popsicle(url).then( res => {
      var data = res.body
  		_searchResults = data.results;
  		_totalResults = data.total;
      // build results to collection
      _genes.add(data.results);
  		if (typeof callback === "function") callback(null, data);
  	});
  }

  getSearchResults () {
  	return _searchResults;
  }

  getSearchTotal () {
  	return _totalResults;
  }

  getQuery () {
    return _query;
  }

  setQuery (query) {
    _query  = query;
  }
};
