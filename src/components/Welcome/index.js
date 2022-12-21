import React, {useState, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { auth } from '../Firebase/firebaseConfig'
import { getDoc } from 'firebase/firestore'
import Logout from '../Logout'
import Quiz from '../Quiz'

const Welcome = () => {

  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const listerner = onAuthStateChanged(auth, (user) =>{
      user ? setUserSession(user) : navigate('/')
    })

    return listerner
    
  })

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