import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import handshake from "../../assets/gif/handshake.gif";
import callGif from "../../assets/gif/call.gif";
import blockchainGif from "../../assets/gif/blockchain.gif";
import getStartedImage from "../../assets/images/getStarted.png";
import bgHeading from "../../assets/images/hbg.jpg";
import { Button } from "../../components";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handshakeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="flex min-h-screen flex-col px-4 py-8 md:px-8 md:py-12 lg:flex-row"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Left Section */}
        <div className="flex flex-col max-sm:flex lg:basis-3/5 lg:pr-8">
          {/* Main Heading */}
          <motion.h2
            className="mb-4 flex items-center justify-start sm:justify-start"
            variants={itemVariants}
          >
            <span className="text-center text-2xl font-bold text-gray-800 md:text-6xl">
              The Leading
            </span>
            <motion.img
              className="mx-4 my-2 w-20 sm:my-0 sm:w-24 md:w-28"
              src={handshake}
              alt="handshake gif"
              variants={handshakeVariants}
            />
            <span className="text-center text-2xl font-bold text-black md:text-6xl">
              MLM
            </span>
          </motion.h2>

          {/* bg image heading */}
          <motion.h1
            className={`relative mb-4 bg-clip-text text-left text-5xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}
            style={{
              backgroundImage: `url(${bgHeading})`,
            }}
            variants={itemVariants}
          >
            Software Dev.
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-linear-to-r from-pink-400 to-transparent"></div>
          </motion.h1>

          <motion.h2
            className="mt-6 mb-6 text-4xl font-bold text-black sm:text-5xl md:mt-8 md:mb-8 md:text-6xl"
            variants={itemVariants}
          >
            Company in India
          </motion.h2>

          {/* Call Section */}
          <motion.div
            className="mt-6 mb-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 md:mt-8"
            variants={itemVariants}
          >
            <div className="flex items-start gap-4 space-y-4 max-sm:flex-col sm:space-y-0">
              <Button text={"Request a Call back Now"} className={'z-40'}/>

              <div className="flex items-center">
                <span className="text-center text-xl font-medium text-gray-600 sm:text-left sm:text-2xl md:text-3xl">
                  Or call us now
                </span>
                <div className="flex items-center space-x-2">
                  <motion.img
                    src={callGif}
                    alt="call gif"
                    className="w-10 sm:w-12 md:w-14"
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                  <span className="text-xl font-bold text-blue-600 sm:text-2xl md:text-3xl">
                    +919302826662
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          className="mt-2 flex-1 lg:mt-0 lg:basis-1/3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex gap-5 md:flex-row"
            variants={imageVariants}
          >
            <motion.img
              className="mx-auto max-w-xs duration-300 hover:scale-[1.1] max-sm:h-20 max-sm:w-20 md:mx-0 md:max-w-none"
              src={getStartedImage}
              alt="Get Started Image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className="text-center text-sm leading-7 max-sm:text-left md:text-left md:text-xl md:leading-8">
              Accelerate your MLM Software journey with Boostup BlockChain
              Technologies , a tailored partnership program designed to turn
              your vision into reality.
            </p>
          </motion.div>
          <motion.div variants={imageVariants}>
            <motion.img
              className="mt-8 w-full md:mt-10"
              src={blockchainGif}
              alt="Blockchain gif"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
