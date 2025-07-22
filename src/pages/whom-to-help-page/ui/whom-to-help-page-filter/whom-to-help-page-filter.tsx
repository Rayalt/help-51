import cn from 'classnames';
import classes from '../../whom-to-help-page.module.scss';
import { ClientsSortSelector } from 'features/clients-sort';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
	getWhomToHelpPageFilter
} from 'pages/whom-to-help-page/model/selectors/whom-to-help-page-sort/get-whom-to-help-page-sort';
import { whomToHelpPageAction } from 'pages/whom-to-help-page/model/slice/whom-to-help-page-slice';
import { ProgramTypes } from 'shared/config/programs';
import { Input, InputProps } from 'shared/ui';
import {
	getWhomToHelpPageSearch
} from 'pages/whom-to-help-page/model/selectors/whom-to-help-page-search/get-whom-to-help-page-search';

const WhomToHelpPageFilter = () => {
	const filter = useSelector(getWhomToHelpPageFilter);
	const search = useSelector(getWhomToHelpPageSearch);
	// const debounceFetchData = useDebounce(fetchData, 500);
	
	const dispatch = useDispatch();
	
	// const fetchData = useCallback(() => {
	// 	dispatch(fetchArticlesList({ replace: true }));
	// }, [dispatch]);
	//
	// const updateFilterAndFetch = useCallback((action: UnknownAction) => {
	// 	dispatch(action);
	// 	dispatch(articlesPageAction.setPage(1));
	// 	fetchData();
	// }, [fetchData, dispatch]);
	
	const onChangeSortField = useCallback((newFilter: ProgramTypes) => {
		dispatch(whomToHelpPageAction.setFilter(newFilter));
	}, [dispatch]);
	
	const onChangeSearch: InputProps['onChange'] = useCallback((_: unknown, payload: { value: string }) => {
		dispatch(whomToHelpPageAction.setSearch(payload.value));
		// debounceFetchData();
	}, [dispatch]);
	
	return (
		<div
			className={cn(classes.row, classes['sm:row-cols-2'])}
		>
			<Input 
				placeholder='Начните вводить имя или диагноз' 
				onChange={ onChangeSearch }
				value={ search }
				view='secondary'
			/>
			<ClientsSortSelector 
				onChangeSortField={ onChangeSortField }
				// onChangeOrder={ onChangeOrder }
				filter={ filter }
			/>
		</div>
	);
};

export { WhomToHelpPageFilter };