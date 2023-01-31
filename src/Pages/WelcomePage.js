import React, { useState, useEffect, useRef } from 'react';
// Just filler icons for now -- replace later when we decide what we want text to say
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { AiOutlineRobot } from 'react-icons/ai';
// Contact info icons
import { FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const WelcomePage = () => {
    return (
        <div className="w-full flex flex-col bg-slate-300 bg-contain bg-center font-lato">
            {/* Header */}
            <header className="sticky top-0">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="#" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">
                                Khaki AI
                            </span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a
                                href="/signup"
                                className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-l px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Sign Up
                            </a>
                            <a
                                href="/login"
                                className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-l px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Sign In
                            </a>
                        </div>

                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    'topWelcomeScreen'
                                                )
                                                .scrollIntoView({
                                                    behavior: 'smooth',
                                                })
                                        }
                                        className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-800 lg:p-0 text-l"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() =>
                                            document
                                                .getElementById('features')
                                                .scrollIntoView({
                                                    behavior: 'smooth',
                                                })
                                        }
                                        className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-800 lg:p-0 text-l"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() =>
                                            document
                                                .getElementById('contactInfo')
                                                .scrollIntoView({
                                                    behavior: 'smooth',
                                                })
                                        }
                                        className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-800 lg:p-0"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main content*/}
            <div className="flex flex-col">
                <div
                    id="topWelcomeScreen"
                    className="p-12 w-full h-screen text-center bg-gradient-to-r from-orange-600 via-blue-500 to-slate-300 animate-backgroundImage"
                >
                    <div className="text-6xl text-white m-32 pb-8 pt-16">
                        Welcome to the future of sales
                    </div>
                    <div className="text-2xl text-white lg:ml-[30vw] lg:mr-[30vw] ml-8 mr-8 mb-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </div>

                {/* <div className="bg-gradient-to-r from-slate-50 to-slate-400 text-gray-800"> */}
                {/* Row 1 */}
                <div id="features" className="md:p-32 text-2xl">
                    <div className="text-left flex flex-col md:flex-row justify-center items-center pt-32 pb-16 md:mx-32 xl:mx-64 2xl:mx-128">
                        <div className="w-1/4 sm:w-1/2 items-center md:px-20">
                            <FaRegMoneyBillAlt
                                size={180}
                                style={{
                                    color: '#424242',
                                }}
                            />
                        </div>
                        <div className="flex flex-col w-2/3">
                            <div className="text-orange-600 font-semibold sm:py-8">
                                Save Money
                            </div>
                            <div className="">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </div>
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="text-left flex flex-col-reverse md:flex-row justify-center items-center pt-32 pb-16 md:mx-32 xl:mx-64 2xl:mx-128">
                        <div className="flex flex-col w-2/3">
                            <div className="text-orange-600 font-semibold sm:py-8">
                                Save Time
                            </div>
                            <div className="">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </div>
                        </div>
                        <div className="w-1/4 sm:w-1/2 items-center md:px-20">
                            <FaRegClock
                                size={180}
                                style={{
                                    color: '#424242',
                                }}
                            />
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div className="text-left flex flex-col md:flex-row justify-between items-center pt-32 pb-16 md:mx-32 xl:mx-64 2xl:mx-128">
                        <div className="w-1/4 sm:w-1/2 items-center md:px-20">
                            <AiOutlineRobot
                                size={180}
                                style={{
                                    color: '#424242',
                                }}
                            />
                        </div>
                        <div className="flex flex-col w-2/3">
                            <div className="text-orange-600 font-semibold sm:py-8">
                                AI Automation Shit
                            </div>
                            <div className="">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="contactInfo"
                    className="bg-white border-gray-200 px-4 lg:px-6 py-8 flex flex-row justify-between border-b"
                >
                    <div className="flex flex-row justify-center text-gray-500">
                        <div className="pr-6">
                            <a href="#">Privacy</a>
                        </div>
                        <div className="pr-6">
                            <a href="#">Terms of Service</a>
                        </div>
                        <div>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center text-gray-500">
                        <div className="pr-6">
                            <a href="#">
                                <FaTwitter size={32} />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <AiOutlineMail size={32} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WelcomePage;
