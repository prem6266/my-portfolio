import { FaGithub, FaLinkedin } from "react-icons/fa";
// import logo from "../assets/raviKumarLogo.webp";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          {/* <img src={logo} alt="Logo" width={50} height={33} /> */}
          <h2 className="text-3xl font-semibold">Prem</h2>
        </a>
      </div>

      <div className="hidden sm:ml-6 sm:block">
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

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
    </nav>
  );
};

export default Navbar;
