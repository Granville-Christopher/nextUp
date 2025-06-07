import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const resourcesRef = useRef(null); // Ref for the resources dropdown
  const mobileMenuRef = useRef(null); // Ref for the mobile menu

  // Close dropdown or mobile menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target)
      ) {
        setIsResourcesOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        event.target.tagName !== "BUTTON"
      ) {
        // Ensure not clicking on the toggle button
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Inline SVG for the 'Nextup' checkmark logo
  const checkmarkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-blue-600 mr-2"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.22-.572l-3.35 3.195 1.111-3.683a.75.75 0 0 0-.154-.775l-1.637-1.637a.75.75 0 0 0-1.152.073L7.5 12.187l-1.903-1.903a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.137-.089l2.7-3.6a.75.75 0 0 0 .154-.775Z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Inline SVG for the 'Sign Up' arrow
  const signUpArrowIcon = (
    <svg
      className="ml-2 w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      ></path>
    </svg>
  );

  // Inline SVG for dropdown caret
  const caretDownIcon = (
    <svg
      className="ml-1 w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );

  // Inline SVG for hamburger/close icon
  const hamburgerIcon = (
    <svg
      className="w-6 h-6 text-gray-700"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  );

  const closeIcon = (
    <svg
      className="w-6 h-6 text-gray-700"
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
  );

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white z-50 font-inter">
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-yellow-100 to-blue-300 opacity-20 pointer-events-none"></div>

      {/* This inner div now contains the actual Navbar content, with the floating/centered styles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:shadow-md md:rounded-lg md:my-8 bg-white relative z-10">
        <div className="absolute right-0 top-0 h-full w-[200px] bg-blue-100 transform skew-x-[-15deg] origin-top-left -z-10 md:w-[300px] lg:w-[400px]"></div>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {checkmarkIcon}
            <span className="text-xl font-bold text-gray-900"><Link to="/">nextUp</Link></span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="Dashboard"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              to="Pricing"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
            >
              Pricing
            </Link>
            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200 focus:outline-none"
              >
                Resources {caretDownIcon}
              </button>
              {isResourcesOpen && (
                <div className="absolute z-20 mt-3 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                      role="menuitem"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                      role="menuitem"
                    >
                      Help & Support
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                      role="menuitem"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="#"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          {/* Desktop Sign Up Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center">
              Sign Up {signUpArrowIcon}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? closeIcon : hamburgerIcon}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              Features
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              Pricing
            </Link>
            {/* Mobile Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none justify-between"
              >
                Resources {caretDownIcon}
              </button>
              {isResourcesOpen && (
                <div className="pl-6 pr-3 py-1 space-y-1 bg-gray-50 rounded-md mt-1">
                  <Link
                    to="#"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to="#"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                  >
                    Help & Support
                  </Link>
                  <Link
                    to="#"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              Login
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 flex items-center justify-center">
                Sign Up {signUpArrowIcon}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
