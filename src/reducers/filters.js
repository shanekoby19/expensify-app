import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

// Filters Reducer
const filtersReduceDefaultState = {
    text: ``,
    sortBy: 'date',
    startDate: moment().startOf('month'),
    startDateId: uuidv4(),
    endDate: moment().endOf('month'),
    endDateId: uuidv4(),
}

export default (state = filtersReduceDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text,
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount',
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate,
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate,
            }
        default:
            return state
    }
}