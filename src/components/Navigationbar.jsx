import React, { useState, useEffect } from "react";
import logo from "../assets/suitmedia-white.png";
import { Link, useLocation } from "react-router-dom";
import { navdata } from "../data/data.navigate";

const Navigationbar = () => {
  const location = useLocation();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } bg-[#EF6C34] bg-opacity-80 h-auto backdrop-blur-md`}
    >
      <nav className='container flex justify-between items-center mx-auto '>
        <img className='w-28 cursor-pointer' src={logo} alt='logo' />
        <ul className='flex gap-10 text-white text-[16px]'>
          {navdata.map((data) => (
            <li key={data.id} className='relative'>
              <Link
                to={data.link}
                className={`${
                  data.link === location.pathname
                    ? "border-b-4 border-white font-bold"
                    : "text-white"
                } cursor-pointer hover:font-bold hover:border-b-2 hover:border-white`}
              >
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navigationbar;
