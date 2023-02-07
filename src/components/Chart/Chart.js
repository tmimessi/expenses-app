import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value) // transforming a dataPoint object to just the number, the number stored in dataPoint.value and therefore 'map' on dataPoints will return a new array which is just an array of numbers, in this case, 12 values, since it's 12 months.
  const totalMaximum = Math.max(...dataPointValues) // pulling out all the array elements and add them as standalone arguments.
  
  return (
    <div className="chart">
      {/* creating as many chartbar components as we have data points */}
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
