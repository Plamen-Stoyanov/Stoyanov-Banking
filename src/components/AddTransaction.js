import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const  AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    // get the addTransaction action so we can add this to the button later
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = ev => {
      ev.preventDefault();

      const newTransaction = {
        // take some random id
        id: Math.floor(Math.random() * 1000000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className ="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(ev) => setText(ev.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  value={amount} onChange={(ev) => setAmount(ev.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </div>
    )
}
