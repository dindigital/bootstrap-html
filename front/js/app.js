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
    
    
    return $public;
  })();
  
  // Global
  window.app = app;
  
})( window, document, jQuery );