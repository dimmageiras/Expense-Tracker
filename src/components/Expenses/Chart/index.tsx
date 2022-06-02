import ChartBar from "./ChartBar";
import ChartProps from "./Chart.props";
import styles from "./Chart.module.scss";

const Chart = ({dataPoints}: ChartProps) => {
	const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
	const dataPointsSum = dataPointValues.reduce(
		(prevValue, currValue) => prevValue + currValue
	);
	return (
		<>
			<section className={styles.chart}>
				{dataPoints.map(dataPoint => (
					<ChartBar
						key={dataPoint.label}
						value={dataPoint.value}
						label={dataPoint.label}
						sum={dataPointsSum}
					/>
				))}
			</section>
		</>
	);
};

export default Chart;
