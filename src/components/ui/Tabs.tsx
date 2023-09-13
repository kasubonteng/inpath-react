import { SetStateAction, useState } from "react";
import { cn } from "../../lib/utils";

export const Tabs = () => {
	const [active, setActive] = useState<"students" | "partners">("students");

	const handleClick = (tab: SetStateAction<"students" | "partners">) => {
		setActive(tab);
	};
	return (
		<div className="flex items-center justify-center px-1 py-2 text-xs md:text-base ">
			<div className=" bg-[#F7F7F7] font-light flex p-1 rounded-sm gap-x-2 items-center">
				<div
					className={cn(
						"px-4 transition hover:cursor-pointer ",
						active === "students" && " font-bold bg-white py-2 rounded-sm"
					)}
					onClick={() => handleClick("students")}
				>
					For Students & Graduates
				</div>
				<div
					onClick={() => handleClick("partners")}
					className={cn(
						"px-4 transition hover:cursor-pointer rounded-sm ",
						active === "partners" && " font-bold bg-white py-2"
					)}
				>
					For Partners
				</div>
			</div>
		</div>
	);
};
