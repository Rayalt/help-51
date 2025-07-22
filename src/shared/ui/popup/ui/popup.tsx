import { PopupProps } from './typings';
import cn from 'classnames';
import classes from './popup.module.scss';
import { Button } from 'shared/ui/buttons';
import { Portal } from 'shared/ui/portal';

const Popup = ({
	view,
	title,
	footer,
	closeOutside = false,
	onClick,
	isOpen = false,
	className,
	children,
}: PopupProps) => {
	const contentHandler: PopupProps['onClick'] = e => {
		e.stopPropagation();
	};

	const cancelHandler: PopupProps['onClick'] = e => {
		if (onClick) {
			onClick(e);
		}
	};

	// TODO закрытие по esc сдклать

	if (!isOpen) return null;

	return (
		<Portal>
			<div
				className={cn({
					[classes.popup]: true,
					[classes.popup + '_' + view]: view,
				}, className)}
				onClick={ closeOutside ? cancelHandler : undefined }
			>
				<div className={cn(classes.popup__dialog)}
					onClick={ closeOutside ? contentHandler : undefined }
				>
					<div className={cn(classes.popup__header)}>
						{ title &&
							<p className={cn(classes.popup__title)}>
								{ title }
							</p>
						}
						<Button
							view='secondary'
							// addonLeft='close'
							size='sm'
							className={cn(classes.popup__close)}
							onClick={ cancelHandler }
						></Button>
					</div>
					<div className={cn(classes.popup__body)}>
						{ children }
					</div>
					{ footer &&
						<div className={cn(classes.popup__footer)}>
							{ footer }
						</div>
					}
				</div>
			</div>
		</Portal>
	);
};

export { Popup };