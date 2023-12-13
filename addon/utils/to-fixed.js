import unformat from './unformat';
import { checkPrecision } from '../utils';
import { number } from '../settings';

/**
 * Implementation of toFixed() that treats floats more like decimals
 *
 * Fixes binary rounding issues (eg. (0.615).toFixed(2) === "0.61") that present
 * problems for accounting- and finance-related software.
 *
 * ```js
 *  (0.615).toFixed(2);           // "0.61" (native toFixed has rounding issues)
 *  accounting.toFixed(0.615, 2); // "0.62"
 * ```
 *
 * @method toFixed
 * @for accounting
 * @param Float}   value         The float to be treated as a decimal number.
 * @param {Number} [precision=2] The number of decimal digits to keep.
 * @return {String} The given number transformed into a string with the given precission
 */
export default function toFixed(value, precision = 2) {
    precision = checkPrecision(precision, number.precision);
    var power = Math.pow(10, precision);

    // Multiply up by precision, round accurately, then divide and use native toFixed():
    return (Math.round(unformat(value) * power) / power).toFixed(precision);
}
