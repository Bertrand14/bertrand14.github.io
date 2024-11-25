import React from 'react';
import {works,schools} from './../assets/data/experiences'
import NewArticle from './Article'

function GetInfos({infos}){
 const date = (infos.enddate) ? new Date(`01.${infos.enddate}`) : new Date()
 return(
  <>
   <div className='date'>{date.getFullYear()}</div>
   <div className='thumbnail'>
    <div className='image'><img src={infos.img} alt={infos.place} title={infos.place}/></div>
    <div className='infos'>
     <h5 className='place'><a href={infos.link} target="_blank" >{infos.place}</a></h5>
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
   <h3>Työ</h3>
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
  <h3>Koulutus</h3>
  <div className='experiences'>{allSchools}</div>
 </div>
 )
}

function AllExperiences(){
 return (
  <NewArticle id='ListOfAllExperiences' title='Kokemukseni' content={<><WorkExperiences /> <SchoolExperiences /> </>} />
 )
}
export {WorkExperiences, SchoolExperiences,AllExperiences}