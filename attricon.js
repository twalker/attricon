/**
 * An miniscule Backbone view that binds an icon className to a model attribute.
 * @param  {[options]}
 *         model The model to bind to.
 *         attribute The attribute of the model to map to an icon.
 *         iconMap An object that maps the attribute value to an icon.
 *         formRaw A function to map a raw attribute value to a icon key.
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['backbone'], factory);
  } else {
    // Browser globals
    root.Attricon = factory(root.Backbone);
  }
}(this, function (Backbone) {

  // Default function to transform from raw value to icon key;
  var fromRaw = function fromRaw(value){
    return value.toString();
  };

  var Attricon = Backbone.View.extend({
    tagName: 'i',
    initialize: function(options){
      if(! (options && options.attribute && options.iconMap && this.model)){
        throw new Error('Attricon view requires a model, an attribute, and an iconMap');
      }

      this.iconMap = options.iconMap;
      this.fromRaw = options.fromRaw || fromRaw;

      this.listenTo(this.model, 'change:' + options.attribute, function(model, value){
        this.addIcon(value);
      });

      if(this.model.has(options.attribute)){
        this.addIcon(this.model.get(options.attribute));
      }
    },

    // set's the className of element to a mapped icon class.
    addIcon: function(value){
      var val = this.fromRaw(value);
      var icon = (val in this.iconMap) ? this.iconMap[val] : 'icon-question';
      this.el.className = icon;
    }

  }, {
    Status: {
      'pending': 'icon-check-empty',
      'in-progress': 'icon-cog icon-spin',
      'succeeded': 'icon-check',
      'failed': 'icon-warning-sign'
    },

    OS: {
      'linux': 'icon-linux',
      'android': 'icon-android',
      'apple': 'icon-apple',
      'windows': 'icon-windows'
    }
  });

  return Attricon;

}));
