import {ADD_CHARACTER, END, SET_TEXT, WRONG_CHARACTER} from './types'

export const addCharacter = () => ({type: ADD_CHARACTER})
export const wrongCharacter = () => ({type: WRONG_CHARACTER})
export const setText = text => ({type: SET_TEXT, payload: text})
export const endTyping = () => ({type: END})