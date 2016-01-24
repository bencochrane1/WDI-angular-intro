(function() {
  'use strict';

  angular
    .module('testFactory')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var main = this;
    main.search = search;

    main.searchLocation = '';
    main.category = '';

    main.categories = [
      { id: 1, value: 1, name: 'Aerial Equipment' },
      { id: 2, value: 2, name: 'Air Tools' },
      { id: 3, value: 3, name: 'Compaction and Paving' },
      { id: 4, value: 4, name: 'Concrete and Masonry' },
      { id: 5, value: 5, name: 'Earthmoving' }
    ];

    function search() {
      if (main.searchLocation !== '' && main.category !== '') {
        $state.go('searchResults')
      }
    }



  }
})();
