import { JobDescriptionProps } from 'widgets/job-description/model/types';
import { Section } from 'widgets';
import { DataWidget } from 'widgets/data-widget/ui/data-widget';
import { Typography } from 'shared/ui';

const JobDescription = ({ job }: JobDescriptionProps) => {
	return (
		<Section
			typographyTitleProps={{
				children: job.title,
			}}
			typographyDescriptionProps={[{
				children: job.subtitle
			}]}
		>
			<DataWidget
				base
			>
				<Typography>
					Описание
				</Typography>
			</DataWidget>
			
			<DataWidget
				base
			>
				<Typography>
					Обязанности
				</Typography>
			</DataWidget>
			
			<DataWidget
				base
			>
				<Typography>
					Требования
				</Typography>
			</DataWidget>
			
			<DataWidget
				base
			>
				<Typography>
					Мы предлагаем
				</Typography>
			</DataWidget>
		</Section>
	);
};

export { JobDescription };