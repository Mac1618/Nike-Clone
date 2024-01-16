const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
	return (
		<button
			className={` flex px-7 py-4 rounded-full justify-center items-center leading-none text-lg font-montserrat border gap-2
				${
					backgroundColor
						? `${backgroundColor} ${borderColor} ${textColor}`
						: 'text-white bg-coral-red border-coral-red'
				} 
				${fullWidth && 'w-full'}`}
		>
			{label}
			{iconURL && (
				<img className="ml-2 rounded-full w-5 h-6" src={iconURL} alt="arrow-right-icon" />
			)}
		</button>
	);
};

export default Button;
