import Form from "./Form";
import SecondaryNav from "./SecondaryNav";

const SignUp = () => {
	return (
		<main className="font-medium ">
			<div className="relative ">
				<SecondaryNav />
			</div>

			<section className="flex flex-col items-center justify-center px-10 mt-28 ">
				<div>
					<div className="flex flex-col gap-y-4">
						<span className="text-2xl font-bold">Get started.</span>
						<span className=" font-light text-[#818181]">
							Set up your account as your company representative.
						</span>
					</div>

					<div className="w-full my-10 ">
						<Form />
					</div>
				</div>
			</section>
		</main>
	);
};

export default SignUp;
