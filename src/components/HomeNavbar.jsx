import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {logo} from '../assets/images' 

const HomeNavbar = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileserviceOpen, setMobileServiceOpen] = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 z-50 bg-linear-to-r from-cyan-50 to-blue-100 shadow-lg border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center space-x-3"
            >
              {/* Logo Image - Replace with your actual logo path */}
              <img
                src={logo}
                alt="Nexachain Logo"
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <h1 className="text-2xl font-bold text-blue-800">Nexachain</h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home Link */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200"
              >
                Home
              </Link>
            </motion.div>

            {/* About Us Link */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200"
              >
                About Us
              </Link>
            </motion.div>

            {/* Servises Link */}
            {/* <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/servises"
                className="text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200"
              >
                Services
              </Link>
            </motion.div> */}

            {/* Services Dropdown */}
            <div className="relative">
              <motion.button
                className="text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200 flex items-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setServiceOpen(true)}
                onHoverEnd={() => setServiceOpen(false)}
              >
                Services
                <motion.svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: serviceOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {serviceOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-blue-200 py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onHoverStart={() => setServiceOpen(true)}
                    onHoverEnd={() => setServiceOpen(false)}
                  >
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      Service
                    </Link>
                    <Link
                      to="/service1"
                      className="block px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      Service 1
                    </Link>
                    <Link
                      to="/service2"
                      className="block px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      Service 2
                    </Link>
                    <Link
                      to="/service3"
                      className="block px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      Service 3
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* Products Dropdown */}
            <div className="relative">
              <motion.button
                className="text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200 flex items-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setProductsOpen(true)}
                onHoverEnd={() => setProductsOpen(false)}
              >
                Products
                <motion.svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: productsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-blue-200 py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onHoverStart={() => setProductsOpen(true)}
                    onHoverEnd={() => setProductsOpen(false)}
                  >
                    <Link
                      to="/binaryMLM"
                      className="block px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      Binary MLM
                    </Link>
                    <Link
                      to="/unilevelMLM"
                      className="block px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      Unilevel MLM
                    </Link>
                    <Link
                      to="/matrixMLM"
                      className="block px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      Matrix MLM
                    </Link>
                    <Link
                      to="/directSellingMLM"
                      className="block px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      Direct Selling MLM
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Career Link */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/career"
                className="text-blue-700 hover:text-blue-900 font-medium transition-colors duration-200"
              >
               Career
              </Link>
            </motion.div>
            

            {/* Contact Us Button */}
            <div className="flex items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md"
                >
                  Contact Us
                </Link>
              </motion.div>
              <a href="https://wa.me/9202983564">
                <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md"
                >
                  Get In Touch
                </button>
              </motion.div>
              </a>
             
            </div>
          </div>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              className="text-blue-700 hover:text-blue-900 p-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.div
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-blue-200 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Home Link */}
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/"
                    className="block px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>

                {/* About Us Link */}
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="block px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </motion.div>

                {/* career link */}
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/career"
                    className="block px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Career
                  </Link>
                </motion.div>

                

                {/* Products Dropdown Mobile */}
                <div className="space-y-1">
                  <motion.button
                    className="w-full flex justify-between items-center px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileServiceOpen(!mobileserviceOpen)}
                  >
                    <span>Products</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: mobileserviceOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </motion.button>

                  <AnimatePresence>
                    {mobileserviceOpen && (
                      <motion.div
                        className="pl-4 space-y-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          to="/binaryMLM"
                          className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                          onClick={() => setMobileServiceOpen(false)}
                        >
                          Binary MLM
                        </Link>
                        <Link
                          to="/unilevelMLM"
                          className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                          onClick={() => setMobileServiceOpen(false)}
                        >
                          Unilevel MLM
                        </Link>
                        <Link
                          to="/matrixMLM"
                          className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                          onClick={() => setMobileServiceOpen(false)}
                        >
                          Matrix MLM 
                          </Link>
                        <Link
                          to="/directSellMLM"
                          className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                          onClick={() => setMobileServiceOpen(false)}
                        >
                          Direct Sell MLM
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>


                {/* products Dropdown Mobile */}
                <div className="space-y-1">
                  <motion.button
                    className="w-full flex justify-between items-center px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-md font-medium"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  >
                    <span>Services</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </motion.button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        className="pl-4 space-y-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          to="/services"
                          className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Service
                        </Link>
                        <Link
                          to="/service1"
                          className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Service 1
                        </Link>
                        <Link
                          to="/service2"
                          className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Service 2
                        </Link>
                        <Link
                          to="/service3"
                          className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Service 3
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>


                {/* Contact Us Button Mobile */}
                <motion.div whileTap={{ scale: 0.95 }} className="pt-2">
                  <Link
                    to="/contact"
                    className="block w-full bg-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center shadow-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>
                <a href="https://wa.me/9202983564">
                  <motion.div whileTap={{ scale: 0.95 }} className="pt-2">
                    <button
                      className="block w-full bg-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center shadow-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get In Touch
                    </button>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default HomeNavbar;
