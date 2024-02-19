import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { BsPerson } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  // State to manage the visibility of the dropdown menus
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);

  // Function to toggle the visibility of the account dropdown menu
  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
    setIsHelpMenuOpen(false); // Close the help menu when opening the account menu
  };

  // Function to toggle the visibility of the help dropdown menu
  const toggleHelpMenu = () => {
    setIsHelpMenuOpen(!isHelpMenuOpen);
    setIsAccountMenuOpen(false); // Close the account menu when opening the help menu
  };

  return (
    <nav className="flex justify-between px-20 py-5 rounded items-center bg-white sticky top-0 z-50">
      <div className="container flex mx-auto justify-between">
        <img src={logo} width={150} alt="" />

        <div className="flex items-center gap-2 ">
          <div className="flex items-center">
            <div className="relative">
              <FaSearch className="absolute top-1/2 left-10 transform -translate-y-1/2 text-gray-400" />
              <input
                className="ml-8 pl-10 outline rounded w-96 h-10 "
                type="text"
                name="search"
                id="search"
                placeholder="Search product, brands, and categories"
              />
            </div>
          </div>
          <button
            className="button bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            SEARCH
          </button>

          <ul className="flex items-center gap-2">
            <li>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center  rounded-md bg-white  py-2 text-sm font-bold text-black shadow-sm  hover:text-orange-600 focus:bg-gray-300 mx-4"
                    id="account-menu-button"
                    aria-expanded={isAccountMenuOpen} // Pass the state to indicate the menu's open state
                    aria-haspopup="true"
                    onClick={toggleAccountMenu} // Attach onClick event to toggleAccountMenu function
                  >
                    <BsPerson size={20} className="mx-2" />
                    Account
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Account Dropdown menu */}
                <div
                  className={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isAccountMenuOpen ? "block" : "hidden"
                    }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="account-menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    {/* Menu items */}
                    <a
                      href="#"
                      className="flex justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-16 m-2 rounded focus:outline-none focus:shadow-outline "
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      SIGN IN
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    {/* Account Menu items */}
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm  hover:bg-gray-300 hover:font-bold "
                      role="menuitem"
                      tabIndex="-1"
                      id="account-menu-item-1"
                    >
                      <div className="flex">
                        <BsPerson size={20} className="mr-6" />
                        My Account
                      </div>
                    </a>

                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm  hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="account-menu-item-2"
                    >
                      <div className="flex">
                        <FiInbox size={20} className="mr-6" />
                        Orders
                      </div>
                    </a>

                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm  hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="account-menu-item-3"
                    >
                      <div className="flex">
                        <CiHeart size={20} className="mr-6" />
                        Saved Items
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* Help Dropdown */}
            <li>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center  rounded-md bg-white  py-2 text-sm font-bold text-black shadow-sm  hover:text-orange-600 focus:bg-gray-300 mx-4"
                    id="help-menu-button"
                    aria-expanded={isHelpMenuOpen} // Pass the state to indicate the menu's open state
                    aria-haspopup="true"
                    onClick={toggleHelpMenu} // Attach onClick event to toggleHelpMenu function
                  >
                    <div className="flex justify-center items-center px-5">
                      <FaRegQuestionCircle size={20} className="mr-2" />
                      HELP
                    </div>
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Help Dropdown menu */}
                <div
                  className={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isHelpMenuOpen ? "block" : "hidden"
                    }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="help-menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    {/* Help Menu items */}
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-1"
                    >
                      <div className="flex ">Help Center</div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-2"
                    >
                      <div className="flex ">Place an Order</div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-3"
                    >
                      <div className="flex ">Pay Your Order</div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-4"
                    >
                      <div className="flex">Cancel an Order</div>
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 hover:font-bold"
                      role="menuitem"
                      tabIndex="-1"
                      id="help-menu-item-5"
                    >
                      <div className="flex hover:bg-gray-300">
                        Create a Return
                      </div>
                    </a>
                  </div>
                  <div className="py-1" role="none">
                    {/* Menu items */}
                    <a
                      href="#"
                      className="flex justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3  m-2 rounded focus:outline-none focus:shadow-outline "
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      <div className="flex justify-center items-center">
                        <AiOutlineMessage className="mr-2" />
                        LIVE CHAt
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex w-full justify-center  rounded-md bg-white  p-2 text-sm font-bold text-black shadow-sm  hover:text-orange-600 focus:bg-gray-300 mx-4"
              >
                <div className="flex justify-center items-center">
                  <MdOutlineShoppingCart size={25} className="mr-2" />
                  Cart
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
