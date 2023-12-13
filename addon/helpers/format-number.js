import formatNumberUtil from '../utils/format-number';
import { helper } from '@ember/component/helper';

export default helper(function formatNumber([value], options) {
    return formatNumberUtil(value, options);
});
