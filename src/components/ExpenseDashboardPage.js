import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ConnectedExpenseListFilters from './ExpenseListFilters';
import ConnectedExpensesSummary from './ExpensesSummary'

export default () => (
    <div>
        <ConnectedExpensesSummary />
        <ConnectedExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);