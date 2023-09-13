import { Link } from "react-router-dom";
import CtaButton from "./CtaButton";
import { Button } from "./ui/Button";
import { Briefcase } from "./ui/icons/Briefcase";
import { Logo } from "./ui/icons/Logo";
import { Training } from "./ui/icons/Training";
import { UserStar } from "./ui/icons/UserStar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
	return (
		<nav className=" h-[4.875rem] px-[4.5rem] bg-white flex justify-between items-center">
			<Link to={"/"}>
				<Logo />
			</Link>

			<div className="hidden md:flex gap-x-12">
				<CtaButton text="Jobs" icon={<Briefcase />} />
				<CtaButton text="Mentorship" icon={<UserStar />} />
				<CtaButton text="Trainings" icon={<Training />} />
			</div>

			<div className="hidden md:flex gap-x-2">
				<Link to={"/sign-up"}>
					<Button className="text-black bg-white hover:text-white ">
						Log In
					</Button>
				</Link>
				<Link to={"/sign-up"}>
					<Button className="">Sign Up</Button>
				</Link>
			</div>

			<MobileNavbar />
		</nav>
	);
};

export default Navbar;
