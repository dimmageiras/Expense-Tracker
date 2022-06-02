type FormButtonsProps = {
	type: "submit" | "reset" | "button";
	onClick?: () => void;
	children: React.ReactNode;
};

export default FormButtonsProps;
