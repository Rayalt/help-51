import {SkeletonProps} from "../model/types";
import {CSSProperties, useMemo} from "react";
import cn from "classnames";
import classes from '../skeleton.module.scss';

const Skeleton = ({
	className,
	s,
	w = '100%', 
	h = '100%', 
	brs = 4,
}: SkeletonProps) => {
	const styles: CSSProperties = useMemo(() => {
		const skeletonSizeType = (size: string | number) => {
			return typeof size === 'number' ? size + 'px' : size;
		};
		
		const skeletonSizes = (
			w: string | number, 
			h: string | number,
			s?: string | number, 
		) => {
			if (s) {
				return {
					'--skeleton-w': skeletonSizeType(s),
					'--skeleton-h': skeletonSizeType(s),
				};
			}
			return {
				'--skeleton-w': skeletonSizeType(w),
				'--skeleton-h': skeletonSizeType(h),
			}
		};
		
		return {
			...skeletonSizes(w, h, s),
			'--skeleton-brs': skeletonSizeType(brs),
		} as CSSProperties;
	}, [w, h, brs]);
	
	return (
		<div
			style={styles}
			className={cn(classes.skeleton, className)}
		/>
	);
};

export { Skeleton };