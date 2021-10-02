import moment from 'moment';

export default ( expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = text ? expense.description.toLowerCase().includes(text.toLowerCase()) : true;
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((expenseOne, expenseTwo) => {
        if(sortBy === 'amount') {
            return expenseOne.amount >= expenseTwo.amount ? -1 : 1;
        }
        else if(sortBy === 'date') {
            return expenseOne.createdAt >= expenseTwo.createdAt ? -1 : 1;
        }
    })
}