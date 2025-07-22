import React, { Fragment } from 'react';
import cn from 'classnames';
import { Svg } from 'shared/ui/svg';
import classes from '../../../button.module.scss';
import { BtnProps } from '../../../model/types';

const ButtonContent = ({ 
	base, 
	size, 
	btnTextClass, 
	addonLeft, 
	addonLeftView, 
	addonRight, 
	addonRightClass, 
	addonRightView, 
	children 
}: BtnProps) => {
	return (
		<Fragment>
			{ addonLeft &&
				<Svg
					className={ cn({ [classes.btn__addon]: !base }) }
					name={ addonLeft }
					view={ size || addonLeftView }
				/>
			}

			{ children &&
				<Fragment>
					{ !base &&
						<span className={cn(classes.btn__text, btnTextClass)}>
							{children}
						</span>
					}
					{ base &&
						<Fragment>
							{children}
						</Fragment>
					}
				</Fragment>
			}

			{ addonRight &&
				<Svg
					className={ cn(addonRightClass, 
						{
							[classes.btn__addon]: !base
						}
					) }
					name={ addonRight }
					view={ size || addonRightView }
				/>
			}
		</Fragment>
	);
};

export { ButtonContent };