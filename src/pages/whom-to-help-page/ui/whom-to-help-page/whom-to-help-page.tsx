import {ButtonCard, Section, SectionWrapper} from "widgets";
import {RoutePath} from "app/providers/router";
import {useNavigate} from "react-router-dom";
import {ClientsType} from "shared/config/clients";
import React, {useEffect, useState} from "react";
import {WhomToHelpPageFilter} from "pages/whom-to-help-page/ui/whom-to-help-page-filter/whom-to-help-page-filter";
import {useSelector} from "react-redux";
import {
	whomToHelpPageReducer,
	whomToHelpPageSelectors
} from "pages/whom-to-help-page/model/slice/whom-to-help-page-slice";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/dynamic-module-loader";
import cn from "classnames";
import classes from '../../whom-to-help-page.module.scss';
import {
	getWhomToHelpPageFilter
} from "pages/whom-to-help-page/model/selectors/whom-to-help-page-sort/get-whom-to-help-page-sort";
import {ProgramTypes} from "shared/config/programs";
import {
	getWhomToHelpPageSearch
} from "pages/whom-to-help-page/model/selectors/whom-to-help-page-search/get-whom-to-help-page-search";
import {AnimatePresence, motion} from "framer-motion";
import {fade} from "shared/lib/animations";
import {Pagination} from "shared/ui";

const WhomToHelpPage = () => {
	const navigate = useNavigate();
	const whomToHelpHandler = (id: ClientsType['id']) => {
		return () => navigate(RoutePath.whom_to_help_details + id);
	};
	
	const sort = useSelector(getWhomToHelpPageFilter);
	const search = useSelector(getWhomToHelpPageSearch);
	const clients = useSelector(whomToHelpPageSelectors.selectAll);
	
	const [filteredClients, setFilteredClients] = useState(clients);

	useEffect(() => {
		const normalizedSearch = search.trim().toLowerCase();
	
		const filtered = clients.filter(client => {
			const matchesSort = sort === ProgramTypes.ALL || client.program === sort;
	
			const matchesSearch =
				client.title.toLowerCase().includes(normalizedSearch) ||
				client.description?.toLowerCase().includes(normalizedSearch); // если есть поле description
	
			return matchesSort && matchesSearch;
		});
	
		setFilteredClients(filtered);
	}, [clients, sort, search]);
	
	const initialReducers: ReducersList = {
		whomToHelpFilter: whomToHelpPageReducer,
	};
	
	return (
		<DynamicModuleLoader
			reducers={ initialReducers }
			removeAfterUnmount={ false }
		>
			<Section
				typographyTitleProps={{
					children: 'Кому помочь',
				}}
				sectionMainAction={
					<Pagination />
				}
			>
				<WhomToHelpPageFilter />
				
				<div
					className={cn(classes.row, classes['sm:row-cols-3'])}
				>
					<AnimatePresence>
						{ filteredClients.map(client => (
							<motion.div
								key={ client.id }
								{ ...fade }
							>
								<ButtonCard
									onClick={ whomToHelpHandler(client.id) }
									cardData={ client }
								/>
							</motion.div>
						)) }
					</AnimatePresence>
				</div>
			</Section>
		</DynamicModuleLoader>
	);
};

export default WhomToHelpPage;