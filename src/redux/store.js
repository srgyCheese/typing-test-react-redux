import { createStore } from 'redux'
import {typingReducer} from './typingReducer'

export const store = createStore(typingReducer, {
   text: [],
   current: 0,
   wrong: false,
   end: false
})