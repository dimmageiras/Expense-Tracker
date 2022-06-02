import {useState} from "react";
import {currentDay} from "shared/helpers/date.helper";
import FormButtons from "shared/components/UI/FormButtons";
import ExpenseFormProps from "./ExpenseForm.props";
import styles from "./ExpenseForm.module.scss";

const ExpenseForm = ({handleCloseForm, onAddNewExpense}: ExpenseFormProps) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState(currentDay);
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {id, value} = event.currentTarget;
		id === "title"
			? setEnteredTitle(value)
			: id === "amount"
			? setEnteredAmount(value)
			: setEnteredDate(value);
	};
	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newExpense = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		onAddNewExpense(newExpense);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate(currentDay);
	};
	return (
		<>
			<form className={styles.form} onSubmit={handleFormSubmit}>
				<fieldset className={styles.controls}>
					<span className={styles.control}>
						<label htmlFor="title" className={styles.label}>
							Title
						</label>
						<input
							type="text"
							id="title"
							className={styles.input}
							onChange={handleInputChange}
							value={enteredTitle}
							autoComplete="off"
							required
						/>
					</span>
					<span className={styles.control}>
						<label htmlFor="amount" className={styles.label}>
							Amount
						</label>
						<input
							type="number"
							id="amount"
							className={styles.input}
							onChange={handleInputChange}
							value={enteredAmount}
							min="0.01"
							step="0.01"
							autoComplete="off"
							required
						/>
					</span>
					<span className={styles.control}>
						<label htmlFor="date" className={styles.label}>
							Date
						</label>
						<span className={styles.inputDateWrapper}>
							<input
								type="date"
								id="date"
								className={`${styles.input} ${styles.date}`}
								onChange={handleInputChange}
								value={enteredDate}
								max={currentDay}
								autoComplete="off"
								required
							/>
							<span className={styles.inputDateIcon} />
						</span>
					</span>
				</fieldset>
				<span className={styles.btnWrapper}>
					<FormButtons type="button" onClick={handleCloseForm}>
						Cancel
					</FormButtons>
					<FormButtons type="submit">Add Expense</FormButtons>
				</span>
			</form>
		</>
	);
};

export default ExpenseForm;
