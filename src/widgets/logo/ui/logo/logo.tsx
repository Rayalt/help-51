import cn from "classnames";
import classes from '../../logo.module.scss';
import {LogoProps} from "widgets/logo/model/types";
import {Svg} from "shared/ui";

const Logo = ({className}: LogoProps) => {
	return (
		<Svg
			base
			auto
			iconCl
			name='logo'
			className={cn(classes.logo, className)}
		>
		</Svg>
	);
};

export { Logo };
