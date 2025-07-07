import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({location,getLocation,openDropdown,setOpenDropdown}) => {

const toggleDropdown=()=>{setOpenDropdown(open=>!open)}

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl font-serif">YuPick</h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-orange-500"></MapPin>
            <span className="font-semibold">
              {location ? <div className="-space-y-2">
                <p>{location.county}</p>
                <p>{location.state}</p>
              </div> : "Add Address"}
            </span>
           <FaCaretDown onClick={toggleDropdown}/>
          </div>
          {
            openDropdown && (
              <div className="w-[200px] h-max shadow-xl z-50 bg-white fixed top-16 left-60 p-2 rounded-md border-orange-500 border-1">
               <h4 className=" mb-4 text-md flex justify-between">Change Location<span onClick={toggleDropdown}><CgClose className="cursor-pointer"/></span></h4>
               <button onClick={getLocation} className="bg-orange-500 text-white px-3 py-1 cursor-pointer rounded-md">Detect Location</button>
              </div>
            )
          }
        </div>
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-l font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-black"
                } cursor-pointer transition-all`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-black"
                } cursor-pointer transition-all`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-black"
                } cursor-pointer transition-all`
              }
            >
              {" "}
              <li>About</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-500" : "text-black"
                } cursor-pointer transition-all`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to="cart" className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="absolute px-2 -top-3 -right-3 rounded-full bg-orange-500 text-white text-sm ">
              0
            </span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="bg-orange-500 px-3 py-1 cursor-pointer rounded-md text-white"/>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
