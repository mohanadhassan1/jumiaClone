import React from "react";
import { FaBox, FaSearch, FaTelegramPlane } from "react-icons/fa";
import { MdCardGiftcard, MdOutlinePerson, MdPayment } from "react-icons/md";
import { PiTruck } from "react-icons/pi";
import { GiReturnArrow } from "react-icons/gi";
import { LiaBoxSolid } from "react-icons/lia";
import PlaceAnOrder from "./HelpContents/PlaceAnOrder";

const HelpMain = () => {
  return (
    <>
      {/* top orange div */}
      <div className="bg-orange-100 h-40">
        <div className="container mx-auto pt-5">
          <p className="font-medium">Help Center </p>
          <h1 className="font-extrabold ">Hi, how can we help you?</h1>
        </div>
      </div>

      {/* container */}
      <div className="container mx-auto lg:-translate-y-10">
        {/*  div images */}
        <div className="flex flex-wrap gap-4 md:gap-10">
          <div className="flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 active:border-t-4 active: border-orange-500">
            <p className="flex justify-start items-center font-bold">
              Place an Order
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-place-order-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 active:border-t-4 active: border-orange-500">
            <p className="flex justify-start items-center font-bold">
              Pay for Your Order
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-pay-for-order-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 active:border-t-4 active: border-orange-500">
            <p className="flex justify-start items-center font-bold">
              Track Your Order
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-track-order-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 active:border-t-4 active: border-orange-500">
            <p className="flex justify-start items-center font-bold">
              Cancel an Order
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-cancel-order-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 lg:w-1/6 bg-white rounded shadow pl-4 pt-2 active:border-t-4 active: border-orange-500">
            <p className="flex justify-start items-center font-bold">
              Create a Return
            </p>
            <div className="ml-auto mt-auto">
              <img
                src="https://cxp-desktop.netlify.app/jpg/how-to-request-return-d.png"
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </div>

        {/* search input */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="absolute text-gray-500" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block my-5 w-3/6 p-4 ps-10 text-sm text-gray-900 outline-none  rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder='Type keywords like "return"'
          />
        </div>

        {/* list group and content */}
        <div className="h-auto w-full gap-2 flex">
          {/* left side list group */}
          <div className="w-3/12 ">
            <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                <MdPayment size={25} className="mr-2" />
                Payments
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                <MdCardGiftcard size={25} className="mr-2" />
                Vouchers
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                <PiTruck size={25} className="mr-2" />
                Products
              </button>

              <button
                type="button"
                className="relative h-16  inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                <GiReturnArrow size={25} className="mr-2" />
                Delivery
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                <FaBox size={25} className="mr-2" />
                Orders
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                <MdOutlinePerson size={25} className="mr-2" />
                Returns & Refunds
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                <FaTelegramPlane size={25} className="mr-2" />
                Account
              </button>

              <button
                type="button"
                className="relative h-16 inline-flex items-center w-full px-4 py-2 text-sm font-bold rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                <LiaBoxSolid size={25} className="mr-2" />
                Sell on Jumia
              </button>
            </div>
          </div>

          {/* right side content */}
          <div className="w-9/12 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <PlaceAnOrder />
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpMain;
