export default (expenses) => {
    return expenses.reduce((previousValue, currentExpense) => {
        return previousValue + currentExpense.amount
    }, 0);
}