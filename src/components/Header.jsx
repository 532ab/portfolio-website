import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = ({ openContactForm }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3, duration: 1.3 }}
          className="flex items-center"
        >
          <span className="justify-start flex px-0 text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Abhi Chaddha
          </span>
          <nav className="px-4 lg:flex-auto flex space-x-3 ">
            <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            href="https://github.com/532ab"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            href="https://www.linkedin.com/in/abhimanyu-chaddha-9870412a0"
            >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          </nav>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Contact", "Skills"].map((item) => (
            <motion.a

              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.4 }}
              className="relative text-gray-800 dark:text-gray-200 hover:red-600 dark:hover:text-red-500 font-medium transition-colors duration-500 group"
              href={`#${item.toLowerCase()}`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-100 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          <a href="/Chaddha_Abhimanyu.pdf" target="_blank" rel="noopener noreferrer" download>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
                className="ml-4 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 text-red-700 font-bold hover:from-red-700 hover:to-red-700 hover:text-white transition-all duration-400 flex items-center h-10 text-sm sm:text-base"
              >
              Resume
            </motion.button>
</a>

      </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu} className="text-gray-300">
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="bg-white dark:bg-gray-900 shadow-2xl px-4 py-6 space-y-4 backdrop-blur-sm">
          <nav className="flex flex-col space-y-2">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: isOpen ? index * 0.05 : 0, duration: 0.3 }}
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-100 font-medium py-3 px-4 rounded-lg hover:bg-violet-100 dark:hover:bg-gray-800 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="pt-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
              transition={{ delay: isOpen ? 0.25 : 0, duration: 0.3 }}
              href="/Chaddha_Abhimanyu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="block"
            >
              <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-red-700 dark:text-red-400 font-bold hover:from-red-700 hover:to-red-700 hover:text-white dark:hover:from-red-700 dark:hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Resume
              </button>
            </motion.a>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
              transition={{ delay: isOpen ? 0.3 : 0, duration: 0.3 }}
              onClick={() => {
                toggleMenu()
                openContactForm()
              }}
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 dark:from-violet-700 dark:to-violet-500 text-white font-bold hover:shadow-lg hover:from-violet-700 hover:to-violet-600 transition-all duration-300 shadow-md"
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </motion.div>
    </header>
  )
}

export default Header
