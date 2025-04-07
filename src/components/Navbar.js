import React from 'react';
import { BookmarkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ savedCount }) {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-2xl font-bold">Yumcraft</div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="#saved" className="hover:text-blue-400 transition duration-300">Saved</a>
          <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
        </div>
        <div className="relative flex items-center">
          <motion.div
            key={savedCount} // triggers re-animation on count change
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="flex items-center"
          >
            <BookmarkIcon className="w-6 h-6 text-white" />
            <span className="ml-1 text-sm bg-blue-500 text-white rounded-full px-2 py-0.5">
              {savedCount}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
