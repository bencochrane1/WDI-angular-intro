(function() {
  'use strict';

  angular
    .module('testFactory')
    .filter('splitrow', SplitRow);

  function SplitRow() {
    return function (input, count){
    	var out = [];
    		if(angular.isObject(input)){
          for (var i=0, j=input.length; i < j; i+=count) {
            out.push(input.slice(i, i+count));
          }
      	}
     	return out;
    }
  }

})();
