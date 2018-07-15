import { createStore } from 'redux';

// Action generators - functions that return action objects

 const incrementCount = ({ incrementBy = 1} = {}) => ({ // we destructure the object passed in
     type: 'INCREMENT',
     incrementBy // as the object property and the variable are the same, we use the shorthand value
 });

 const decrementCount = ({ decrementBy = 1} = {}) => ({
     type: 'DECREMENT',
     decrementBy
 });

 const setCount = ({count} = {}) => ({
     type: 'SET',
     count
 });

 const resetCount = () => ({
     type: 'RESET'
 });

const store = createStore((state = {count: 0}, action) => { // the first arg is the default, the second is the action
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => { // you subscribe a function to each state change // when we want to stop we call unsubscribe();
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 9 }));

store.dispatch(incrementCount());

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 15 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: -101 }));
