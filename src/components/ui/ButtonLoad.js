import { AiOutlineLoading } from "react-icons/ai"

const ButtonLoad = ({loadingState, setLoadingState, buttonVal, styling, toPerform})=>{
    return (
        <div onClick={()=>{
        setLoadingState(true); 
        toPerform(); 
        }} className={`${loadingState ? "w-1/3": "w-full"} transition-all rounded-sm flex h-8 mt-8 mx-auto text-center ${styling}`}>
            {loadingState && <AiOutlineLoading className="my-auto animate-spin text-white mx-auto" />}
            {!loadingState && <span className="mx-auto my-auto">{buttonVal}</span>}
        </div>
    )
}
export default ButtonLoad