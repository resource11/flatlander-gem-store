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

  app.controller('PanelController', function(){
    // pulled from ng-init in index.html to here
    this.tab = 1;
    // create a function expression
    // pull out ng-click tab = x from index.html to here for efficiency
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    // pull out the ng-class comparison for active tabs from index.html to here
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '. . .',
      images: [
        {
          full: 'dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-01-thumb.jpg'
        },
        {
          full: 'dodecahedron-02-full.jpg',
          thumb: 'dodecahedron-02-thumb.jpg'
        }
      ],
      canPurchase: false,
      soldOut: true
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .',
      images: [
        {
          full: 'pentagonal-01-full.jpg',
          thumb: 'pentagonal-01-thumb.jpg'
        },
        {
          full: 'pentagonal-02-full.jpg',
          thumb: 'pentagonal-02-thumb.jpg'
        }
      ],
      canPurchase: false,
      soldOut: true
    }
  ];

})();



// (function() {
//   var app = angular.module('gemStore', []);

//   app.controller('StoreController', function(){
//     this.products = gems;
//   });

//   var gems = [{
//       name: 'Azurite',
//       description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//       shine: 8,
//       price: 110.50,
//       rarity: 7,
//       color: '#CCC',
//       faces: 14,
//       images: [
//         "images/gem-02.gif",
//         "images/gem-05.gif",
//         "images/gem-09.gif"
//       ],
//       reviews: [{
//         stars: 5,
//         body: "I love this gem!",
//         author: "joe@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 1,
//         body: "This gem sucks.",
//         author: "tim@example.org",
//         createdOn: 1397490980837
//       }]
//     }, {
//       name: 'Bloodstone',
//       description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//       shine: 9,
//       price: 22.90,
//       rarity: 6,
//       color: '#EEE',
//       faces: 12,
//       images: [
//         "images/gem-01.gif",
//         "images/gem-03.gif",
//         "images/gem-04.gif"
//       ],
//       reviews: [{
//         stars: 3,
//         body: "I think this gem was just OK, could honestly use more shine, IMO.",
//         author: "JimmyDean@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 4,
//         body: "Any gem with 12 faces is for me!",
//         author: "gemsRock@example.org",
//         createdOn: 1397490980837
//       }]
//     }, {
//       name: 'Zircon',
//       description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//       shine: 70,
//       price: 1100,
//       rarity: 2,
//       color: '#000',
//       faces: 6,
//       images: [
//         "images/gem-06.gif",
//         "images/gem-07.gif",
//         "images/gem-10.gif"
//       ],
//       reviews: [{
//         stars: 1,
//         body: "This gem is WAY too expensive for its rarity value.",
//         author: "turtleguyy@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 1,
//         body: "BBW: High Shine != High Quality.",
//         author: "LouisW407@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 1,
//         body: "Don't waste your rubles!",
//         author: "nat@example.org",
//         createdOn: 1397490980837
//       }]
//     }];
// })();



// (function() {
//   var app = angular.module('gemStore', []);

//   app.controller('StoreController', function(){
//     this.products = gems;
//   });

//   app.controller('TabController', function(){
//     this.tab = 1;
//   });

//   var gems = [
//       {
//         name: 'Azurite',
//         description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//         shine: 8,
//         price: 110.50,
//         rarity: 7,
//         color: '#CCC',
//         faces: 14,
//         images: [
//           "images/gem-02.gif",
//           "images/gem-05.gif",
//           "images/gem-09.gif"
//         ],
//         reviews: [{
//           stars: 5,
//           body: "I love this gem!",
//           author: "joe@example.org",
//           createdOn: 1397490980837
//         }, {
//           stars: 1,
//           body: "This gem sucks.",
//           author: "tim@example.org",
//           createdOn: 1397490980837
//         }]
//       },
//       {
//         name: 'Bloodstone',
//         description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//         shine: 9,
//         price: 22.90,
//         rarity: 6,
//         color: '#EEE',
//         faces: 12,
//         images: [
//           "images/gem-01.gif",
//           "images/gem-03.gif",
//           "images/gem-04.gif",
//         ],
//         reviews: [{
//           stars: 3,
//           body: "I think this gem was just OK, could honestly use more shine, IMO.",
//           author: "JimmyDean@example.org",
//           createdOn: 1397490980837
//         }, {
//           stars: 4,
//           body: "Any gem with 12 faces is for me!",
//           author: "gemsRock@example.org",
//           createdOn: 1397490980837
//         }]
//       },
//       {
//         name: 'Zircon',
//         description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//         shine: 70,
//         price: 1100,
//         rarity: 2,
//         color: '#000',
//         faces: 6,
//         images: [
//           "images/gem-06.gif",
//           "images/gem-07.gif",
//           "images/gem-09.gif"
//         ],
//         reviews: [{
//           stars: 1,
//           body: "This gem is WAY too expensive for its rarity value.",
//           author: "turtleguyy@example.org",
//           createdOn: 1397490980837
//         }, {
//           stars: 1,
//           body: "BBW: High Shine != High Quality.",
//           author: "LouisW407@example.org",
//           createdOn: 1397490980837
//         }, {
//           stars: 1,
//           body: "Don't waste your rubles!",
//           author: "nat@example.org",
//           createdOn: 1397490980837
//         }]
//       }
//     ];
// })();






// (function() {
//   var app = angular.module('gemStore', []);

//   app.controller('StoreController', function(){
//     this.products = gems;
//   });

//   app.controller('TabController', function(){
//     this.tab = 1;
//     this.setTab = function(setTab) {
//       this.tab = setTab;
//     };
//     this.isSet = function(checkTab) {
//       return this.tab === checkTab;
//     };
//   });

//   var gems = [
//       {
//         name: 'Azurite',
//         description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//         shine: 8,
//         price: 110.50,
//         rarity: 7,
//         color: '#CCC',
//         faces: 14,
//         images: [
//           "images/gem-02.gif",
//           "images/gem-05.gif",
//           "images/gem-09.gif"
//         ],
//         reviews: [{
//           stars: 5,
//           body: "I love this gem!",
//           author: "joe@example.org",
//           createdOn: 1397490980837
//         }, {
//           stars: 1,
//           body: "This gem sucks.",
//           author: "tim@example.org",
//           createdOn: 1397490980837
//         }]
//       },
//       {
//         name: 'Bloodstone',
//         description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//         shine: 9,
//         price: 22.90,
//         rarity: 6,
//         color: '#EEE',
//         faces: 12,
//         images: [
//           "images/gem-01.gif",
//           "images/gem-03.gif",
//           "images/gem-04.gif",
//         ],
//         reviews: [{
//           stars: 3,
//           body: "I think this gem was just OK, could honestly use more shine, IMO.",
//           author: "JimmyDean@example.org",
//           createdOn: 1397490980837
//         }, {
//           stars: 4,
//           body: "Any gem with 12 faces is for me!",
//           author: "gemsRock@example.org",
//           createdOn: 1397490980837
//         }]
//       },
//       {
//         name: 'Zircon',
//         description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//         shine: 70,
//         price: 1100,
//         rarity: 2,
//         color: '#000',
//         faces: 6,
//         images: [
//           "images/gem-06.gif",
//           "images/gem-07.gif",
//           "images/gem-09.gif"
//         ],
//         reviews: [{
//           stars: 1,
//           body: "This gem is WAY too expensive for its rarity value.",
//           author: "turtleguyy@example.org",
//           createdOn: 1397490980837
//         }, {
//           stars: 1,
//           body: "BBW: High Shine != High Quality.",
//           author: "LouisW407@example.org",
//           createdOn: 1397490980837
//         }, {
//           stars: 1,
//           body: "Don't waste your rubles!",
//           author: "nat@example.org",
//           createdOn: 1397490980837
//         }]
//       }
//     ];
// })();




// (function() {
//   var app = angular.module('gemStore', []);

//   app.controller('GalleryController', function(){
//     this.current = 0;
//     this.setCurrent = function(setCurrent){
//       if (setCurrent) {
//         this.current = setCurrent;
//       } else {
//         this.current = 0;
//       };
//     };
//   });

//   app.controller('StoreController', function(){
//     this.products = gems;
//   });

//   app.controller('TabController', function(){
//     this.tab = 1;

//     this.setTab = function(newValue){
//       this.tab = newValue;
//     };

//     this.isSet = function(tabName){
//       return this.tab === tabName;
//     };
//   });

//   var gems = [
//     {
//       name: 'Azurite',
//       description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//       shine: 8,
//       price: 110.50,
//       rarity: 7,
//       color: '#CCC',
//       faces: 14,
//       images: [
//         "images/gem-02.gif",
//         "images/gem-05.gif",
//         "images/gem-09.gif"
//       ],
//       reviews: [{
//         stars: 5,
//         body: "I love this gem!",
//         author: "joe@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 1,
//         body: "This gem sucks.",
//         author: "tim@example.org",
//         createdOn: 1397490980837
//       }]
//     },
//     {
//       name: 'Bloodstone',
//       description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//       shine: 9,
//       price: 22.90,
//       rarity: 6,
//       color: '#EEE',
//       faces: 12,
//       images: [
//         "images/gem-01.gif",
//         "images/gem-03.gif",
//         "images/gem-04.gif",
//       ],
//       reviews: [{
//         stars: 3,
//         body: "I think this gem was just OK, could honestly use more shine, IMO.",
//         author: "JimmyDean@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 4,
//         body: "Any gem with 12 faces is for me!",
//         author: "gemsRock@example.org",
//         createdOn: 1397490980837
//       }]
//     },
//     {
//       name: 'Zircon',
//       description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//       shine: 70,
//       price: 1100,
//       rarity: 2,
//       color: '#000',
//       faces: 6,
//       images: [
//         "images/gem-06.gif",
//         "images/gem-07.gif",
//         "images/gem-09.gif"
//       ],
//       reviews: [{
//         stars: 1,
//         body: "This gem is WAY too expensive for its rarity value.",
//         author: "turtleguyy@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 1,
//         body: "BBW: High Shine != High Quality.",
//         author: "LouisW407@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 1,
//         body: "Don't waste your rubles!",
//         author: "nat@example.org",
//         createdOn: 1397490980837
//       }]
//     }
//   ];
// })();


// (function() {
//   var app = angular.module('gemStore', []);

//   app.controller('StoreController', function(){
//     this.products = gems;
//   });

//   app.controller('TabController', function(){
//     this.tab = 1;

//     this.setTab = function(newValue){
//       this.tab = newValue;
//     };

//     this.isSet = function(tabName){
//       return this.tab === tabName;
//     };
//   });

//   app.controller('GalleryController', function(){
//     this.current = 0;
//     this.setCurrent = function(newGallery){
//       this.current = newGallery || 0;
//     };
//   });

//   var gems = [
//     {
//       name: 'Azurite',
//       description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//       shine: 8,
//       price: 110.50,
//       rarity: 7,
//       color: '#CCC',
//       faces: 14,
//       images: [
//         "images/gem-02.gif",
//         "images/gem-05.gif",
//         "images/gem-09.gif"
//       ],
//       reviews: [{
//         stars: 5,
//         body: "I love this gem!",
//         author: "joe@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 1,
//         body: "This gem sucks.",
//         author: "tim@example.org",
//         createdOn: 1397490980837
//       }]
//     },
//     {
//       name: 'Bloodstone',
//       description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//       shine: 9,
//       price: 22.90,
//       rarity: 6,
//       color: '#EEE',
//       faces: 12,
//       images: [
//         "images/gem-01.gif",
//         "images/gem-03.gif",
//         "images/gem-04.gif",
//       ],
//       reviews: [{
//         stars: 3,
//         body: "I think this gem was just OK, could honestly use more shine, IMO.",
//         author: "JimmyDean@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 4,
//         body: "Any gem with 12 faces is for me!",
//         author: "gemsRock@example.org",
//         createdOn: 1397490980837
//       }]
//     },
//     {
//       name: 'Zircon',
//       description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//       shine: 70,
//       price: 1100,
//       rarity: 2,
//       color: '#000',
//       faces: 6,
//       images: [
//         "images/gem-06.gif",
//         "images/gem-07.gif",
//         "images/gem-09.gif"
//       ],
//       reviews: [{
//         stars: 1,
//         body: "This gem is WAY too expensive for its rarity value.",
//         author: "turtleguyy@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 1,
//         body: "BBW: High Shine != High Quality.",
//         author: "LouisW407@example.org",
//         createdOn: 1397490980837
//       }, {
//         stars: 1,
//         body: "Don't waste your rubles!",
//         author: "nat@example.org",
//         createdOn: 1397490980837
//       }]
//     }
//   ];
// })();



