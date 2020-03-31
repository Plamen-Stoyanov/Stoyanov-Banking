import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // Get the amounts
  const amounts = transactions.map(transaction => transaction.amount);

  // Filter only possitive amounts 
  // and add them to the income
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Filter only negative amounts 
  // and add them to the expense
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">{expense}</p>
        </div>
      </div>
  )
}