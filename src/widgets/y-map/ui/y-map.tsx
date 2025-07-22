import cn from 'classnames';
import classes from '../y-map.module.scss';
import {YMapProps} from "../model/types";
import {useRatioClass} from "shared/lib/hooks";

const YMap = ({ children, className }: YMapProps) => {
	return (
		<div
			
		>
			<iframe
				className={ cn(classes.ymap, className, useRatioClass({view: '4x3'}),) }
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A3bab9c3101e3762e696921bb5c982126ac83aefee7bdf6e1c52ec2f651000bd0&amp;source=constructor" 
				width="1056" 
				height="720" 
			></iframe>
		</div>
	);
};

export { YMap };