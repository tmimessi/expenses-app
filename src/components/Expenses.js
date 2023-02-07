import './Expenses.css'
import ExpensesList from './ExpensesList'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import { useState } from 'react'

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  // checking if the year stored in the date is the same is as selected in the filter, i.e, only dates that maches out filteredYear will be kept arount in this filteredExpenses array.
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}
