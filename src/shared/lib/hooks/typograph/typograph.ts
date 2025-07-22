import Typograph from 'typograf';

const tp = new Typograph({ 
	locale: ['ru', 'en-US'],
	enableRule: [
		'common/nbsp/afterNumber',
		'common/number/digitGrouping',
		'ru/money/currency',
	],
	disableRule: [
		'common/punctuation/delDoublePunctuation',
		'common/space/beforeBracket',
		'common/space/bracket',
		'common/space/delRepeatN',
		'common/space/replaceTab',
		'common/space/squareBracket',
		'common/symbols/arrow',
		'common/symbols/cf',
		'common/symbols/copy',
		'en-US/dash/main',
		'ru/date/fromISO',
		'ru/date/weekday',
		'ru/nbsp/m',
		'ru/number/comma',
		'ru/punctuation/exclamation',
		'ru/punctuation/exclamationQuestion',
	],
});

export const typograph = (html: string) => {
	return tp.execute(html);
};
