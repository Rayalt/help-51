import {Contacts, Section, SectionDescription, SectionHeader, SectionWrapper} from "widgets";
import cn from "classnames";
import classes from "pages/partnership-page/partnership-page.module.scss";
import {contactsLinkListShort} from "shared/config/contacts";
import React from "react";
import {DataWidget} from "widgets/data-widget/ui/data-widget";
import {Button, Dropdown, Hint, Input, MaskedInput, Textarea} from "shared/ui";
import {donateFormOptions, donateFormOptionsTitle} from "features/donate-form-transaction/model/types";
import {Controller} from "react-hook-form";
import {VolunteringRequest} from "features";

const VolunteeringPage = () => {
	return (
		<Section
			bgImage1='lighthouseBW'
			bgSize1={{ xs: "500px", sm: "716px", md: "1008px", lg: '1362px' }}
			bgPos1={{ xs: "right -336px bottom -256px", sm: "right -464px bottom -272px", md: "right -662px bottom -296px", lg: 'right -810px bottom -340px' }}
			bgImage2='starsLargeBW'
			bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
			bgPos2={{ xs: "left -54px top", sm: "left -54px top", md: "left -66px top", lg: 'left -76px top' }}
		>
			<div
				className={cn(classes.row)}
			>
				<div
					className={cn(classes['sm:col-8'])}
				>
					<SectionHeader
						typographyTitleProps={{
							children: 'Волонтерство',
							color: 'accent-secondary'
						}}
						typographyDescriptionProps={[{children: `
							Станьте волонтёром фонда «Вызов». Помощь — это не только про деньги. 
							Ваше время, знания, энергия и участие могут изменить чью-то жизнь. 
							Мы приглашаем волонтёров, готовых делиться теплом, помогать в проектах фонда 
							и быть рядом с теми, кому особенно тяжело. Если вы хотите стать частью команды, 
							внести свой вклад, у вас есть идеи или просто желание помогать — присоединяйтесь
						`}]}
					/>
				</div>
			</div>
			
			<VolunteringRequest />
		</Section>
	);
};

export default VolunteeringPage;