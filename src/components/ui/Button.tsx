import React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, disabled, type = "button", ...props }, ref) => {
		return (
			<button
				className={cn(
					" flex items-center justify-center px-3 bg-black text-white rounded-md py-4 border hover:bg-black/80 transition",
					className
				)}
				ref={ref}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		);
	}
);
