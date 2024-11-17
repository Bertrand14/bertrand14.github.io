import React from 'react';
import {works,schools} from './../assets/data/experiences'

function WorkInfos({infos}){
   const date = (infos.enddate) ? `${infos.startdate} - ${infos.enddate}` : `${infos.startdate} - Jatkuu`
 return(
  <>
   <div className='starting_endingdate'>{date}</div>
   <div className=''>{infos.society}</div>
   <div className=''>{infos.title}</div>
   <div className=''>{infos.description}</div>
  </>
 )
}

function WorkExperiences(){
 let allWorks = works.map((work, index) => 
  <div key={index}><WorkInfos infos={work}/></div>
 );

 return (
  <div className="experiences works">
   {allWorks}
  </div>
 )
}

function SchoolExperiences(){

 return
}

export {WorkExperiences, SchoolExperiences}