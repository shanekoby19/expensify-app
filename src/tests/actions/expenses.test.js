import { expect, test } from "@jest/globals";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import moment from 'moment';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '234343322221' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '234343322221'
    });
});

test('should return a new object with the expense values edited.', () => {
    const action = editExpense('234333', { note: 'spotify' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '234333',
        updates: {
            note: 'spotify'
        }
    });
});

test('should setup add expense action object with provided values.', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent.'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})

test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: moment(0),
        note: '',
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})