import React from "react";
import Typed from "typed.js";


const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['React Developer', 'Vue Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (

    <>

      <div className="container mx-auto pt-0 mb-16 md:pt-16 md:mb-20 sm font-sans relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 px-0 sm:col-start-1 sm:col-span-12 sm:px-0 lg:col-start-1 lg:col-span-12 lg:px-0 xl:col-span-8 xl:col-start-3 2xl:col-span-8 2xl:col-start-3">
            <div>
              <h1 className="text-6xl lg:text-9xl md:text-7xl font-semibold tracking-tighter text-gray-700 mb-11 md:mb-14 pb-4 md:pb-4 bg-gradient-to-br from-orange-500 to-amber-200 text-transparent bg-clip-text text-left font-link">

                Rakib,<br />
                Experience<br />
                <span ref={el} />
              </h1>
              <div className="text-xl md:text-2xl text-gray-400">
                <p className="mb-10 leading-relaxed font-normal subpixel-antialiased">
                  I am an aspiring MERN & MEVN Stack Developer with strong knowledge of JavaScript, Es6, React , Vue, Express & MongoDB. I always seek out new knowledge, technology and actively develop my skills.
                </p>
                <p className="mb-10 leading-relaxed font-normal subpixel-antialiased">
                  Also, I love to connect with new friends and share my knowledge & thoughts in social media. 
                  <a direction="up" className="ease-in font-normal underline underline-offset-8 decoration-2 decoration-amber-400 text-white hover:text-white hover:decoration-white" href="https://www.linkedin.com/in/rakibsarowar/"> LinkedIn</a> <span>| </span>  
                  <a direction="up" className="ease-in font-normal underline underline-offset-8 decoration-2 decoration-amber-400 text-white hover:text-white hover:decoration-white" href="https://github.com/rakibsarowar">GitHub</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Hero;

