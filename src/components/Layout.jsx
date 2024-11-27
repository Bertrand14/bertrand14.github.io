import React from 'react'
import { Outlet, Link } from "react-router-dom"
import navParts from '../assets/data/navparts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faThumbsUp, faProjectDiagram, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons"; 
import HeaderPage from './Header'
import FooterPage from './Footer'

function Layout(){
 return (
  <>
   <HeaderPage />
   <nav>
    <ul>
     {navParts.map((infos, index) => (
      <li key={index}>
        <Link to={infos.path}>
          <i>{infos.logo && <FontAwesomeIcon icon={infos.logo} />}</i>
          <div>{infos.title}</div>
        </Link>
      </li>
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