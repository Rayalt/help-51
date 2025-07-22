import { useForm } from 'react-hook-form';

export type DonateFormFields = {
	customAmount: string;
	name: string;
	phone: string;
	email: string;
	comment: string;
};

export const useDonateForm = () => {
	return useForm<DonateFormFields>({
		defaultValues: {
			customAmount: '',
			name: '',
			phone: '',
			email: '',
			comment: '',
		},
	});
};
