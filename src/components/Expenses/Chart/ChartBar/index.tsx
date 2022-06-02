import ChartBarProps from "./ChartBar.props";
import styles from "./ChartBar.module.scss";

const ChartBar = ({value, label, sum}: ChartBarProps) => {
	const zeroPct = "0%";
	const calcPct = `${Math.round((value * 100) / sum)}%`;
	const barFillHeight = value === 0 ? zeroPct : calcPct;
	const tabIndex = 0;
	return (
		<>
			<span className={styles.chartBar}>
				<abbr
					className={styles.inner}
					title={`${barFillHeight} of the yearly expenses`}
					tabIndex={tabIndex}>
					<span className={styles.fill} style={{height: barFillHeight}}></span>
				</abbr>
				<p className={styles.label}>{label}</p>
			</span>
		</>
	);
};

export default ChartBar;
