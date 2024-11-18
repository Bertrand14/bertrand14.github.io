import React from 'react';
import portrait from './../assets/images/index-edit-20230908184735.jpg'

function Header(){
 return(
  <header>
     <a href='/'><div className='bubbleEffect'><img src={portrait}/></div></a>
     <h1>Bertrand Anne</h1>
  </header>
 )
}

export default Header