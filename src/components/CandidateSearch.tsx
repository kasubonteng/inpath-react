import { ArrowRight } from "./ui/icons/ArrowRight";
import { ChevronDown } from "./ui/icons/ChevronDown";
import Search from "./ui/icons/Search";

const CandidateSearch = () => {
	return (
		<div className="p-1 bg-white rounded-full ">
			<div className="flex items-center justify-center gap-x-3">
				<>
					<div className="p-2">
						<Search />
					</div>
					<input
						className="h-[3rem] w-full ring-0 outline-none"
						type="text"
						placeholder='Try "Civil Engineer"'
					/>
				</>
				<>
					<button
						type="button"
						className="flex text-sm border-l md:text-base lg:space-x-14 group "
					>
						<span className="ml-2 md:ml-4 ">Jobs</span>
						<span className="transition group-hover:scale-125">
							<ChevronDown />
						</span>
					</button>
				</>

				<>
					<button className="p-2 text-white transition rounded-full bg-secondary hover:bg-secondary/90 hover:scale-110">
						<ArrowRight />
					</button>
				</>
			</div>
		</div>
	);
};

export default CandidateSearch;
