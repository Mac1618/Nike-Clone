const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
	return (
		<button
			className={` flex px-7 py-4 rounded-full font-montserrat border gap-2
				${
					backgroundColor
						? `${backgroundColor} ${borderColor} ${textColor}`
						: 'text-white bg-coral-red border-coral-red'
				}`}
		>
			{label}
			{iconURL && (
				<img className="ml-2 rounded-full w-5 h-6" src={iconURL} alt="arrow-right-icon" />
			)}
		</button>
	);
};

export default Button;
