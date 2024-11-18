import React from 'react';
import {works,schools} from './../assets/data/experiences'

function WorkInfos({infos}){
 const date = (infos.enddate) ? new Date(`01.${infos.enddate}`) : new Date()
 console.log(date)
 return(
  <>
   <h2 className='date'>{date.getFullYear()}</h2>
   <div className='timeline'></div>
   <img src={infos.img} alt={infos.society} />
   <div className='infos'>
    <h3 className='society'><a href={infos.link} target="_blank" >{infos.society}</a></h3>
    <h4 className='title'>{infos.title}</h4>
   </div>
  </>
 )
}

function WorkExperiences(){
 let allWorks = works.map((work, index) => 
  <div key={index}><WorkInfos infos={work}/></div>
 );

 return (
  <div className="experiences works">
   <h2>Työkokemukset</h2>
   <div className='ListOfAllExperiences'>{allWorks}</div>
  </div>
 )
}

function SchoolInfos({infos}){
 const date = (infos.enddate) ? `${infos.startdate} - ${infos.enddate}` : `${infos.startdate} - Jatkuu`
 return(
  <>
   <span className='date'>{date}</span>
   <div className=''><a href={infos.link} target="_blank" >{infos.schoolname}</a></div>
   <h4 className=''>{infos.title}</h4>
   <div className=''>{infos.description}</div>
  </>
 )
}

function SchoolExperiences(){
 let allSchools = schools.map((school, index) => 
  <div key={index}><SchoolInfos infos={school}/></div>
 );

 return (
  <div className="experiences studies">
   {allSchools}
  </div>
 )
}

function AllExperiences(){
 return (
  <div className='AllExperiences'>
   <WorkExperiences />
   <SchoolExperiences />
  </div>
 )
}
export {WorkExperiences, SchoolExperiences,AllExperiences}