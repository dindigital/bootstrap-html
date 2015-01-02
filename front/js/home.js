;(function( window, document, $, undefined ) {
  'use strict';
  
  var home = (function() {

    var $private = {};
    var $public = {};

    $public.example = function() {
      return window.app.publicMethod();
    };
    
    return $public;
  })();
  
  // Global
  window.home = home;

  console.log(home.example());

})( window, document, jQuery );