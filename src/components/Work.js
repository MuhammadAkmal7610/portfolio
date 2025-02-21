import React from "react";
import crmImage from "../assets/hikalcrm.PNG";
import eutsolImage from "../assets/eutsol.PNG";
import formbuilderImage from "../assets/formbuilder.PNG";
import ecommerceImage from "../assets/ecommerce.PNG";
import netFlixImage from "../assets/netflex-clone.PNG";

const projects = [
  crmImage,
  eutsolImage,
  formbuilderImage,
  ecommerceImage,
  netFlixImage,
];
const Work = () => {
  return (
    <>
      <div className="py-[70px] w-full" id="work">
        <h2 className="text-[40px] font-bold mb-3">
          <span className="text-secondary">My</span>{" "}
          <span className="text-tertiary ">Work</span>
        </h2>
        <p className="text-paraColor lg:w-[50%]">
          With a passion for web development and a commitment to excellence, I{" "}
          specialize in creating high-quality web solutions that are both
          innovative and effective. My work spans various industries and project{" "}
          types, from dynamic single-page applications to complex enterprise{" "}
          systems. I focus on understanding your unique requirements and
          delivering solutions that not only meet but exceed your expectations.{" "}
        </p>
        <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px] mt-9">
          {projects?.map((project, index) => {
            return (
              <div className="h-[264px] rounded-[8px] hover:blur-sm cursor-pointer">
                <img
                  src={project}
                  className="h-full w-full object-cover rounded-[8px]"
                  alt={`project image no ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[1px] rounded-lg bg-[#48453f]" />
    </>
  );
};

export default Work;
