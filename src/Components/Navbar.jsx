import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar top-0 left-0 z-50 fixed px-8 bg-base-100 shadow-sm">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm font-bold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/items">Items</NavLink>
            </li>
            <li>
              <NavLink href="/add-items">Add Items</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-2xl font-extrabold"
        >
          NextShop
        </Link>
      </div>
      <div className="navbar-center font-bold hidden lg:flex">
        <ul className="menu font-xl text-lg menu-horizontal px-1">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/items">Items</NavLink>
          </li>
          <li>
            <NavLink href="/add-items">Add Items</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="login"
          className="btn text-white text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
