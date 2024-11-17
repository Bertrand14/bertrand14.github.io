import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import {WorkExperiences, SchoolExperiences} from './components/Experiences';
import Talents from './components/Talents';
import Contact from './components/Contact';
import Nav from './components/Nav';
import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Footer />
    </>
  );
}

export default App;
