import cn from 'classnames';
import classes from '../amount.module.scss';
import { AmountProps, Symbols } from '../model/types';
import { typograph } from 'shared/lib/hooks';

const Amount = ({ value, symbol = Symbols.RUB, space = true, tag: Tag = 'p', className }: AmountProps) => {
	return (
		<Tag
			className={ cn(classes.amount, className) }
		>
			{ space && typograph(value + ' ' + symbol) }

			{ !space && typograph(value + symbol) }
		</Tag>
	);
};

export { Amount };