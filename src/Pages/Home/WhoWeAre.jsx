import React from "react";
import { Button } from "../../components";
import {
  BlockchainMiddle,
  BlockchainRight,
} from "../../assets/images";
import BlockchainLeft from '../../assets/images/blockchainLeft.png'
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <div className="p-4 md:p-10 bg-blue-100/40">

      {/* Main Heading */}
      <motion.h1 
        className="mb-5 text-4xl md:text-6xl lg:text-9xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        WHO <span className="text-purple-600"> WE</span> ARE?
      </motion.h1>

      {/* Image and Content Section */}
      <motion.div 
        className="flex flex-col lg:flex-row gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Images Section */}
        <motion.div 
          className="flex basis-1/2 items-start space-x-4 md:space-x-6 justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="h-32 w-1/3 md:h-10/12 overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover"
              src={BlockchainLeft}
              alt="blockchain"
            />
          </div>
          <div className="h-32 w-1/3 md:h-10/12 self-end overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover"
              src={BlockchainMiddle}
              alt="blockchain"
            />
          </div>
          <div className="h-32 w-1/3 md:h-10/12 overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover"
              src={BlockchainRight}
              alt="blockchain"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="basis-1/2 lg:pl-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex flex-col gap-4">
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Introducing
            </motion.h2>
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Blockchain Boostup
            </motion.h2>
            <motion.p 
              className="mt-5 text-base md:text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              At BlockChain Boostup, we are not just a team of professionals; we
              are industry leaders dedicated to creating tailor-made software
              solutions for the dynamic realm of Multi-Level Marketing (MLM).
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Our core foundation is built upon an extensive understanding of
              the intricacies of MLM, empowering us to deliver software that is
              not just innovative and scalable but also precisely crafted to
              meet the diverse needs of MLM businesses.
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Beyond being developers, we are committed partners on a mission to
              elevate and transform MLM ventures. We achieve this through a
              combination of cutting-edge technology, personalized attention,
              and an unwavering dedication to driving success
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Button
                text={"Request a Call back Now"}
                className={"mt-5 self-start"}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="flex flex-col lg:flex-row pt-8 md:pt-10 px-0 md:px-10 gap-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Feedback Section */}
        <motion.div 
          className="flex flex-col basis-full lg:basis-4/12 gap-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="font-medium text-2xl md:text-4xl">Our Feedback</h3>
          <p className="text-lg md:text-2xl text-gray-500">Since 2017 Reed has pioneered specialist Blockchains, MLM knowledgeable</p>
          <motion.a 
            className="text-base md:text-lg font-bold text-purple-600"
            href=""
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Stats Numbers */}
        <motion.div 
          className="basis-full lg:basis-5/12 flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-10 lg:pl-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-purple-600 text-5xl md:text-7xl lg:text-9xl font-light">12+</p>
            <p className="text-sm md:text-lg lg:text-xl text-center">YOURS IN BUSINESS</p>
          </motion.div>
          
          <StarIcon size={30} md:size={45} className="text-gray-500 hidden sm:block"/>
          
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-purple-600 text-5xl md:text-7xl lg:text-9xl font-light">1200+</p>
            <p className="text-sm md:text-lg lg:text-xl text-center">HAPPY CLIENTS</p>
          </motion.div>
          
          <StarIcon size={30} md:size={45} className="text-gray-500 hidden sm:block"/>
          
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-purple-600 text-5xl md:text-7xl lg:text-9xl font-light">100%</p>
            <p className="text-sm md:text-lg lg:text-xl text-center">CLIENT SATISFACTION</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;