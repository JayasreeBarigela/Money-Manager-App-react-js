import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    transactionTitle: '',
    transactionAmount: '',
    transactionType: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onChangeTitle = event => {
    this.setState({transactionTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({transactionAmount: parseInt(event.target.value)})
  }

  onChangeTransactionType = event => {
    this.setState({transactionType: event.target.value})
  }

  onClickAdd = () => {
    const {transactionTitle, transactionAmount, transactionType} = this.state
    const newList = {
      id: uuidv4(),
      transactionTitle,
      transactionAmount,
      transactionType,
    }
    if (transactionType === transactionTypeOptions[0].optionId) {
      this.setState(prevState => ({
        income: prevState.income + transactionAmount,
        balance: prevState.balance + transactionAmount,
        historyList: [...prevState.historyList, newList],
        transactionTitle: '',
        transactionAmount: '',
        transactionType: 'Income',
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - transactionAmount,
        expenses: prevState.expenses + transactionAmount,
        historyList: [...prevState.historyList, newList],
        transactionTitle: '',
        transactionAmount: '',
        transactionType: 'Income',
      }))
    }
  }

  deleteTransaction = transactionDetails => {
    const {id, transactionAmount, transactionType} = transactionDetails
    if (transactionType === transactionTypeOptions[0].optionId) {
      this.setState(prevState => ({
        historyList: prevState.historyList.filter(each => each.id !== id),
        balance: prevState.balance - transactionAmount,
        income: prevState.income - transactionAmount,
      }))
    } else {
      this.setState(prevState => ({
        historyList: prevState.historyList.filter(each => each.id !== id),
        balance: prevState.balance + transactionAmount,
        expenses: prevState.expenses - transactionAmount,
      }))
    }
  }

  render() {
    const {
      balance,
      income,
      expenses,
      historyList,
      transactionTitle,
      transactionAmount,
      transactionType,
    } = this.state
    return (
      <div className="container">
        <div className="welcome-card">
          <h1 className="greet-text">Hi Richard</h1>
          <p className="welcome-text">
            Welcome back to your
            <span className="app-title"> Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>
        <div className="form-history-container">
          <div className="form-container">
            <h1 className="">Add Transaction</h1>
            <label htmlFor="title">TITlE</label>
            <br />
            <input
              id="title"
              placeholder="TITlE"
              value={transactionTitle}
              onChange={this.onChangeTitle}
            />
            <br />
            <label htmlFor="amount">AMOUNT</label> <br />
            <input
              id="amount"
              value={transactionAmount}
              placeholder="AMOUNT"
              onChange={this.onChangeAmount}
            />{' '}
            <br />
            <label htmlFor="transactionType">TYPE</label> <br />
            <select
              id="transactionType"
              className="form-control"
              value={transactionType}
              onChange={this.onChangeTransactionType}
            >
              <option value={transactionTypeOptions[0].optionId}>
                {transactionTypeOptions[0].displayText}
              </option>
              <option value={transactionTypeOptions[1].optionId}>
                {transactionTypeOptions[1].displayText}
              </option>
            </select>{' '}
            <br />
            <button type="button" className="" onClick={this.onClickAdd}>
              Add
            </button>
          </div>
          <div className="form-container">
            <h1>History</h1>
            <ul>
              <li className="history-card-container">
                <p className="text">Title</p>
                <p className="text">Amount</p>
                <p className="text">Type</p>
              </li>
              {historyList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
