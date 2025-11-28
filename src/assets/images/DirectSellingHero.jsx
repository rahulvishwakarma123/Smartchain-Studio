import React from "react";
import { motion } from "framer-motion";
import directSellingHeroImage from "../../../assets/directSelling.jpg";

const DirectSellingHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-blue-900 to-gray-900 px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-8 bg-linear-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-8xl">
            Direct Selling Software
          </h1>
          <p className="mx-auto mb-10 max-w-4xl text-xl leading-relaxed text-gray-300">
            Direct selling software, also known as network marketing software,
            is a crucial tool used by top network marketing companies to manage
            their day-to-day operations, including sales, compensation plans,
            lead generation, recruitment, and training. Smartchain Studio MLM
            direct selling software offers the best direct selling software
            solution designed to cater to the unique needs to help you
            streamline your business processes, maximize your product sales, and
            effectively manage your network of distributors.
          </p>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="https://wa.me/9202983564">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="z-10 cursor-pointer rounded-xl border border-blue-500 bg-linear-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-blue-500"
              >
                Give Demo
              </motion.button>
            </a>

            <a href="https://wa.me/9202983564">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(34, 211, 238, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="z-10 cursor-pointer rounded-xl border border-cyan-500/30 bg-linear-to-r from-cyan-500 to-cyan-600 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-cyan-500"
              >
                Customize Your Plan
              </motion.button>
            </a>
          </div>
        </motion.div>
        <div className="mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl leading-tight font-bold md:text-5xl"
            >
              “Step into the world of MLM success –{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Join Smartchain Studio MLM and effortlessly configure your dream
                business!”
              </span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4">
              <a href="https://wa.me/9202983564">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl border border-cyan-400/30 bg-linear-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:shadow-cyan-500/40"
                >
                  Get Started Now
                </motion.button>
              </a>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-sm font-medium text-gray-400"
              >
                no credit, no problem
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
              <img
                src={directSellingHeroImage}
                alt="Direct Selling MLM Software Dashboard"
                className="w-full transform object-contain transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Feature Badges */}
            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="absolute -top-6 -left-6 rounded-xl border border-blue-400/50 bg-blue-600 px-6 py-3 text-white shadow-lg"
            >
              <div className="text-sm font-semibold">Real-time Stats</div>
            </motion.div>

            <motion.div
              variants={floatAnimation}
              animate="animate"
              transition={{ delay: 0.5 }}
              className="absolute -right-6 -bottom-6 rounded-xl border border-cyan-400/50 bg-cyan-600 px-6 py-3 text-white shadow-lg"
            >
              <div className="text-sm font-semibold">Genealogy Reports</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DirectSellingHero;
