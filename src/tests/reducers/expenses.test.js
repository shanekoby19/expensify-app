import moment from 'moment'
import { test, expect } from '@jest/globals';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([]);
})

test('should add expense to the expenses array', () => {
    const expense = { 
        description: ``,
        note: ``, 
        amount: 0, 
        createdAt: moment(0)  
    }
    const action = { type: 'ADD_EXPENSE', expense }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([...expenses, expense]);
});

test('should remove an expense from the expenses array', () => {
    const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[0].id });
    expect(result).toEqual([expenses[1], expenses[2]]);
})

test('should not remove an expense within invalid id', () => {
    const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id:'200' });
    expect(result).toEqual(expenses);
})

test('should edit an expense from the expenses array', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            id: '20',
        }
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([{
        id: '20',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: moment(0),
    }, expenses[1], expenses[2]]);
})

test('should not edit an expense if id is invalid', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            id: '20',
        }
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
})