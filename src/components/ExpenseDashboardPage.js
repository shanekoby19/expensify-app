import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ConnectedExpenseListFilters from './ExpenseListFilters';

export default () => (
    <div>
        <ConnectedExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);