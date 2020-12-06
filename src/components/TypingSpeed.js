import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {setSpeed} from '../redux/actions'

const TypingSpeed = ({current, setSpeed}) => {
   const [time, setTime] = useState(0)
   const speed = ((current / time) * 60).toFixed(1)

   useEffect(() => {
      const interval = setInterval(() => {
         setTime(time => time + 0.1)
         setSpeed(speed)
      }, 100)

      return () => {
         clearInterval(interval)
      }
   }, [setSpeed, speed])

   return (
      <div>
         Скорость: <br/>
         {speed} зн/мин
      </div>
   )
}

const mapStateToProps = state => ({current: state.current})
const mapDispatchToProps = {setSpeed}

export default connect(mapStateToProps, mapDispatchToProps)(TypingSpeed)