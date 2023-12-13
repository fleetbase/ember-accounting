import unformat from 'dummy/utils/unformat';
import { module, test } from 'qunit';

module('Unit | Utility | unformat', function () {
    // Test case 1: Test with a positive integer value
    test('it unformats a positive integer value', function (assert) {
        let result = unformat('12345');
        assert.equal(result, 12345, 'Should unformat a positive integer value correctly');
    });

    // Test case 2: Test with a negative float value
    test('it unformats a negative float value', function (assert) {
        let result = unformat('($1.99)');
        assert.equal(result, -1.99, 'Should unformat a negative float value correctly');
    });

    // Test case 3: Test with a string that contains formatting characters
    test('it unformats a string with formatting characters', function (assert) {
        let result = unformat('£ 12,345,678.90 GBP');
        assert.equal(result, 12345678.9, 'Should unformat a string with formatting characters correctly');
    });

    // Test case 4: Test with an empty string
    test('it unformats an empty string', function (assert) {
        let result = unformat('');
        assert.equal(result, 0, 'Should unformat an empty string to 0');
    });

    // Test case 5: Test with an array of strings
    test('it unformats an array of strings', function (assert) {
        let inputArray = ['123.45', '($6.78)', '9,000'];
        let result = unformat(inputArray);
        assert.deepEqual(result, [123.45, -6.78, 9000], 'Should unformat an array of strings correctly');
    });
});
