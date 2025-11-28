import React from "react";
import { motion } from "framer-motion";
import binaryHeroImage from "../../assets/dashboard/xpeo.user.jpg";

const MatrixHero = () => {
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
    <div className="min-h-screen bg-linear-to-b from-gray-50 via-purple-50 to-gray-50 px-4 py-16 text-gray-800">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-8 bg-linear-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            What is Matrix MLM Software?
          </h1>
          <p className="mx-auto mb-10 max-w-4xl text-xl leading-relaxed text-gray-600 max-sm:text-justify">
            Matrix MLM software is a tool designed to manage and automate the
            matrix compensation plan structure used in multilevel marketing
            businesses. Smartchain Studio MLM Software is a perfect solution for
            managing MLM Matrix Plans by monitoring distributor activities,
            automating commission calculations, lead generation and supporting
            network growth, making it the ideal choice for MLM businesses.
          </p>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="https://wa.me/9202983564">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(147, 51, 234, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="z-10 cursor-pointer rounded-xl border border-purple-500/30 bg-linear-to-r from-purple-600 to-purple-700 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-purple-400/30"
              >
                Give Demo
              </motion.button>
            </a>

            <a href="https://wa.me/9202983564">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="z-10 cursor-pointer rounded-xl border border-purple-400/30 bg-linear-to-r from-purple-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-purple-400/30"
              >
                Customize Your Plan
              </motion.button>
            </a>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-purple-200 shadow-xl shadow-purple-200/50">
              <img
                src={binaryHeroImage}
                alt="Binary MLM Software Dashboard"
                className="h-auto w-full transform object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-purple-100/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Feature Badges */}
            

            <motion.div
              variants={floatAnimation}
              animate="animate"
              transition={{ delay: 0.5 }}
              className="absolute -right-6 -bottom-6 rounded-xl border border-purple-300/50 bg-purple-500 px-6 py-3 text-white shadow-lg"
            >
              <div className="text-sm font-semibold">Genealogy Reports</div>
            </motion.div>

          </motion.div>

          {/* Right Column - Content */}
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
              Solve Your MLM Challenges With Our{" "}
              <span className="bg-gradiant-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                Proven Matrix MLM Solutions!
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed text-gray-600 max-sm:text-justify"
            >
              Streamline your network marketing business with our advanced
              Matrix MLM software. From automated commission calculations to
              real-time performance tracking, we provide everything you need to
              scale your MLM empire efficiently.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <a href="https://wa.me/9202983564">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl border border-purple-400/30 bg-linear-to-r from-purple-500 to-purple-600 px-10 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:shadow-purple-400/30"
                >
                  Get Started Now
                </motion.button>
              </a>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-sm font-medium text-gray-500"
              >
                no credit, no problem
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MatrixHero;
