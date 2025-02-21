import React from "react";
import myImage from "../assets/myimage.jpeg";
const ClientCard = ({ title, para, from }) => {
  return (
    <div className="flex flex-col rounded-[16px] gap-[20px] px-5 py-5 bg-cardColor">
      <p className="text-paraColor font-light">{para}</p>
      <div className="flex gap-5">
        <div className="rounded-full w-[71px] h-[71px]">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col justify-evenly ">
          <h4 className="text-secondary font-semibold">{title} </h4>
          <div className="text-tertiary">{from}</div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
