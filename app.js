'use strict';

(function(){
  // angular module has a name and dependencies
  var app = angular.module('store', [ ]);

  // CamelCase important, use controller as part of name, controller attached inside app. Looks like TitleCase is used for controllers
  // Controller has name and anonymous function parameters.
  app.controller('StoreController', function(){
    // define product as a property of the controller and assign gem to it
    // this.product = gem;
    this.products = gems;
  });

  // // pulled into productPanels directive
  // app.controller('PanelController', function(){
  //   // pulled from ng-init in index.html to here
  //   this.panel = 1;
  //   // create a function expression
  //   // pull out ng-click tab = x from index.html to here for efficiency
  //   this.selectPanel = function(selectPanel){
  //     this.panel = selectPanel;
  //   };
  //   // pull out the ng-class comparison for active tabs from index.html to here
  //   this.isSelected = function(checkPanel){
  //     return this.panel === checkPanel;
  //   };
  // });

  // // pulled into productGallery directive
  // app.controller('GalleryController', function(){
  //   this.current = 0;
  //   this.setCurrent = function(newGallery){
  //     this.current = newGallery || 0;
  //   };
  // });

  app.controller('ReviewController', function(){
    // clear form
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn=Date.now();
      product.reviews.push(this.review);
      // clear form again
      this.review = {};
    }
  });

  // define custom directive, use camelCase
  app.directive('productTitle', function(){
    return {
      // restrict HTML element, HTML attribute
      restrict: 'EA',
      // note camelCase below
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      // moved controller functionality into directive
      // keep orig PanelController above until you test this
      // or controller will break
      controller: function(){
        this.panel = 1;
        this.selectPanel = function(selectPanel){
          this.panel = selectPanel;
        };
        this.isSelected = function(checkPanel){
          return this.panel === checkPanel;
        };
      },
      controllerAs: 'panel'
    };
  });

  app.directive('productGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
        this.current = imageNumber || 0;
      };
      },
      controllerAs: 'gallery'
    };
  });


  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "images/gem-02.gif",
      "images/gem-05.gif",
      "images/gem-09.gif"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@example.org",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif",
    ],
    reviews: [{
      stars: 3,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@example.org",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@example.org",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/gem-06.gif",
      "images/gem-07.gif",
      "images/gem-08.gif"
    ],
    reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@example.org",
      createdOn: 1397490980837
    }]
  }];

})();

