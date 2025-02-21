import React from "react";
import myImage from "../assets/akmal.jpg";
const HeroSection = () => {
  return (
    <>
      <div
        className="w-full flex xsm:flex-col sm:flex-row items-center h-[590px] xsm:mb-[100px] sm:mb-9"
        id="about"
      >
        <div className="h-full sm:mt-[250px] xsm:mt-[50px] flex flex-col gap-7 items-start flex-1">
          <h1 className="text-[5vw] font-bold text-secondary">I'm M.Akmal</h1>
          <div></div>
          <p className="text-paraColor text-[20px]">
            I'm a Mern Stack developer, My skills include HTML, CSS, Javascript node js ,express
            Mongodb,
            and React js/Nextjs with three yaers of industry experience, As well as I have also knowledge of My SQL.
          </p>
          <a href="#work">
            <button className="px-2 py-3 bg-tertiary text-secondary rounded-md">
              Explore my work
            </button>
          </a>
        </div>
        <div className="flex-1 flex justify-center xsm:mt-11  sm:mt-0 relative">
          <div className="xl:w-[342px] xl:h-[342px] lg:w-[290px] lg:h-[290px] md:w-[240px] md:h-[240px] xsm:w-[190px] xsm:h-[190px]  rounded-full absolute z-1 sm:top-[-40px] sm:right-[40px] xsm:top-[-30px] xsm:right-[-30px] bg-[#48453f]"></div>
          <div className="xl:w-[209px] xl:h-[209px] lg:w-[180px] lg:h-[180px] md:w-[130px] md:h-[130px] xsm:w-[90px] xsm:h-[90px] rounded-full  absolute z-1 sm:bottom-[-60px] sm:left-[110px] xsm:bottom-[-10px] xsm:left-[5px] bg-[#48453f]"></div>
          <div className="rounded-full border-[10px] border-tertiary xl:w-[460px] xl:h-[460px] lg:w-[360px] lg:h-[360px] md:w-[280px] md:h-[280px] xsm:w-[230px] xsm:h-[230px] relative z-10">
            <img
              src={myImage}
              alt="Akmal image"
              className="w-full h-full object-fit rounded-full grayscale"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] rounded-lg bg-[#48453f]" />
    </>
  );
};

export default HeroSection;
