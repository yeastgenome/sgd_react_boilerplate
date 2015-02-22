var Backbone = require("backbone");

// TEMP define store and model right here.
var BaseModel = Backbone.Model.extend({
});
var BaseCollection = Backbone.Collection.extend({
  model: BaseModel,

  setFixtureData: function () {
    this.set(
      [
        {
          name: "ipsum"
        },
        {
          name: "lorem"
        }
      ]
    );
  },
});

module.exports = class ApplicationStore {
  setupFixtures (bootstrappedData) {
    var _initValues = 
      [
        {
          id: 1,
          title: "A Good Title",
          abstract: "Ipsum Lorem Bacon"
        },
        {
          id: 2,
          title: "A Good Title 2",
          abstract: "Ipsum Lorem Bacon2"
        }
      ];
    this.papers = new BaseCollection(_initValues);
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
}

// module.exports = ApplicationStore;
