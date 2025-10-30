import { Link } from "react-router-dom";
import { School } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-transparent sticky top-0 z-50">
      <div className="mx-auto">
        <div className="navbar bg-base-100 shadow-sm px-4 min-h-[4rem] justify-between">

          {/* Left Logo */}
          <div className="navbar-start">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <School className="size-9 text-primary" />
                <span
                  className="font-semibold font-mono text-transparent tracking-widest text-2xl 
                  bg-clip-text bg-gradient-to-r from-primary to-secondary"
                >
                  BABY STARS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="hover:text-amber-300"><Link to="/">HOME</Link></li>

              <li className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="hover:text-amber-300">ABOUT US</div>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-56">
                  <li className="hover:text-amber-300"><a>MESSAGE FROM THE PRINCIPAL</a></li>
                  <li className="hover:text-amber-300"><a>MISSION VISION AND VALUES</a></li>
                  <li className="hover:text-amber-300"><a>RESULTS</a></li>
                  <li className="hover:text-amber-300"><a>GOVERNANCE</a></li>
                  <li className="hover:text-amber-300"><a>NEWS</a></li>
                </ul>
              </li>

              <li className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="hover:text-amber-300">ADMISSIONS</div>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-60">
                  <li className="hover:text-amber-300"><a>ADMISSIONS</a></li>
                  <li className="hover:text-amber-300"><a>TOURS</a></li>
                  <li className="hover:text-amber-300"><a>APPLY</a></li>
                  <li className="hover:text-amber-300"><a>FEES</a></li>

                  <li className="dropdown dropdown-hover dropdown-right">
                    <div tabIndex={0} role="button" className="hover:text-amber-300">PARENT INFORMATION ▸</div>
                    <ul className="dropdown-content z-[2] menu p-2 shadow bg-base-200 rounded-box w-64 ml-2">
                      <li className="hover:text-amber-300"><a>SCHOOL LUNCHES</a></li>
                      <li className="hover:text-amber-300"><a>PARENT AND COMMUNITY ENGAGEMENT</a></li>
                      <li className="hover:text-amber-300"><a>SCHOOL TRANSPORT</a></li>
                      <li className="hover:text-amber-300"><a>UNIFORM</a></li>
                      <li className="hover:text-amber-300"><a>PAYMENT POLICIES</a></li>
                      <li className="hover:text-amber-300"><a>SCHOOL POLICIES</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="hover:text-amber-300"><a>THE CAMPUS</a></li>
              <li className="hover:text-amber-300"><a>CONTACT US</a></li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              {/* Mobile Dropdown with hover + tap */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-200 rounded-box shadow mt-3 w-64 p-2 z-[60]"
              >
                <li className="hover:text-amber-300"><Link to="/">HOME</Link></li>

                <li className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="hover:text-amber-300">ABOUT US</div>
                  <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-56 ml-2">
                    <li className="hover:text-amber-300"><a>MESSAGE FROM THE PRINCIPAL</a></li>
                    <li className="hover:text-amber-300"><a>MISSION VISION AND VALUES</a></li>
                    <li className="hover:text-amber-300"><a>RESULTS</a></li>
                    <li className="hover:text-amber-300"><a>GOVERNANCE</a></li>
                    <li className="hover:text-amber-300"><a>NEWS</a></li>
                  </ul>
                </li>

                <li className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="hover:text-amber-300">ADMISSIONS</div>
                  <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-60 ml-2">
                    <li className="hover:text-amber-300"><a>ADMISSIONS</a></li>
                    <li className="hover:text-amber-300"><a>TOURS</a></li>
                    <li className="hover:text-amber-300"><a>APPLY</a></li>
                    <li className="hover:text-amber-300"><a>FEES</a></li>

                    <li className="dropdown dropdown-hover">
                      <div tabIndex={0} role="button" className="hover:text-amber-300">PARENT INFORMATION ▼</div>
                      <ul className="dropdown-content z-[2] menu p-2 shadow bg-base-200 rounded-box w-64 ml-2">
                        <li className="hover:text-amber-300"><a>SCHOOL LUNCHES</a></li>
                        <li className="hover:text-amber-300"><a>PARENT AND COMMUNITY ENGAGEMENT</a></li>
                        <li className="hover:text-amber-300"><a>SCHOOL TRANSPORT</a></li>
                        <li className="hover:text-amber-300"><a>UNIFORM</a></li>
                        <li className="hover:text-amber-300"><a>PAYMENT POLICIES</a></li>
                        <li className="hover:text-amber-300"><a>SCHOOL POLICIES</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="hover:text-amber-300"><a>THE CAMPUS</a></li>
                <li className="hover:text-amber-300"><a>CONTACT US</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
