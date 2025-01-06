// import { FaGithub, FaLinkedin } from "react-icons/fa";

// import { TbBrandLeetcode } from "react-icons/tb";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   return (

//     <nav className="flex items-center justify-between py-6 ">
//       <div className="flex flex-shrink-0 items-center">
//         <a href="/" aria-label="Home">

//           <h2 className="text-3xl font-semibold">My Portfolio</h2>
//         </a>
//       </div>

//       <div className="hidden sm:ml-6 sm:block">
//         <div className="flex space-x-4 ">
//           <Link
//             to="/"
//             className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white "
//           >
//             Home
//           </Link>
//           <Link
//             to="/technologies"
//             className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Technologies
//           </Link>
//           <Link
//             to="/projects"
//             className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Projects
//           </Link>
//           <Link
//             to="/contact"
//             className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>

//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <a
//           href="https://www.linkedin.com/in/prem-kumar-joshi-63b258246/"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="LinkedIn"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://github.com/prem6266"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="GitHub"
//         >
//           <FaGithub />
//         </a>
//         <a
//           href="https://leetcode.com/u/prem6266/"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="LeetCode"
//         >
//           <TbBrandLeetcode />
//         </a>
//         <a
//           href="https://x.com/PremKumarJ6266"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Twitter"
//         >
//           <FaSquareXTwitter />
//         </a>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaStackOverflow } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState for handling toggle state

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Toggle function for mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex items-center justify-between py-6 px-4">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-stone-300 to-blue-600 bg-clip-text tracking-tighter text-transparent text-center lg:text-left">
            My Portfolio
          </h2>
        </a>
      </div>

      {/* Navigation Links for Large Screens */}
      <div className="hidden sm:block">
        <div className="flex space-x-4">
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/technologies"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Technologies
          </Link>
          <Link
            to="/projects"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none"
          aria-label="Toggle navigation"
        >
          {/* Hamburger Icon */}
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu Links (Visible when hamburger is clicked) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute top-20 left-0 right-0 bg-gray-800 p-4`}
      >
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            Home
          </Link>
          <Link
            to="/technologies"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={toggleMenu}
          >
            Technologies
          </Link>
          <Link
            to="/projects"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Social Media Icons (Hidden on small screens) */}
      <div className="hidden sm:flex items-center justify-center gap-4 text-2xl">
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
        <a
          href="https://x.com/PremKumarJ6266"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaStackOverflow />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
