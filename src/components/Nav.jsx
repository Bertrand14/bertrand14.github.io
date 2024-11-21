import React from 'react';
import navParts from './../assets/data/navparts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faThumbsUp, faProjectDiagram, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons"; 

// Dictionnaire pour mapper les catégories aux icônes appropriées
const iconMapping = {
  "AboutMe": faUser,
  "AllExperiences": faBriefcase,
  "AllSkills": faThumbsUp,
  "AllProjects": faProjectDiagram,
  "ContactMe": faEnvelope,
  "smallMenu":faBars,
};

function Nav(){
  const [page, getPage] = useState("AboutMe")
  let allNavParts = Object.entries(navParts).map(([part, data], index) => {
  const logo = iconMapping[part];

  return (
      <li key={index} onClick={()=>{getPage({part})}}><i>{logo && <FontAwesomeIcon icon={logo} />}</i><div>{data.title}</div></li>
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