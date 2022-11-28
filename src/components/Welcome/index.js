import React, {useState} from 'react'
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = () => {

  const [userSession, setUserSession] = useState(null);

  return userSession === null ? (
    <React.Fragment>
      <div className='loader'></div>
      <p className='loaderText'>Loading...</p>
    </React.Fragment>
  ) :
      <div children="quiz-bg">
        <div className="container">
          <Logout/>  
          <Quiz/>  
        </div>
    </div>
  
}

export default Welcome