import { Button } from 'shared/ui/buttons';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './../model/slice/counter-slice';
import { getCounterValue } from './../model/selectors/get-counter-value/get-counter-value';
import { Fragment } from 'react';

const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	const increment = () => {
		dispatch(counterActions.increment());
	}
	const decrement = () => {
		dispatch(counterActions.decrement());
	}

	return (
		<Fragment>
			<h1 data-testid='counter-value'>{counterValue}</h1>

			<Button
				view='primary'
				onClick={increment}
				data-testid='increment-btn'
			>+</Button>

			<Button
				view='secondary'
				onClick={decrement}
				data-testid='decrement-btn'
			>-</Button>
		</Fragment>
	);
};

export { Counter };