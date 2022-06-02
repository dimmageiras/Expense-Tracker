import ExpensesModel from "models/expenses.model";

type ExpensesProps = {
	expenses: ExpensesModel[];
};

type ExpensesChartProps = {
	expensesToShow: ExpensesModel[];
};

export default ExpensesProps;
export {ExpensesChartProps};
