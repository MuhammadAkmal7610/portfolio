import React, { useState } from "react";
import { ReactComponent as MenuSvg } from "../assets/icons8-menu.svg";
const Header = ({ secondary }) => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className="w-full flex items-center justify-between py-3">
      <h2 className="text-secondary font-semibold text-[25px]">M.AKMAL</h2>
      <ul className=" items-center gap-[45px] text-secondary text-[14px] xsm:hidden sm:flex">
        <li>
          <a
            className={`active:text-tertiary hover:text-tertiary`}
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="active:text-tertiary hover:text-tertiary"
          >
            Services
          </a>
        </li>
        <li>
          <a href="#work" className="active:text-tertiary hover:text-tertiary">
            Work
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="active:text-tertiary hover:text-tertiary"
          >
            Contact
          </a>
        </li>
      </ul>
      <button
        className="sm:hidden relative"
        onClick={() => setIsMenu((pre) => !pre)}
      >
        <MenuSvg color="white" />
      </button>
      {isMenu && (
        <ul className="flex flex-col absolute right-20 top-[60px] z-10 bg-white py-3">
          <li className="hover:bg-gray-600 px-3 hover:text-tertiary">
            <a className={`active:text-tertiary`} href="#about">
              About
            </a>
          </li>
          <li className="hover:bg-gray-600 px-3 hover:text-tertiary">
            <a href="#services" className="active:text-tertiary">
              Services
            </a>
          </li>
          <li className="hover:bg-gray-600 px-3 hover:text-tertiary">
            <a href="#work" className="active:text-tertiary">
              Work
            </a>
          </li>

          <li className="hover:bg-gray-600 px-3 hover:text-tertiary">
            <a href="#contact" className="active:text-tertiary">
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
