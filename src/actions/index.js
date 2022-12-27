import { nanoid } from "@reduxjs/toolkit"
import { store } from "../app/store"


export const addTodoItem = () => store.dispatch({
  type: 'ADD_TODO',
  id: nanoid(),


})

export const toggleDoneTodo = (id) => store.dispatch({
  type: 'TOGGLE_DONE',
  id
})

export const deleteTodo = (id) => store.dispatch({
  type: 'DELETE_TODO',
  id
})

export const changeText = (text) => store.dispatch({
  type: 'CHANGE_TEXT',
  text
})
