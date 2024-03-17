import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import './css/custom_padding.css';
import Navbar from './components/navBar.js';
import Main from './components/main.js';
import Search from './components/search.js';

function App() {
 
  return (
   <>
   <div className="d-flex justify-content-around"> 
      <Navbar />
        <Main />
      <Search />
   </div>
   </>
  );
}

export default App;
