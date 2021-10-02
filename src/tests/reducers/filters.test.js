import { expect, test } from '@jest/globals';
import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@iNIT' })
    expect(state).toEqual({ 
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        startDateId: expect.any(String),
        endDate: moment().endOf('month'),
        endDateId: expect.any(String),
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const defaultState = {
        sortBy: 'amount'
    }
    const state = filtersReducer(defaultState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'sometext' });
    expect(state).toEqual({
        text: 'sometext',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        startDateId: expect.any(String),
        endDate: moment().endOf('month'),
        endDateId: expect.any(String),
    })
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        startDateId: expect.any(String),
        endDate: moment().endOf('month'),
        endDateId: expect.any(String),
    })
})

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0) });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        startDateId: expect.any(String),
        endDate: moment(0),
        endDateId: expect.any(String),
    })
})