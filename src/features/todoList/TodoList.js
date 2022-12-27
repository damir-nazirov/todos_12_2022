import { connect } from "react-redux";
// import { store } from "../../app/store";
import TodoItem from "../todoItem/TodoItem"
import styled from "styled-components";
import { toggleDoneTodo } from "../../actions";
import { deleteTodo } from "../../actions";

const UlStl = styled.ul`
    padding: 0;
`

// const {getState} = store;


const TodoList = ({todos}) => {
//     const currentTodos = getState().todos;
//     console.log(currentTodos);
//     const updateLocalTodos = () => {
//     localStorage.setItem('localTodos', JSON.stringify(currentTodos)); // localStorage.removeItem('myCat');
// }

    return (
        <UlStl>
            {todos.map(todo => {
                const handleDone = () => {
                    toggleDoneTodo(todo.id);
                    // updateLocalTodos()
                }
                const handleDelete = () => {
                    deleteTodo(todo.id);
                    // updateLocalTodos()
                }
                return (
                    <TodoItem 
                        text={todo.text}
                        done={todo.done}
                        key={todo.id}
                        onToggleDone={handleDone}
                        onDelete={handleDelete}
                    />
                )
            })}
        </UlStl>

    )
   
}


const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {toggleDoneTodo}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

