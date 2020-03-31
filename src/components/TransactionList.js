import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

// get the transactions {} from the Global Contex state
export const TransactionList = () => {
 const {transactions} = useContext(GlobalContext);

 
    return (
      <>
      <h3>History</h3>
        <ul className="list">
        {transactions.map(transaction => ( <Transaction key={transaction.id} transaction = {transaction} />))}
        </ul>
      </>
    )
}
