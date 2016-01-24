# WDI Intro to Angular

This a sample app made with Angular using $http to call out to Apiary for some mock data.

### To get up and running:

```sh
$ git clone [this-git-repo-url]
$ cd test-factory
$ npm install
$ bower install
$ gulp serve
```

### Libraries used:

* Lodash
* Google Places API

Readmes, how to use them in your own application can be found here:

* plugins/dropbox/README.md
* plugins/github/README.md
* plugins/googledrive/README.md
* plugins/onedrive/README.md

### Mock Data Source:

http://private-a2115-wdi.apiary-mock.com/results

### To create this app from scratch:

First, ensure you have Node install. If not, go here: https://nodejs.org/en/download/

```sh
mkdir wdi-app
cd wdi-app
npm install -g yo gulp bower
yo gulp-angular
```

You will be prompted with some questions, here is the order you should answer them in:

* n
* 1.4.x
* press enter
* none for jquery
* none, $http
* UI Router
* bootstrap
* angular ui bootstrap
* sass (node)
* none - standard javascript
* none - standard html

Now run your app:
```sh
gulp serve
```

In src/app/main/main.html, replcae main.html with:

```
<div class="flex-row nav-hero">
  <div class="flex-column nav-hero-column">
    <div class="flex-row">

      <div class="flex-row flex-grow nav-header">
        <div class="flex-row flex-grow">
          <div class="logo-home-container"><span class="logo-text-white">equipmate</span></div>
        </div>
        <div class="flex-row nav-objects">

          <div class="flex-column">
            <div class="flex-row flex-justify-center">
              <div class="home-host-button"><span>Rent your equipment</span></div>
            </div>
          </div>

          <div class="flex-column">
            <div class="flex-row">
              <div class="flex-column nav-title">Messages</div>
              <div class="flex-column"><i class="nav-icon ion-ios-chatboxes-outline"></i></div>
            </div>
          </div>

          <div class="flex-column">
            <div class="flex-row">
              <div class="flex-column nav-title">Help</div>
              <div class="flex-column"><i class="nav-icon ion-help-buoy"></i></div>
            </div>
          </div>

          <div class="flex-column">
            <div class="flex-row">
              <div class="flex-column nav-title">Ben</div>
              <div class="flex-column"><i class="nav-icon ion-person"></i></div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="flex-row flex-justify-center middle-container">

      <div class="flex-column">
        <div class="flex-row flex-justify-center nav-welcome">equipment hire - real simple</div>
        <div class="flex-row flex-justify-center nav-rental">Hire from verified local equipment suppliers.</div>
        <div class="flex-row flex-justify-center nav-middle-button">
          <div class="home-hero-button">how it works</div>
        </div>
      </div>

    </div>

    <div class="flex-row flex-justify-center date-container" ng-class="{ 'errors' : main.searchErrors }">
        <div>
            <p class="input-group" id="locationField" >
              <input ng-focus="main.searchErrors = false" id="autocomplete" g-places-autocomplete ng-model="main.searchLocation" placeholder="I'm located in..." type="text" class="form-control location-search-input" />
            </p>
        </div>

        <div>
          <select ng-focus="main.searchErrors = false" ng-options="category.value as category.name for category in main.categories" ng-model="main.category">
              <option value="">I want to hire...</option>
          </select>
        </div>

        <div>
          <div class="home-search-button" ng-click="main.search()">search</div>
        </div>
    </div>
  </div>
</div>
```

Then in src/app/index.scss:

```

/* FLEX BOX */
.flex-column, .flex-row { display: flex; flex-basis: auto; }
.flex-column { flex-direction: column; }
.flex-row { flex-direction: row; }
.flex-grow { flex-grow: 1; }
.flex-align-center { align-items: center; }
.flex-content-center { align-content: center; }
.flex-justify-center { justify-content: center; }
.flex-justify-start { justify-content: flex-start; }
.flex-justify-right { justify-content: flex-end; }
.flex-align-bottom { align-items: flex-end; }
.flex-shrink { flex-shrink: 1; }
.flex-basis { flex-basis: 0%; }

html, body {
    font-family: 'Lato', sans-serif;
}

select {
  border: 1px solid #111;
  background: white;
  width: 210px;
  padding-left: 10px;
  font-size: 1.1em;
  color: gray;
  border: 1px solid lightgray;
  height: 44px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}

.results-listings-row {
  background: #eee;
}

.result-image {
  height: 200px;
  background-size: cover;
}

.result-image-show {
  height: 70vh;
  background-size: cover;
}

.result-tile-container {
  padding: 15px 0 0 15px;
  height: 100%;
  min-width: 33.33332%;
}

.result-tile-container:last-of-type {
  padding-right: 15px;
}

.result-tile-container:first-of-type {
  padding-left: 15px;
}

.result-tile-container:hover {
  cursor: pointer;
}

.search-check-in {
  padding-right: 10px;
}

.main-results-section {
  background: rgba(250, 250, 250,1);
  min-height: 500px;
}

.date-container.errors {
  border: 1px solid #FB3640;
  background: rgba(150, 100, 100, 0.4);
}

.home-how-it-works {
  padding: 60px 120px;
}

.search-nav-row span {
  text-transform: capitalize;
  margin-right: 5px;
}

.search-nav-item:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.search-nav-item i:before {
  font-size: 2em;
  color: grey;
}

.search-dates-header {
  line-height: 44px;
  font-size: 1.1em;
}

input.form-control.search-date-picker {
  border-right: 1px solid rgba(204, 204, 204,1);
  min-width: 120px;
  width: 100%;
}

.search-input {
  border: none;
  width: 100%;
}

.filter-row-container {
  padding: 20px 30px 0 30px;
  text-transform: capitalize;
  padding-bottom: 20px;
}

.filter-row-container .flex-row.filter-inner {
  border-bottom: 1px solid rgba(228, 226, 226,1);
  padding-bottom: 10px;
}

.search-inner-main-container {
  width: 70%;
  background: white;
  margin-top: 30px;
}

input[type='text'].search-input {
    padding-left: 50px;
}

.search-nav-inner {
  position: relative;
  bottom: 10px;
}

.search-input:focus {
  outline: none;
}

.search-nav-item, .search-nav-item span {
  line-height: 25px;
}

.search-logo img {
  height: 100%;
  width: 25px;
}

.search-nav-row .flex-row {
  padding: 15px 20px 0px;
  border-bottom: 1px solid lightgrey;
}

.search-nav-input.flex-row {
  padding: 0;
}

.search-nav-row .flex-row:not(:last-of-type) {
  border-right: 1px solid lightgrey;
}

.flex-row.search-logo.search-nav-item {
  padding-top: 20px;
}

.nav-hero {
  background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4) ), url('http://resource.jerei.com/10887/13050715553075_0.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

/* home */
.nav-header {
  padding: 20px;
  height: 80px;
}

.logo-home {
  width: 25px;
  margin-bottom: 8px;
  -webkit-filter: brightness(0) invert(1);
}

.logo-home-container:hover {
  cursor: pointer;
}

.logo-text-white {
  font-size: 2em;
  margin-left: 10px;
  color: white;
}

.nav-objects * {
  color: white;
}

.nav-title {
  line-height: 48px;
  margin: 0 5px 0 30px;
}

.nav-icon {
  font-size: 2.3em;
}

.nav-hero {
    background-color: lightblue;
}

.nav-hero-column {
    width: 100%;
}

.nav-welcome {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;
    color: white;
}

.nav-rental {
    font-size: 1.3em;
    color: white;
}

.nav-middle-button {
    padding: 30px 0;
}

.home-hero-button {
    width: 150px;
    background: rgba(255,255,255,0.3);
    text-align: center;
    padding: 10px 20px;
    border-radius: 2px;
    color: white;
    text-transform: capitalize;
    font-size: 1.2em;
}

.home-hero-button:hover, .home-host-button:hover {
    cursor: pointer;
    background: rgba(0,0,0,0.3);
}

.home-search-button {
  width: 120px;
  text-align: center;
  padding: 10px 20px;
  border-radius: 2px;
  color: white;
  text-transform: capitalize;
  font-size: 1.2em;
  border: rgba(255,126,130,1);
  border-bottom: 1px solid rgba(250,0,8,1);
  background: rgba(251,54,64,1);
}

.home-host-button span {
    margin: 0 10px;
  }

.home-search-button:hover {
  background: rgba(246,85,93,1);
  cursor: pointer;
}

.home-host-button {
    height: 31px;
    line-height: 28px;
    width: 100%;
    background: rgba(255,255,255,0);
    border: 2px solid white;
    text-align: center;
    border-radius: 2px;
    color: white;
    font-size: 0.9em;
    margin-top: 8px;
}

.middle-container {
    padding: 100px 0;
}

.date-container {
    background: rgba(0,0,0,0.4);
    padding: 30px 0;
    border: 1px solid rgba(0,0,0,0.4);
}

.date-container p.input-group {
    margin: 0;
}

.dropdown-menu {
    margin: 0;
    border: 1px solid white;
}

.dropdown-menu li div table:focus, select:focus, button[role="heading"]:focus {
    outline: 0;
}

.input-group .form-control {
    border-right: 0px;
    -webkit-box-shadow: none;
    height: 44px;
    line-height: 44px;
    font-size: 1.1em;
    width: 150px;
    border-radius: 0;
}

.form-control.location-search-input {
    width: 220px;
}

ul.dropdown-menu {
    border-radius: 0;
}

/* datepicker styling */
button.pull-left, button.pull-right, button[role="heading"] {
  background-color: white;
  border: none;
  outline: 0;
}

button[role="heading"] {
  cursor: auto;
}

.datepicker-day-button {
  background-color: white;
  border-right: 1px solid lightgray;
  border-left: 0px;
  border-bottom: 0px;
  padding: 7px 9px;
}

.datepicker-day-button.active {
    background: #1F487E;
    border: 1px solid #1F487E;
    color: white;
}

.datepicker-day-button.active .text-info {
    color: white;
}

.datepicker-day-button.active:hover {
    background: #FB3640;
    border: 1px solid #FB3640;
}

.datepicker-day-button:hover {
    background: #FB3640;
    color: white;
}

.text-muted {
    opacity: 0;
}

.text-muted:hover {
    color: rgba(255,90,95,1);
}

```

Next, add some items to the categories dropdown:

```
    main.categories = [
      { id: 1, value: 1, name: 'Aerial Equipment' },
      { id: 2, value: 2, name: 'Air Tools' },
      { id: 3, value: 3, name: 'Compaction and Paving' },
      { id: 4, value: 4, name: 'Concrete and Masonry' },
      { id: 5, value: 5, name: 'Earthmoving' }
    ];
```

Now to add in Google Places API:

Go to https://github.com/kuhnza/angular-google-places-autocomplete/blob/master/README.md for more details.

```
bower install angular-google-places-autocomplete
```

Then add in these scripts just before your ending body tag in src/index.html:

```
    <script src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>
    <script src="/bower_components/angular-google-places-autocomplete/src/autocomplete.js"></script>
```

And add in the Google places styles in the head of the same file:
```
<link rel="stylesheet" href="/bower_components/angular-google-places-autocomplete/src/autocomplete.css">
```

And add Google place as a module in src/app/index.module.js:
```
angular.module('yourappname', ['google.places']);
```
Next, next, create a search method,model objects and route to searchResults in src/app/main/main.controller.js:
```
main.searchLocation = '';
main.category = '';
main.search = search;

function search(searchLocation, category) {
    console.log(main.searchLocation);
    console.log(main.category);
    $state.go('searchResults')
}
```

And in src/app/index.route.js create a new route:

```
.state('searchResults', {
    url: '/results',
    templateUrl: ‘app/results/results.html',
    controller: 'ResultsController',
    controllerAs: 'results'
});
```

Next, create a results folder at src/app/results and then create a src/app/results/results.html file and src/app/results/results.controller.js file

Add this for src/app/results/results.controller.js:
```
(function() {
  'use strict';

  angular
    .module('testFactory')
    .controller('ResultsController', ResultsController);

  function ResultsController() {
    var results = this;
  }
})();
```

Restart your server.

Create a new filter folder at src/app/filters and add a filter file called src/app/filters/splitrow.filter.js

In src/app/filters/splitrow.filter.js add:
```
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
```

Now add in the results page html:

```
<div class="flex-column flex-grow">
  <div class="flex-row search-nav-row">
    <div class="flex-row search-logo search-nav-item" ui-sref="home">
      <div class="search-nav-inner">
        <img class="logo-results">
      </div>
    </div>
    <div class="flex-row flex-grow search-nav-input">
      <input class="search-input" type="text" placeholder="Search equipment">
    </div>
    <div class="flex-row search-nav-item">
      <span>List your equipment</span>
      <i class="ion-android-bus"></i>
    </div>
    <div class="flex-row search-nav-item">
      <span>messages</span>
      <i class="ion-ios-chatboxes-outline"></i>
    </div>
    <div class="flex-row search-nav-item">
      <span>help</span>
      <i class="ion-help-buoy"></i>
    </div>
    <div class="flex-row search-nav-item">
      <span>ben</span>
      <i class="ion-person"></i>
    </div>
  </div>
</div>

<div class="flex-row main-results-section flex-justify-center">
  <div>
    <div class="home-search-button" ui-sref="home">Back to Home Page</div>
  </div>
  <div class="flex-row search-inner-main-container">
    <div class="flex-column flex-grow">
      <div class="flex-row filter-row-container">
        <div class="flex-row flex-grow filter-inner">
          <div class="flex-row flex-grow search-dates-header">dates</div>
          <div class="flex-row flex-grow flex-justify-right search-check-in">
            <div>
              <p class="input-group">
                <input ng-focus="openCheckIn($event)" placeholder="Check In" type="text" class="form-control search-date-picker" show-weeks="false" uib-datepicker-popup="{{format}}" ng-model="dtCheckIn" show-button-bar="false" is-open="status.openedCheckIn" min-date="minDate" max-date="maxDate" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close" />
              </p>
            </div>
          </div>
          <div class="flex-row flex-grow">
            <div>
                <p class="input-group">
                  <input ng-focus="openCheckOut($event)" placeholder="Check Out" type="text" class="form-control search-date-picker" show-weeks="false" uib-datepicker-popup="{{format}}" ng-model="dtCheckOut" show-button-bar="false" is-open="status.openedCheckOut" min-date="minDate" max-date="maxDate" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close" />
                </p>
            </div>
          </div>
          <div class="flex-row flex-grow">
            <div>
              <select ng-options="piece.value as piece.name for piece in results.pieces track by piece.id" ng-model="results.piece">
                  <option value="">Quantity required</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row" ng-init="rows = (results.searchResults|splitrow:3)">
        <div class="flex-column flex-grow">
          <div ng-repeat="row in rows" class="flex-row flex-grow results-listings-row">
            <div ng-repeat="result in row" ui-sref="item({id: result.id})" class="col-md-4 result-tile-container">
              <div class="flex-column">
                <div class="flex-row result-image" ng-style="{'background-image':'url({{result.image}})'}"></div>
                <div class="flex-row">{{ result.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

And in src/app/results/results.js add:
```

    results.searchResults = [
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
```

Now add a show route for the new show page we will make. In src/app/index.route.js:

```
      .state('item', {
        url: '/item/:id',
        templateUrl: 'app/show/showitem.html',
        controller: 'ShowItemController',
        controllerAs: 'item'
      });
```

Now create a show folder at src/app/show and then create the files: src/app/show/showitem.controller.js and src/app/show/showitem.html

In src/app/show/showitem.controller.js add:
```
(function() {
  'use strict';

  angular
    .module('testFactory')
    .controller('ShowItemController', ShowItemController);

  /** @ngInject */
  function ShowItemController($stateParams) {
    var item = this;

    item.details = [
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

  }
})();
```

In results.html, add a ui-sref to go to the item:
```
ui-sref="item({id: result.id})"
```

In showitem.controller.js add:
```
    console.log($stateParams);
```
and we can now see the stateparams that we get from the previous results state.

Now we are going to add Lodash. Go to for more info: https://github.com/rockabox/ng-lodash

At your root directory of the app:
```
bower install ng-lodash
```

Add ngLodash as a dependency in modules:
```
angular.module('yourappname', ['ngLodash']);
```
Now update the showItemController src/app/show/showitem.controller.js:
```
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
```

Next add in the showItem view code into src/app/show/showitem.html:
```
<div class="flex-column flex-grow">
  <div class="flex-row search-nav-row">
    <div class="flex-row search-logo search-nav-item" ui-sref="home">
      <div class="search-nav-inner">
        <img class="logo-results">
      </div>
    </div>
    <div class="flex-row flex-grow search-nav-input">
      <input class="search-input" type="text" placeholder="Search equipment">
    </div>
    <div class="flex-row search-nav-item">
      <span>List your equipment</span>
      <i class="ion-android-bus"></i>
    </div>
    <div class="flex-row search-nav-item">
      <span>messages</span>
      <i class="ion-ios-chatboxes-outline"></i>
    </div>
    <div class="flex-row search-nav-item">
      <span>help</span>
      <i class="ion-help-buoy"></i>
    </div>
    <div class="flex-row search-nav-item">
      <span>ben</span>
      <i class="ion-person"></i>
    </div>
  </div>
</div>

<div class="flex-row main-results-section flex-justify-center">
  <div>
    <div class="home-search-button" ui-sref="searchResults">Back to Results</div>
  </div>
  <div class="flex-row search-inner-main-container">
    <div class="flex-column flex-grow">
      <div class="flex-row filter-row-container">
        <div class="flex-row flex-grow filter-inner">
          <div class="flex-row flex-grow search-dates-header">Details</div>
          <div class="flex-row flex-grow flex-justify-right search-check-in">
            <div>
              <p class="input-group">{{ item.details.name }}</p>
            </div>
          </div>
          <div class="flex-row flex-grow">
            <div>
                <p class="input-group">Id: {{ item.details.id }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row">
        <div class="flex-column flex-grow">
          <div class="flex-row result-image-show" ng-style="{'background-image':'url({{item.details.image}})'}"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Next create a results service at src/app/results/results.service.js:
```
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
```

Now update our route to resolve the data we need before it hits the controller in src/app/index.route.js

```
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
```

Then update the results controller with the new service method in src/app/results/results/controller.js:
```
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
```

And now you've created a working Angular app using Lodash, Gulp, Google Places API and the Controller-As syntax. Nice work!
