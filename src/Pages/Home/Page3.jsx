import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MLMChild } from "../../components";
import {
  binaryImage,
  binaryLogo,
  matrixplan,
  matrixplanLogo,
  UnilevelLogo,
  unilevelImage,
  generationalLogo,
  generationalPlan,
  InvestmentPlan,
  InvestmentplanLogo,
  HelpingplanLogo,
  helpingPlan,
  MonolinePlan,
  MonolinePlanLogo,
  MLMSoftwarePlan,
  MLMSoftwarePlanLogo,
  MLMimage
} from "../../assets/images";

const data = [
  {
    icon: binaryLogo,
    image: binaryImage,
    heading: "Binary Plan",
    desc: "Binary Plan stands out as one of the most popular and easily comprehensible business models in the MLM industry.",
  },
  {
    icon: matrixplanLogo,
    image: matrixplan,
    heading: "Matrix Plan",
    desc: 'A Comprehensive Overview The MLM Matrix plan, also known as the Ladder plan or Forced Matrix, is a growth-oriented business model.',
  },
  {
    icon: UnilevelLogo,
    image: unilevelImage,
    heading: "Uni-Level Plan",
    desc: 'The Unilevel MLM Plan stands out as one such popular plan, offering simplicity transparency in its operation.'
  },
  {
    icon: generationalLogo,
    image: generationalPlan,
    heading: "Generation Plan",
    desc: 'Generation Plan stands as a globally recognized and reliable compensation plan, often referred to as the Re-purchase plan.'
  },
  {
    icon: InvestmentplanLogo,
    image: InvestmentPlan,
    heading: "Investment Plan",
    desc: 'Investment Plan stands as a globally recognized and reliable compensation plan, often referred to as the investment plan.'
  },
  {
    icon: HelpingplanLogo,
    image: helpingPlan,
    heading: "Helping Plan",
    desc: 'Helping Plan, also recognized as the Gifting plan or Donation plan, operates on the principle of mutual assistance.'
  },
  {
    icon: MonolinePlanLogo,
    image: MonolinePlan,
    heading: "Monoline  Plan",
    desc: 'This plan has gained significant popularity among both MLM owners and leaders.'
  },
  {
    icon: MLMSoftwarePlanLogo,
    image: MLMSoftwarePlan,
    heading: "MLM Software  Plan",
    desc: 'MLM plans or Multi Level Market plans are the compensation plans used in the network marketing business.'
  },
];

const Page3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const layoutVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
    },
  };

  const imageVariants = {
    hidden: { x: 30, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div 
      ref={ref}
      className="h-auto p-4 md:p-6 lg:p-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center lg:text-left"
        variants={titleVariants}
      >
        OUR <span className="text-purple-600">MLM PLANS</span>
      </motion.h1>

      <motion.div 
        className="flex flex-col lg:flex-row gap-6 lg:gap-10 pt-6 lg:pt-10"
        variants={layoutVariants}
      >
        {/* left  */}
        <motion.div 
          className="flex h-auto lg:h-screen w-full lg:basis-1/2 flex-col gap-6 lg:gap-8 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl bg-blue-50 px-4 md:px-6 lg:px-8 py-4 lg:py-3"
          variants={containerVariants}
        >
          {data.map((elem, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <MLMChild
                logoName={elem.icon}
                Heading={elem.heading}
                Description={elem.desc}
                ImageName={elem.image}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* right image  */}
        <motion.div 
          className="basis-full lg:basis-1/2 mt-6 lg:mt-0"
          variants={imageVariants}
        >
          <img className="w-full rounded-2xl" src={MLMimage} alt="MLM Plans" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page3;