import React from 'react';
import './vertical.css'; // Create a separate CSS file for styling

const VerticalScroll = () => {
  return (
    <div className="container">
      <div className="scrolling-images">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="slide">
            <img
              src={`https://hindustanuniv.ac.in/assets/image/new-logo.svg`}
              alt={`logo-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalScroll;
