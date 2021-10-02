import { test, expect, beforeEach } from '@jest/globals';
import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
});

test('should render ExpenseListFilters with default filter data.', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with dummy filter data.', () => {
    wrapper.setProps({ filters: altFilters })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const e = { target: { value: 'e' } }
    wrapper.find('input').simulate('change', e);
    expect(setTextFilter).toHaveBeenLastCalledWith(e.target.value);
});

test('should sort by date', () => {
    wrapper.setProps( {filter: altFilters })
    const e = { target: { value: 'date' }}
    wrapper.find('select').simulate('change', e);
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const e = { target: { value: 'amount' } }
    wrapper.find('select').simulate('change', e)
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(100).add(8, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('should handle date focus changes', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('startDate');
    expect(wrapper.state('calendarFocused')).toBe('startDate')
});
