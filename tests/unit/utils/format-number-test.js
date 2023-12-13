import formatNumber from 'dummy/utils/format-number';
import { module, test } from 'qunit';

module('Unit | Utility | format-number', function () {
    // Test case 1: Test with a positive integer value and default precision
    test('it formats a positive integer value with default precision', function (assert) {
        let result = formatNumber(1234567);
        assert.strictEqual(result, '1,234,567.00', 'Should format a positive integer with default precision (2) correctly');
    });

    // Test case 2: Test with a positive float value and custom precision
    test('it formats a positive float value with custom precision', function (assert) {
        let result = formatNumber(1234.5678, 3);
        assert.strictEqual(result, '1,234.568', 'Should format a positive float with custom precision (3) correctly');
    });

    // Test case 3: Test with a negative float value, custom precision, and custom separators
    test('it formats a negative float value with custom precision and separators', function (assert) {
        let result = formatNumber(-9876.54321, 4, ' ', '-');
        assert.strictEqual(result, '-9 876-5432', 'Should format a negative float with custom precision, thousand separator, and decimal separator correctly');
    });

    // Test case 4: Test with an array of numbers
    test('it formats an array of numbers', function (assert) {
        let inputArray = [1234.5678, 9876.54321, 0];
        let result = formatNumber(inputArray);
        assert.deepEqual(result, ['1,234.57', '9,876.54', '0.00'], 'Should format an array of numbers correctly');
    });

    // Test case 5: Test with a string representation of a number and custom precision
    test('it formats a string representation of a number with custom precision', function (assert) {
        let result = formatNumber('5432.10', 2);
        assert.strictEqual(result, '5,432.10', 'Should format a string representation of a number with custom precision (2) correctly');
    });
});
