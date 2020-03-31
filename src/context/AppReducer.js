export default (state, action) => {
  // Check the dispatch type -> GlobalState.js (Actions)
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          // filter anything that have payload id
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }