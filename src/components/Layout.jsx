import React from 'react'
import { Outlet, Link } from "react-router-dom"
import navParts from '../assets/data/layerParts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderPage from './Header'
import FooterPage from './Footer'

function Layout(){
 return (
  <>
   <HeaderPage />
   <nav>
    <ul>
     {navParts.map((infos, index) => (
      <Link key={index} to={infos.path}>
        <li id={infos.path}>
          {/* <i>{infos.logo && <FontAwesomeIcon icon={infos.logo} />}</i> */}
          <i> <FontAwesomeIcon icon={infos.logo} /> </i>
          <span>{infos.title}</span>
      </li>
      </Link>
     ))}
    </ul>
   </nav>
   <main>
     <Outlet />
   </main>
   <FooterPage />
  </>
 )
}

export default Layout