import React from 'react';
import { personnalinfos } from '../assets/data/aboutme';

function CreateChapitre({ paragraphs }) {
  const Chapitres = paragraphs.map((paragraph, index) => (
    <p key={index}
     dangerouslySetInnerHTML={{ __html: paragraph }}> 
    </p>
  ));

  return <>{Chapitres}</>;
}

function AboutMe() {
  const { title, paragraphs } = personnalinfos.aboutme;

  return (
    <div className="AllAboutMe">
      <div className="resumeAboutMe">
        <h2>{title}</h2>
        <CreateChapitre paragraphs={paragraphs} />
      </div>
    </div>
  );
}

export default AboutMe;
