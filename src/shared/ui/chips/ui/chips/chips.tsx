import cn from 'classnames';
import classes from '../../chips.module.scss';
import { ChipsProps } from '../../model/types';
import React, { Fragment } from 'react';
import { Svg } from 'shared/ui';
import { stateClass } from 'shared/lib/hooks';

const Chips = ({ 
	chips,
	type = 'radio',
	inputName,
	disabled,
	checkedValue,
	onChange,
	className,
	size 
}: ChipsProps) => {
	const changeHandler: ChipsProps['onChange'] = (value) => {
		onChange?.(value);
	};

	return (
		<Fragment>
			{chips.map((chip) => (
				<label
					className={ cn(
						classes.chip,
						className,
						{ [classes.chip + '_' + size]: size },
					) }
					key={ chip.id }
				>
					{/*{ children }*/}
					<input 
						className={ cn(classes.chip__input) }
						type={ type }
						name={ inputName }
						value={ chip.value }
						onChange={ changeHandler }
						checked={ checkedValue === chip.value }
						disabled={ disabled || chip.disabled } // мб просто chip.disabled 
					/>
					<span
						className={ stateClass(cn(classes.chip__btn)) }
					>
						{/*{ chip.icon && (*/}
						{/*	// const iconName = chip.icon as IconName;*/}
						{/*	// const IconComponent = iconMap[iconName];*/}
						{/*	// <chip.icon */}
						{/*	// 	name={chip.icon}*/}
						{/*	// 	className={ cn(classes.chip__icon) }*/}
						{/*	// />*/}
						{/*) }*/}
						{/*{ chip.label && typeof chip.label === 'number' && <Amount tag='span' value={ chip.label } /> }*/}
						{/*{ typeof chip.label !== 'number' && chip.label }*/}
						{ !chip.name && chip.label }
						{ !chip.label && chip.name &&
							<Svg
								base
								iconCl
								auto
								className={ cn(classes.chip__icon) }
								name={ chip.name }
							/>
						}
					</span>
				</label>
			)) }
		</Fragment>
	);
};

export { Chips };