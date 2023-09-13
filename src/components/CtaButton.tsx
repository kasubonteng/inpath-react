interface CtaButtonProps {
	text: string;
	icon: React.ReactElement;
}

const CtaButton = ({ text, icon }: CtaButtonProps) => {
	return (
		<div className="flex items-center justify-center transition gap-x-2 hover:cursor-pointer hover:scale-110">
			{icon}
			{text}
		</div>
	);
};

export default CtaButton;
