import CardProps from "./Card.props";
import styles from "./Card.module.scss";

const Card = ({tagName, className, children}: CardProps) => {
	const classes = !className ? styles.card : `${styles.card} ${className}`;
	const TagName = tagName;
	return (
		<>
			<TagName className={classes}>{children}</TagName>
		</>
	);
};

export default Card;
