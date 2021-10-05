import numeral from 'numeral';
import React from 'react';
import { connect } from 'react-redux';
import getAllExpenses from '../selectors/expenses';
import getTotalAmount from '../selectors/expenses-total'

export const ExpensesSummary = (props) => {
    const filteredExpenses = getAllExpenses(props.expenses, props.filters);
    return (
        <div>
            <p>Viewing {filteredExpenses.length} {filteredExpenses.length === 1 ? 'expense' : 'expenses'} totaling {numeral(getTotalAmount(filteredExpenses) / 100).format('$0,0.00')}.</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    expenses: state.expenses,
    filters: state.filters,
})

export default connect(mapStateToProps)(ExpensesSummary)