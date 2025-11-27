import { motion } from "framer-motion";
import { Blocks, Sparkles, Package, Cog, TrendingUp, Cpu, Brain, Workflow, Rocket, Target } from "lucide-react";

// Custom Card Components
const Card = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      className={`bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:border-purple-500 transition-all duration-500 group overflow-hidden relative shadow-sm hover:shadow-xl ${className}`}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>
    {children}
  </div>
);

const services = [
  {
    icon: Blocks,
    title: "Blockchain Development",
    description: "We help you harness the power of decentralization—building secure, scalable blockchain solutions that add real value to your business.",
    gradient: "from-purple-500 to-indigo-500",
    features: ["Smart Contracts", "DApps", "DeFi", "NFT Solutions"]
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description: "From smarter decisions to faster workflows, we embed AI into your systems to boost efficiency, insights, and customer delight.",
    gradient: "from-pink-500 to-rose-500",
    features: ["Predictive Analytics", "Computer Vision", "NLP", "AI Automation"]
  },
  {
    icon: Package,
    title: "Product Development",
    description: "Got an idea? We turn it into reality—crafting digital products that are intuitive, market-ready, and built to scale.",
    gradient: "from-green-500 to-emerald-500",
    features: ["Web Apps", "Mobile Apps", "MVP Development", "UI/UX Design"]
  },
  {
    icon: Cog,
    title: "Business Automation",
    description: "We streamline your operations with custom automation tools—freeing your team to focus on growth, not grunt work.",
    gradient: "from-orange-500 to-red-500",
    features: ["Workflow Automation", "Process Optimization", "CRM Integration", "Data Processing"]
  },
  {
    icon: TrendingUp,
    title: "Marketing Automation",
    description: "Reach the right audience at the right time. We automate your campaigns, track results, and help you convert more—effortlessly.",
    gradient: "from-amber-500 to-yellow-500",
    features: ["Campaign Management", "Lead Generation", "Analytics", "ROI Tracking"]
  },
  {
    icon: Rocket,
    title: "Crypto Solutions",
    description: "Complete cryptocurrency ecosystem development including wallets, exchanges, and payment gateways for the modern digital economy.",
    gradient: "from-violet-500 to-purple-500",
    features: ["Crypto Wallets", "Exchange Platforms", "Payment Gateways", "Tokenization"]
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-violet-100 rounded-full blur-2xl opacity-40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6">
            What We{" "}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Do?
            </span>
          </h2>
          
          <motion.p 
            className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            "We turn complex MLM and crypto ideas into clean, working products that drive real business value and innovation."
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="h-full">
                {/* Subtle gradient background on hover */}
                <div className={`absolute inset-0 bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon with gradient background */}
                <CardHeader>
                  <motion.div
                    className={`w-14 h-14 bg-linear-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    variants={iconVariants}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 bg-linear-to-r ${service.gradient} rounded-full mr-3`}></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}
                    initial={false}
                  />
                </CardContent>

                {/* Floating elements */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-6 h-6 bg-linear-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 bg-white backdrop-blur-sm border border-gray-200 rounded-2xl hover:border-purple-500 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-900 font-semibold">Ready to start your project?</span>
            <motion.div
              className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TrendingUp className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;