const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  value: 0
}

// Membuat Reducer ({Tasklist}suatu fungsi yang mana store ini adalah value, value tersebut bisa kita update hanya oleh reducer. sehingga tidak ada fungsi lain yang bisa mengupdate store selain reducer)
const rootReducer = (state = initialState, action) => {
  return state;
}
// Membuat Store (tempat dimana kita menaruh state agar nantinya bisa digunakan secara global)
const store = createStore(rootReducer);
console.log(store.getState());

// Membuat Dispatcher/Action (proses pemnaggilan sebuah instruksi yang disediakan oleh reducer)



// Subscription (proses pemanggilan store yang diperlukan)





