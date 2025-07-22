import { Button } from "shared/ui/buttons";
import {Svg, Typography} from "shared/ui";
import cn from "classnames";
import classes from "../../button.module.scss";
import {ButtonTabProps} from "../../model/types";


export const ButtonTab = ({ item, isActive, view = 'primary', name, onClick, className }: ButtonTabProps) => {
	return (
		<Button
			base
			className={cn(
				classes.tab,
				className,
				{
					[classes.tab_active]: isActive,
					[classes.tab + '_' + view]: view,
				}
			)}
			onClick={ onClick }
		>
			{ !name && 
				<span className={classes.tab__inner}>
					<Typography 
						view="text-sm" 
						tag="span" 
						className={classes.tab__title}
						color='none'
					>
						{ item.title }
					</Typography>
					{ item.subtitle && (
						<Typography 
							view='text-xxs' 
							tag='span' 
							color='disabled' 
							className={classes.tab__subtitle}
						>
							{ item.subtitle }
						</Typography>
					)}
				</span>
			}
			{ name &&
				<Svg
					name={ name }
				/>
			}
		</Button>
	);
};
