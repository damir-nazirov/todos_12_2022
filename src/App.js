import React from 'react';
import TodoInput from './features/todoInput/TodoInput'
import TodoList from './features/todoList/TodoList';

import './App.css';

function App() {
    return (
    <div className="App">
        <TodoInput/>
        <TodoList/>
    </div>
  );
}

export default App;
