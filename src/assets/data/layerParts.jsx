import AboutMe from '../../components/AboutMe'
import ContactMe from '../../components/ContactMe'
import  {WorkExperiences, SchoolExperiences,AllExperiences} from '../../components/Experiences'
import AllProjects from '../../components/Projects'
import AllSkills from '../../components/Skills'
import { faFilm, faBook, faCertificate, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const navParts = [
 { path: "/AboutMe", logo: faFilm,  title: "Tarinani",id:"", components: <AboutMe /> },
 { path: "/AllExperiences", logo: faBook,  title: "Kokemukset",id:"", components: <AllExperiences /> },
 { path: "/AllSkills", logo: faCertificate,  title: "Taidot",id:"", components: <AllSkills /> },
 { path: "/AllProjects", logo: faGithub,  title: "Projektini",id:"", components: <AllProjects /> },
 { path: "/ContactMe", logo: faEnvelope,  title: "Contact",id:"", components: <ContactMe /> },
];

export default navParts