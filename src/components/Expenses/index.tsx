import {useState} from "react";
import {yyyy} from "shared/helpers/date.helper";
import Card from "shared/components/UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpencesList from "./ExpansesList";
import ExpensesProps from "./Expenses.props";
import styles from "./Expenses.module.scss";

const Expenses = ({expenses}: ExpensesProps) => {
	const [yearToShow, setYearToShow] = useState("2020");
	const handleSelectedYear = (selectedYear: string) =>
		setYearToShow(selectedYear);
	const filteredExpenses = expenses.filter(
		expense => String(yyyy(expense.date)) === yearToShow
	);

	return (
		<>
			<Card tagName="article" className={styles.expensesWrapper}>
				<ExpensesFilter
					selectedYear={yearToShow}
					onSelectedYear={handleSelectedYear}
				/>
				<ExpensesChart expensesToShow={filteredExpenses} />
				<ExpencesList expensesToShow={filteredExpenses} />
			</Card>
		</>
	);
};

export default Expenses;
