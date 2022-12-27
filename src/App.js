import React from 'react';
import TodoItem from './features/todoItem/TodoItem';
import TodoInput from './features/todoInput/TodoInput'
import TodoList from './features/todoList/TodoList';
import { useEffect } from 'react';

import { store } from './app/store';
// import {TodoInput} from './features/todoInput/TodoInput';
// import {TodoItem} from './features/todoItem/TodoItem';
// import {Filters} from './features/filters/Filters'

import './App.css';

// const {dispatch, getState, subscribe} = store;

// const data = [
//   {value: 'хлеб',
//    id: 1,
//    done: true 
// },
//   {value: 'молоко',
//    id: 2,
//    done: false  
// }
// ]

// const data2 = getState().todos;
// console.log(data2);






function App() {
    return (
    <div className="App">
        <TodoInput/>
        <TodoList/>
        {/* {data2.map(item => {
          return (
            <TodoItem
              key={item.id}
              value={item.value}
              done={item.done} */}
            {/* />
          )
        })} */}
        {/* <Filters/> */}
      {/* </header> */}
    </div>
  );
}

export default App;
