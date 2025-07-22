import {useInfiniteScroll} from "shared/lib/hooks/use-infinite-scroll/use-infinite-scroll";
import {MutableRefObject, useRef, UIEvent} from "react";
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/use-app-dispatch";
import {getScrollPath, scrollStopActions} from "features/scroll-stop";
import {useLocation} from "react-router-dom";
import {useInitialEffect} from "shared/lib/hooks/use-initial-effect/use-initial-effect";
import {useSelector} from "react-redux";
import {StateSchema} from "app/providers/store-provider";
import {useThrottle} from "shared/lib/hooks/use-throttle/use-throttle";
import {INFINITE_SCROLL_WRAPPER} from "shared/const/infinite-scroll-wrapper";
import {InfiniteScrollWrapperProps} from "../model/types";

const InfiniteScrollWrapper = ({
	className,
	children,
	onScrollEnd,
}: InfiniteScrollWrapperProps) => {
	
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const scrollPosition = useSelector(
		(state: StateSchema) => getScrollPath(state, pathname)
	);
	
	useInfiniteScroll({
		wrapperRef,
		triggerRef,
		callback: onScrollEnd,
	});
	
	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	})
	
	const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(scrollStopActions.setScrollPosition({
			position: e.currentTarget.scrollTop,
			path: pathname,
		}))
	}, 500);
	
	return (
		<div
			ref={ wrapperRef }
			style={ { flexGrow: 1, overflowY: "auto", height: "100vh" } }
			onScroll={ onScrollHandler }
			id={INFINITE_SCROLL_WRAPPER}
		>
			{ children }
			{ onScrollEnd ?
				<div
					style={ {height: "20px" } }
					ref={ triggerRef }
				></div>
				: null
			}
		</div>
	);
};

export { InfiniteScrollWrapper };