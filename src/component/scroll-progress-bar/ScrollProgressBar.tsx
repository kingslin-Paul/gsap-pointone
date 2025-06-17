
import React, { useEffect, useState } from 'react';

function ScrollProgressBar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-[6px] bg-transparent z-[9999]'>
      <div
        className='h-full bg-[#FF6340] transition-all duration-150 ease-out'
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}

export default ScrollProgressBar;
