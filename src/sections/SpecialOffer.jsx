// icons and images
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons';

// components
import Button from '../components/Button';

const SpecialOffer = () => {
	return (
		<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
			<div className="flex-1">
				<img src={offer} alt="Offer image" width={773} height={687} />
			</div>

			<div className="flex flex-1 flex-col">
				<h1 className="font-bold text-4xl font-palanquin capitalize max-sm:leading-[82px] max-sm:text-[72px]">
					<span className="text-coral-red">Special </span>
					Offer
				</h1>
				<p className="mt-4 info-text ">
					Embark on a shopping journey that redefines your experience with unbeatable deals. From
					premier selections to incredible savings, we offer unparalleled value that sets us apart.
				</p>
				<p className="mt-6 info-text">
					Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the
					loftiest expectations. Your journey with us is nothing short of exceptional.
				</p>
				<div className="flex flex-wrap mt-11 gap-6">
					<Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor='bg-white' borderColor='border-slate-gray'  textColor='text-slate-gray' />
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
