import React from 'react';
import {online, gitHub, standBy} from './../assets/data/projects';

function GetInfos({infos}){
 const keypointsContent = infos.keypoints
 let keypoints = keypointsContent.map(((content, index) =>{
  return (
    <li key={index}>{content}</li>
  )
 }))
  return(
   <>
   <div className="project-card">
    <img src={infos.image} alt={infos.title} />
    <h3>{infos.title} ({infos.date})</h3>
    <p>{infos.description}</p>
    <h4>Teknologiat</h4>
    <p>{infos.technologies.join(", ")}</p>
    <h4>Avainkohdat</h4>
    <ul className='keypoints'>{keypoints}</ul>
    <h4>Tilanne ja mahdollinen kehitys</h4>
    <p>{infos.status}</p>

    <a href={infos.link} target="_blank" rel="noopener noreferrer">
     Katso projekti
    </a>

   </div>
   </>
  )
}

function OnlineProjects(){
 let allOnlines = online.map((project, index) => 
   <GetInfos infos={project} />
 );

 return (
  <div className="allProjects">
  <h2>Työni toiminnassa</h2>
  <p>Nämä projektit edustavat valmiita ja julkaistuja töitäni, jotka ovat yleisön saatavilla.</p>
  <div className='projects online'>{allOnlines}</div>
 </div>
 )
}

function SchoolProjects(){
 let allGitHubs = gitHub.map((project, index) => 
   <GetInfos infos={project} />
 );

 return (
  <div className="allProjects">
  <h2>Tutkimus ja koulutus</h2>
  <p>Nämä projektit heijastelevat harjoituksiani, prototyyppejäni tai harjoitteluni tulosta.</p>
  <div className='projects school'>{allGitHubs}</div>
 </div>
 )
}



function StandbyProjects(){
 let allStandBy = standBy.map((project, index) => 
   <GetInfos infos={project} />
 );

 return (
  <div className="allProjects">
  <h2>Matkalla tulevaisuuteen</h2>
  <p>Nämä projektit ovat ideoita tai konsepteja, joita työskentelen tai jotka haluan toteuttaa tulevaisuudessa.</p>
  <div className='projects standby'>{allStandBy}</div>
 </div>
 )
}

function AllProjects(){
 return (
  <div className='ListOfAllProjects'>
   <OnlineProjects />
   <SchoolProjects />
   <StandbyProjects />
  </div>
 )
}

export default AllProjects