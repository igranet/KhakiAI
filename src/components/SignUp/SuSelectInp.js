import { BsPersonFill } from "react-icons/bs";

const SuSelectInp = ({
	icon,
	title,
	selectVal,
	setSelectVal,
	val,
}) => {
	console.log(val);
	return (
		<div
			onClick={() => {
				setSelectVal(val);
			}}
			className={`border  ${
				selectVal === val
					? " border-yellow-500 text-primary bg-yellow-500/20 text-orange-700"
					: " border-gray-200 text-primary/50"
			} flex w-1/3 rounded-md px-2 py-2 flex-col hover:bg-primary/20 cursor-pointer   hover:text-primary duration-200`}
		>
			<span className="text-8xl mx-auto my-auto">{icon}</span>
			<div className="text-sm font-medium font-defaultText mx-auto">
				{title}
			</div>
		</div>
	);
};
export default SuSelectInp;