import cn from 'classnames';
import classes from '../../team-item.module.scss';
import { TeamProps } from '../../model/types';
import { TeamItem } from 'widgets/team/ui/team-item/team-item';
import { team } from 'widgets/team/model/team';

const Team = ({ className }: TeamProps) => {
	return (
		<div
			className={cn(classes.team, className)}
		>
			<div
				className={cn(classes.team__inner)}
			>
				{ team.map( item => (
					<TeamItem
						key={ item.name.toString() }
						name={ item.name }
						photo={ item.photo }
						position={ item.position }
					/>
				)) }
			</div>
		</div>
	);
};

export { Team };