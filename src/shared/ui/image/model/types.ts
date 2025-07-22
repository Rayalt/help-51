import { ImgHTMLAttributes } from 'react';

import ozon from 'app/markup/graphics/img/ozon.jpg';
import directorAvatar from 'app/markup/graphics/img/director-avatar.jpg';
import headAvatar from 'app/markup/graphics/img/head-avatar.jpg';
import developerAvatar from 'app/markup/graphics/img/developer-avatar.jpg';

export const imageMap = {
	ozon,
	directorAvatar,
	headAvatar,
	developerAvatar,
};

export type ImageKey = keyof typeof imageMap;

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}