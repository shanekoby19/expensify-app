import { test, expect } from "@jest/globals";
import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from '../../components/HelpPage';

test('should render the HelpPage component', () => {
    const wrapper = shallow(<HelpPage />);
    expect(wrapper).toMatchSnapshot();
})