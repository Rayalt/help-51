import { HTMLAttributes } from 'react';
import { Job } from 'shared/config/jobs';

export interface JobDescriptionProps extends HTMLAttributes<HTMLElement> {
	job: Job;
}