import React from "react";
import { motion } from "framer-motion";
import binaryHeroImage from "../../assets/dashboard/biyoliva.admin.jpg";

const UniLevelHero = () => {
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
    <div className="min-h-screen bg-gradiant-to-b from-gray-50 via-purple-50 to-gray-50 px-4 py-16 text-gray-800">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-8 bg-linear-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            What is Unilevel MLM Software?
          </h1>
          <p className="mx-auto mb-10 max-w-4xl text-xl leading-relaxed text-gray-600 max-sm:text-justify">
            Unilevel MLM Plan Software is a powerful tool designed for MLM
            companies to manage commissions, distributors, networks and
            processes based on the unilevel network marketing plan.{" "}
            <span className="font-semibold text-purple-600">
              Smartchain Studio MLM Software
            </span>{" "}
            is built to ensure accurate and automated commission calculations,
            reduce administrative overload and provide tools for distributor
            engagement and sales support in a Unilevel MLM plan.
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
              Solve Your MLM Challenges With Our{" "}
              <span className="bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                Proven Unilevel MLM Solutions!
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed text-gray-600 max-sm:text-justify"
            >
              Streamline your network marketing business with our advanced
              Unilevel MLM software. From automated commission calculations to
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

          {/* Right Column - Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border-2 border-purple-200 shadow-xl shadow-purple-200/50">
              <img
                src={binaryHeroImage}
                alt="Unilevel MLM Software Dashboard"
                className="h-auto w-full transform object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-purple-100/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Feature Badges */}
            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="absolute -top-6 -left-6 rounded-xl border border-purple-400/50 bg-purple-600 px-6 py-3 text-white shadow-lg"
            >
              <div className="text-sm font-semibold">Real-time Stats</div>
            </motion.div>

            <motion.div
              variants={floatAnimation}
              animate="animate"
              transition={{ delay: 0.5 }}
              className="absolute -right-6 -bottom-6 rounded-xl border border-purple-300/50 bg-purple-500 px-6 py-3 text-white shadow-lg"
            >
              <div className="text-sm font-semibold">Genealogy Reports</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-28"
        >
          <h3 className="mb-12 bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-center text-3xl font-bold text-transparent">
            Powerful Features Included
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Unilevel Structure",
                desc: "Efficient unilevel tree management for optimal performance",
                icon: "🌳",
              },
              {
                title: "Level Commissions",
                desc: "Automated commission calculations and distribution",
                icon: "💰",
              },
              {
                title: "Depth Management",
                desc: "Smart depth level handling for unlimited growth",
                icon: "🔄",
              },
              {
                title: "Real-time Statistics",
                desc: "Live data and performance analytics",
                icon: "📊",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group rounded-2xl border border-purple-200 bg-white/60 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:shadow-xl"
              >
                <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h4 className="mb-3 text-xl font-semibold text-purple-600">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="rounded-3xl border border-purple-200 bg-linear-to-r from-purple-100 to-purple-50 p-12 shadow-xl">
            <h3 className="mb-6 text-3xl font-bold text-gray-800">
              Ready to Transform Your MLM Business?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Join thousands of successful MLM businesses using our Unilevel MLM
              software
            </p>
            <a href="https://wa.me/9202983564">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-linear-to-r from-purple-500 to-purple-600 px-12 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:shadow-purple-400/30"
              >
                Start Your Journey Today
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UniLevelHero;
