import React, { useEffect, useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

const App = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Set scrolling to true when the component mounts
    setScrolling(true);

    // Clean up the effect by setting scrolling to false when the component unmounts
    return () => {
      setScrolling(false);
    };
  }, []);

  return (
    <div className="app">
      <div className={`scrolling-text ${scrolling ? 'scrolling' : ''}`}>
        This is some scrolling text.
      </div>
    </div>
  );
};

export default App;
