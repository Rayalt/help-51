import React, { useState } from 'react';
import {TabContent, TabItem, Tabs, Typography} from "shared/ui";
import classes from '../programs-tabs.module.scss'
import cn from "classnames";
import {Programs, ProgramTypes} from "shared/config/programs";

const ProgramsTabs = () => {
	const [activeTab, setActiveTab] = useState<ProgramTypes>(ProgramTypes.POOR);

	const onTabClick = (tab: TabItem) => {
		setActiveTab(tab.value as ProgramTypes);
	};

	return (
		<div>
			<Tabs
				tabs={ Programs }
				view='secondary'
				value={activeTab}
				onTabClick={ onTabClick }
				className={cn(classes['programs-tabs'])}
			/>

			{ Programs.map(program => (
				<TabContent
					key={ program.id }
					active={ program.value === activeTab }
				>
					<div 
						className={ cn(classes.row) }
					>
						<div 
							className={ cn(classes['sm:col-7'], classes['programs-tabs__text']) }
						>
							{ program.details?.map((item, index) => (
								<Typography 
									key={ index }
								>
									{ item }
								</Typography>
							)) }
						</div>

						{/*<div */}
						{/*	className={ cn(classes['sm:col-4']) }*/}
						{/*>*/}
						{/*	img*/}
						{/*</div>*/}
					</div>
				</TabContent>
			)) }
		</div>
	);
};

export { ProgramsTabs };
