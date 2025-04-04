import React, { useState, useRef } from 'react';
import NewArticle from './Article'
import personnalinfos from './../assets/data/aboutme';
import emailjs from '@emailjs/browser';

function ContactMe(){
 const [name, setName] = useState("")
 const [mail, setMail] = useState("")
 const [subject, setSubject] = useState("")
 const [message, setMessage] = useState("")

 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_q836zcs', 'template_81iyawq', form.current, {
      publicKey: 'pLAGgAqyKAOyZXfOg',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

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
    <form ref={form} onSubmit={sendEmail} id="sendMessage">
     <div><input type="text" id="name" name="name" pattern="[A-Za-z]{3,}\s[A-Za-z]{3,}" title="Etunimi Sukunimi" placeholder=" " required /><label htmlFor="name">Nimesi</label></div>
     <div><input type="email" id="email" name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="jotain@jotainmuu.maa" placeholder=" "  required /><label htmlFor="mail">Sähköpostisi</label></div>
     <div><input type="text" id="subject" name="subject" pattern=".{10,255}" title="Aiheessa tulee olla vähintään 10 merkkiä ja enintään 255 merkkiä" placeholder=" "  required /><label htmlFor="subject">Aihe</label></div>
     <div><textarea id="message" name="message" placeholder='' required /><label  htmlFor="message">Viestisi</label></div>
     <button id="message" name="send">Lähetä</button>
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