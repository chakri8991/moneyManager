// Write your code here
import {Component} from 'react'

import './index.css'

class Transaction extends Component {
  onDeleteTransaction = () => {
    const {onClickDelete, transactionDetails} = this.props
    const {id} = transactionDetails
    onClickDelete(id)
  }

  render() {
    const {transactionDetails} = this.props
    const {titles, amount, type} = transactionDetails
    return (
      <div className="historyStyle">
        <p>{titles}</p>
        <p>Rs {amount}</p>
        <p>{type}</p>
        <button
          type="button"
          onClick={this.onDeleteTransaction}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    )
  }
}

export default Transaction
