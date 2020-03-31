import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

// get the transactions {} from the Global Contex state
export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    // Calculate the balance

    // Make new array with transactions amounts only
    const amounts = transactions.map(transaction => transaction.amount);
    
    // Sum all amounts and fix them to 2 zeros
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
     <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
        </div>
    )
}
