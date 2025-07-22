import { LinkSet } from '../link-set/link-set';
import { ContactsProps } from '../../model/types';
import { Socials } from '../socials/socials';
import cn from 'classnames';
import classes from '../../contacts.module.scss';

const Contacts = ({ 
	view = 'secondary', 
	footer, 
	color, 
	contactsSocialsList, 
	contactsLinkList, 
	className 
}: ContactsProps) => {
	return (
		<div
			className={cn(
				classes.contacts,
				className,
				{
					[classes.contacts_footer]: footer,
					[classes.contacts+ '_' + view]: view,
				}
			)}
		>
			{contactsSocialsList?.length &&
				<div
					className={ cn(classes.contacts__socials) }
				>
					{ contactsSocialsList.map(item => 
						<Socials
							className={ cn(classes['contacts__socials-item']) }
							key={ item?.icon }
							item={ item }
							view={ view }
						/>
					)}
				</div>
			}
			
			<div
				className={ cn(classes.contacts__links) }
			>
				{ contactsLinkList?.map(item => 
					<LinkSet
						key={ item?.icon }
						item={ item }
						view={ view }
						color={ color }
					/>
				)}
			</div>
		</div>
	);
};

export { Contacts };