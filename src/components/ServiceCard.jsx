const ServiceCard = ({ imgURL, label, subtext }) => {
	return( 
		<div className="flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl py-16 px-10">
			<div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
				<img src={imgURL} alt="" />
			</div>
			<h3 className="mt-5 font-palanquin leading-normal text-3xl font-bold">{label}</h3>
			<p className="info-text break-words mt-5">{subtext}</p>
		</div>
		
	)
};

export default ServiceCard;
