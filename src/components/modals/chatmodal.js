import Image from "next/image";
import React, { useState } from "react";

const Chatmodal = ({ isOpen, handleToggleModal, message }) => {
  return (
    <>
      {isOpen && (
        <div
          id="staticModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full  max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
                <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                  <div class="relative flex items-center space-x-4">
                    <div class="relative">
                      <span class="absolute text-green-500 right-0 bottom-0">
                        <svg width="20" height="20">
                          <circle
                            cx="8"
                            cy="8"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </svg>
                      </span>
                      <Image
                        className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                        src="/assets/images/bot.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div class="flex flex-col leading-tight">
                      <div class="text-2xl mt-1 flex items-center">
                        <span class="text-gray-700 mr-3 dark:text-white ">
                          WETIME Bot
                        </span>
                      </div>
                      <span class="text-lg text-gray-600 dark:text-white">
                        Automated Chat
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <button
                      onClick={handleToggleModal}
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="staticModal"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>{" "}
                  </div>
                </div>
                <div
                  id="messages"
                  class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                >
                  <div class="chat-message">
                    <div class="flex items-end mb-4">
                      <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            Hi There ?
                          </span>
                        </div>
                      </div>

                      <Image
                        className="w-6  h-6  rounded-full"
                        src="/assets/images/bot.svg"
                        alt=""
                        width={10}
                        height={10}
                      />
                    </div>
                    <div class="flex items-end mb-4">
                      <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            Hi How can i help you ?
                          </span>
                        </div>
                      </div>
                      <Image
                        className="w-6  h-6  rounded-full"
                        src="/assets/images/bot.svg"
                        alt=""
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>
                  <div class="chat-message">
                    <div class="flex items-end justify-end mb-4">
                      <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                            I want to generate a random number
                          </span>
                        </div>
                      </div>
                      <Image
                        className="w-6  h-6  rounded-full order-2"
                        src="/assets/images/user.svg"
                        alt="user"
                        width={10}
                        height={10}
                      />
                    </div>
                  </div>
                  <div class="flex items-end mb-4">
                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                      <div>
                        <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                          Sure Here it is " 58902 "
                        </span>
                      </div>
                    </div>
                    <Image
                      className="w-6  h-6  rounded-full"
                      src="/assets/images/bot.svg"
                      alt=""
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
                <div class="border-t-2 border-gray-200 px-4 pt-4 mb-[15px] sm:mb-0">
                  <div class="relative flex">
                    <span class="absolute inset-y-0 flex items-center">
                      <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="h-6 w-6 text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          ></path>
                        </svg>
                      </button>
                    </span>
                    <input
                      type="text"
                      placeholder="Write your message!"
                      class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                    />
                    <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
                      <button
                        type="button"
                        class="bg-transparent inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-gray-700 dark:text-black  hover:bg-gray-300 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class=" h-6 w-6 ml-2 transform rotate-90"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatmodal;
