import cn from "classnames";
import classes from "../../section.module.scss";
import {SectionWidgetProps} from "../../model/types";
import {DataWidget} from "widgets/data-widget/ui/data-widget";

const SectionWidget = ({className, children}: SectionWidgetProps) => {
	return (
		<DataWidget
			base
			shadowSize='md'
			className={cn(classes.section__widget, className)}
		>
			{ children }
		</DataWidget>
	);
};

export { SectionWidget };