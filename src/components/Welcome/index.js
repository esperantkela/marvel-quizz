import React from 'react'
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = () => {
  return (
    <div children="quiz-bg">
        <div className="container">
          <Logout/>  
          <Quiz/>  
        </div>
    </div>
  )
}

export default Welcome