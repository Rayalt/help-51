import {TypographyProps} from "../../model/types";
import classes from "../../typography.module.scss";
import cn from "classnames";
import { useTypograph } from 'shared/lib/hooks';

const Typography = ({
	view = 'text-md', 
	color = 'primary', 
	tag: Tag = 'p',
	children, 
	className,
}: TypographyProps) => {
	const typographyColor = (
		color: TypographyProps['color'],
		view: TypographyProps['view']
	): string | undefined => {
		if (color === 'none') {
			return undefined;
		}
		
		if (color === 'primary' && !view?.includes('-title')) {
			return classes['typography-primary'];
		}
	
		const className = `typography-${color}`;
		return classes[className];
	};

	return (
		<Tag 
			className={cn(
				view && classes[view],
				typographyColor(color, view),
				className
			)}
		>
			{ typeof children === 'string' && 
				useTypograph(children)
			}

			{ typeof children !== 'string' && children }
		</Tag>
	);
};






export { Typography };