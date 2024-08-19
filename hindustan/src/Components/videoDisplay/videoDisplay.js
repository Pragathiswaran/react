import React from "react";
import classes from "./videoDisplay.module.css";

const VideoDisplay = (Props) => {
    return(
        <div className={classes.SectionMiddle}>
             <div className={classes.TextScrolling}>
          <marquee behavior="scroll" direction="left" scrollamount="20">
              This is a scrolling text example
          </marquee>
          </div>
          <div className={classes.videoSection}>
            <video autoplay controls>
              <source src="https://api.hindustanuniv.ac.in/uploads/Hindustan_Website_Video_8_de0c559b4f.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={classes.textSection}>
            <div className={classes.textheading}>
              <h2>Welcome to Hindustan Institute of Technology & Science</h2>
            </div>
            <div className={classes.textdiscribe}>
              <p>A prestigious and recognized institution since 1985, located, chennai, india, offering a wide spectrum of UG, PG, Diplomo, Research and Doctorol Programs in Diverse fields</p>
            </div>
            <div className={classes.Textnow}>
               <p>NOW OPEN</p>
            </div>
            <div className={classes.TextAdmission}>
              <h1>ADMISSIONS 2024</h1>
            </div>
            <div className={classes.TextEnroll}>
              <p>Unlock Your future:Enroll Now for Admission 2024</p>
            </div>
          </div>
        </div>
    )
}

export default VideoDisplay;