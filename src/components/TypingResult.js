import React from 'react'
import {connect} from 'react-redux'

const TypingResult = ({state}) => {
   return (
      <div>
         <h3>Скорость: {state.speed} зн/мин</h3>
      </div>
   )
}

const mapStateToProps = state => ({state})

export default connect(mapStateToProps)(TypingResult)