import toFixed from 'dummy/utils/to-fixed';
import { module, test } from 'qunit';

module('Unit | Utility | to-fixed', function () {
    // Test case 1: Test with a positive float value and default precision
    test('it formats a positive float value with default precision', function (assert) {
        let result = toFixed(0.615);
        assert.strictEqual(result, '0.62', 'Should format a positive float with default precision (2) correctly');
    });

    // Test case 2: Test with a positive float value and custom precision
    test('it formats a positive float value with custom precision', function (assert) {
        let result = toFixed(0.615, 3);
        assert.strictEqual(result, '0.615', 'Should format a positive float with custom precision (3) correctly');
    });

    // Test case 3: Test with a negative float value and default precision
    test('it formats a negative float value with default precision', function (assert) {
        let result = toFixed(-1.23456);
        assert.strictEqual(result, '-1.23', 'Should format a negative float with default precision (2) correctly');
    });

    // Test case 4: Test with a large float value and custom precision
    test('it formats a large float value with custom precision', function (assert) {
        let result = toFixed(12345.6789, 4);
        assert.strictEqual(result, '12345.6789', 'Should format a large float with custom precision (4) correctly');
    });

    // Test case 5: Test with zero and default precision
    test('it formats zero with default precision', function (assert) {
        let result = toFixed(0);
        assert.strictEqual(result, '0.00', 'Should format zero with default precision (2) correctly');
    });

    // Test case 6: Test with a string representation of a float and custom precision
    test('it formats a string representation of a float with custom precision', function (assert) {
        let result = toFixed('12.345', 3);
        assert.strictEqual(result, '12.345', 'Should format a string representation of a float with custom precision (3) correctly');
    });
});
