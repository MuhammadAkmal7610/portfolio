import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cardColor w-full flex justify-between py-6 lg:px-[100px] px-[200px] md:px-[50px] xsm:px-[10px] xsm:text-[10px] sm:text-[16px]">
      <p>
        <span className="text-secondary font-semibold">
          {" "}
          All rights reserved. Designed by &nbsp;
        </span>
        <span className="text-tertiary">Muhammad Akmal</span>
      </p>
      <ul className="flex gap-5 text-secondary font-semibold">
        <li>Linked In</li>
        <li>Instagram</li>
        <li>Indeed</li>
      </ul>
    </footer>
  );
};

export default Footer;
