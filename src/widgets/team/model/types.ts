import {HTMLAttributes} from "react";
import {TeamItem} from "widgets/team/model/team";

export interface TeamProps extends HTMLAttributes<HTMLElement> {}

export interface TeamItemProps extends HTMLAttributes<HTMLElement> {
	name: TeamItem['name'];
	photo?: TeamItem['photo'];
	position?: TeamItem['position'];
}