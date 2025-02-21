import React from "react";

const ServiceCard = ({ icon, title, para }) => {
  return (
    <div className="flex xsm:flex-col sm:flex-row rounded-[16px] gap-[20px] px-5 py-5 bg-cardColor">
      <div>{icon}</div>
      <div>
        <h3 className="text-[18px] font-medium text-secondary">{title}</h3>
        <p className="text-[14px] text-paraColor">{para}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
