import AboutMe from './../../components/AboutMe'
import ContactMe from './../../components/ContactMe'
import  {WorkExperiences, SchoolExperiences,AllExperiences} from './../../components/Experiences'
import AllProjects from './../../components/Projects'
import AllSkills from './../../components/Skills'

const navParts = [
 { path: "/AboutMe", logo:"faUser",  title: "Tarinani",id:"", element: <AboutMe /> },
 { path: "/AllExperiences", logo:"faBriefcase",  title: "Kokemukset",id:"", element: <AllExperiences /> },
 { path: "/AllSkills", logo:"faThumbsUp",  title: "Taidot",id:"", element: <AllSkills /> },
 { path: "/AllProjects", logo:"faProjectDiagram",  title: "Projektini",id:"", element: <AllProjects /> },
 { path: "/ContactMe", logo:"faEnvelope",  title: "Contact",id:"", element: <ContactMe /> },
];

export default navParts