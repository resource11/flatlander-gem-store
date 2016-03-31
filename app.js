'use strict';

(function(){
  // angular module has a name and dependencies
  var app = angular.module('store', ['store-products']);

// // Controller name and dependency injection parameters. Issues using this in local files
//   app.controller('StoreController', ['$http', function($http){

//     // assign 'this' to the app controller
//     var store = this;

//     // initialize products to handle page rendering before data returns
//     store.products = [ ];
//     console.log(store.products);

//   $http.get('/products.json').success(function(data){
//       store.products = data;
//       console.log('data?');
//     });

//   }]);

// Controller name and dependency injection parameters.
  app.controller('StoreController', function(){
    this.products = gems;
  });




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

})();

