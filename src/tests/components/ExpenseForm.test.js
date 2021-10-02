import { test, expect } from '@jest/globals';
import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';
import expenses from '../fixtures/expenses';

jest.mock('moment');

test('should render ExpenseForm component', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm component with expenses', () => {
    const wrapper = shallow(<ExpenseForm {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot(); 
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', { 
        preventDefault: () => {},
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
    const value = 'a new note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if there is invalid input', () => {
    const value = '23.504'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe('');
})

test('should call on submit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm {...expenses[1]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', { 
        preventDefault: () => {},
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        createdAt: expenses[1].createdAt,
        note: expenses[1].note,
    });
});

test('should set new date on date change.', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set the onfocused state to true', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
})