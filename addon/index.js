import format from './utils/format-number';
import formatColumn from './utils/format-column';
import formatMoney from './utils/format-money';
import formatNumber from './utils/format-number';
import parse from './utils/unformat';
import settings from './settings';
import toFixed from './utils/to-fixed';
import unformat from './utils/unformat';

export { format, formatColumn, formatMoney, formatNumber, parse, settings, toFixed, unformat };

export default {
    format: format,
    formatColumn: formatColumn,
    formatMoney: formatMoney,
    formatNumber: formatNumber,
    parse: parse,
    settings: settings,
    toFixed: toFixed,
    unformat: unformat,
};
