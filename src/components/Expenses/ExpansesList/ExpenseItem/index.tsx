import Card from "shared/components/UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseItemProps from "./ExpenseItemProps";
import styles from "./ExpenseItem.module.scss";

const ExpenseItem = ({title, amount, date}: ExpenseItemProps) => {
	return (
		<Card tagName="li" className={styles.expenseItem}>
			<ExpenseDate date={date} />
			<article className={styles.description}>
				<h2 className={styles.title}>{title}</h2>
				<span className={styles.price}>{amount} RON</span>
			</article>
		</Card>
	);
};

export default ExpenseItem;
