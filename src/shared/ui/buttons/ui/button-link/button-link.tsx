import cn from 'classnames';
import classes from '../../button.module.scss';
import { Link } from 'shared/ui/links';
import { ButtonContent } from '../../lib/ui/button-content/button-content';
import { ButtonLinkProps } from '../../model/types';
import { stateClass } from 'shared/lib/hooks';

const ButtonLink = ({
	to, 
	className, 
	btnTextClass, 
	children,
	view, 
	base,
	shape,
	size, 
	square, 
	circle, 
	addonLeft, 
	addonRight,
	addonRightClass,
	addonLeftView = 'xs',
	addonRightView = 'xs',
	iconMobile,
}: ButtonLinkProps) => {
	const buttonInner = (
		<ButtonContent
			addonLeft={ addonLeft }
			addonRight={ addonRight }
			addonRightView={ addonRightView }
			addonLeftView={ addonLeftView }
			addonRightClass={ addonRightClass }
			btnTextClass={ btnTextClass }
			view={ view }
			base={ base }
		>
			{children}
		</ButtonContent>
	);
	
	return (
		<Link
			to={ to }
			base
			className={stateClass(cn({
				[classes.btn]: !base,
				[classes.btn + '_' + view]: view,
				[classes.btn + '_' + size]: size,
				[classes.btn_square]: square && !circle,
				[classes.btn_circle]: circle && !square,
				[classes['btn_icon-mobile']]: iconMobile,
				[classes['btn-link']]: shape === 'link',
			}, className))}
		>
			{ !base && 
				<span
					className={cn(classes.btn__inner)}
				>
					{ buttonInner }
				</span>
			}
			
			{ base && buttonInner }
		</Link>
	);
};

export { ButtonLink };