(function() {
  'use strict';

  angular
    .module('testFactory')
    .controller('ShowItemController', ShowItemController);

  /** @ngInject */
  function ShowItemController($stateParams, lodash) {
    var item = this;
    item.findItem = findItem;

    var items = [
      { id: 1, name: 'Aerial Equipment', image: 'http://www.birents.com/itemimages/6076.jpg' },
      { id: 2, name: 'Air Tools', image: 'http://www.birents.com/itemimages/6076.jpg' },
      { id: 3, name: 'Compaction and Paving', image: 'http://www.birents.com/itemimages/6076.jpg' },
      { id: 4, name: 'Concrete and Masonry', image: 'http://www.birents.com/itemimages/6076.jpg' },
      { id: 5, name: 'Earthmoving', image: 'http://www.birents.com/itemimages/6076.jpg' },
      { id: 6, name: 'Compaction and Paving', image: 'http://www.birents.com/itemimages/6076.jpg' },
      { id: 7, name: 'Concrete and Masonry', image: 'http://www.birents.com/itemimages/6076.jpg' },
      { id: 8, name: 'Concrete and Masonry', image: 'http://www.birents.com/itemimages/6076.jpg' },
      { id: 9, name: 'Compaction and Paving', image: 'http://www.birents.com/itemimages/6076.jpg' },
      { id: 10, name: 'Earthmoving', image: 'http://www.birents.com/itemimages/6076.jpg' }
    ];

    function findItem(itemId) {
      var match = lodash.filter(items, function(item) {
        return item.id === parseInt(itemId);
      })
      item.details = match[0]
    }

    findItem($stateParams.id);

  }
})();
