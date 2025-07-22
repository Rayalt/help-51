import {FormEventHandler, HTMLAttributes, ReactNode} from "react";

export type itemContentType = {
	label: string;
	field: ReactNode;
}

export interface FormCardProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
	itemContent?: itemContentType[];
	children?: ReactNode;
	className?: string;
	onSubmit?: FormEventHandler<HTMLFormElement>;
}