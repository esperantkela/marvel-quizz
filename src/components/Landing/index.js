import React, {useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {

  const [isBtn, setIsBtn] = useState(false);
  const refWelverine = useRef(null)
  useEffect(() => {
    refWelverine.current.classList.add('startingImg')
    setTimeout(()=>{
      refWelverine.current.classList.remove('startingImg')
      setIsBtn(true)
    },1000)
  }, []);

  const setLeftImg = () => {
    refWelverine.current.classList.add('leftImg')
  }
  const setRightImg = () => {
    refWelverine.current.classList.add('rightImg')
  }

  const clearImg = () => {
    if(refWelverine.current.classList.contains('rightImg')){
      refWelverine.current.classList.remove('rightImg')
    }else if (refWelverine.current.classList.contains('leftImg')){
      refWelverine.current.classList.remove('leftImg')
    }
  }

  const displayBtn = isBtn && (
    <React.Fragment>
      <div onMouseOver={setLeftImg} onMouseOut={clearImg} className='leftBox'>
            <Link to='/register' className='btn-welcome'>Inscription</Link>
        </div>

        <div onMouseOver={setRightImg} onMouseOut={clearImg} className='rightBox'>
            <Link to='/login' className='btn-welcome'>Connexion</Link>
        </div>
    </React.Fragment>
  )
  return (
    <main ref={refWelverine} className='welcomePage'>
        {displayBtn}
    </main>
  )
}

export default Landing