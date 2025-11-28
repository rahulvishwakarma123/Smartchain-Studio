import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Users,
  TrendingUp,
  Star,
  Sparkles,
  ArrowRight,
  Target,
  Zap,
} from "lucide-react";

const UnilevelPlan = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <div className="min-h-screen overflow-hidden bg-linear-to-b from-gray-50 via-white to-gray-50 px-4 py-16 text-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
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
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            <span className="bg-linear-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              What is Unilevel MLM Plan?
            </span>
          </h1>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-purple-200 bg-white/60 p-8 shadow-lg backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed text-gray-700 max-sm:text-justify">
                Unilevel MLM plan is a simple and easy-to-understand
                compensation structure in multi-level marketing, offering a
                single-level plan with unlimited width. This allows distributors
                to recruit an unlimited number of frontline members, with
                earnings generated from the sales made by these recruits.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-purple-200 bg-white/60 p-8 shadow-lg backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed text-gray-700 max-sm:text-justify">
                You can easily manage this plan by utilizing{" "}
                <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text font-semibold text-transparent">
                  Smartchain Studio MLM Software
                </span>
                , which is both reliable and user-friendly, offering key tools
                for commission tracking, distributor relationship management and
                sales analysis.{" "}
                <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text font-semibold text-transparent">
                  Watch this video on Unilevel MLM plan
                </span>{" "}
                to learn more.
              </p>
            </motion.div>

            {/* Video Section */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-purple-300 bg-linear-to-r from-purple-500/10 to-purple-400/10 p-8 text-center shadow-lg backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group inline-flex cursor-pointer items-center space-x-3 rounded-xl bg-linear-to-r from-purple-600 to-purple-500 px-8 py-4 shadow-lg transition-all duration-300 hover:shadow-purple-400/30"
              >
                <Play className="h-6 w-6 text-white" />
                <span className="text-lg font-semibold text-white">
                  Watch Explanation Video
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-2xl border border-purple-300 bg-white/60 p-8 shadow-xl backdrop-blur-sm"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-6 bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text text-center text-2xl font-bold text-transparent"
            >
              Learn how the Unilevel compensation plan helps grow your network.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="mb-6 rounded-xl bg-linear-to-r from-purple-600 to-purple-500 p-6 shadow-lg">
                <h4 className="text-xl font-bold text-white">
                  Unilevel MLM Plan
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <span>Unlimited frontline width</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Target className="h-5 w-5 text-purple-600" />
                  <span>Single-level structure</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Zap className="h-5 w-5 text-purple-600" />
                  <span>Easy to understand</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <motion.h2
            variants={floatAnimation}
            animate="animate"
            className="mb-12 bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text text-center text-4xl font-bold text-transparent"
          >
            How does the Unilevel MLM Compensation Plan Work?
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="rounded-2xl border border-purple-200 bg-white/60 p-8 shadow-lg backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed text-gray-700 max-sm:text-justify">
                The key feature of the Unilevel MLM compensation plan is its
                limitless breadth, as it allows for all of a distributor's
                downlines to be incorporated into a single frontline business
                level. This differs from other{" "}
                <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text font-semibold text-transparent">
                  MLM plans
                </span>{" "}
                which typically involve multiple levels and tiers for downline
                organization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="rounded-2xl border border-purple-200 bg-white/60 p-8 shadow-lg backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed text-gray-700 max-sm:text-justify">
                The Unilevel MLM compensation plan facilitates the expansion of
                the MLM organization with a constrained vertical depth to earn
                MLM commissions. Typically, MLM company establish a range of 5
                to 10 levels down the line for a distributor to receive the
                unilevel MLM compensation plan.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Software Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="rounded-2xl border border-purple-300 bg-linear-to-r from-purple-100 to-purple-50 p-12 shadow-xl backdrop-blur-sm"
        >
          <motion.h3 className="mb-8 bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text text-center text-3xl font-bold text-transparent">
            How does Unilevel MLM Software help your business?
          </motion.h3>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="space-y-4"
            >
              <p className="text-lg leading-relaxed text-gray-700 max-sm:text-justify">
                Unilevel MLM Software is an MLM software designed exceptionally
                for MLM companies to manage the Unilevel MLM Plan. It
                streamlines downline income and expenditure management,
                automates manual work, and improves efficiency.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 max-sm:text-justify">
                With tools for tracking sales, commissions, and bonuses, it
                helps unilevel MLM companies to monitor performance and
                streamline their business processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="rounded-2xl border border-purple-200 bg-white/60 p-6 shadow-lg backdrop-blur-sm"
            >
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text font-semibold text-transparent">
                  Smartchain Studio MLM Software
                </span>{" "}
                offers reliable unilevel MLM software for unilevel mlm
                compensation plan. As such, many organisations have started to
                adopt this MLM concept as their backbone with our MLM Software
                incorporated with{" "}
                <span className="bg-linear-to-r from-purple-600 to-purple-500 bg-clip-text font-semibold text-transparent">
                  exceptional features.
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UnilevelPlan;
