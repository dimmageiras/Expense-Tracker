import ExpensesModel from "models/expenses.model";

type ExpenseForm = {
	handleCloseForm: () => void;
	onAddNewExpense: (expense: ExpensesModel) => void;
};

export default ExpenseForm;
