// Write your code here
// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details">
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="logo"
        />
        <div className="text-container">
          <p className="card-heading">Your Balance</p>
          <p className="money" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="logo"
        />
        <div className="text-container">
          <p className="card-heading">Your Income</p>
          <p className="money" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="logo"
        />
        <div className="text-container">
          <p className="card-heading">Your Expenses</p>
          <p className="money" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
