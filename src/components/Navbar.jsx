import React from "react";

import logo from "../assets/logo.png";
import {navLinks, sitevars} from "../constants";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  return (
    <div className="navbar text-white">
      <div className="py-0 bg-[#03002A]">
        <div className="container">
          <div className="flex align-middle justify-between">
            <a href={`https://wa.me/${sitevars.phone_url}`} target="_blank" className="flex text-white py-3">
              <box-icon name="phone" color="white"></box-icon>
            {sitevars.phone}</a>

            <ul className="flex justify-end items-center">
              {
                sitevars.social.map((value, index) => (
                  <li key={index} className="h-full">
                    <a href={value.url} className={` flex min-w-[2rem] h-full items-center justify-center py-1 px-3 bg-[${value.icon.bg}] hover:bg-accent`} style={{background: value.icon.bg}}><box-icon type={value.icon.type} name={value.icon.class} color={value.icon.color}></box-icon></a>
                  </li>
                ))
              }
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 bg-[#1F035B]">
        <div className="container flex">
          <a className="w-1/4">
            <img src={logo} alt="" className="max-w-[200px]" />
          </a>
          <div className="content w-3/4 flex justify-end items-center">
            <ul className="flex justify-end gap-[2rem]">
            {Object.keys(navLinks).map((key) => (
                <li key={key} >
                <Link  className={`hover:text-accent ${ location.pathname == "/"+key ? 'text-accent' : '' }`} to={key}>{navLinks[key].text}</Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
