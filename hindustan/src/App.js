import logo from './logo.svg';
// import './App.css';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
        <nav>
          <div className={classes.container}>
            {/* <div className={classes.NavContainer}> */}
              <div className={classes.Topcontainer}>
                <div>
                  <a href="#">Academics</a>
                </div>
                <div>
                  <a href="#">Admission 2024</a>
                </div>
                <div>
                  <a href="#">Research</a>
                </div>
                <div>
                  <a href="#">International Affairs</a>
                </div>
                <div>
                  <a href="#">Student Affairs</a>
                </div>
                <div>
                  <a href="#">Placement</a>
                </div>
                <div>
                  <a href="#">Careers</a>
                </div>
                <div className={classes.searchicon}>
                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
              </div>
            {/* </div> */}
            </div>
            <div className={classes.logoContainer}>
            <div className={classes.logobox}>
            <div className={classes.logo}>
              <img src="https://hindustanuniv.ac.in/assets/image/new-logo.svg" alt="logo" />
            </div>
            <div className={classes.menuWrapper}>
              <div className={classes.menu}>
              <i class="fa-solid fa-bars"></i>
              </div>
            </div>
            </div>
          </div>
          </div>
          
        </nav>
        <div className={classes.content}>
          {/* <div className={classes.title}>
            <div className={classes.titleWords}>
               <h1>Igniting  minds <span>statewide</span></h1>
            </div>
            <div className={classes.titleText}>
              <p>Be a part of ecosystem that forest exploring and shaping your future through transfomative education</p>
            </div>
            <div className={classes.titleLinks}>
              <div className={classes.Links}>
                <div className={classes.linklogo}>
                  <img src="https://hindustanuniv.ac.in/assets/image/icon/camp.svg" />
                  <p>Campus Tour</p>
                </div>
                <div className={classes.linklogo}>
                  <img src="https://hindustanuniv.ac.in/assets/image/icon/admission.svg"/>
                  <p>Campus Tour</p>
              </div>
              </div> 
            </div>
            <div className={classes.tilleLogo}>
              <div>
                <img src="" />
              </div>
            </div>
          </div> */}
          <h1>hello world</h1>
        </div>
    </div>
  );
}

export default App;
