/**
 * An miniscule Backbone view that binds an icon className to a model attribute.
 * @param  {[options]}
 *         model The model to bind to.
 *         attribute The attribute of the model to map to an icon.
 *         iconMap An object that maps the attribute value to an icon.
 */
define(function(require){
  var Backbone = require('backbone')
    , _ = require('underscore');

  var Attricon = Backbone.View.extend({
    tagName: 'i',
    initialize: function(options){
      if(! (options && options.attribute && options.iconMap && this.model)){
        throw new Error('Attricon view requires a model, an attribute, and an iconMap');
      }

      this.iconMap = options.iconMap;

      this.listenTo(this.model, 'change:' + options.attribute, function(model, value){
        this.addIcon(value);
      });

      this.addIcon(this.model.get(options.attribute));
    },

    addIcon: function(value){
      var iconMap = this.iconMap,
          icon = iconMap[value];

      Object.keys(iconMap).forEach(function(key){
        this.$el[key === value ? 'addClass' : 'removeClass'](iconMap[key]);
      }, this);
    }

  }, {
    Status: {
      'pending': 'icon-spinner icon-spin',
      'success': 'icon-check',
      'error': 'icon-warning-sign'
    },

    OS: {
      'linux': 'icon-linux',
      'android': 'icon-android',
      'apple': 'icon-apple',
      'windows': 'icon-windows'
    }
  });

  return Attricon;
});