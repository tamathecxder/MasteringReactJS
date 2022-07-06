const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  if ( action.type === 'ADD_AGE' ) {
    return {
      ...state,
      age: state.age + 1
    }
  }

  if ( action.type === 'CHANGE_VALUE' ) {
    return {
      ...state, 
      value: state.value + action.newValue
    }
  }
  
  return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());


// Dispatch / Action Dispatcher
store.dispatch({
  type: 'ADD_AGE'
});

store.dispatch({
  type: 'CHANGE_VALUE',
  newValue: 100
});

console.log(store.getState()); // melihat isi initial state yang sudah dilakukan dispatch

// Subscription