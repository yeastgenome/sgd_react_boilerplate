"use strict";
var Backbone = require("backbone");
var Gene = require("./models/gene.jsx");

var $ = require("jquery");

var SEARCH_BASE_URL = "/api/search";

// private data
var _genes = new Gene.Collection();
var _searchResults = [];
var _totalResults = 0;
var _query = "";

module.exports = class ApplicationStore {
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
        var url = "/api/gene/" + id;
        $.getJSON(url, data => {
            _genes.push(data);
            return callback(null, data);
        })
      }
    }
  }

  getGene (id) {
    return _genes.get(id);
  }

  // callback(err, results)
  fetchSearchResults (callback) {
  	var url = SEARCH_BASE_URL + "?q=" + _query;
  	$.getJSON(url, data => {
  		_searchResults = data.results;
  		_totalResults = data.total;
      // build results to collection
      _genes.add(data.results);
  		if (typeof callback === "function") callback(null, data);
  	})
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
