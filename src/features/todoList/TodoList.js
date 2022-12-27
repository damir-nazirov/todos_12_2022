import { connect } from "react-redux";
import TodoItem from "../todoItem/TodoItem"
import styled from "styled-components";
import { toggleDoneTodo } from "../../actions";
import { deleteTodo } from "../../actions";

const UlStl = styled.ul`
    padding: 0;
`

const TodoList = ({todos}) => {

    return (
        <UlStl>
            {todos.map(todo => {
                const handleDone = () => {
                    toggleDoneTodo(todo.id);
                }
                const handleDelete = () => {
                    deleteTodo(todo.id);
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

