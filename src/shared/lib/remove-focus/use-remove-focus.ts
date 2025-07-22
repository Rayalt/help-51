import {MutableRefObject} from 'react';

export const useRemoveFocus = (itemRef: MutableRefObject<HTMLElement>) => {
	itemRef.current.blur();
};
