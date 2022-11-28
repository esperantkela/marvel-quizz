import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';

const Logout = () => {

  const [checked, setChecked] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setChecked(e.target.checked)
  }

  useEffect(() => {
    if(checked){
      signOut(auth).then(() => {
        setTimeout(() => {
          navigate('/')
        }, 1000);

        console.log('Déconnexion')
      }).catch((error) => {
        console.log(error)
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