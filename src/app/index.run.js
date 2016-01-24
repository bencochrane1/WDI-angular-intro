(function() {
  'use strict';

  angular
    .module('testFactory')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
  }

})();
