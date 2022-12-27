import styled from 'styled-components';
import { store } from '../../app/store';
import { connect } from 'react-redux'
import { changeText, addTodoItem } from '../../actions';
import { useState } from 'react';

// import { addTodoItem } from '../../actions';

const {getState} = store;
const inputValue = getState().inputValue



console.log(inputValue);

const TodoInputStl = styled.input`
  border-color: ${({empty}) => empty ? 'red' : 'black'};
  width: 100%;
  height: 25px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  /* border: 1px black solid; */
  /* border: 1px solid; */
`;

export const DFlexJCCenterStl = styled.div`
  display: flex;
  justify-content: center;
`

const FormStl = styled.form`
  width: 30%;
  display: flex;
  justify-content: center;
`

export const TodoAddButton = styled.button`
  // width: 25px;
  // height: 25px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 1px black solid;
  border-left: none;
  cursor: pointer;
  background-color: rgba(127, 181, 234, 0.5);
`


const TodoInput = ({inputValue}) => {
  const [empty, setEmpty] = useState(true)



  const setInputValue = (e) => {
    const {value} = e.target
    if(empty && value) setEmpty(false)
    changeText(value)
  }


  const submit = (e) => {
    e.preventDefault(); 
    if (inputValue.length > 0){
      
      setEmpty(false)
      addTodoItem()
    }
    else {setEmpty(true)}
    
    }
  return (
    <DFlexJCCenterStl>
          <FormStl 
          onSubmit={submit}
          >
      <TodoInputStl
            // required="required"
            placeholder='What needs to be done?'
            autoFocus={true}
            value={inputValue}
            onChange={setInputValue}
            empty={empty}
          />
      <TodoAddButton 
          type='submit'
          >
            add
            </TodoAddButton>
    </FormStl>
    </DFlexJCCenterStl>

   
  )
}

const mapStateToProps = (state) => ({
    inputValue: state.inputValue
})



const mapDispatchToProps = {changeText, addTodoItem}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);


