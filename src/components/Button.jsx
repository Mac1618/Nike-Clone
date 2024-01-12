const Button = ({ label, iconURL }) => {
	return (
		<button className="bg-coral-red flex px-7 py-4 rounded-full text-white font-montserrat border gap-2">
			{label}
			<img className="ml-2 rounded-full w-5 h-6" src={iconURL} alt="arrow-right-icon" />
		</button>
	);
};

export default Button;
