import cn from 'classnames';
import classes from '../../team-item.module.scss';
import {TeamItemProps} from "../../model/types";
import {Image, Typography} from "shared/ui";

const TeamItem = ({ name, photo, position, className }: TeamItemProps) => {
	return (
		<div
			className={ cn(classes.team__item, className) }
		>
			<Image 
				className={cn(
					classes.team__img
				)}
				cover
				src={ photo }
			/>
			<div
				className={cn(
					classes.team__info
				)}
			>
				<Typography
					view='text-sm'
					className={cn(
						classes.team__name
					)}
				>
					{ name.map((line) => (
						<span 
							key={ line }
						>
							{ line }
							<br/>
						</span>
					)) }
				</Typography>
				<Typography
					view='text-xxs'
					color='disabled'
					className={cn(
						classes.team__position
					)}
				>
					{ position }
				</Typography>
			</div>
		</div>
	);
};

export { TeamItem };