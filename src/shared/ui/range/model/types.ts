import {CSSProperties, HTMLProps} from "react";
import {ClientsType} from "shared/config/clients";

export interface RangeProps extends HTMLProps<HTMLElement> {
	view?: ClientsType['view'];
	ngStyle?: CSSProperties;
}