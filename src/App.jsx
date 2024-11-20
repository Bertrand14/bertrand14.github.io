import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import {WorkExperiences, SchoolExperiences, AllExperiences} from './components/Experiences';
import AllSkills from './components/Skills';
import AllProjects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <AboutMe />
      <AllExperiences />
      <AllSkills />
      <AllProjects />
      <Footer />
    </>
  );
}

export default App;
