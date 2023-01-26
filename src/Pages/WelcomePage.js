const WelcomePage = ()=>{

    return (
        <div className="w-full h-screen flex flex-col bg-slate-50">
            <div className="mx-auto my-auto p-12 bg-white border border-gray-300 rounded-md shadow-sm flex flex-col h-1/3">
                <div onClick={()=>{window.location.href = "/login"}} className="mx-auto my-auto w-2/3 bg-blue-200 text-center rounded-md py-1 cursor-pointer">
                    Login

                </div>
                <div className="mx-auto flex flex-row space-x-2 text-gray-400 my-auto">
						<span className="h-[.5px] w-24 bg-gray-400 my-auto rounded-md"></span>
						<span>Or</span>
						<span className="h-[.5px] w-24 bg-gray-400 my-auto rounded-md"></span>
					</div>
                <div onClick={()=>{window.location.href = "/signup"}} className="mx-auto my-auto bg-green-200 w-2/3 text-center rounded-md py-1 cursor-pointer">
                    SignUp
                </div>
            </div>

        </div>
    )

}
export default WelcomePage