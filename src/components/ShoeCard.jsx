const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
	const handleClick = () => {
		if (bigShoeImg != imgURL.bigShoe) return changeBigShoeImg(imgURL.bigShoe);
	};
	return (
		<div
			className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 
      ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
    `}
			onClick={handleClick}
		>
			<div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
				<img width={127} height={103} src={imgURL.thumbnail} alt="Shoe Image" />
			</div>
		</div>
	);
};

export default ShoeCard;
