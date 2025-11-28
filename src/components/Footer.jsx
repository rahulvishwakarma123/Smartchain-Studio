import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { logo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-gray-700 bg-linear-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(147, 51, 234, 0.3) 2px, transparent 0),
                          radial-gradient(circle at 75px 75px, rgba(168, 85, 247, 0.3) 2px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/4 left-1/4 h-4 w-4 rounded-full bg-purple-400 blur-sm"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 h-3 w-3 rounded-full bg-purple-300 blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-12 grid gap-12 lg:grid-cols-5">
          {/* Company Info - Left Side */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="/" className="mb-6 flex items-center gap-3 no-underline">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img className="w-60 invert filter" src={logo} alt="logo" />
              </motion.div>
            </a>

            <p className="mb-6 leading-relaxed text-gray-300">
              Building the future of blockchain technology with innovative
              solutions and cutting-edge development.
            </p>

            {/* Contact Info */}
            <div className="mb-8 space-y-3">
              <motion.a
                href="https://wa.me/9202983564"
                className="flex items-center gap-3 text-purple-400 no-underline"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="h-4 w-4" />
                <span>info@smartchainstudios.com</span>
              </motion.a>
              <motion.a
                href="https://wa.me/9202983564"
                className="flex items-center gap-3 text-purple-400 no-underline"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
              >
                <Phone className="h-4 w-4" />
                <span>+919302826662</span>
              </motion.a>
              <motion.div
                className="flex items-center gap-3 text-purple-400"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.2 }}
              >
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">
                  42, Narmadapuram Rd, Kunjan Nagar Phase II, <br />
                  Bagmugaliya, Bhopal, Madhya Pradesh 462026, India
                </span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  icon: MessageCircle,
                  color: "hover:text-green-400",
                  bg: "hover:bg-green-400/10",
                  href: "https://wa.me/9202983564",
                },
                {
                  icon: Instagram,
                  color: "hover:text-pink-400",
                  bg: "hover:bg-pink-400/10",
                  href: "https://wa.me/9202983564",
                },
                {
                  icon: Linkedin,
                  color: "hover:text-blue-400",
                  bg: "hover:bg-blue-400/10",
                  href: "https://wa.me/9202983564",
                },
                {
                  icon: Facebook,
                  color: "hover:text-blue-400",
                  bg: "hover:bg-blue-400/10",
                  href: "https://wa.me/9202983564",
                },
                {
                  icon: Twitter,
                  color: "hover:text-purple-400",
                  bg: "hover:bg-purple-400/10",
                  href: "https://wa.me/9202983564",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-gray-600 bg-gray-800 text-gray-400 backdrop-blur-sm transition-all duration-300 ${social.color} ${social.bg} hover:border-current/30`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Navigation Links like image */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-white text-lg mb-6">Recent Work</h3>
              <ul className="space-y-3">
                {[
                  "Product Gallery",
                  "Web & Interactive",
                  "Help & Support",
                  "Branding",
                  "Our History"
                ].map((item, index) => (
                  <motion.li key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="https://wa.me/9202983564"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group no-underline"
                    >
                      <div className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-white text-lg mb-6">About Us</h3>
              <ul className="space-y-3">
                {[
                  "Branded Merchandise",
                  "Our Awards",
                  "Our Team",
                  "Careers",
                  "Testimonials"
                ].map((item, index) => (
                  <motion.li key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="https://wa.me/9202983564"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group no-underline"
                    >
                      <div className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-white text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Blockchain Development",
                  "Web3 Solutions",
                  "Smart Contracts",
                  "DApp Development",
                  "Consulting"
                ].map((item, index) => (
                  <motion.li key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="https://wa.me/9202983564"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group no-underline"
                    >
                      <div className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-semibold text-white text-lg mb-6">Legal</h3>
              <ul className="space-y-3">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Disclaimer",
                  "GDPR Compliance"
                ].map((item, index) => (
                  <motion.li key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="https://wa.me/9202983564"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group no-underline"
                    >
                      <div className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm text-center">
            This site is not a part of the Facebook/Google website or Facebook/Google Inc. Additionally, this site is NOT endorsed by Facebook/Google in any way. FACEBOOK/GOOGLE is a trademark of FACEBOOK/GOOGLE, Inc.
          </p>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        className="border-t border-gray-700 bg-gray-800/80 py-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              © Copyright 2025 Smart Chain Studio Pvt. Ltd. - All Rights Reserved
            </motion.p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;