import { useState } from 'react';
import cn from 'classnames';
import classes from '../image.module.scss';
import { ImageKey, imageMap } from '../model/types';

type ImageProps = {
	src?: string | ImageKey;
	alt?: string;
	className?: string;
	withPlaceholder?: boolean;
	cover?: boolean;
};

const Image = ({
	src,
	alt = '',
	className,
	cover,
	withPlaceholder = false,
}: ImageProps) => {
	const [loaded, setLoaded] = useState(false);

	const realSrc = src && src in imageMap ? imageMap[src as ImageKey] : src;

	if (!realSrc) {
		return (
			<div className={cn(classes.image, className)}>
				{withPlaceholder && <div className={classes.image_placeholder} />}
			</div>
		);
	}

	return (
		<div className={cn(classes.image, className)}>
			{withPlaceholder && !loaded && <div className={classes.image_placeholder} />}
			<img
				src={realSrc}
				alt={alt}
				className={cn(classes.image__figure, {
					[classes.image__figure_visible]: loaded,
					[classes.image__figure_cover]: cover,
				})}
				onLoad={() => setLoaded(true)}
				loading="lazy"
				decoding="async"
			/>
		</div>
	);
};


export { Image };
