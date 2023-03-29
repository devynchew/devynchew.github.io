import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks, social } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[white]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/personal-portfolio-v3"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"></img>
          <p className="text-[var(--blue-dark)] text-[18px] font-bold cursor-pointer flex">
            Devyn &nbsp;
          </p>
        </Link>

        {/* About Projects Work Contact buttons */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "font-bold" : "font-medium"
              } text-[18px] cursor-pointer text-[var(--blue-dark)]`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className='relative navbar-link'>{link.title}</a>
            </li>
          ))}
        </ul>
        
        {/* Hamburger menu */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></img>
          <div
            className={`${
              !toggle ? "hidden" : "flex flex-col"
            } h-screen bg-[var(--blue-dark)] absolute top-[76px] right-0 left-[25%] z-10 pt-[15vh]`}
          >
            <ul className="flex flex-col gap-4 mx-auto items-center">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[var(--white-light)]" : "text-[var(--grey)]"
                  } cursor-pointer text-[24px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className="flex gap-5 pt-10 justify-center">
              {social.map((social) => (
                <div onClick={() => window.open(social.link, "_blank")}>
                  <img src={social.icon} alt={social.title} className="w-[25px]"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
