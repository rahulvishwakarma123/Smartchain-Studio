import { motion } from "framer-motion";
import { Code, Users, Globe, Cpu, Shield, Zap } from "lucide-react";
import { frontView, P1, P2, P3 } from "../../assets/images";

// Custom Card Component - Updated for light theme
const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Stats = () => {
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

  const cardVariants = {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-100 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-100 rounded-full blur-2xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl tracking-tight font-bold text-center mb-4 text-gray-900">
            Leading the Future of{" "}
            <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Blockchain & AI
            </span>
          </h2>
          <h3 className="text-2xl md:text-7xl font-bold text-center text-purple-600 mb-12">
            Software Development
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 - Running Software */}
          <motion.div variants={cardVariants} className="">
            <Card className="p-6 text-center hover:shadow-xl hover:shadow-cyan-100 transition-all duration-500 group flex flex-col">
              <motion.div
                className="flex justify-center mb-4"
                variants={iconVariants}
              >
                <div className="p-3 bg-cyan-100 rounded-2xl group-hover:bg-cyan-200 transition-colors duration-300">
                  <Cpu className="w-8 h-8 text-cyan-600" />
                </div>
              </motion.div>

              <motion.h4
                className="text-4xl font-bold text-cyan-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                viewport={{ once: true }}
              >
                200+
              </motion.h4>

              <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">
                Successfully Deployed
                <br />
                Blockchain Solutions
              </p>

              <motion.div
                className="flex-1 flex items-center justify-center min-h-[180px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={frontView}
                  alt="Blockchain Network Preview"
                  className="w-full max-w-[280px] h-auto object-contain"
                />
              </motion.div>

              {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          </motion.div>

          {/* Card 2 - Expert Team */}
          <motion.div variants={cardVariants} className="">
            <Card className="p-6 text-center hover:shadow-xl hover:shadow-blue-100 transition-all duration-500 group flex flex-col">
              <motion.div
                className="flex justify-center mb-4"
                variants={iconVariants}
              >
                <div className="p-3 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </motion.div>

              <motion.h4
                className="text-4xl font-bold text-blue-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                viewport={{ once: true }}
              >
                100+
              </motion.h4>

              <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">
                Expert Blockchain & AI
                <br />
                Developers
              </p>

              <motion.div
                className="flex-1 flex items-center justify-center min-h-[180px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={P1}
                  alt="Team Expert Preview"
                  className="w-48 h-48 object-cover rounded-full border-4 border-blue-200 group-hover:border-blue-400 transition-colors duration-300 shadow-md"
                />
              </motion.div>

              {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          </motion.div>

          {/* Card 3 - End Users */}
          <motion.div variants={cardVariants} className="">
            <Card className="p-6 text-center hover:shadow-xl hover:shadow-purple-100 transition-all duration-500 group flex flex-col">
              <motion.div
                className="flex justify-center mb-4"
                variants={iconVariants}
              >
                <div className="p-3 bg-purple-100 rounded-2xl group-hover:bg-purple-200 transition-colors duration-300">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
              </motion.div>

              <motion.h4
                className="text-4xl font-bold text-purple-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                viewport={{ once: true }}
              >
                100M+
              </motion.h4>

              <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">
                Global End Users
                <br />
                Across Platforms
              </p>

              <motion.div
                className="flex-1 flex items-center justify-center min-h-[180px] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative flex items-center justify-center">
                  <img
                    src={P2}
                    alt="User 1 Preview"
                    className="w-32 h-32 object-cover rounded-full border-4 border-purple-200 group-hover:border-purple-400 transition-colors duration-300 shadow-md z-20"
                  />
                  <img
                    src={P3}
                    alt="User 2 Preview"
                    className="w-28 h-28 object-cover rounded-full border-4 border-cyan-200 group-hover:border-cyan-400 transition-colors duration-300 shadow-md z-10 -ml-8"
                  />

                  {/* Connection line */}
                  <div className="absolute w-12 h-1 bg-linear-to-r from-purple-400 to-cyan-400 rounded-full z-0 -ml-2"></div>

                  {/* Floating user indicator */}
                  <motion.div
                    className="absolute -top-2 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Additional Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { value: "99.9%", label: "Uptime", icon: Shield },
            { value: "<2s", label: "Avg. Tx Time", icon: Zap },
            { value: "50+", label: "Countries", icon: Globe },
            { value: "24/7", label: "Support", icon: Users },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 transition-colors duration-300 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;