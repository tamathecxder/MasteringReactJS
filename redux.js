const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 18
}

// 2. Membuat Reducer ({Tasklist}suatu fungsi yang mana store ini adalah value, value tersebut bisa kita update hanya oleh reducer. sehingga tidak ada fungsi lain yang bisa mengupdate store selain reducer)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      return { ...state, age: state.age + 1 };
    case 'CHANGE_VALUE':
      return { ...state, value: action.newValue };
    default:
      return state;
      break;
  }
}

// 1. Membuat Store (tempat dimana kita menaruh state agar nantinya bisa digunakan secara global)
const store = createStore(rootReducer);
console.log(store.getState());

// 4. Subscription (proses yang setiap ada perubahan pada store, subscribe ini akan terpanggil)
store.subscribe(() => {
  console.log('store change:', store.getState());
});

// 3. Membuat Dispatcher/Action (proses pemanggilan sebuah instruksi yang disediakan oleh reducer)
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'CHANGE_VALUE', newValue: 10}); 





