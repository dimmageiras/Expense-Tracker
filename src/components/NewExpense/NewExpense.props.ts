import ExpensesModel from "models/expenses.model";

type NewExpenseProps = {
	handleAddNewExpense: (expense: ExpensesModel) => void;
};

export default NewExpenseProps;
