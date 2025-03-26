import {skills, explanations} from "./../assets/data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faLaptopCode,
 faServer,
 faImage,
 faLanguage,
 faFileWord,
 faFileExcel,
 faDatabase,
 faFilePowerpoint,
 faCode,
 faPalette,
 faVideo,
 faCube,
} from "@fortawesome/free-solid-svg-icons"; 

import {
  faMicrosoft,
  faWindows,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faPhp,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import NewArticle from './Article'


function GetInfos({ skill }) {
  return skill.map((infos, index) => {
    let stars = [];

    for (let i = 0; i < infos.note; i++) {
      stars.push(<div key={`full-${index}-${i}`} className="starFull">&nbsp;</div>);
    }

    for (let i = infos.note; i < 5; i++) {
      stars.push(<div key={`empty-${index}-${i}`} className="starEmpty">&nbsp;</div>);
    }

    return (
      <tr key={index}>
        <th className="knowledgeTitle">
          {/* Vérification si l'icône est définie */}
          {infos.icon ? <FontAwesomeIcon icon={infos.icon} /> : null} {infos.name}
        </th>
        <td className="knowledgeStars">{stars}</td>
      </tr>
    );
  });
}


function Explanation(){
 return (
   <div>
     {Object.keys(explanations).map((title, index) => (
       <div key={index}>
         <h3>{title}</h3>
         {explanations[title].map((paragraph, idx) => (
           <p key={idx}>{paragraph}</p>
         ))}
       </div>
     ))}
   </div>
 );
};

function AllSkills() {
  let allSkills = Object.entries(skills).map(([category, data], index) => {
    return (
      <div key={index} id={category} className="skillCategory">
        <h3>{category}</h3>
        <table className="knowledgeInfos">
          <tbody>
            <GetInfos skill={data.items} />
          </tbody>
        </table>
      </div>
    )
  })

  return (
    <NewArticle id='skills' title='Osaaminen' content={<><div className="listSkills">{allSkills}</div> <Explanation /></>} />
  )
}


export default AllSkills;