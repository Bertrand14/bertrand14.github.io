import React from 'react';
import portrait from './../assets/images/index-edit-20230908184735.jpg'

function Header(){
 return(
  <header>
     <a href='/' title='Mitä ikinä minulle elämässäni tapahtui, tiesin aina, kuinka palata takaisin.'><div className='bubbleEffect'><img src={portrait} alt='Minä' /></div></a>
     <h1>Bertrand Anne</h1>
  </header>
 )
}

export default Header