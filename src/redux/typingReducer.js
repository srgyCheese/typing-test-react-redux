import {ADD_CHARACTER, END, SET_TEXT, WRONG_CHARACTER} from './types'

export const typingReducer = (state, action) => {
   switch (action.type) {
      case ADD_CHARACTER: return {...state, current: state.current + 1, wrong: false}
      case WRONG_CHARACTER: return {...state, wrong: true}
      case SET_TEXT: return {...state, text: action.payload, current: 0, wrong: false, end: false}
      case END: return {...state, end: true}

      default: return state
   }
}