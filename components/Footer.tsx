import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-quimba py-10 w-full">
      {/* Container for content, centered on larger screens */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subscription section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold">Dont Miss Out</h3>
            <p>Sign up for the latest events, promotions, and updates from Quimba.</p>
          </div>

          {/* Form */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-3 w-full md:w-64 rounded-md text-black"
            />
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              className="p-3 w-full md:w-48 rounded-md text-black"
            />
            <button className=" bg-quimba font-semibold text-black px-6 py-3 rounded-md hover:bg-black hover:text-quimba transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
            <ul>
              <li><a href="#" className="hover:underline">Help & FAQs</a></li>
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Order Tracking</a></li>
              <li><a href="#" className="hover:underline">Return Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Explore</h4>
            <ul>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Merchandise</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-quimba hover:text-teal-500">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-quimba hover:text-teal-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-quimba hover:text-teal-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-quimba hover:text-teal-500">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-quimba hover:text-teal-500">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal section */}
        <div className="border-t border-gray-700 pt-6 text-sm text-quimba">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Site Map</a></li>
              </ul>
            </div>
            <div>&copy; {new Date().getFullYear()} Quimba. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
