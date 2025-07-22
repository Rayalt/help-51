import cn from 'classnames';
import {FileLoaderProps} from "shared/ui/file-loader/types/types";
import {Button} from "shared/ui";

const FileLoader = ({ children, className }: FileLoaderProps) => {
	return (
		<div
			className={ cn( className) }
		>
			<Button></Button>
			
		</div>
	);
};

export { FileLoader };