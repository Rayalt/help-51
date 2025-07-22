import { useRef } from 'react';
// import { useRemoveFocus } from 'shared/lib/remove-focus/use-remove-focus';
import cn from 'classnames';

import classes from '../../button.module.scss';
import {useStateClass} from "shared/lib/hooks";
import { BtnProps } from "../../model/types";
import { ButtonContent } from '../../lib/ui/button-content/button-content';

const Button = ({
	title,
	type = 'button',
	disabled,
	className,
	children,
	onClick,
	addonLeft,
	addonRight,
	addonRightClass,
	addonRightView = 'xs',
	addonLeftView = 'xs',
	view,
	base,
	shape,
	square,
	circle,
	size,
	iconMobile,
	...props
}: BtnProps) => {
	const buttonRef = useRef(document.createElement('button'));
	const clickHandler: BtnProps['onClick'] = e => {
		// useRemoveFocus(buttonRef);

		if (onClick) {
			onClick(e);
		}
	};
	
	const buttonInner = (
		<ButtonContent
			addonLeft={ addonLeft }
			addonRight={ addonRight }
			addonRightView={ addonRightView }
			addonLeftView={ addonLeftView }
			addonRightClass={ addonRightClass }
			view={ view }
			base={ base }
		>
			{children}
		</ButtonContent>
	);

	return (
		<button
			title={title}
			type={type}
			ref={buttonRef}
			className={useStateClass(cn({
				[classes.btn]: !base && shape !== 'link',
				[classes.btn_square]: square && !circle,
				[classes.btn_circle]: circle && !square,
				[classes.btn + '_' + view]: !base && shape !== 'link',
				[classes.btn + '_' + size]: size,
				[classes['btn-link']]: shape === 'link',
				[classes['btn_icon-mobile']]: iconMobile,
				[classes.btn_disabled]: disabled,
			}, className))}
			// todo
			onClick={clickHandler}
			disabled={ disabled }
			{...props}
		>
			{ !base &&
				<span
					className={classes.btn__inner}
				>
					{ buttonInner }
				</span>
			}

			{ base && buttonInner }
		</button>
	);
};

export {Button};