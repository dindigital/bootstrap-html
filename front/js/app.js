;(function( window, document, $, undefined ) {
  'use strict';
  
  var app = (function() {

    var $private = {};
    var $public = {};
    
    $private.privateVar = 'private var';
    $public.publicVar = 'public var';
    
    $private.privateMethod = function() {
      return 'Private method';
    };
    
    $public.publicMethod = function() {
      return 'Public with ' + $private.privateMethod();
    };  

    $public.responsiveMenu = function() {
      $('#menu').slicknav();
    };
    
    return $public;
  })();
  
  // Global
  window.app = app;
  app.responsiveMenu();
  
})( window, document, jQuery );