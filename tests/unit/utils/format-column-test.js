import formatColumn from 'dummy/utils/format-column';
import { module, test } from 'qunit';

module('Unit | Utility | format-column', function () {
    // Test case 1: Test with an array of positive integers and default options
    test('it formats an array of positive integers with default options', function (assert) {
        let list = [1234, 5678, 9012];
        let result = formatColumn(list);
        assert.deepEqual(result, ['$1,234.00', '$5,678.00', '$9,012.00'], 'Should format an array of positive integers with default options correctly');
    });

    // Test case 2: Test with an array of positive floats, custom format, and custom symbol
    test('it formats an array of positive floats with custom format and symbol', function (assert) {
        let list = [12.34, 5678.901, 0.1234];
        let result = formatColumn(list, { symbol: '€', format: '%v %s' });
        assert.deepEqual(result, ['   12.34 €', '5,678.90 €', '    0.12 €'], 'Should format an array of positive floats with custom format and symbol correctly');
    });

    // Test case 3: Test with an array of negative integers and custom separators
    test('it formats an array of negative integers with custom separators', function (assert) {
        let list = [-12345, -67890, -9876];
        let result = formatColumn(list, '', 0, ' ', '-');
        assert.deepEqual(result, ['-12 345', '-67 890', ' -9 876'], 'Should format an array of negative integers with custom separators correctly');
    });

    // Test case 4: Test with a nested array of numbers
    test('it formats a nested array of numbers', function (assert) {
        let list = [
            [1234.56, 78.9],
            [-12345.67, 0.12],
        ];
        let result = formatColumn(list, { symbol: 'USD' });
        let expectedResult = [
            ['USD1,234.56', 'USD   78.90'],
            ['USD-12,345.67', 'USD      0.12'],
        ];
        assert.deepEqual(result, expectedResult, 'Should format a nested array of numbers correctly');
    });

    // Test case 5: Test with an empty array
    test('it returns an empty array when given an empty array', function (assert) {
        let list = [];
        let result = formatColumn(list);
        assert.deepEqual(result, [], 'Should return an empty array when given an empty array');
    });
});
