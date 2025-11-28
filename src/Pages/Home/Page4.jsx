import React from "react";
import ServicesFeaturesCard from "../../components/Services&FeaturesCard";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    tag: 'Services & Features',
    heading: "Cryptocurrency MLM Software",
    buttonText: 'Request a Call back Now',
    desc: "Cryptocurrency has become trending phenomenon for over months now, with its innovative block-chain technology that is revolutionizing the field of MLM. Cryptocurrency being one of the fast-growing technology implementation over these couple of years has also influenced the MLM business too.",
  },
  {
    id: 2,
    tag: 'Services & Features',
    heading: "Ecommerce MLM Software",
    buttonText: 'Request a Call back Now',
    desc: "Ecommerce MLM software used for MLM business. Every multi level marketing business works on the basis of product sales. New members are added to the network only when they purchase product of the MLM business. Majority of the Ecommerce based MLM business have an ecommerce platform which outreach their presence and business.",
  },
  {
    id: 3,
    tag: 'Services & Features',
    heading: "Direct Selling Software",
    buttonText: 'Request a Call back Now',
    desc: "The method of marketing and retailing products or services to buyers directly, without any middlemen such as wholesalers and distributors is called direct selling.",
  },
  {
    id: 4,
    tag: 'Services & Features',
    heading: "Features of MLM Software",
    buttonText: 'Request a Call back Now',
    desc: "BlockChain Boostup - #1 Multi Level Marketing MLM Software development Company having 50+ happy customers around the world",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Page4 = () => {
  return (
    <div className="h-auto p-4 md:p-10">
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-10 max-sm:text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        SERVICES <span className="text-purple-600">& FEATURES</span>
      </motion.h1>

      {/* FEATURES CARD  */}
      <motion.div 
        className="flex flex-col gap-6 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {data.map((elem) => (
          <motion.div key={elem.id} variants={itemVariants}>
            <ServicesFeaturesCard 
              id={elem.id}
              tag={elem.tag}
              heading={elem.heading}
              desc={elem.desc}
              buttonText={elem.buttonText}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Page4;