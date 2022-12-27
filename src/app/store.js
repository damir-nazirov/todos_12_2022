import {createStore} from 'redux'
import todosReducer from '../reducers/index'

export const store = createStore(todosReducer)

