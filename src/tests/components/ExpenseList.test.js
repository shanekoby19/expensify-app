import { test, expect } from '@jest/globals'
import { ExpenseList } from '../../components/ExpenseList';
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render an empty expense list', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
})