import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/Button";
import { InformationFill } from "./ui/icons/InformationFill";
import { EyeOff } from "./ui/icons/EyeOff";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "./ui/icons/ChevronDown";
import PhoneInput from "react-phone-number-input/input";

enum Role {
	Manger = "Manager",
	Developer = "Developer",
}

const Form = () => {
	const [passwordShown, setPasswordShown] = useState(true);
	const [value, setValue] = useState("+233");

	const signUpSchema = z.object({
		fullName: z.string().min(1, { message: "Full Name is required" }),
		email: z.string().email(),
		phoneNumber: z.string(),
		role: z.nativeEnum(Role),
		password: z.string(),
	});

	type SignUpSchema = z.infer<typeof signUpSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = (values: SignUpSchema) => {
		console.log(values);
		if (isSubmitSuccessful) {
			reset();
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
			{/* FULL NAME  */}
			<div className="flex flex-col gap-y-1">
				<label className=" font-light text-[#818181] text-sm">Full name</label>

				<div className="transition ">
					<input
						{...register("fullName")}
						type="text"
						className="w-full p-4 transition border divide-y-8 rounded-sm focus:ring-4 focus:ring-offset-0 outline-secondary focus:ring-[#9BCFBD]/90 placeholder:font-light "
						placeholder="Eg. Kwadwo Asubonteng"
					/>
					{errors.fullName && (
						<p className="text-red-600 ">{`${errors.fullName.message}`}</p>
					)}
				</div>
			</div>

			{/* WORK EMAIL  */}
			<div className="flex flex-col gap-y-1">
				<label className=" font-light text-[#818181] text-sm">Work email</label>

				<div className="space-y-3 ">
					<div className="transition ">
						<input
							{...register("email")}
							type="email"
							className="w-full  p-4 transition border divide-y-8 rounded-sm focus:ring-offset-0 focus:ring-4 focus:ring-[#9BCFBD]/90 outline-secondary placeholder:font-light "
							placeholder="Eg. kwadwoasubonteng@work.com"
						/>
						{errors.email && (
							<p className="text-red-600 ">{`${errors.email.message}`}</p>
						)}
					</div>

					<div className="flex p-2 border gap-x-2 bg-[#E7F3EF]  rounded-sm border-[#9BCFBD]">
						<InformationFill />
						<p className="text-sm max-w-[26rem] ">
							Signing up with emails with domain names like{" "}
							<span className="font-bold ">gmail.com</span>,{" "}
							<span className="font-bold ">yahoo.com</span> etc will take longer
							to verify you.
						</p>
					</div>
				</div>
			</div>

			{/* PHONE NUMBER  */}
			<div className="flex flex-col gap-y-1">
				<label className=" font-light text-[#818181] text-sm">
					Phone number
				</label>

				<div className="transition ">
					{/* <input
						{...register("phoneNumber")}
						type="number"
						className="w-full p-4 transition border divide-y-8 focus:ring-4 rounded-sm focus:ring-offset-0 focus:ring-[#9BCFBD]/90 "
						placeholder="020 187 6093"
					/> */}
					<PhoneInput
						placeholder="Enter phone number"
						{...register("phoneNumber")}
						className="w-full p-4 transition border divide-y-8 rounded-sm focus:ring-4 focus:ring-offset-0 focus:ring-[#9BCFBD] outline-secondary placeholder:font-light "
						defaultCountry="GH"
						// value={value}
						onChange={() => setValue(value)}
					/>
					{errors.phoneNumber && (
						<p className="text-red-600 ">{`${errors.phoneNumber.message}`}</p>
					)}
				</div>
			</div>

			{/* ROLE AT COMPANY  */}
			<div className="flex flex-col gap-y-1">
				<label className=" font-light text-[#818181] text-sm">
					Role at Company
				</label>

				<div className="relative transition group">
					<select
						{...register("role")}
						placeholder="Select Role"
						className="relative w-full p-4 transition border divide-y-8 rounded-sm appearance-none focus:ring-offset-0 focus:ring-4 focus:ring-[#9BCFBD]/90 focus:shadow-sm placeholder:font-light outline-secondary"
					>
						<option
							className=" text-[#818181]"
							value=""
							selected
							disabled
							hidden
						>
							Select Role
						</option>

						<option>{Role.Manger}</option>
						<option>{Role.Developer}</option>
					</select>
					<i className="absolute group-hover:scale-125  right-4 top-[30%]">
						<ChevronDown />
					</i>

					{errors.role && (
						<p className="text-red-600 ">{`${errors.role.message}`}</p>
					)}
				</div>
			</div>

			{/* PASSWORD  */}
			<div className="flex flex-col gap-y-1">
				<label className=" font-light text-[#818181] text-sm">Password</label>

				<div className="relative transition group ">
					<input
						{...register("password")}
						type={passwordShown ? "text" : "password"}
						className="w-full p-4 transition border divide-y-8 rounded-sm focus:ring-4 focus:ring-offset-0 focus:ring-[#9BCFBD]/90 focus:outline-secondary "
					/>
					<i
						className="absolute group-hover:scale-110 transition right-4 top-[30%]"
						onClick={() => setPasswordShown(!passwordShown)}
					>
						<EyeOff />
					</i>
					{errors.password && (
						<p className="text-red-600 ">{`${errors.password.message}`}</p>
					)}
				</div>
			</div>

			<Button type="submit" disabled={isSubmitting}>
				Create Account
			</Button>

			<p>
				Already signed up?{"  "}
				<Link to={"/sign-up"} className=" text-secondary">
					Log in
				</Link>
			</p>
		</form>
	);
};

export default Form;
