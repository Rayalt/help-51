import { TabItem, TabsProps } from "../../model/types";
import { Button } from "shared/ui/buttons";
import React, { useCallback } from "react";
import cn from 'classnames';
import classes from '../../tabs.module.scss';
import {ButtonTab} from "shared/ui";

const Tabs = ({ className, children, tabs, value, view = 'primary', contentView, onTabClick }: TabsProps) => {
	const tabHandler = useCallback((tab: TabItem) => () => {
		onTabClick(tab);
	}, [onTabClick]);

	return (
		<div className={ cn(
			classes.tabs, 
			className,
			{
				[classes.tabs_card]: contentView === 'card',
			}
		) }>
			<div
				className={ cn(classes['tabs__header-wrapper'], classes.container) }
			>
				<div
					className={ cn(classes.tabs__header) }
				>
					{ tabs.map(tab => (
						<ButtonTab
							key={ tab.value }
							item={ tab }
							isActive={ tab.value === value }
							view={ view }
							onClick={ tabHandler(tab) }
						/>
					)) }
				</div>
			</div>

			{ children }
		</div>
	);
};

export { Tabs };
