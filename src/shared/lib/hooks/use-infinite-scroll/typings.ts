import { MutableRefObject } from 'react';

export interface useInfiniteScrollOptions {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef: MutableRefObject<HTMLElement>;
}