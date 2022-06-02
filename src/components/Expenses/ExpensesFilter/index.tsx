import ExpensesFilterProps from "./ExpensesFilter.props";
import styles from "./ExpensesFilter.module.scss";

const ExpensesFilter = ({
	selectedYear,
	onSelectedYear,
}: ExpensesFilterProps) => {
	const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) =>
		onSelectedYear(event.currentTarget.value);
	return (
		<>
			<section className={styles.expensesFilter}>
				<form className={styles.control}>
					<label className={styles.label}>Filter by year</label>
					<select
						className={styles.select}
						onChange={handleSelectChange}
						value={selectedYear}>
						<option value="2022">2022</option>
						<option value="2021">2021</option>
						<option value="2020">2020</option>
						<option value="2019">2019</option>
					</select>
				</form>
			</section>
		</>
	);
};

export default ExpensesFilter;
