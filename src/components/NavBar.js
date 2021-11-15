import React from "react";
import { NavLink, useLocation} from "react-router-dom";
import "./NavBar.css";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    
  return (
    <header className="bg-black">
      <div className=" container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-yellow-400 text-5xl font-bold cursive"
          >
            Saharsh
          </NavLink>
          <NavLink
            to="/about"
            className= {splitLocation[1] === "about" ? "act" : "text-white inline-flex items-center py-3 px-3 my-3 text-2xl rounded hover:text-pink-300 cursive"}
            activeClassName="act"
          >
            About Me!
          </NavLink>
          <NavLink
            to="/project"
            className={splitLocation[1] === "project" ? "act" : "text-white inline-flex items-center py-3 px-3 my-3 text-2xl rounded hover:text-green-300 cursive"}
            activeClassName="act"
          >
            Projects
          </NavLink>
          <NavLink
            to="/post"
            className={splitLocation[1] === "post" ? "act" : "text-white inline-flex items-center py-3 px-3 my-3 text-2xl rounded hover:text-red-500 cursive"}
            activeClassName="act"
          >
            Publications
          </NavLink>
          <NavLink
            to="/resume"
            className={splitLocation[1] === "resume" ? "act" : "text-white inline-flex items-center py-3 px-3 my-3 text-2xl rounded hover:text-purple-500 cursive"}
            activeClassName="act"
          >
            Resume
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/SaharshKhicha18"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/saharshkhicha/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/saharsh-khicha-b67b09140/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/saharsh.khicha"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
        </div>
    </header>
  );
  }
