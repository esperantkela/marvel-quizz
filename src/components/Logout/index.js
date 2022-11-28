import React, {useState, useEffect} from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';

const Logout = () => {

  const [checked, setChecked] = useState(false);

  const handleChange = (e) =>{
    setChecked(e.target.checked)
  }

  useEffect(() => {
    if(checked){
      signOut(auth).then(() => {
        console.log('Déconnexion')
      }).catch((error) => {
        // An error happened.
      });
    }
  }, [checked])
  
  return (
    <div className='logoutContainer'>
        <label className='switch'>
            <input
            onChange={handleChange}
              type='checkbox'
              checked={checked}
            />

            <span className='slider round'></span>
        </label>
    </div>
  )
}

export default Logout