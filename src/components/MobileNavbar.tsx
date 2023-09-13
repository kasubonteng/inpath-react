import { useState } from "react";
import { Menu } from "./ui/icons/Menu";
import { Close } from "./ui/icons/Close";
import CtaButton from "./CtaButton";
import { Briefcase } from "./ui/icons/Briefcase";
import { UserStar } from "./ui/icons/UserStar";
import { Training } from "./ui/icons/Training";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="relative md:hidden">
			<div
				onClick={() => toggleOpen()}
				className="relative p-2 transition hover:cursor-pointer hover:scale-110"
			>
				{isOpen ? (
					<i className="z-10 ">
						<Close />
					</i>
				) : (
					<Menu />
				)}
			</div>

			{isOpen && (
				<div className="absolute z-10 flex flex-col justify-between p-4 transition bg-white rounded-lg top-10 w-52 h-80 right-4 ">
					<div className="flex flex-col items-center justify-center gap-y-12">
						<CtaButton text="Jobs" icon={<Briefcase />} />
						<CtaButton text="Mentorship" icon={<UserStar />} />
						<CtaButton text="Trainings" icon={<Training />} />
					</div>

					<div className="flex justify-center gap-x-2">
						<Link to={"/sign-up"}>
							<Button className="text-black bg-white hover:text-white ">
								Log In
							</Button>
						</Link>
						<Link to={"/sign-up"}>
							<Button className="">Sign Up</Button>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default MobileNavbar;
