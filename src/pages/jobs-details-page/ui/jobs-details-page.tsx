import { Section } from 'widgets';
import { JobDescription } from 'widgets/job-description/ui/job-description';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { jobs } from 'shared/config/jobs';

const JobsDetailsPage = () => {
	const { id } = useParams();
	
	const jobDetails = jobs.find((job) => job.id === id);
	
	return (
		<Fragment>
			{ jobDetails &&
				<JobDescription
					job={ jobDetails }
				></JobDescription>
			}
			<Section
				typographyTitleProps={{
					children: 'Откликнуться на вакансию',
				}}
			>
			</Section>
		</Fragment>
	);
};

export default JobsDetailsPage;