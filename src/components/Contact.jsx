import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.description}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <p className="my-4">{CONTACT.email}</p>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl sm:hidden">
        <a
          href="https://www.linkedin.com/in/prem-kumar-joshi-63b258246/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/prem6266"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/prem6266/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
        >
          <TbBrandLeetcode />
        </a>
        <a
          href="https://x.com/PremKumarJ6266"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Contact;
