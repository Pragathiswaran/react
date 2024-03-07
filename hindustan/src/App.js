import React,{ Component } from 'react';
import classes from './App.module.css';
import NavBar from './Components/navbar/navbar';
import SectionTitle from './Components/Sections/sectionTitle';
import VideoDisplay from './Components/videoDisplay/videoDisplay';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
class App extends Component {
state ={
  rolltext : {
    0:"StateWide",
    1:"NationalWide",
    2:"WorldWide",
  },
  rolltextIndex:0,
}

  render() {
    return (
      <>
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
          <button className='btn btn-secondary'>Submit</button>
      </div>
      </> 
    );
  }
}
export default App;
