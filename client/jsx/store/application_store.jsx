var Backbone = require("backbone");

var Paper = require("./models/paper.jsx");
var PapersCollection = Backbone.Collection.extend({
  model: Paper
});

module.exports = class ApplicationStore {
  setupFixtures (bootstrappedData) {
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

    this.papers = new PapersCollection(_initValues);
    return {
      success: true
    };
  }

  getPaper (id) {
    return this.papers.get(id);
  }

  getPapers () {
    return this.papers;
  }

  setPaper (paper) {
    return this.papers.add(paper, { merge: true });
  }
}

// module.exports = ApplicationStore;
