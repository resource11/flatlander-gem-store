'use strict';

(function(){

  // angular module and dependencies
  var app = angular.module('store-products', [ ]);

  // define custom directive
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
})();;

