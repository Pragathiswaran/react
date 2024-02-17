import logo from './logo.svg';
// import './App.css';
import classes from './App.module.css';
import NavBar from './Components/navbar/navbar';
import SectionTitle from './Components/Sections/sectionTitle';
import VideoDisplay from './Components/videoDisplay/videoDisplay';
function App() {
  return (
    <div className={classes.App}>
        <div className={classes.NavBar}>
          <NavBar />
        </div>
        <section>
          <SectionTitle />
        </section>
        <div className={classes.SectionMiddle}>
         <VideoDisplay />
        </div>
    </div>
  );
}

export default App;
