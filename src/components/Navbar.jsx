import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-14 bg-indigo-400 flex justify-between px-4 md:px-4 items-center shadow-lg">
        <div className="text-2xl text-white font-bold">Logo</div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer">Contact us</li>
          <li id="#service" className="mx-[10px] cursor-pointer">
            Our services
          </li>
          {/* <li><input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" placeholder="Search event"/></li> */}
        </ul>
        <button className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded-xl font-bold cursor-pointer">
          login/signup
        </button>

        <div className="md:hidden">
          <a className="text-4xl" href="/">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
}
