(function() {
  'use strict';

  angular
    .module('testFactory')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('searchResults', {
        url: '/results',
        templateUrl: 'app/results/results.html',
        controller: 'ResultsController',
        controllerAs: 'results',
        resolve: {
          searchResults: function(ResultsService) {
            return ResultsService.allResults();
          }
        }
      })

      .state('item', {
        url: '/item/:id',
        templateUrl: 'app/show/showitem.html',
        controller: 'ShowItemController',
        controllerAs: 'item'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
