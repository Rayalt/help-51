import cn from "classnames";
import classes from "./use-state-class.module.scss";

export const useStateClass = (baseClass?: string) =>
	cn(baseClass, classes.state);