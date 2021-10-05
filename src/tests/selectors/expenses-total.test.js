import { test, expect } from '@jest/globals';
import React from 'react';
import { shallow } from 'enzyme';
import getTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = getTotalExpenses([]);
    expect(total).toBe(0);
});

test('should return the amount of a single expense', () => {
    const total = getTotalExpenses([expenses[1]]);
    expect(total).toBe(109500);
});

test('should return the amount of all expenses', () => {
    const total = getTotalExpenses(expenses);
    expect(total).toBe(114195);
})