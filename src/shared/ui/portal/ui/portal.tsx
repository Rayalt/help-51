import { createPortal } from 'react-dom';
import { PortalProps } from './typings';

const Portal = ({ children, element = document.body }: PortalProps) => {
	return createPortal(children, element);
};

export { Portal };