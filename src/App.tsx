import './App.scss';
import SideBar from './Components/SideBar/SideBar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import AwardCardPage from './Pages/AwardCardPage/AwardCardPage';
import EducationSkillsPage from './Pages/EducationSkillsPage/EducationSkillsPage';
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage';
import HomePage from './Pages/HomePage/HomePage';
import MyWorkPage from './Pages/MyWorkPage/MyWorkPage';
import { useRef } from 'react';

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
    <div className="App">
      <SideBar abc={abc}/>
      <div className="pages">
      <section id='home' ref={homeRef}>
      <HomePage/>
      </section>
      <section id='aboutus' ref={aboutRef}>
        <div className="aboutus-section">
        <AboutUsPage/>
      <AwardCardPage/>
        </div>
      </section>             
      <section id='experience'  ref={expRef}>
      <ExperiencePage/>
      </section>             
      <section id='educationSkills'  ref={eduRef}>
      <EducationSkillsPage/>
      </section>             
      <section id='work'  ref={workRef}>
      <MyWorkPage/>
      </section>             
      </div>
 
    </div>
  );
}

export default App;
