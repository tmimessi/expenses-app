import Chart from './Chart/Chart'

const ExpensesChart = props => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ]
  // looping through all our expenses (which we get via props) and then we wanna have a look at every expense, get the month of it and update the value of the appropriate data point by the expense amount.
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth() // starting at 0 => january => 0 // this starts at 0 and ends at 11 which is exactly the case for the index of the data points
    chartDataPoints[expenseMonth].value += expense.amount // updating the value of the selected data point by adding something to it with the += shortcut operator and add the expense amount
  }

  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart
