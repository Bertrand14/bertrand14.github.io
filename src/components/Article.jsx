import React from 'react';

function NewArticle({id, title, content}){
 console.log(title)
 return (
  <article key={id} id={id}>
   <header>
    <h2>{title}</h2>
   </header>
   <div className="content">
    {content}
   </div>
  </article>
 )
}

export default NewArticle