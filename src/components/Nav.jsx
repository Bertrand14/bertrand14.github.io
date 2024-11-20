import React from 'react';
import navParts from './../assets/data/navparts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faThumbsUp, faProjectDiagram, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons"; 

// Dictionnaire pour mapper les catégories aux icônes appropriées
const iconMapping = {
  "aboutme": faUser,
  "myexperiences": faBriefcase,
  "myskills": faThumbsUp,
  "myprojects": faProjectDiagram,
  "contactme": faEnvelope,
  "smallMenu":faBars,
};



function Nav(){
  let allNavParts = Object.entries(navParts).map(([part, data], index) => {
  const logo = iconMapping[part];

  return (
    <a key={index} href={part}><li>
     <i>{logo && <FontAwesomeIcon icon={logo} />}</i><div>{data.title}</div>
    </li></a>
  )
  })

  return(
    <nav>
      <ul className='smallScreen'>
        {allNavParts}
      </ul>
      <ul className='largeScreen'>
        {allNavParts}
      </ul>
    </nav>

  )
}
export default Nav  