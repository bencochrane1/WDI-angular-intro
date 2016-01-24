(function() {
  'use strict';

  angular
    .module('testFactory')
    .controller('ResultsController', ResultsController);

  /** @ngInject */
  function ResultsController(ResultsService, searchResults) {
    var results = this;
    results.searchResults = searchResults.data;
  }
})();
