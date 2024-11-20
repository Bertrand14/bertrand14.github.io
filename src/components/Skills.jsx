import React from "react";
import {skills, explanations} from "./../assets/data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faServer, faLaptopCode, faImage, faLanguage } from "@fortawesome/free-solid-svg-icons"; 

// icons configuration was did with the help of FontAwesome
const iconMapping = {
  "Microsoft Software": faMicrosoft,
  "Front-End": faLaptopCode,
  "Back-End": faServer,
  "Media": faImage,
  "Kielet": faLanguage,
};

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
        <th className="knowledgeTitle">{infos.name}</th>
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
         <h2>{title}</h2>
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
  const logo = iconMapping[category];

  return (
    <div key={index} id={category} className="skillCategory">
      <h3>
        {logo && <FontAwesomeIcon icon={logo} />} {category}
      </h3>
      <table className="knowledgeInfos">
       <tbody>
         <GetInfos skill={data.items} />
        </tbody>
      </table>
    </div>
  );
  });

  return (
   <>
    <div className="allSkills">
      <h2>Osaaminen</h2>
      <div>{allSkills}</div>
    </div>
    <div className="explanations"><Explanation /></div>
   </>
  );
}

export default AllSkills;
