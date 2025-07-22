import cn from 'classnames';
import classes from '../data-widget.module.scss';
import { DataWidgetProps } from '../model/types';
import { Button, Typography } from 'shared/ui';
import { Fragment } from 'react';

const DataWidget = ({ 
	children, 
	tag: Tag = 'div', 
	base, shadowSize, 
	view = 'static', 
	widgetData, 
	colorTitle, 
	viewTitle = 'text-lg', 
	color, 
	colorDescription, 
	viewDescription, 
	className,
	onClick,
}: DataWidgetProps) => {
	const DataWidgetContent = (tag?: DataWidgetProps['tag']) => {
		return (
			<Fragment>
				<Tag
					className={ cn(classes['data-widget__content']) }
				>
					{ !base &&
						<Fragment>
							<Typography
								view={ viewTitle }
								color={ colorTitle }
							>
								{ widgetData?.title }
							</Typography>
							{ widgetData?.description &&
								<Typography
									view={ viewDescription }
									color={ colorDescription }
								>
									{ widgetData?.description }
								</Typography>
							}
						</Fragment>
					}

					{ base && children }
				</Tag>
				{ widgetData?.action }
			</Fragment>
		)
	};

	return (
		<Fragment>
			{ view === 'interactive' &&
				<Button
					base
					onClick={ onClick }
					className={ cn(
						classes['data-widget'],
						classes['data-widget_interactive'], 
						className,
						{
							[classes['data-widget_' + shadowSize]]: shadowSize,
							[classes['data-widget_secondary']]: colorTitle === 'accent-secondary',
						}
					) }
				>
					{ DataWidgetContent('span') }
				</Button>
			}
			
			{ view === 'static' &&
				<div
					className={ cn(
						classes['data-widget'], 
						className,
						{
							[classes['data-widget_' + shadowSize]]: shadowSize,
							[classes['data-widget_secondary']]: color === 'secondary',
						}
					) }
				>
					{ DataWidgetContent() }
				</div>
			}
		</Fragment>
	);
};

export { DataWidget };