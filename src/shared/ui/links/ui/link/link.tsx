import { Link as LinkComponent } from 'react-router-dom';
import cn from 'classnames';


import classes from '../../link.module.scss';
import { LinkComponentProps } from '../../model/types';

const Link = ({ to, className, noUnderline, children, base }: LinkComponentProps) => {
	return (
		<LinkComponent
			className={cn({
				[classes.link]: !base,
				[classes['link_no-underline']]: noUnderline,
			}, className)}
			to={ to }
		>
			{ children }
		</LinkComponent>
	);
};

export { Link };