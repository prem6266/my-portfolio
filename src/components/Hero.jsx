// import { HERO_CONTENT } from "../constants";
// import profileImage from "../assets/premkumarjoshiprofile.jpg";
// import { motion } from "framer-motion";
// import { FaChevronRight } from "react-icons/fa";

// const containerVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.5, staggerChildren: 0.5 },
//   },
// };

// const childVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
// };
// const styles = `
//   @keyframes moveRight {
//     0%, 100% {
//       transform: translateX(0);
//     }
//     50% {
//       transform: translateX(5px);
//     }
//   }

//   .animate-right {
//     animation: moveRight 1s infinite;
//   }
// `;
// const Hero = () => {
//   return (
//     <div className="pb-4 lg:mb-36">
//       <div className="flex flex-wrap lg:flex-row-reverse">
//         <div className="w-full lg:w-1/2">
//           <div className="flex justify-center lg:p-8">
//             <motion.img
//               src={profileImage}
//               alt="Prem Kumar Joshi"
//               className="border border-stone-900 rounded-3xl"
//               width={430}
//               height={400}
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 1.5 }}
//             />
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//             className="flex flex-col items-center lg:items-start mt-10"
//           >
//             <motion.h2
//               variants={childVariants}
//               className="pb-2 tracking-tighter lg:text-6xl bg-gradient-to-r from-stone-300 to-purple-600 bg-clip-text text-3xl text-transparent"
//             >
//               Hi, <br />
//               I&apos;m Prem Kumar Joshi
//             </motion.h2>
//             <motion.span
//               variants={childVariants}
//               className="bg-gradient-to-r from-stone-300 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent"
//             >
//               Frontend Developer
//             </motion.span>
//             <motion.p
//               variants={childVariants}
//               className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
//             >
//               {HERO_CONTENT}
//             </motion.p>
//             <style>{styles}</style>
//             <motion.a
//               variants={childVariants}
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               download
//               className=" bg-blue-500 text-white rounded-full p-3 text-sm font-semibold mb-10 flex items-center gap-2"
//             >
//               Download Resume
//               <FaChevronRight className="ml-2 animate-right" />
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { HERO_CONTENT } from "../constants";
import profileImage from "../assets/premkumarjoshiprofile.jpg";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const styles = `
  @keyframes moveRight {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
  }

  .animate-right {
    animation: moveRight 1s infinite;
  }
`;

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profileImage}
              alt="Prem Kumar Joshi"
              className="border border-stone-900 rounded-3xl w-[400px] max-w-md lg:max-w-none"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10 px-4 lg:px-0"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 tracking-tighter   bg-gradient-to-r from-stone-300 to-blue-600 bg-clip-text text-4xl  text-transparent text-center lg:text-left lg:text-6xl"
            >
              Hi, <br />
              I&apos;m Prem Kumar Joshi
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-blue-600 bg-clip-text lg:text-5xl text-4xl  tracking-tight text-transparent text-center lg:text-left"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-lg leading-relaxed tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <style>{styles}</style>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-blue-500 text-white rounded-full p-3 text-sm font-semibold mb-10 flex items-center gap-2 hover:bg-blue-600"
            >
              Download Resume
              <FaChevronRight className="ml-2 animate-right" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
