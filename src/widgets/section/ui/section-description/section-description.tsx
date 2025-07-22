import React from 'react';
import {Typography} from "shared/ui";
import {SectionDescriptionProps} from "../../model/types";
import cn from "classnames";
import classes from '../../section.module.scss'

const SectionDescription = ({typographyDescrProps, className}: SectionDescriptionProps) => {
	return (
		<Typography
			className={cn(classes.section__descr, className)}
			{ ...typographyDescrProps }
		/>
	);
};

export { SectionDescription };