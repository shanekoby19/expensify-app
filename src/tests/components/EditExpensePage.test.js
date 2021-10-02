import React from 'react';
import { test, expect } from '@jest/globals';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[0]}
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
        />
    )
})

test('should render the EditExpensePage component correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should dispatch edit expense to change an expense.', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should dispatch the remove expense action to remove an express', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});