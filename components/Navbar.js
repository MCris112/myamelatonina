import { useState } from "react";

import { navLinks, sitevars } from "../constants";
import { useRouter } from 'next/router'

const Navbar = () => {
  let router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, href) => {
    e.preventDefault()

    var url = sitevars.production ? sitevars.url : sitevars.url_dev
    router.push(href)
  }

  return (
    <div className="navbar text-white sticky top-0 z-[99]">
      <div className="py-0 bg-[#03002A]">
        <div className="container">
          <div className="flex align-middle justify-between">
            <a
              href={`https://wa.me/${sitevars.phone_url}`}
              target="_blank"
              rel="noreferrer"
              className="flex text-white py-3"
            >
              <box-icon name="phone" color="white"></box-icon>
              {sitevars.phone}
            </a>

            <ul className="flex justify-end items-center">
              {sitevars.social.map((value, index) => (
                <li key={index} className="h-full">
                  <a
                    href={value.url}
                    className={`flex min-w-[2rem] h-full items-center justify-center py-1 px-3 bg-[${value.icon.bg}] hover:bg-accent`}
                    style={{ background: value.icon.bg }}
                  >
                    <box-icon
                      type={value.icon.type}
                      name={value.icon.class}
                      color={value.icon.color}
                    ></box-icon>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 bg-[#1F035B]">
        <div className="container flex">
          <a className="w-1/4">
            <img src={sitevars.logo.src} alt="" className="max-w-[200px]" />
          </a>
          <div className="content w-3/4 flex justify-end items-center">
            <div
              className="cursor-pointer sm:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <box-icon name="menu" color="white"></box-icon>
            </div>

            <div
              className={`${
                menuOpen ? "flex" : "hidden"
              } sm:flex flex-col justify-center items-center gap-[2rem] bg-primary fixed top-0 left-0 w-full h-screen z-[99] py-6 sm:relative sm:py-0 sm:h-fit sm:bg-transparent sm:justify-end sm:items-end`}
            >
              <div
                className="cursor-pointer flex justify-center items-center sm:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <box-icon name="x" color="white" size="lg"></box-icon>
              </div>
              <ul className={`sm:flex sm:justify-end gap-[2rem] m-6 text-center sm:m-0`}>
                {navLinks.map((value, key) => (
                  <li key={key}>
                    <a
                      className={`hover:text-accent ${
                        router.pathname == value.slug ? "text-accent" : ""
                      } block text-[1.6rem] py-3 sm:text-lg sm:py-0`}
                      href={value.slug}
                      onClick={(e) => {setMenuOpen(false); handleClick(e, value.slug)}}
                    >
                      {value.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
