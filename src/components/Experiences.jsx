import React from 'react';
import {works,schools} from './../assets/data/experiences'

function GetInfos({infos}){
 const date = (infos.enddate) ? new Date(`01.${infos.enddate}`) : new Date()
 return(
  <>
   <div className='date'>{date.getFullYear()}</div>
   <div className='thumbnail'>
    <div className='image'><img src={infos.img} alt={infos.place} title={infos.place}/></div>
    <div className='infos'>
     <h4 className='place'><a href={infos.link} target="_blank" >{infos.place}</a></h4>
     <span className='title'>{infos.title}</span>
    </div>
   </div>
  </>
 )
}

function WorkExperiences(){
 let allWorks = works.map((work, index) => 
  <div className='resumeExperience' key={index}>
   <GetInfos infos={work} />
  </div>
 );

 return (
  <div className="AllExperiences works">
   <h2>Työkokemukset</h2>
   <div className='experiences'>{allWorks}</div>
  </div>
 )
}

function SchoolExperiences(){
 let allSchools = schools.map((school, index) => 
  <div className='resumeExperience' key={index}>
   <GetInfos infos={school} />
  </div>
 );

 return (
  <div className="AllExperiences studies">
  <h2>Koulutukset</h2>
  <div className='experiences'>{allSchools}</div>
 </div>
 )
}

function AllExperiences(){
 return (
  <div className='ListOfAllExperiences'>
   <WorkExperiences />
   <SchoolExperiences />
  </div>
 )
}
export {WorkExperiences, SchoolExperiences,AllExperiences}