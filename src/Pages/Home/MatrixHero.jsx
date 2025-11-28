import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import your brand images
import visaLogo from '../../assets/dashboard/biyoliva.admin.jpg'
import tataLogo from '../../assets/dashboard/yumeko.dashboard.jpg'
import jnLogo from '../../assets/dashboard/biyoliva.admin.jpg'
import kpmgLogo from '../../assets/dashboard/biyoliva.user.jpg'
import mettleLogo from '../../assets/dashboard/xpeo.user.jpg'
import zyuusLogo from '../../assets/dashboard/yumeko.dashboard.jpg'

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

  // Brand logos arrays for each column
  const column1Logos = [
    { id: 1, src: visaLogo, alt: "Visa" },
    { id: 2, src: tataLogo, alt: "Tata" },
    { id: 3, src: jnLogo, alt: "JN" },
    { id: 4, src: kpmgLogo, alt: "KPMG" },
    { id: 5, src: mettleLogo, alt: "Mettle" },
    { id: 6, src: zyuusLogo, alt: "ZyUUS" },
  ];

  const column2Logos = [
    { id: 7, src: mettleLogo, alt: "Mettle" },
    { id: 8, src: kpmgLogo, alt: "KPMG" },
    { id: 9, src: zyuusLogo, alt: "ZyUUS" },
    { id: 10, src: visaLogo, alt: "Visa" },
    { id: 11, src: tataLogo, alt: "Tata" },
    { id: 12, src: jnLogo, alt: "JN" },
  ];

  const column3Logos = [
    { id: 13, src: jnLogo, alt: "JN" },
    { id: 14, src: mettleLogo, alt: "Mettle" },
    { id: 15, src: visaLogo, alt: "Visa" },
    { id: 16, src: zyuusLogo, alt: "ZyUUS" },
    { id: 17, src: kpmgLogo, alt: "KPMG" },
    { id: 18, src: tataLogo, alt: "Tata" },
  ];

  const swiperParams = {
    modules: [Autoplay],
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 3000,
    allowTouchMove: false,
  };

  const swiperParamsReverse = {
    ...swiperParams,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
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
          <h1 className="mb-8 bg-linear-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-8xl">
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
          {/* Left Column - Brand Logo Swiper Only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex h-full items-center justify-center"
          >
            {/* Brand Logo Swiper Container - Full Height */}
            <div className="w-full overflow-hidden rounded-3xl border-2 border-purple-200 bg-white/80 backdrop-blur-sm shadow-xl shadow-purple-200/50">
              <div className="flex h-80 md:h-96 lg:h-[500px]">
                {/* Column 1 - Moves Up */}
                <div className="flex-1 overflow-hidden border-r border-purple-100">
                  <Swiper {...swiperParams} className="h-full">
                    {column1Logos.map((logo) => (
                      <SwiperSlide key={`col1-${logo.id}`}>
                        <div className="flex h-full w-full items-center justify-center p-4">
                          <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Column 2 - Moves Down */}
                <div className="flex-1 overflow-hidden border-r border-purple-100">
                  <Swiper {...swiperParamsReverse} className="h-full">
                    {column2Logos.map((logo) => (
                      <SwiperSlide key={`col2-${logo.id}`}>
                        <div className="flex h-full w-full items-center justify-center p-4">
                          <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Column 3 - Moves Up */}
                <div className="flex-1 overflow-hidden">
                  <Swiper {...swiperParams} className="h-full">
                    {column3Logos.map((logo) => (
                      <SwiperSlide key={`col3-${logo.id}`}>
                        <div className="flex h-full w-full items-center justify-center p-4">
                          <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
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
              <span className="text-purple-600">
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