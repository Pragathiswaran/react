import React from "react";
import classes from "./navbar.module.css";

const NavBar = () => {
    return(
        <div className={classes.NavBar}>
            <div className={classes.TopBar}>
          <div className={classes.TopBarContainer}>
            <div>
              <a href="#">Academics</a>
            </div>
            <div>
              <a href="#">Admissions 2024</a>
            </div>
            <div>
              <a href="#">Research</a>
            </div>
            <div>
              <a href="#">Intertional Affairs</a>
            </div>
            <div>
              <a href="#">Students Affairs</a>
            </div>
            <div>
              <a href="#">Placement</a>
            </div>
            <div>
              <a href="#">Carrers</a>
            </div>
            <div>
              <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
            </div> 
          </div>
            </div>
              <div className={classes.BottomBar}>
                  <div>
                    <img src="https://hindustanuniv.ac.in/assets/image/new-logo.svg" alt=""/>
                  </div>
                  <div>
                    <a href="#"><i class="fa-solid fa-bars"></i></a>
                  </div>
              </div>
        </div>
        
    )
};

export default NavBar;