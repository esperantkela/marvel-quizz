import React, {useEffect, useRef, useState} from 'react'

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

  const displayBtn = isBtn && (
    <React.Fragment>
      <div onMouseOver={setLeftImg} className='leftBox'>
            <button className='btn-welcome'>Inscription</button>
        </div>

        <div onMouseOver={setRightImg} className='rightBox'>
            <button className='btn-welcome'>Connexion</button>
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