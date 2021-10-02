import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    startDateId: '1',
    endDateId: '2'
}

const altFilters = {
    text: 'bill',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().startOf('month').add(30, 'days'),
    startDateId: '1',
    endDateId: '2',
}

export { filters, altFilters };