// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {
    transactionTitle,
    transactionAmount,
    transactionType,
  } = transactionDetails
  const deleteItem = () => {
    deleteTransaction(transactionDetails)
  }
  return (
    <li className="history-card-container">
      <p className="text">{transactionTitle}</p>
      <p className="text">{transactionAmount}</p>
      <p className="text">{transactionType}</p>
      <button type="button" testid="delete" onClick={deleteItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
