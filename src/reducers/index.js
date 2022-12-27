const initialstate = {
  todos: localStorage.localTodos ? JSON.parse(localStorage.getItem('localTodos')) : [],
  inputValue: ''
}

const updateLocalTodos = (state) => {
localStorage.setItem('localTodos', JSON.stringify(state.todos));
}

const todosReducer = (state = initialstate, action) => {
    switch (action.type) {
      case 'ADD_TODO':
       { const updatedState =  {...state, inputValue: '', todos: [...state.todos, {id: action.id, text: state.inputValue, done: false,}]}
        updateLocalTodos(updatedState)
        return updatedState}
      case 'TOGGLE_DONE':
          { 
            let {todos} = state;
            const itemIndex = todos.findIndex(({id}) => id === action.id)
            const todoItem = todos[itemIndex]
            
            todos[itemIndex] = {...todoItem, done: !todoItem.done}
            const updatedState = {...state, todos: [...todos]}
            updateLocalTodos(updatedState)
            return updatedState
          }
            // case 'DELETE_TODO':
    //     return state.filter(item => {
    //        return action.id !== item.id
    //     })
     case 'DELETE_TODO':
    {  let {todos} = state;
      const itemIndex = todos.findIndex(({id}) => id === action.id)
      todos.splice(itemIndex, 1)
      const updatedState = {...state, todos: [...todos]}
      updateLocalTodos(updatedState)
            return updatedState
    }

        case 'CHANGE_TEXT':
          return {...state, inputValue: action.text}
      default:
        return state
        
    }
    

  }
  
  export default todosReducer