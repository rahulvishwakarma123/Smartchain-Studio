import React from "react";
import { bulb } from "../../assets/images";
import { BlockchainServiceCard, Button } from "../../components";
import { motion } from "framer-motion";

const cardData = [
    {
        text: 'Smart Contract',
        classname: 'from-purple-700 to-purple-400 hover:shadow-purple-500/90 hover:shadow-2xl',
    },
    {
        text: 'ICO',
        classname: 'from-red-400 to-red-300 hover:shadow-red-500/90 hover:shadow-2xl',
    },
    {
        text: 'Coin',
        classname: 'from-[#95D3BE] to-[#D4EDE4] hover:shadow-[#95D3BE] hover:shadow-2xl',
    },
    {
        text: 'Exchange',
        classname: 'from-purple-500 to-yellow-700/50 hover:shadow-purple-500/90 hover:shadow-2xl',
    },
    {
        text: 'Token',
        classname: 'from-gray-600 to-gray-400 hover:shadow-gray-500/90 hover:shadow-2xl',
    },
    {
        text: 'DEFI',   
        classname: 'from-purple-800 to-purple-300 hover:shadow-purple-500/90 hover:shadow-2xl',
    },
    {   
        text: 'NFT',
        classname: 'from-blue-800 to-blue-300 hover:shadow-blue-500/90 hover:shadow-2xl',
    },  
    {
        text: 'DAPPS',
        classname: 'from-red-600 to-red-300 hover:shadow-red-500/90 hover:shadow-2xl',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const BlockchianServices = () => {
  return (
    <div className="p-4 md:p-10 flex flex-col gap-6 md:gap-10 items-center">
        {/* 1st  */}
      <motion.h1 
        className="pb-6 md:pb-10 text-4xl md:text-6xl lg:text-9xl font-bold tracking-tighter self-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        BLOCKCHAIN SERVICES
      </motion.h1>

        {/* 2nd */}
      <motion.div 
        className="flex flex-col lg:flex-row gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="text-4xl md:text-6xl lg:text-9xl font-bold text-purple-700">
          WE PROVIDE
        </div>
        <p className="text-lg md:text-xl leading-7 md:leading-9 pt-2 lg:pt-10">
          Our commitment to innovation extends to harnessing the power of blockchain technology to enhance the security, transparency, and efficiency of MLM businesses.
        </p>
      </motion.div>

      {/* 3rd  */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {cardData.map((card, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
                <BlockchainServiceCard text={card.text} className={card.classname} image={bulb}/>
            </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Button text={'Request a Call back Now'} />
      </motion.div>
    </div>
  );
};

export default BlockchianServices;