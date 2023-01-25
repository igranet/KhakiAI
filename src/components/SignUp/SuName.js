import SuInput from "./SuInput"

const SuName = ({inputBoxSty, nextButton, setFirstName, setLastName, setTitle})=>{

    return (
        <div className="flex flex-col">

           <SuInput placeholder={"First Name"} setStateVal={setFirstName}/>
            <SuInput placeholder={"Last Name"} setStateVal={setLastName} />
            <SuInput placeholder={"Position (SDR, AE, Etc..)"} setStateVal={setTitle} />
            {nextButton()}
        </div>
    )

}
export default SuName