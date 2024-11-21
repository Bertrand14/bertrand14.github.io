import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import {WorkExperiences, SchoolExperiences, AllExperiences} from './components/Experiences';
import AllSkills from './components/Skills';
import AllProjects from './components/Projects';
import ContactMe from './components/ContactMe';
import Nav from './components/Nav';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Nav />
    <AboutMe />
    <AllExperiences />
    <AllSkills />
    <AllProjects />
    <ContactMe />
    {/* {page == "AboutMe" && <AboutMe />}
    {page == "AllSkills" && <AllSkills />}
    {page == "AllExperiences" && <AllExperiences />}
    {page == "WorkExperiences" && <WorkExperiences />}
    {page == "SchoolExperiences" && <SchoolExperiences />}
    {page == "AllProjects" && <AllProjects />}
    {page == "ContactMe" && <ContactMe />} */}
    <Footer />
  </StrictMode>,
)

