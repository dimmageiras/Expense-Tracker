import {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import FormButton from "shared/components/UI/FormButtons";
import NewExpenseProps from "./NewExpense.props";
import styles from "./NewExpense.module.scss";

const NewExpense = ({handleAddNewExpense}: NewExpenseProps) => {
	const [showForm, setShowForm] = useState(false);
	const showHideForm = () => {
		setShowForm(!showForm);
	};
	return (
		<>
			<article className={styles.newExpense}>
				{!showForm ? (
					<FormButton type="button" onClick={showHideForm}>
						Add New Expense
					</FormButton>
				) : (
					<ExpenseForm
						handleCloseForm={showHideForm}
						onAddNewExpense={handleAddNewExpense}
					/>
				)}
			</article>
		</>
	);
};

export default NewExpense;
