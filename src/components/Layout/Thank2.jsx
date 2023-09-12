// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../../components/Thank.css'

const Thank2 = () => {
    const [isScrolling, setIsScrolling] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already occurred

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated) {
        setIsScrolling(true);

        // Add a timeout to reset the animation after 1 second
        setTimeout(() => {
          setIsScrolling(false);
          setHasAnimated(true); // Mark the animation as completed
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div className="col-start-1 col-span-10 px-0 md:col-start-1 md:col-span-8 md:px-0 md:pr-9 md:mb-10">
      <div className={`not-prose mb-8 ${isScrolling && !hasAnimated ? 'zoom-out' : ''}`}>
        <span className="text-gray-500 text-4xl font-semibold font-custom md:text-9xl">Thank you</span>
      </div>
        <span className="text-gray-500 text-4xl font-semibold font-custom md:text-9xl">for stopping by!</span>
    </div>
  );
};

export default Thank2;


