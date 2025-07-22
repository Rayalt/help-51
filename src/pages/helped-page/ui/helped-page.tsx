import {ButtonCard, Section, SectionHeader, SectionMainAction, SectionWrapper} from "widgets";
import {Button, ButtonLink} from "shared/ui";
import {RoutePath} from "app/providers/router";
import classes from '../helped-page.module.scss';
import cn from "classnames";
import {useNavigate} from "react-router-dom";
import {Pagination} from "shared/ui";
import {Clients, ClientsType} from "shared/config/clients";

const HelpedPage = () => {
	const navigate = useNavigate();
	
	const whomToHelpHandler = (id: ClientsType['id']) => {
		return () => navigate(RoutePath.helped_details + id);
	};
	
	const filteredClients = Clients.filter(client => client.view === 'closed');
	
	return (
		<Section
			typographyTitleProps={{
				children: 'Кому помогли',
			}}
			headerActions={
				<ButtonLink 
					to={
						RoutePath.search
					}
					view='secondary-light'
				>
					{/*todo path*/}
					Поиск пожертвований
				</ButtonLink>
			}
			sectionMainAction={
				<Pagination />
			}
		>
			<div
				className={cn(classes.row, classes['sm:row-cols-2'], classes['md:row-cols-3'])}
			>
				{ filteredClients.map(client => (
					<ButtonCard
						key={ client.id }
						view='closed'
						onClick={ whomToHelpHandler(client.id) }
						cardData={ client }
					/>
				)) }
			</div>
		</Section>
	);
};

export default HelpedPage;