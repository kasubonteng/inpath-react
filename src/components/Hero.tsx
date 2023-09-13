import CandidateSearch from "./CandidateSearch";
import { BlackLine } from "./ui/icons/BlackLine";
import { RedLine } from "./ui/icons/RedLine";
import { YellowLine } from "./ui/icons/YellowLine";

const Hero = () => {
	return (
		<section className="relative flex pt-12 leading-3  md:pt-44 justify-center h-[85dvh] bg-[#F5F5F5] px-8 md:px-[4.5rem] ">
			<div className="flex flex-col gap-y-[4.5rem] ">
				<div>
					<h1 className="mb-6 text-6xl tracking-tight md:text-7xl font-header">
						Build your dream career
					</h1>
					<h3 className="text-4xl md:text-5xl font-header-bold">
						Connect to <span className=" text-secondary">jobs</span>
					</h3>
					<div className="hidden lg:block">
						<i className="absolute animate-bounce-slow top-[3.19rem] right-[16.56rem] ">
							<RedLine />
						</i>
						<i className=" animate-bounce-slow lg:absolute lg:top-[16rem] lg:left-[9.13rem] ">
							<YellowLine />
						</i>
						<i className=" lg:absolute animate-bounce-slow lg:bottom-[5.81rem] lg:left-[18.75rem] ">
							<BlackLine />
						</i>

						<img
							className="absolute  animate-bounce-slow top-[4.19rem] right-[19rem]"
							src="/images/Ellipse72.png"
							alt="img1"
						/>
						<img
							className=" lg:absolute animate-bounce-slow bottom-[6.31rem] left-[38.9rem]"
							src="/images/Ellipse73.png"
							alt="img2"
						/>
						<img
							className=" lg:absolute animate-bounce-slow bottom-[12.1rem] right-[14rem]"
							src="/images/Ellipse74.png"
							alt="img3"
						/>
						<img
							className="lg:absolute animate-bounce-slow top-[16rem] left-36 "
							src="/images/Ellipse75.png"
							alt="img4"
						/>

						<img
							className=" lg:absolute animate-bounce-slow lg:bottom-[3.81rem] lg:left-[18.25rem]"
							src="/images/Ellipse76.png"
							alt="img4"
						/>
						<img
							className="absolute animate-bounce-slow bottom-10 right-[32rem]"
							src="/images/Ellipse77.png"
							alt="img5"
						/>
						<img
							className="absolute animate-bounce-slow bottom-36 left-[4.5rem]"
							src="/images/Ellipse80.png"
							alt="img6"
						/>
						<img
							className="absolute animate-bounce-slow top-[16.5rem] right-[6.69rem]"
							src="/images/Ellipse81.png"
							alt="img7"
						/>
					</div>
				</div>

				<>
					<CandidateSearch />
				</>
			</div>
		</section>
	);
};

export default Hero;
