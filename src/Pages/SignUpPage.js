import { useState } from "react"
import SuName from "../components/SignUp/SuName"
import {AiOutlineLoading} from "react-icons/ai"
import SuUsage from "../components/SignUp/SuUsage"
import SuEmailPassword from "../components/SignUp/SuEmailPassword"
const SignUpPage = ()=>{
    const [suStage, setSuStage] = useState(0)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [title, setTitle] = useState(null)
    const [usingFor, setUsingFor] = useState(null)
    const [loadingNext, setLoadingNext] = useState(false)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const inputBoxSty = "rounded-md py-1 bg-none border border-purple-100 px-2"

    const nextButton = ()=>{
        return (
            <div
				onClick={async () => {
                    setLoadingNext(true)
                    setTimeout(()=>{
                        if(suStage !== 2){
                            const nstage = suStage+1
                            setSuStage(nstage)
                            setLoadingNext(false)
                        } else {
                            window.location.href="/home"
                        }
               
                    }, 1000)
                }}
                className={`${
					!loadingNext ? "w-full" : "w-1/4"
				} transition-all mx-auto bg-yellow-200 text-center mt-6 rounded-md text-gray-500 h-10 flex cursor-pointer`}>
				{!loadingNext ? (
					<span className="my-auto mx-auto">Next</span>
				) : (
					<AiOutlineLoading className="animate-spin mx-auto text-lg my-auto" />
				)}
			</div>
        )
    }
    return (
        <div className="w-full h-screen bg-slate-100 flex flex-col">
            <div className="my-auto mx-auto w-1/3 p-12 h-1/3 bg-gray-50 shadow-md border border-gray-300 rounded-md">
            {
                suStage === 0 && <SuEmailPassword nextButton={nextButton} setEmail={setEmail} setPassword={setPassword} password={password}/>
            }
            {
                suStage === 1 && <SuName nextButton={nextButton} setFirstName={setFirstName} setLastName={setLastName} setTitle={setTitle}/>
            }
              {
                suStage === 2 && <SuUsage nextButton={nextButton} setUsingFor={setUsingFor} usingFor={usingFor}/>
            }
           
            </div>
           
        </div>
    )

}
export default SignUpPage