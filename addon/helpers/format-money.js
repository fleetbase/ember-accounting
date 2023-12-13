import formatMoneyUtil from '../utils/format-money';
import { helper } from '@ember/component/helper';

export default helper(function formatMoney([value], options) {
    return formatMoneyUtil(value, options);
});
