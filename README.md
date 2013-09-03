attricon
========

An miniscule Backbone view that binds an **icon-** className to the value of a model **attr**ibute.

It's useful with a pre-defined set of attribute values that pair nicely with an icon from Font Awesome (or other).
E.g. Status, OS icons.

What can I say, it scratched a small itch.

## example

    var model = new Backbone.Model({status: 'pending'});
    var statusIcon = new Attricon({
      model: model,
      attribute: 'status',
      iconMap: {
        'pending': 'icon-spinner icon-spin',
        'success': 'icon-check',
        'error': 'icon-warning-sign'
      }
    });

    $('#some-parent-element').append(statusIcon.render().el);

    console.log(statusIcon.el);
    // <i class="icon-spinner icon-spin"></i>

    model.set('status', 'success');

    console.log(statusIcon.el);
    // <i class="icon-check"></i>

### options

The `iconMap` is a plain object mapping values (keys) to classNames (values).
It can be provided as:

* A pre-defined map. `Attricon.Status` and `Attricon.OS` are provided to as samples.
* An extended map. `Attricon.MyMap = {'none': 'icon-star-empty', 'half': 'icon-star-half-empty',...}`
* An instance level option.

## dependencies

* backbone
* requirejs

## demo

`bower install`

Browse to /examples/index.html

## install

Just clone or fork.

If attricon is actually useful to anyone, I'll register it with bower so it can be installed properly.
