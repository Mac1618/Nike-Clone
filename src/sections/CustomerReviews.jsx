// constants
import { reviews } from '../constants';

// components
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
	return (
		<section className='max-container'>
			<h3 className='text-4xl text-center font-palanquin font-bold '>
				What Our
				<span className='text-coral-red w-full'> Customers </span>
				Say?
			</h3>
			<p className='info-text text-center mt-4 max-w-lg m-auto'>
				Hear genuine stories from our satisfied customers about their exceptional experiences with
				us.
			</p>

			<div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
				{reviews.map((review) => (
					<ReviewCard key={review.customerName} {...review} />
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
