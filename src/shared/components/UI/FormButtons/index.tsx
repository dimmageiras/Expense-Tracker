import FormButtonsProps from "./FormButtons.props";
import styles from "./FormButtons.module.scss";

const FormButtons = ({type, onClick, children}: FormButtonsProps) => {
	return (
		<button type={type} onClick={onClick} className={styles.btn}>
			{children}
		</button>
	);
};

export default FormButtons;
