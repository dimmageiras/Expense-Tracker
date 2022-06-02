import {HTMLAttributes} from "react";

type CardProps = {
	tagName: React.ElementType<HTMLAttributes<HTMLElement>>;
	className?: string;
	children: React.ReactNode;
};

export default CardProps;
