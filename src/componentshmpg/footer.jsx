import { Link } from "react-router-dom";
import React from "react";
const CheckLogoIcon = ({ className }) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-white mr-2"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.22-.572l-3.35 3.195 1.111-3.683a.75.75 0 0 0-.154-.775l-1.637-1.637a.75.75 0 0 0-1.152.073L7.5 12.187l-1.903-1.903a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.137-.089l2.7-3.6a.75.75 0 0 0 .154-.775Z"
        clipRule="evenodd"
      />
    </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-4">
            <CheckLogoIcon className="w-8 h-8 mr-2" /> {/* Use the defined SVG component */}
            <span className="text-white text-2xl font-bold">nextUp</span>
          </div>
          <p className="text-gray-500 text-sm">Stay Ahead with Next Up!</p>
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-left">Menu</h4>
          <ul className="space-y-3 text-left">
            <li><Link to="#" className="hover:text-white transition-colors duration-200">Home</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-200">Features</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-200">Pricing</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
          </ul>
        </div>

        {/* Info Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-left">Info</h4>
          <ul className="space-y-3 text-left">
            <li><Link to="#" className="hover:text-white transition-colors duration-200">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-200">Help & Support</Link></li>
          </ul>
        </div>

        {/* Account Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-left">Account</h4>
          <ul className="space-y-3 text-left">
            <li><Link to="#" className="hover:text-white transition-colors duration-200">Sign Up</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-200">Login</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>Copyright &copy; 2023 Next Up. All Rights Reserved</p>
      </div>
    </footer>
  );
}
