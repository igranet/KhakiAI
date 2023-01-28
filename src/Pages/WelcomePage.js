import WelcomeHeader from '../components/Welcome/WelcomeHeader';

const WelcomePage = () => {
    return (
        <div className="w-full h-screen flex flex-col bg-slate-50">
            <WelcomeHeader />
            <div className="flex flex-col">
                <div className="basis-1/2 bg-gradient-to-r from-orange-600 to-gray-300 bg-cover bg-center p-12 w-full text-center">
                    <div className="text-5xl text-white m-24 pb-8">
                        Welcome to the future of sales
                    </div>
                    <div className="text-xl text-white lg:ml-[30vw] lg:mr-[30vw] ml-8 mr-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WelcomePage;
