import React, { useState, useEffect } from "react";
import { logo } from "../assets/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full bg-white backdrop-blur-lg transition-all duration-500`}
      >
        <div className="mx-auto px-5">
          <div className="flex h-24 items-center justify-between">
            {/* Logo Section with Animation */}
            <div className="group flex cursor-pointer items-center gap-4">
              <div className="relative">
                <img
                  className="h-20 w-auto transition-all duration-300 group-hover:scale-110"
                  src={logo}
                  alt="Nexachain Logo"
                />
              </div>
            </div>

            {/* Desktop Navigation - Right Side */}
            <div className="flex items-center gap-6">
              {/* Enhanced CTA Button */}
              <a
                href="/contact"
                className="group relative overflow-hidden rounded-2xl bg-linear-to-r from-zinc-900 to-purple-600 px-8 py-4 font-bold text-white shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500 max-sm:px-4 max-sm:py-2"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full -skew-x-12 transform bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>

                <span className="relative z-10 flex items-center gap-3">
                  <span className="max-sm:text-sm">Get in Touch</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Enhanced Mobile menu button */}
            {/* <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="group rounded-2xl border border-blue-500/30 bg-blue-500/10 p-3 transition-all duration-300 hover:bg-blue-500/20"
              >
                <div className="flex h-6 w-6 flex-col items-center justify-center space-y-1.5">
                  <span
                    className={`block h-0.5 w-5 bg-cyan-300 transition-all duration-300 ${
                      isMenuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-5 bg-cyan-300 transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-5 bg-cyan-300 transition-all duration-300 ${
                      isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div> */}
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {/* {isMenuOpen && (
          <div className="absolute top-full left-0 w-full border-t border-blue-500/20 bg-linear-to-b from-gray-900 to-gray-800 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="space-y-6 px-6 py-8"> */}
        {/* Mobile Network Status */}
        {/* <div className="rounded-2xl border border-blue-500/30 bg-linear-to-r from-blue-500/10 to-cyan-500/10 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></div>
                    <span className="font-semibold text-blue-200">
                      Network Status
                    </span>
                  </div>
                  <div className="text-sm font-bold text-cyan-300">LIVE</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-blue-300/70">TPS</div>
                    <div className="font-bold text-cyan-300">24.5K</div>
                  </div>
                  <div>
                    <div className="text-blue-300/70">Gas</div>
                    <div className="font-bold text-cyan-300">12 Gwei</div>
                  </div>
                </div>
              </div> */}

        {/* Mobile CTA Buttons */}
        {/* <div className="space-y-4">
                <a
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full rounded-2xl bg-linear-to-r from-blue-600 to-cyan-600 px-6 py-4 text-center font-bold text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/30"
                >
                  Launch dApp
                </a>
                <a
                  href="/wallet"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full rounded-2xl border-2 border-cyan-500 px-6 py-4 text-center font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10"
                >
                  Connect Wallet
                </a>
              </div> */}

        {/* Quick Links */}
        {/* <div className="border-t border-blue-500/20 pt-4">
                <div className="mb-4 text-sm font-semibold text-blue-300/70">
                  QUICK LINKS
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["Explorer", "Docs", "GitHub", "Blog"].map((item) => (
                    <a
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-xl border border-blue-500/10 bg-blue-500/5 px-4 py-3 text-center text-blue-200 transition-all duration-200 hover:border-blue-500/30 hover:bg-blue-500/10"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )} */}
      </nav>

      {/* Add padding to prevent content from being hidden under fixed navbar */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
