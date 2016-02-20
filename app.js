'use strict';

(function(){
  // angular module has a name and dependencies
  var app = angular.module('store', [ ]);

  // CamelCase important, use controller as part of name, controller attached inside app.
  // Controller has name and anonymous function parameters.
  app.controller('StoreController', function(){
    // define product as a property of the controller and assign gem to it
    // this.product = gem;
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '. . .',
      canPurchase: false,
      soldOut: true
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .',
      canPurchase: false,
      soldOut: true
    }
  ];

})();



// (function(){
//   var gem = { name: 'Azurite', price: 2.95 };
//   var app = angular.module('gemStore', []);
//   app.controller('StoreController', function(){
//     this.product = gem;
//   });

// })();


// (function() {
//   var app = angular.module('gemStore', []);

//   app.controller('StoreController', function(){
//     this.product = gem;
//   });

//   var gem = {
//     name: 'Azurite',
//     price: 110.50,
//     canPurchase: false,
//     soldOut: true
//   };
// })();


// (function() {
//   var app = angular.module('gemStore', []);

//   app.controller('StoreController', function(){
//     this.products = gems;
//   });

//   var gems = [
//     { name: 'Azurite', price: 2.95 },
//     { name: 'Bloodstone', price: 5.95 },
//     { name: 'Zircon', price: 3.95 }
//   ];
// })();
