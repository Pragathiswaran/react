import React from "react";
import classes from "./sectionTitle.module.css";

const SectionTitle = () => {
    return(
        <section>
          <div className={classes.Sections}>
          <div className={classes.SectionTitle}>
            <div className={classes.SectionTitleContainer}>
              <h1>Igniting minds <span>statewide</span></h1>
            </div>
            <div className={classes.SectionTitleDescription}>
              <p>Be a part of an ecosystem fosters exploring and shaping your future through transfomative education </p>
              </div>
            <div className={classes.SectionBottom}>
              <div className={classes.SectionBottomContainer}>
                <img src="https://hindustanuniv.ac.in/assets/image/icon/camp.svg"/>
                <span>campus Tour</span>
              </div>
              <div className={classes.SectionBottomContainer}>
                <img src="https://hindustanuniv.ac.in/assets/image/icon/admission.svg" />
                <span>Admissions 2024</span>
              </div>
            </div>
          </div>
          <div className={classes.ImageSlider}>
            <div className={classes.ImageSliderContainer}>
                  <marquee behaviour="scroll" direction="up" scrollamount="20">
                  <div className={classes._ImageSlide}></div>
                    <div className={classes._ImageSlide}></div>
                    <div className={classes._ImageSlide}></div>
                    <div className={classes._ImageSlide}></div>
                  </marquee>
            </div>
            </div>
         </div>
          <div className={classes.SectionLogo}>
              <div className={classes.SectionLogoContainer}>
              <div>
                <img src="https://api.hindustanuniv.ac.in/uploads/The_world_logo_5f8b3dfd94.png" alt=""/>
              </div>
              <div>
                <img src="https://api.hindustanuniv.ac.in/uploads/NIRF_logo_84902269bf.png" alt=""/>
              </div>
              <div>
                <img src="https://api.hindustanuniv.ac.in/uploads/IET_logo_81561c8e88.png" alt=""/>
              </div>
              <div>
                <img src="https://api.hindustanuniv.ac.in/uploads/NBA_logo_verysmall_2333ca2799.png" alt=""/>
              </div>
              <div>
                <img src="https://api.hindustanuniv.ac.in/uploads/QS_logo_verysmall_9a78c11107.png" alt=""/>
              </div>
              <div>
                <img src="https://api.hindustanuniv.ac.in/uploads/NAAC_logo_verysmall_508c58a242.png" alt=""/>
              </div>
              </div>
            </div>
        </section>
    )
}

export default SectionTitle;