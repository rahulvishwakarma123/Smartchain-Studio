import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import image from "../../assets/images/directSelling2.jpg";

const DirectSellingSoftware = () => {
  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-linear-to-b from-gray-50 via-white to-gray-50 px-4 py-16 text-gray-800">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.05, 0.08],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl"
        />
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section with Image */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-8xl">
            <span className="bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              Smartchain Studio
            </span>
          </h1>
          <h2 className="mb-8 text-2xl font-bold text-gray-800 md:text-3xl lg:text-6xl">
            Direct Selling Software
          </h2>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 rounded-2xl border border-purple-200 bg-white/60 p-8 shadow-lg backdrop-blur-sm"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center text-lg leading-relaxed text-gray-700 max-sm:text-justify"
          >
            Smartchain Studio direct selling software is the{" "}
            <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text font-semibold text-transparent">
              best direct selling software
            </span>{" "}
            that offers network marketing solutions to direct selling companies
            in India and across the globe. The direct selling software is rich
            with exceptional features like advanced e-commerce support, website
            replication, easy compensation plans & many more to help direct
            selling company to streamline their sales process. We provide direct
            selling software pricing that is competitive and can be customized
            based on the needs of the business.
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mb-8 h-px w-full max-w-md bg-linear-to-r from-transparent via-purple-300 to-transparent"
        />

        <div className="flex items-center justify-center gap-10 max-sm:flex-col-reverse">
          {/* What does Direct Selling Software do? Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-12 flex-1 basis-1/2 text-center"
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-4 text-3xl font-bold text-purple-600 md:text-4xl"
            >
              What does
            </motion.h3>

            <motion.h4
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mb-8 text-2xl font-bold text-gray-800 md:text-3xl"
            >
              Direct Selling Software do?
            </motion.h4>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="rounded-2xl border border-purple-200 bg-white/60 p-8 shadow-lg backdrop-blur-sm"
            >
              <p className="mb-6 text-lg leading-relaxed text-gray-700 max-sm:text-justify">
                A direct selling software serves as a robust tool to optimize
                and streamline their business operations. With features like{" "}
                <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text font-semibold text-transparent">
                  commission calculations, order management, and inventory
                  tracking
                </span>
                , a network marketing software helps to optimize their business
                processes and drive growth. With the{" "}
                <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text font-semibold text-transparent">
                  best direct selling software
                </span>
                , businesses can effectively manage their operations and
                maximize profitability in their direct selling business.
              </p>
            </motion.div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 h-[60vh] flex-1 basis-1/2"
          >
            <img
              src={image}
              alt="Smartchain Studio Direct Selling Software"
              className="mx-auto h-full rounded-xl border border-purple-200 object-cover shadow-lg"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mx-auto mb-8 h-px w-full max-w-md bg-linear-to-r from-transparent via-purple-300 to-transparent"
        />

        {/* Quote and CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="mb-8"
          >
            <blockquote className="mb-6 text-xl font-light text-gray-600 italic md:text-2xl">
              "Experience the power of the best direct selling software
              first-hand."
            </blockquote>
          </motion.div>

          <a href="https://wa.me/9202983564">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradiant-to-r mx-auto flex items-center justify-center gap-3 rounded-xl from-purple-600 to-purple-500 px-8 py-4 text-lg font-semibold text-purple-500 shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/30"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default DirectSellingSoftware;
