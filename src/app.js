import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import moment from 'moment';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    const expenses = store.getState().expenses;
    const filters = store.getState().filters;
    console.log(getVisibleExpenses(expenses, filters));
})

store.dispatch(addExpense({description: 'Water bill', amount: 25000, createdAt: moment()}));
store.dispatch(addExpense({description: 'Phone bill', amount: 75000, createdAt: moment()}));
store.dispatch(addExpense({description: 'Gas bill', amount: 30000, createdAt: moment()}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById(`app`));