import cn from 'classnames';
import classes from './state-class.module.scss';

export const stateClass = (baseClass?: string) =>
	cn(baseClass, classes.state);