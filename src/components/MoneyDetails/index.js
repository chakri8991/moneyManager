import {Component} from 'react'

import './index.css'

class MoneyDetails extends Component {
  render() {
    // const {transactionTypeOptions} = this.props
    const {balanceAmount, IncomeAmount, expenseAmount} = this.props
    return (
      <ul className="unStyle">
        <li className="mainLi">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="imgStyle"
          />
          <div>
            <p>Your Balance</p>
            <p data-testid="balanceAmount">Rs {balanceAmount}</p>
          </div>
        </li>
        <li className="mainLi incomeStyle">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="imgStyle "
          />
          <div>
            <p>Your Income</p>
            <p data-testid="incomeAmount">Rs {IncomeAmount}</p>
          </div>
        </li>
        <li className="mainLi expensesStyle">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="imgStyle"
          />
          <div>
            <p>Your Expenses</p>
            <p data-testid="expensesAmount">Rs {expenseAmount}</p>
          </div>
        </li>
      </ul>
    )
  }
}

export default MoneyDetails
