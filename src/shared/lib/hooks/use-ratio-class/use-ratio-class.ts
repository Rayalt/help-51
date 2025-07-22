import cn from "classnames";
import classes from "./use-ratio-class.module.scss";
import {UseRatioClassProps} from "shared/lib/hooks/use-ratio-class/model/types";

export const useRatioClass = ({
	baseClass,
	view,
}: UseRatioClassProps) =>
	cn(
		baseClass, 
		classes.ratio,
		{
			[classes.ratio + '_' + view]: view
		},
	);