import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const  Transaction = ({transaction}) => {
    // get the deleteTransaction action so we can add this to the button later
    const { deleteTransaction } = useContext(GlobalContext);

    // check if the transaction is possitive or negative
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        // change the transaction collor to green / red based on the class
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
           {transaction.text} <span> {sign}${Math.abs(transaction.amount)} </span>
           <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
