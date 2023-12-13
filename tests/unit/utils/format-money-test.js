import formatMoney from 'dummy/utils/format-money';
import { module, test } from 'qunit';

module('Unit | Utility | format-money', function () {
    // Test case 1: Test with a positive integer value and default options
    test('it formats a positive integer with default options', function (assert) {
        let result = formatMoney(12345678);
        assert.equal(result, '$12,345,678.00', 'Should format a positive integer with default options correctly');
    });

    // Test case 2: Test with a positive float value, custom symbol, and custom separators
    test('it formats a positive float with custom symbol and separators', function (assert) {
        let result = formatMoney(4999.99, '€', 2, '.', ',');
        assert.equal(result, '€4.999,99', 'Should format a positive float with custom symbol and separators correctly');
    });

    // Test case 3: Test with a negative integer value and custom precision
    test('it formats a negative integer with custom precision', function (assert) {
        let result = formatMoney(-500000, '£', 0);
        assert.equal(result, '£-500,000', 'Should format a negative integer with custom precision correctly');
    });

    // Test case 4: Test with an array of numbers and custom format
    test('it formats an array of numbers with custom format', function (assert) {
        let inputArray = [5318008, -12345.67, 0];
        let result = formatMoney(inputArray, { symbol: 'GBP', format: '%v %s' });
        assert.deepEqual(result, ['5,318,008.00 GBP', '-12,345.67 GBP', '0.00 GBP'], 'Should format an array of numbers with custom format correctly');
    });

    // Test case 5: Test with a string representation of a number and default options
    test('it formats a string representation of a number with default options', function (assert) {
        let result = formatMoney('9876.54');
        assert.equal(result, '$9,876.54', 'Should format a string representation of a number with default options correctly');
    });
});
