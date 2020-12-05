import React, {useEffect, useCallback} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {addCharacter, endTyping, wrongCharacter, setText} from '../redux/actions'

const TypingTest = ({state, setText, addCharacter, wrongCharacter, endTyping}) => {
   const start = useCallback(() => {
      const texts = [
         'С другой стороны укрепление и развитие структуры позволяет оценить значение систем массового участия. Товарищи! рамки и место обучения кадров позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Товарищи! сложившаяся структура организации требуют от нас анализа систем массового участия.',
         'Не следует, однако забывать, что укрепление и развитие структуры влечет за собой процесс внедрения и модернизации систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что новая модель организационной деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа новых предложений.',
         'Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют определения и уточнения модели развития. С другой стороны консультация с широким активом требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Равным образом консультация с широким активом требуют определения и уточнения систем массового участия. Товарищи! консультация с широким активом позволяет оценить значение существенных финансовых и административных условий.'
      ]

      const randomText = texts[Math.floor(Math.random() * texts.length)]

      const textArray = randomText.split('').map((item, i) => ({value: item, id: i}) )

      setText(textArray)
   }, [setText])

   const keyPressHandler = useCallback(event => {
      if (state.text.length - 1 <= state.current) {
         endTyping()
         start()
         return
      }

      const {current} = state

      const currentWord = state.text[current]

      if (event.key === currentWord.value) {
         addCharacter()
      } else {
         wrongCharacter()
      }
   }, [state, addCharacter, wrongCharacter, endTyping, start])

   useEffect(() => {
      window.addEventListener('keydown', keyPressHandler)

      return () => {
         window.removeEventListener('keydown', keyPressHandler)
      }
   }, [keyPressHandler])

   useEffect(() => {
      start()
   }, [start])

   return (
      <div className="typing-test">
         <div className="text">
            {state.text.map((word, i) => {
               const current = i === state.current
               const wrong = current && state.wrong
               const passed = i < state.current && !wrong

               const clsNames = classNames({current, wrong, passed})

               return <span key={word.id} className={clsNames}>{word.value}</span>
            })}
         </div>
         <div className="info">
            Скорость: <br/>
            0 зн/мин
            Точность: <br/>
            0%
         </div>
      </div>
   )
}

const mapStateToProps = state => ({state})

const mapDispatchToProps = {addCharacter, endTyping, wrongCharacter, setText}

export default connect(mapStateToProps, mapDispatchToProps)(TypingTest)