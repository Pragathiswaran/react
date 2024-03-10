import './App.css';
import React from 'react';
import 'hamburgers/dist/hamburgers.min.css';

function addActive(){
  document.querySelector('.hamburger').classList.toggle('is-active');

}
function App() {

  return (
   <>
    <nav className="fixed w-full z-1000">
      <div className="bg-gray-950 text-white p-1 pl-[160px] pr-[160px] pb-1 font-bold ">
        <div className="flex justify-around">
          <div>
            <a href="#" className='text-base'>Academics</a> 
          </div>
          <div>
            <a href="#" className="text-amber-500">Admissions 2024</a>
          </div>
          <div>
            <a href="#" >Research</a>
          </div>
          <div>
            <a href="#" >International Affairs</a>
          </div>
          <div>
            <a href="#" >Student Affairs</a>
          </div>
          <div>
            <a href="#" >Placements</a>
          </div>
          <div>
            <a href="#" >Careers</a>
          </div>
          <div>
            <a href="#" >
          <span className="material-symbols-outlined">search</span>
          </a>
          </div>
        </div>
      </div>
      <div className="bg-white px-[160px] pb-4 flex justify-between">
        <div className='pt-2'>
          <img src="https://hindustanuniv.ac.in/assets/image/new-logo.svg" className="mp-2 size-full" />
        </div>
        <div className='pt-2'>
          <div className="hamburger hamburger--spring js-hamburger" onClick={addActive} type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>
      </div>
    </nav>
   <section className='relative top-[10rem] px-[160px]'>
    <div className=''>
      <div className='w-[50%] pt-6'>
        <div className='text-8xl w-[10%] font-bold '>
          <div className='flex-col-reverse'>
            <span>Igniting</span>
            <span>minds</span>
          </div>
          <div>
            <span>statewide</span>
          </div>
          <span></span>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
    <div></div>
    </section>
   </>
  );
}

export default App;
