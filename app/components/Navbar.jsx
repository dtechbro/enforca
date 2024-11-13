"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Enforca from '@/app/assets/enforca.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Array of navigation links
  const navLinks = [
    {
      label: 'Mentorship',
      to: '/'
    },
    {
      label: 'Job Seekers',
      to: '/auth'
    },
    {
      label: 'Contact',
      to: '/'
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-main text-2xl font-bold">
          <Image src={Enforca} alt='brand logo' width={150 } height={100} />
        </Link>

        {/* Centered Links for Desktop */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          {navLinks.map((link) => (
            <Link href={link.to} key={link.label} className="text-[#515B6F]">
              {link.label }
            </Link>
          ))}
        </div>

        {/* Sign Up Button for Desktop */}
        <button className="hidden md:inline-block text-white bg-main py-2 px-5 rounded-md hover:bg-blue-100">
          Sign Up
        </button>

        {/* Mobile Hamburger Icon */}
        <button
          className="text-main md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-center">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-main focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Centered Links */}
          {navLinks.map((link) => (
            <Link href={`/${link.toLowerCase()}`} key={link} className="text-[#515B6F]">
              {link}
            </Link>
          ))}

          {/* Mobile Button */}
          <button className="bg-main text-white py-2 px-6 rounded-md">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
