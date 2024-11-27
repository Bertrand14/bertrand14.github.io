import React, { useState } from 'react';
import NewArticle from './Article'
import personnalinfos from './../assets/data/aboutme'

function ContactMe(){
 const [name, setName] = useState("")
 const [mail, setMail] = useState("")
 const [subject, setSubject] = useState("")
 const [message, setMessage] = useState("")

 function SendFormContent(e){
  e.preventDefault()
  {setName, setMail, setSubject, setMessage}
 }

 function CreateContactCard(){
  return Object.entries(personnalinfos.general).map(([type, info], index) => (
    <div key={index} id={type}>
      <span>{info}</span>
    </div>
  )); 
}


 function CreateForm(){
  return (
   <>
    <form onSubmit={(e) => SendFormContent(e)} id="sendMessage">
     <div><input type="text" id="name" name="name" onChange={(e) => setName(e.event.value)} pattern="[A-Za-z]{3,}\s[A-Za-z]{3,}" title="Etunimi Sukunimi" placehodler=" " required /><label for="name">Nimesi</label></div>
     <div><input type="email" id="mail" name="mail" onChange={(e) => setMail(e.event.value)} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="jotain@jotainmuu.maa" placehodler=" "  required /><label for="mail">Sähköpostisi</label></div>
     <div><input type="text" id="subject" name="subject" onChange={(e) => setSubject(e.event.value)} pattern="[A-Za-z]{3,}\s[A-Za-z]{10,255}" title="Aiheessa tulee olla vähintään 10 merkkiä ja enintään 255 merkkiä" placehodler=" "  required /><label for="subject">Aihe</label></div>
     <div><textarea id="message" name="message" onChange={(e) => setMessage(e.event.value)} placehodler=" " required /><label for="message">Viestisi</label></div>
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