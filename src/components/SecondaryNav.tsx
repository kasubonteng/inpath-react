import { Link } from "react-router-dom";
import { ArrowLeft } from "./ui/icons/ArrowLeft";
import { Logo } from "./ui/icons/Logo";

const SecondaryNav = () => {
	return (
		<div className="fixed top-0 flex items-center justify-center w-full bg-white border p-7">
			<Link to={"/"} className="flex p-3 mr-auto gap-x-2">
				<ArrowLeft />
				Back
			</Link>

			<div className="flex items-center justify-center mr-auto ">
				<Link to={"/"} className=" w-[4.875rem] h-[1.5rem]">
					<Logo />
				</Link>
			</div>
		</div>
	);
};

export default SecondaryNav;
