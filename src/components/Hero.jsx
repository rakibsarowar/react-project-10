const Hero = () => {
  return (
    <div className="h-screen w-10/12 px-14 mx-auto max-w-screen-xl pt-24">
      <h1 className="text-6xl lg:text-9xl md:text-7xl font-semibold tracking-tighter text-gray-700 mb-11 md:mb-14 pb-4 md:pb-4 bg-gradient-to-br from-orange-500 to-amber-200 text-transparent bg-clip-text text-left">

        Rakib,<br />
        Experience<br />
        Developer
      </h1>
      <div className="text-xl md:text-2xl text-gray-400">
        <p className="mb-10 leading-relaxed font-normal subpixel-antialiased">
          Real passion for human-centered design solutions, also have extensive experience as Front End developer. Read my journal or my projects if you want to know more about me.
          <a direction="up" className="ease-in font-normal underline underline-offset-8 decoration-2 decoration-amber-400 text-white hover:text-white hover:decoration-white" href="/journal/">journal</a>
        </p>
        <p className="mb-10 leading-relaxed font-normal subpixel-antialiased">
          Real passion for human-centered design solutions, also have extensive experience as Front End developer.
          <a direction="up" className="ease-in font-normal underline underline-offset-8 decoration-2 decoration-amber-400 text-white hover:text-white hover:decoration-white" href="/journal/">journal</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;

