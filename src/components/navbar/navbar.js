import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [showNav, setShowNav] = useState(false);
  const darkIcon = (
    <Image
      src="/assets/images/moon.png"
      alt="Dark Icon"
      width={200}
      height={200}
    />
  );

  const lightIcon = (
    <Image
      src="/assets/images/sun.png"
      alt="Light Icon"
      width={200}
      height={200}
    />
  );
  const showNavbar = () => {
    setShowNav(!showNav);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <nav class="bg-transparent border-gray-200 dark:bg-black ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WETIME
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={showNavbar}
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Image
              src="/assets/images/svg/menu.png"
              alt="Menu Icon"
              width={30}
              height={30}
            />
          </button>
          <div
            class={`${
              showNav === true ? "" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md: dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  ALL GAMES
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  ABOUT US
                </Link>
              </li>

              <li>
                <button
                  className="w-12 h-5 rounded-full  bg-white flex items-center transition duration-300 focus:outline-none shadow"
                  onClick={toggleDarkMode}
                >
                  <div
                    id="switch-toggle"
                    className={`w-7 h-7 relative rounded-full transition duration-500 transform p-1 text-white ${
                      darkMode
                        ? "bg-gray-700 translate-x-full"
                        : "bg-yellow-500 -translate-x-2"
                    }`}
                  >
                    {darkMode ? darkIcon : lightIcon}
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
