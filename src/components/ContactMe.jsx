import React from 'react';
import NewArticle from './Article'
import personnalinfos from './../assets/data/aboutme'

function ContactMe(){

 function SendFormContent(){

 }

 function CreateContactCard(){
  const general = personnalinfos.general
  return Object.keys(general).map(([type, info], index) => (

    <div key={index}>
     <span>{type}</span> <span>{info}</span>
    </div>
  ))
 }

 function CreateForm(){
  return (
   <>
    <form onSubmit={SendFormContent}>
     <input type="text" id="name" name="name" placeholder="Etunimi Sukunimi"></input>
     <input type="mail" id="mail" name="mail" placeholder="Sähköposti"></input>
     <input type="text" id="subject" name="subject" placeholder="Viestin aihe"></input>
     <textarea id="message" name="message" placeholder="Viestin aihe" />
     <button id="message" name="Subject">Lähetä</button>
    </form>
   </>
  )
 }
 return(
  <NewArticle id='AllAboutMe' title='Yhteydet' content={
   <>
    <CreateContactCard />
    <CreateForm />
   </>
  }/>
 )
}

export default ContactMe