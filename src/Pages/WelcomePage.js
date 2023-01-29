import WelcomeHeader from '../components/Welcome/WelcomeHeader';
// Just filler icons for now -- replace later when we decide what we want text to say
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { AiOutlineRobot } from 'react-icons/ai';

const WelcomePage = () => {
    return (
        <div className="w-full flex flex-col bg-slate-300 bg-contain bg-center">
            <WelcomeHeader />
            <div className="flex flex-col">
                <div className="p-12 w-full h-screen text-center bg-gradient-to-b from-orange-600 to-slate-300">
                    <div className="text-5xl text-white m-24 pb-8">
                        Welcome to the future of sales
                    </div>
                    <div className="text-xl text-white lg:ml-[30vw] lg:mr-[30vw] ml-8 mr-8 mb-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </div>
                {/* <div className="bg-gradient-to-r from-slate-50 to-slate-400 text-gray-800"> */}
                {/* Row 1 */}
                <div className="text-center w-full flex flex-row justify-center pb-16 w-full">
                    <div className="w-1/4 lg:w-1/5 sm:w-1/3">
                        <FaRegMoneyBillAlt
                            size={140}
                            style={{
                                horizontalAlign: 'center',
                                verticalAlign: 'center',
                                color: '#424242',
                            }}
                        />
                    </div>
                    <div className="w-1/4 lg:w-1/5 sm:w-1/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </div>
                {/* Row 2 */}
                <div className="text-center w-full flex flex-row justify-center items-center pt-16 pb-16 w-full">
                    <div className="w-1/4 lg:w-1/5 sm:w-1/3">
                        <FaRegClock
                            size={140}
                            style={{
                                horizontalAlign: 'center',
                                verticalAlign: 'center',
                                color: '#424242',
                            }}
                        />
                    </div>
                    <div className="w-1/4 lg:w-1/5 sm:w-1/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </div>
                {/* Row 3 */}
                <div className="text-center w-full flex flex-row justify-center items-center pt-16 pb-16 w-full">
                    <div className="w-1/4 lg:w-1/5 sm:w-1/3">
                        <AiOutlineRobot
                            size={140}
                            style={{
                                horizontalAlign: 'center',
                                verticalAlign: 'center',
                                color: '#424242',
                            }}
                        />
                    </div>
                    <div className="w-1/4 lg:w-1/5 sm:w-1/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};
export default WelcomePage;
