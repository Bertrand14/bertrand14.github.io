import React from 'react';

function Footer(){
 const today = new Date();
 const year = today.getFullYear();

 return(
  <footer>
   <div>&copy; Bertrand ANNE 2024 - {year}</div>
  </footer>
 )
}

export default Footer