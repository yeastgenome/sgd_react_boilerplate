"use strict";
var Backbone = require("backbone");
var Paper = require("./models/paper.jsx");

// private backbone collection
var _papers = new Paper.Collection();

module.exports = class ApplicationStore {
  setupPaperFixtures (bootstrappedData) {
    _papers.addFixtures();
    return {
      success: true
    };
  }

  getPaper (id) {
    return _papers.get(id);
  }

  getPapers () {
    return _papers;
  }

  setPaper (paper) {
    return _papers.add(paper, { merge: true });
  }
};
