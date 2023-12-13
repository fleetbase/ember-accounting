import unformat from './unformat';
import toFixed from './to-fixed';
import { isArray } from '@ember/array';
import { number as numberSettings } from '../settings';
import { defaults, checkPrecision, isObject } from '../utils';

/**
 * Format a number, with comma-separated thousands and custom precision/decimal places
 * Alias: `accounting.format()`
 *
 * Localise by overriding the precision and thousand / decimal separators
 * 2nd parameter `precision` can be an object matching `settings.number`
 *
 * ```js
 * accounting.formatNumber(5318008);              // 5,318,008
 * accounting.formatNumber(9876543.21, 3, " "); // 9 876 543.210
 * ```
 *
 * @method formatNumber
 * @for accounting
 * @param {Number}        number The number to be formatted.
 * @param {Integer}       [precision=2] Number of decimal digits
 * @param {String}        [thousand=','] String with the thousands separator.
 * @param {String}        [decimal="."] String with the decimal separator.
 * @return {String} The given number properly formatted.
 */
export default function formatNumber(number, precision = 2, thousand = ',', decimal = '.') {
    // Resursively format arrays:
    if (isArray(number)) {
        return number.map(function (val) {
            return formatNumber(val, precision, thousand, decimal);
        });
    }

    // Clean up number:
    number = unformat(number);

    // Build options object from second param (if object) or all params, extending defaults:
    const opts = defaults(
        isObject(precision)
            ? precision
            : {
                  precision: precision,
                  thousand: thousand,
                  decimal: decimal,
              },
        numberSettings
    );

    // Clean up precision
    const usePrecision = checkPrecision(opts.precision);

    // Do some calc:
    const fixedNumber = toFixed(number || 0, usePrecision);
    const negative = fixedNumber < 0 ? '-' : '';
    const base = String(parseInt(Math.abs(fixedNumber), 10));
    const mod = base.length > 3 ? base.length % 3 : 0;

    // Format the number:
    return (
        negative +
        (mod ? base.substr(0, mod) + opts.thousand : '') +
        base.substr(mod).replace(/(\d{3})(?=\d)/g, '$1' + opts.thousand) +
        (usePrecision ? opts.decimal + toFixed(Math.abs(number), usePrecision).split('.')[1] : '')
    );
}
