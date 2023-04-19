import React, { useState, useEffect } from 'react';

function Scroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1 className='text-white fixed'>Scroll position: {scrollPosition}px</h1>
      <div className='h-[270000px]'></div>
      {/* Render the rest of your app */}
    </div>
  );
}

export default Scroll;
