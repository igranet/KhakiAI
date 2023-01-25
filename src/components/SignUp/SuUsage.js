import { BsPersonFill } from "react-icons/bs"
import {HiUserGroup} from "react-icons/hi"
import SuSelectInp from "./SuSelectInp"

const SuUsage = ({nextButton, usingFor, setUsingFor})=>{
    return (
        <div className="flex flex-col">

            <div className="flex flex-col">
                <div className="text-center text-2xl font-semibold text-gray-700 mb-4">I am using Khaki AI for...</div>
                <div className="flex flex-row mx-auto w-full justify-center space-x-12">
                    <SuSelectInp 
                    	selectVal={usingFor}
						setSelectVal={setUsingFor}
						val={0}
						title={"Myself"}
						icon={<BsPersonFill />}
					/>
                      <SuSelectInp 
                    	selectVal={usingFor}
						setSelectVal={setUsingFor}
						val={1}
						title={"My Team"}
						icon={<HiUserGroup />}
					/>

                </div>

            </div>
         {nextButton()}
     </div>
    )

}
export default SuUsage