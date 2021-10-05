import { test, expect } from "@jest/globals";
import React from 'react';
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { filters } from '../fixtures/filters';

test('should render a paragraph totaling a single expense', () => {
    const wrapper = shallow( <ExpensesSummary expenses={[expenses[0]]} filters={filters}/> );
    expect(wrapper).toMatchSnapshot();
})

test('should render a paragraph totaling all the expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} filters={filters}/>);
    expect(wrapper).toMatchSnapshot();
})