import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: `INCREMENT`,
    incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy,
})

const setCount = ( { count = store.getState().count } = {} ) => ({
    type: 'SET',
    count,
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// 1.) Pure functions - only use values within it's scope. No globals. 
// 2.) Never directly change state or action.

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy }
        case 'DECREMENT':
            return { count: state.count - action.decrementBy }
        case 'SET': 
            return { count: action.count }
        case 'RESET':
            return { count: 0 }
        default:
            return state
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - an object that gets sent to the store.

// Increment the count
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

// Decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount({}));

store.dispatch(setCount({ count: 10 }));