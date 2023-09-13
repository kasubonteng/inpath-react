import { Link } from "react-router-dom";
import { ArrowLeft } from "./ui/icons/ArrowLeft";
import { Logo } from "./ui/icons/Logo";

const SecondaryNav = () => {
	return (
		<div className="fixed top-0 left-0 flex items-center w-full p-3 px-10 bg-white border ">
			<Link to={"/"} className="flex flex-1 p-3 gap-x-2">
				<ArrowLeft />
				Back
			</Link>
			<Link to={"/"} className="flex-1">
				<Logo />
			</Link>
		</div>
	);
};

export default SecondaryNav;
