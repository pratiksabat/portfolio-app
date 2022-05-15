import './App.scss';
import SideBar from './Components/SideBar/SideBar';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import AwardCardPage from './Pages/AwardCardPage/AwardCardPage';
import EducationSkillsPage from './Pages/EducationSkillsPage/EducationSkillsPage';
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage';
import HomePage from './Pages/HomePage/HomePage';
import MyWorkPage from './Pages/MyWorkPage/MyWorkPage';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <div className="pages">
      <section id='home'>
      <HomePage/>
      </section>
      <section id='aboutus'>
        <div className="aboutus-section">
        <AboutUsPage/>
      <AwardCardPage/>
        </div>
      </section>             
      <section id='experience'>
      <ExperiencePage/>
      </section>             
      <section id='educationSkills'>
      <EducationSkillsPage/>
      </section>             
      <section id='work'>
      <MyWorkPage/>
      </section>             
      </div>
 
    </div>
  );
}

export default App;
