import cn from 'classnames';
import classes from '../../contacts.module.scss';
import React from 'react';
import { SocialsProps } from '../../model/types';
import { ButtonLink } from 'shared/ui/buttons';

const Socials = ({ view, className, item }: SocialsProps) => {
	if (!item) return;
	
	return (
		<ButtonLink
			to={ item.to }
			addonLeft={ item.icon }
			circle
			view={ view }
			className={cn(classes.socials, className)}
		></ButtonLink>
	);
		
};

export { Socials };