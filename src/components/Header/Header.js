import React from 'react'
import Logo from '../../assets/header/Group 1543.svg'
import Burger from '../../assets/header/Vector (2).svg'


const Header = () => {
      return (
  <section className='wrapper'>    
    <header className='header'>       
        <div className='container'>
          <div className='item'>
          <img src={Logo} alt=''/>
          <img  src={Burger} alt=''/>
          </div>
          
          <div className='web'>
            <h2 className='web__title'>web applications</h2>
            <p className='web__p'>Повседневная практика.</p>
            <button className='web__btn' type='button'><a className='web__a' href='#'>Спец предложение</a></button>
          </div>
        </div>
    </header>
  </section>  
  )
}

export default Header