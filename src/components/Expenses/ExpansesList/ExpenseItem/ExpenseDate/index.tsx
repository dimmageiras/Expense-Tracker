import {dateToISOString, dd, longMonth, yyyy} from "shared/helpers/date.helper";
import ExpenseDateProps from "./ExpenseDateProps";
import styles from "./ExpenseDate.module.scss";

const ExpenseDate = ({date}: ExpenseDateProps) => {
	return (
		<>
			<time className={styles.date} dateTime={dateToISOString(date)}>
				<span className={styles.month}>{longMonth(date)}</span>
				<span className={styles.year}>{yyyy(date)}</span>
				<span className={styles.day}>{dd(date)}</span>
			</time>
		</>
	);
};

export default ExpenseDate;
