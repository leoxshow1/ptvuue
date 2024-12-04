import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary-600">PTvuue</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
              <BellIcon className="h-6 w-6" />
            </button>
            <div className="ml-3 relative">
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <UserCircleIcon className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;