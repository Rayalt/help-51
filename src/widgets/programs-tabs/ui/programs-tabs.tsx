import React, { useState } from 'react';
import { TabContent, TabItem, Tabs, Typography } from 'shared/ui';
import classes from '../programs-tabs.module.scss'
import cn from 'classnames';
import { Programs, ProgramTypes } from 'shared/config/programs';
import { useSearchParams } from 'react-router-dom';

const ProgramsTabs = () => {
	const [searchParams] = useSearchParams();
	const tabParam = searchParams.get('tab') as ProgramTypes | null;

	const [activeTab, setActiveTab] = useState<ProgramTypes>(
		tabParam ?? ProgramTypes.POOR
	);
	
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
						className={ 'row' }
					>
						<div 
							className={ 'sm:col-7 programs-tabs__text' }
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
