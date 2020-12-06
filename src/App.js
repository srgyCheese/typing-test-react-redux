import React from 'react'
import {connect} from 'react-redux'
import TypingTest from './components/TypingTest'
import TypingResult from './components/TypingResult'

const App = ({isEnd}) => {
   return (
      <>
         {!isEnd
            ? <TypingTest/>
            : <TypingResult />
         }
      </>
   )
}

const mapStateToProps = state => ({isEnd: state.end})

export default connect(mapStateToProps)(App)