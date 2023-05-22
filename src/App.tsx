import './App.scss';
import SideBar from './Components/SideBar/SideBar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import AwardCardPage from './Pages/AwardCardPage/AwardCardPage';
import EducationSkillsPage from './Pages/EducationSkillsPage/EducationSkillsPage';
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage';
import HomePage from './Pages/HomePage/HomePage';
import MyWorkPage from './Pages/MyWorkPage/MyWorkPage';
import { useRef } from 'react';
import { motion } from 'framer-motion';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const eduRef = useRef(null);
  const expRef = useRef(null);
  const workRef = useRef(null);
  
  const scrollDown = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: 'smooth',
    });
  };
  const abc=(e)=>{
    console.log("!!!!!!!!!!!!!!!!!!!",e);
    switch (e) {
      case 'Home':
        scrollDown(homeRef)        
        break;
      case 'About':
        scrollDown(aboutRef)        
        break;
      case 'Experience':
        scrollDown(expRef)        
        break;
      case 'Education':
        scrollDown(eduRef)        
        break;
      case 'Work':
        scrollDown(workRef)        
        break;
    
      default:
        break;
    }
  }
  return (
    <motion.div className="App" initial={ { y: -200} } animate={{y: 0,transition: {type: 'spring'}}}>
      <SideBar abc={abc}/>
      <div className="pages">
      <section id='home' ref={homeRef}>
      <HomePage/>
      </section>
      <section id='aboutus' ref={aboutRef}>
          <motion.div
            initial={{opacity: 0}}
            whileInView={ {
              opacity: 1,
              transition: { duration: 3, ease: 'easeIn' },
            } }
            className="aboutus-section" >
        <AboutUsPage/>
        <AwardCardPage/>
          </motion.div>
      </section>             
      <section id='experience'  ref={expRef}>
      <ExperiencePage/>
      </section>             
        <motion.section initial={ { opacity: 0 } }
          whileInView={ {
            opacity: 1,
            transition: { duration: 3, ease: 'easeIn' },
          } } id='educationSkills'  ref={eduRef}>
      <EducationSkillsPage/>
      </motion.section>             
      <section id='work'  ref={workRef}>
      <MyWorkPage/>
      </section>             
      </div>
    </motion.div>
  );
}

export default App;
