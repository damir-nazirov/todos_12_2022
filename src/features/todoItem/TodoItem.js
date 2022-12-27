
import { useState } from 'react';
import styled from 'styled-components';
import { TodoAddButton } from '../todoInput/TodoInput';
import { DFlexJCCenterStl } from '../todoInput/TodoInput';


const NoneStyledLi = styled.li`
  list-style: none;
`;

const TodoItemStl = styled.div`
  /* color: ${({done}) => done ? 'green' : 'black'}; */
  text-decoration: ${({done}) => done ? 'line-through' : 'none'};
  box-sizing: border-box; 
  width: 100%;
  height: 25px;
  // border-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border: 1px black solid;
  text-align: start;
  padding-left: 2px;
`;

const TodoInputWrapperStl = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`

const TodoDoneButton = styled(TodoAddButton)`
  background: rgba(127, 234, 168, 0.5);
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`


const TodoDeleteButton = styled(TodoAddButton)`
  background: rgba(234, 143, 127, 0.5);
  // border-bottom-right-radius: 0px;
  // border-top-right-radius: 0px;
`


const TodoItem = ({text, onToggleDone, onDelete, done}) => {
  // const [inputValue, setInputValue] = useState('dgerg');
  // console.log(inputValue);

  // console.log(onDelete);

  return (
    <NoneStyledLi>
      <DFlexJCCenterStl>
        <TodoInputWrapperStl>
            <TodoItemStl done={done}> 
                {text}
            </TodoItemStl>
            <TodoDoneButton onClick={onToggleDone}>done</TodoDoneButton>
            <TodoDeleteButton onClick={onDelete}>delete</TodoDeleteButton>
        </TodoInputWrapperStl>
      </DFlexJCCenterStl>
    </NoneStyledLi>

   
  )
}

export default TodoItem;


