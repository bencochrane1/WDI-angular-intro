(function() {
  'use strict';

  angular
    .module('testFactory')
    .service('ResultsService', ResultsService);

  /** @ngInject */
  function ResultsService($q, $http) {

    var endpoint = 'http://private-a2115-wdi.apiary-mock.com/results';

    return {
      allResults: allResults
    }

    function allResults() {
      var deferred = $q.defer();

      $http.get(endpoint)
      .then(function(data) {
        deferred.resolve(data);
      })
      .catch(function(err) {
        deferred.reject(err);
      })

      return deferred.promise;
    }
  }
})();
