# @fleetbase/ember-accounting

This is a fork of [ember-cli-accounting](https://github.com/milindalvares/ember-cli-accounting) which was a port of the great [accounting.js](https://github.com/openexchangerates/accounting.js) library to
ES6 modules that integrates seamlessly with ember-cli and the Fleetbase ecosystem.

## Installation

Just add like any other ember-cli addon:

```bash
npm install @fleetbase/ember-accounting
```

## Ember compatiblity

Compatible with Ember version 4.0 and above

## Usage

### Accounting functions

You no longer need to access the global accounting, you can import only what you need:

```js
import formatMoney from '@fleetbase/ember-accounting/format-money'
```

Although you can import everything as expected:

```js
import accounting from '@fleetbase/ember-accounting'
```

### Handlebars helpers

This addon also registers 2 handy helpers in your application: `format-number` and `format-money`.

You can set options using bound or unbound options like this:

```hbs
{{format-money price symbol=selectedCurrency format="%v %s"}} <!-- "123.45 £" -->
```

Any option not set will have the usual default value:

```hbs
{{format-number "1234.567" precision=2}} <!-- "1,234.57" -->
```

### Config default options

You can use an initializer to set some default values at initializations and avoid having to 
repeat over and over the options in the helpers.

Use something like this:
```js
// app/initializers/accounting.js
import { currency, number } from '@fleetbase/ember-accounting/settings';

export default {
  name: 'accounting.js',
  initialize: function() {
    currency.symbol = "€";
    number.decimal = ",";
    number.thousand = ".";
  }
};
```

## Differences with accounting.js

Although this is almost a 1:1 port of accountant.js, there is a few differences:

* Each function of accountant.js lives in its own module, so you can only import those functions you want to use.
* Removed some polyfills for `Array.isArray`, `Array.prototype.map` and `Object.prototype.toString`.
They are not required in modern browsers, and ember.js (unless you opt-out with `EXTEND_PROTOTYPES = false`) already provides polyfills for those functions.
* More tests than the original.
* Enforced jshint. Cleaner code.

## Documentation

This library does not make any change in the public api of accounting.js, so you can read the official
documentation [here](http://openexchangerates.github.io/accounting.js/)