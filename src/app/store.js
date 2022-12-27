// import { configureStore } from '@reduxjs/toolkit';

// // import counterReducer from '../features/counter/counterSlice';
// import todosReducer from '../reducers';

// export const store = configureStore({
//   reducer: {
//     // counter: counterReducer,
//     todos: todosReducer,
//   },
// });

import {createStore} from 'redux'
import todosReducer from '../reducers/index'

export const store = createStore(todosReducer)

