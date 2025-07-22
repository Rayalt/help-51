import cn from 'classnames';
import classes from '../../typography.module.scss';
import {HintProps} from "../../model/types";
import {Typography} from "shared/ui";

const Hint = ({ children, color, className, typographyProps }: HintProps) => {
	return (
		<div
			className={ cn(classes.hint, className) }
		>
			<Typography
				color={ color || 'primary' }
				view={ typographyProps?.view || 'text-sm' }
				tag={ typographyProps?.tag || 'p' }
			>
				{ children }
			</Typography>
		</div>
	);
};

export { Hint };