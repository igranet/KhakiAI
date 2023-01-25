const SuInput = ({ placeholder, setStateVal, isPassword }) => {
	return (
		<input
			type={`${isPassword && "password"}`}
			onChange={(e) => {
				setStateVal(e.target.value);
			}}
			className={
				" w-full border border-gray-200 rounded-md px-3 py-3 mt-2"
			}
			placeholder={placeholder}
		></input>
	);
};
export default SuInput;