import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };
    
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) =>  {
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
    }

    onSortChange = (e) =>  {
        this.props.setTextFilter(e.target.value);
    }

    render = () => {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange={this.onSortChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onTextChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={this.props.filters.startDateId}
                    endDate={this.props.filters.endDate}
                    endDateId={this.props.filters.endDateId}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        ) 
    }
}

const mapStateToProps = (state) => ({
        filters: state.filters,
})

const mapDispatchToProps = (dispatch => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
}))

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);