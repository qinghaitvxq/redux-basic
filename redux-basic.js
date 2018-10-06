const redux = require('redux');
const createStore = redux.createStore;

const initialStore = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialStore, action) => {
    // if(action.type === 'INC_COUNTER'){
    //     return {
    //         ...state,
    //         counter:state.counter + 1
    //     }
    // }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription : subscription make sure that I don't have to manually call getstate
// if I want to get the current snapshot of state 
// but to inform me whenever I need to get a new state because something changed.

// subscribe takes an arg, a function which will be executed whenever the state is updated.
store.subscribe(() => {
    console.log('[Subscription]',store.getState());
});

// Dispatching Action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value: 10});

console.log(store.getState());

