import ExpenseItem from "./ExpenseItem";
import ExpensesListProps from "./ExpensesList.props";
import styles from "./ExpensesList.module.scss";

const ExpensesList = ({expensesToShow}: ExpensesListProps) => {
	return (
		<>
			<section>
				{expensesToShow.length === 0 ? (
					<h2 className={styles.fallback}>No expenses to show.</h2>
				) : (
					<ul className={styles.expensesList}>
						{expensesToShow.map(expense => (
							<ExpenseItem
								key={expense.id}
								title={expense.title}
								amount={expense.amount}
								date={expense.date}
							/>
						))}
					</ul>
				)}
			</section>
		</>
	);
};

export default ExpensesList;
