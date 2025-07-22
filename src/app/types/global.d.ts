declare module '*.scss' {
	interface IClassNames {
		[className: string]: string;
	}

	const classNames: IClassNames;
	export = classNames;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg' {
	const value: string;
	export default value;
}

declare module '*.svg' {
	import * as React from 'react';
	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
	export { ReactComponent };
}

declare module 'react-input-mask';

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
}: T;

type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T;
};