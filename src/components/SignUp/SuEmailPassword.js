import SuInput from "./SuInput"
import PasswordStrengthBar from "react-password-strength-bar";

const SuEmailPassword = ({nextButton, setEmail, setPassword, password})=>{

    return (
        <div className="flex flex-col">

           <SuInput placeholder={"E-mail"} setStateVal={setEmail}/>
            <SuInput placeholder={"Password"} setStateVal={setPassword} />
            <div className=" w-full mt-4 mb-4">
						{password && (
							<PasswordStrengthBar password={password} />
						)}
					</div>

            {nextButton()}
        </div>
    )

}
export default SuEmailPassword