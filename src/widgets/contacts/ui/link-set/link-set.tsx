import React from 'react';
import cn from "classnames";
import classes from "../../contacts.module.scss";
import {ButtonLink} from "shared/ui/buttons";
import {LinkSetProps} from "../../model/types";
import {Svg, Typography} from "shared/ui";
// import {iconMap, IconName} from "shared/ui/svg/model/types";

const LinkSet = ({className, item, view, color}: LinkSetProps) => {
	if (!item) return;
	
	// const iconName = item.icon as IconName;
	// const IconComponent = iconMap[iconName];
	
	return (
		<div
			className={ cn(classes['link-set'], className) }
		>
			<Svg
				className={ cn(classes['link-set__icon']) }
				name={ item.icon }
				view='xs'
			/>
			<ButtonLink
				view={ view }
				size='sm'
				to={ item.path }
				className={ cn(classes['link-set__btn']) }
				btnTextClass={ cn(classes['link-set__btn-text']) }
			>
				{ color &&
					<Typography
						view='text-sm'
						tag='span'
						color={ color }
					>
						{ item.text }
					</Typography>
				}
				{ !color && item.text }
			</ButtonLink>
		</div>
	);
};

export { LinkSet };