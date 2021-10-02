import { setTextFilter, 
        sortByDate, 
        sortByAmount, 
        setStartDate, 
        setEndDate,  
    } from "../../actions/filters";
import moment from 'moment';
import { expect, test } from "@jest/globals";
import { v4 } from "uuid";

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0),
    })
})

test('should generate an action object for sorting by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should generate an action object for sorting by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('should generate an action object to set the text filter to the provided value.', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill',
    })
})

test('should generate an action object to set the text filter to empty.', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});