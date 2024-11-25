import React from 'react';
import personnalinfos from '../assets/data/aboutme';
import NewArticle from './Article'

function CreateChapitre({ paragraphs }) {
 return paragraphs.map((paragraph, index) => (
    <p key={index}
     dangerouslySetInnerHTML={{ __html: paragraph }}> 
    </p>
  ));
}

function AboutMe() {
  const { title, paragraphs } = personnalinfos.aboutme;
  return (
    <NewArticle id='AllAboutMe' title={title} content={<CreateChapitre paragraphs={paragraphs} />} />
  );
}

export default AboutMe;
