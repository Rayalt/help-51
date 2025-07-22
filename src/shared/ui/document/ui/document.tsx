import cn from 'classnames';
import classes from '../document.module.scss';
import {DocumentProps} from "shared/ui/document/model/types";
import {Link, Svg, Typography} from "shared/ui";
import {useStateClass} from "shared/lib/hooks";

const Document = ({ children, to, typographyTitleProps, typographySubtitleProps, className }: DocumentProps) => {
	return (
		<Link
			to={ to }
			className={ useStateClass(cn(classes.document, className)) }
		>
			<span
				className={ cn(classes.document__icon) }
			>
				<Svg
					name='pdf' 
					view='sm'
					iconCl
				/>
			</span>
			
			<span
				className={ cn(classes.document__inner) }
			>
				{ typographyTitleProps?.children &&
					<Typography
						tag='span'
						view='text-lg'
						{ ...typographyTitleProps }
					/>
				}
				{ typographySubtitleProps?.children &&
					<Typography
						tag='span'
						view='text-sm'
						color='disabled'
						{ ...typographySubtitleProps }
					/>
				}
			</span>
			
		</Link>
	);
};

export { Document };