import React from 'react';
import {online, gitHub, standBy} from './../assets/data/projects';
import NewArticle from './Article'

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
    {infos.iframe 
      ? <iframe src={infos.iframe} title={infos.title} alt={infos.title} ></iframe> 
      : <img src={infos.image} alt={infos.title} />
    }
    <h4>{infos.title} ({infos.date})</h4>
    <p>{infos.description}</p>
    <h5>Teknologiat</h5>
    <p>{infos.technologies.join(", ")}</p>
    <h5>Avainkohdat</h5>
    <ul className='keypoints'>{keypoints}</ul>
    <h5>Tilanne ja mahdollinen kehitys</h5>
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
  <h3>Työni toiminnassa</h3>
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
  <h3>Tutkimus ja koulutus</h3>
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
  <h3>Matkalla tulevaisuuteen</h3>
  <p>Nämä projektit ovat ideoita tai konsepteja, joita työskentelen tai jotka haluan toteuttaa tulevaisuudessa.</p>
  <div className='projects standby'>{allStandBy}</div>
 </div>
 )
}

function AllProjects(){
 return (
  <NewArticle id='ListOfAllProjects' title='Projektit' content={<><OnlineProjects /><SchoolProjects /><StandbyProjects /></>} />
 )
}

export default AllProjects