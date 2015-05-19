"use strict";
var Backbone = require("backbone");
var Gene = require("./models/gene.jsx");

// private backbone collection
var _genes = new Gene.Collection();

module.exports = class ApplicationStore {
  setupGeneFixtures (bootstrappedData) {
    _genes.addFixtures();
    return {
      success: true
    };
  }

  getGene (id) {
    return _genes.get(id);
  }
};
