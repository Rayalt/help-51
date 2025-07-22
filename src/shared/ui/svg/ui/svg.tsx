import cn from 'classnames';

import classes from '../svg.module.scss';
import { iconMap, SvgProps } from "../model/types";
import log from "eslint-plugin-react/lib/util/log";

const Svg = ({
	title, 
	name,
	view,
	base,
	iconCl,
	auto,
	className,
}: SvgProps) => {
	
	const SvgIcon = iconMap[name];
	
	if (!SvgIcon) {
		console.warn(`Icon with name "${name}" does not exist`);
		return null;
	}
	
	return (
		<SvgIcon 
			className={cn(
				classes.svg,
				classes.icon,
				className,
				{
					[classes.icon_cl]: iconCl,
					[classes.icon_auto]: auto,
					[classes.icon_sm]: !base && !view,
					[classes.icon + '_' + view]: view && !base,
				}, 
			)}
		/>
	);
};

export { Svg };