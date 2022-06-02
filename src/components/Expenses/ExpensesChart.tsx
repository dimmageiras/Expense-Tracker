import {allMonthsShort} from "shared/helpers/date.helper";
import Chart from "./Chart";
import {ExpensesChartProps} from "./Expenses.props";

const ExpensesChart = ({expensesToShow}: ExpensesChartProps) => {
	const chartDataPoints = allMonthsShort.map(month => ({
		label: month,
		value: 0,
	}));
	expensesToShow.forEach(expense => {
		const expenseMonth = new Date(expense.date).getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	});
	return (
		<>
			<Chart dataPoints={chartDataPoints} />
		</>
	);
};

export default ExpensesChart;
