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
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="flex flex-col lg:flex-row min-h-screen px-4 md:px-8 py-8 md:py-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Left Section */}
        <div className="flex flex-col lg:basis-3/5 lg:pr-8">
          {/* Main Heading */}
          <motion.h2 className="mb-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start" variants={itemVariants}>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 text-center sm:text-left">
              The Leading
            </span>
            <motion.img
              className="mx-4 w-20 sm:w-24 md:w-28 my-2 sm:my-0"
              src={handshake}
              alt="handshake gif"
              variants={handshakeVariants}
            />
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center sm:text-left">
              MLM
            </span>
          </motion.h2>

          {/* bg image heading */}
          <motion.h1
            className={`relative mb-4 bg-clip-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-transparent text-center sm:text-left`}
            style={{
              backgroundImage: `url(${bgHeading})`
            }}
            variants={itemVariants}
          >
            Software <br />
            Dev.
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-pink-400 via-transparent to-transparent"></div>
          </motion.h1>

          <motion.h2
            className="mt-6 md:mt-8 mb-6 md:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center sm:text-left"
            variants={itemVariants}
          >
            Company in India
          </motion.h2>

          {/* Call Section */}
          <motion.div className="mb-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 mt-6 md:mt-8" variants={itemVariants}>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button text={"Request a Call back Now"} />

              <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 text-center sm:text-left">
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
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                  +919302826662
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div 
          className="lg:basis-1/3 mt-8 lg:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex flex-col md:flex-row gap-5"
            variants={imageVariants}
          >
            <motion.img 
              className="hover:scale-[1.1] duration-300 mx-auto md:mx-0 max-w-xs md:max-w-none" 
              src={getStartedImage} 
              alt="Get Started Image" 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className="text-lg md:text-xl leading-7 md:leading-8 text-center md:text-left">
              Accelerate your MLM Software journey with Boostup BlockChain Technologies , a tailored partnership program designed to turn your vision into reality.
            </p>
          </motion.div>
          <motion.div
            variants={imageVariants}
          >
            <motion.img 
              className='w-full mt-8 md:mt-10' 
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