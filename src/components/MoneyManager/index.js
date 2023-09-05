import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import Transaction from '../TransactionItem'

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

const transactionDetailsOptions = []

class MoneyManager extends Component {
  state = {
    tranHistory: transactionDetailsOptions,
    amount: '',
    title: '',
    typeOfIncome: transactionTypeOptions[0].optionId,
  }

  DeleteTransaction = id => {
    const {tranHistory} = this.state
    const updatedList = tranHistory.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      tranHistory: updatedList,
    })
  }

  onSubmitFun = event => {
    event.preventDefault()
    const {title, amount, typeOfIncome} = this.state
    const latestHistory = {
      id: uuidv4(),
      titles: title,
      amount: parseInt(amount),
      type: typeOfIncome,
    }

    this.setState(prevState => ({
      tranHistory: [...prevState.tranHistory, latestHistory],
      title: '',
      amount: '',
      typeOfIncome: transactionTypeOptions[0].optionId,
    }))
  }

  amountFun = event => {
    this.setState({amount: event.target.value})
  }

  titleFun = event => {
    this.setState({title: event.target.value})
  }

  typeFun = event => {
    console.log(event.target.value)
    this.setState({typeOfIncome: event.target.value})
  }

  getExpenses = () => {
    const {tranHistory} = this.state
    let expensesAmount = 0
    tranHistory.forEach(eachTran => {
      if (
        eachTran.type.toLowerCase() ===
        transactionTypeOptions[1].displayText.toLowerCase()
      ) {
        expensesAmount += eachTran.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {tranHistory} = this.state
    console.log(tranHistory)
    let IncomeAmount = 0
    tranHistory.forEach(eachTran => {
      if (
        eachTran.type.toLowerCase() ===
        transactionTypeOptions[0].displayText.toLowerCase()
      ) {
        IncomeAmount += eachTran.amount
      }
    })

    return IncomeAmount
  }

  getBalance = () => {
    const {tranHistory} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expenseAmount = 0
    tranHistory.forEach(eachTransaction => {
      if (
        eachTransaction.type.toLowerCase() ===
        transactionTypeOptions[0].displayText.toLowerCase()
      ) {
        incomeAmount += eachTransaction.amount
      } else {
        expenseAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expenseAmount

    return balanceAmount
  }

  render() {
    const {tranHistory, amount, title, typeOfIncome} = this.state

    const balanceAmount = this.getBalance()
    const IncomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div>
        <h1>Hi, chakri</h1>
        <p>welcome back to your Money Manager</p>
        <div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            IncomeAmount={IncomeAmount}
            expenseAmount={expensesAmount}
          />
        </div>
        <div className="bottomDiv">
          <div>
            <form className="formDiv" onSubmit={this.onSubmitFun}>
              <h1>Add Transaction</h1>

              <label htmlFor="title">Title</label>
              <input
                value={title}
                type="text"
                id="title"
                onChange={this.titleFun}
              />
              <label htmlFor="amount">Amount</label>
              <input
                value={amount}
                type="text"
                id="amount"
                onChange={this.amountFun}
              />
              <label htmlFor="check">Type</label>
              <select id="check" onChange={this.typeFun} value={typeOfIncome}>
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="his">
            <h1>History</h1>
            <div className="historyDiv">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
            </div>
            {tranHistory.map(each => (
              <Transaction
                key={each.id}
                transactionDetails={each}
                onClickDelete={this.DeleteTransaction}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
