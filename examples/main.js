/**
 * RequireJS configuration
 */
require.config({
  paths: {
    // Third-party libraries
    jquery: '../lib/bower_components/jquery/jquery',
    underscore: '../lib/bower_components/lodash/dist/lodash',
    backbone: '../lib/bower_components/backbone/backbone',
    attricon: '../attricon'
   },

  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }

});

require(['jquery', 'backbone', 'attricon'], function($, Backbone, Attricon){

  $(function(){
    var model = new Backbone.Model({id: 1, status: 'pending', os: 'linux'});

    // Status icon
    var statusIcon = new Attricon({
      model: model,
      attribute: 'status',
      iconMap: Attricon.Status
    });

    $('#status-header').append(statusIcon.render().el);
    $('#status-form input').on('change', function(e){
      // icon will update on model attribute change event.
      model.set('status', e.currentTarget.value);
    });

    // OS icon
    var osIcon = new Attricon({
      model: model,
      attribute: 'os',
      iconMap: {
        'linux': 'icon-linux',
        'android': 'icon-android',
        'apple': 'icon-apple',
        'windows': 'icon-windows'
      }
    });
    $('#os-header').append(osIcon.render().el);
    $('#os-form input').on('change', function(e){
      model.set('os', e.currentTarget.value);
    });

  });

});
