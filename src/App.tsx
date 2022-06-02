import {useState} from "react";
import {nanoid} from "nanoid";
import ExpensesModel from "models/expenses.model";
import NewExpense from "components/NewExpense";
import Expenses from "components/Expenses";

const DUMMY_EXPENSES: ExpensesModel[] = [
	{
		id: nanoid(),
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: nanoid(),
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: nanoid(),
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: nanoid(),
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState<ExpensesModel[]>(DUMMY_EXPENSES);
	const addNewExpense = (newExpense: ExpensesModel) => {
		setExpenses(prevExpenses => [...prevExpenses, {id: nanoid(), ...newExpense}]);
	};
	return (
		<>
			<NewExpense handleAddNewExpense={addNewExpense} />
			<Expenses expenses={expenses} />
		</>
	);
};

export default App;
