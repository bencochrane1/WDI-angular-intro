/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('testFactory')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
