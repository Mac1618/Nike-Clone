import { useState } from 'react';

// components
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';

// icons and images
import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';

// constants
import { shoes, statistics } from '../constants';

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

	return (
		<section
			id="home"
			className="w-full flex xl:flex-row flex-col max-container gap-10 justify-center min-h-screen"
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
				<p className="font-montserrat text-xl mb-2 text-coral-red">Our Summer Collections</p>
				<h1 className="font-bold text-8xl mt-8 font-palanquin max-sm:leading-[82px] max-sm:text-[72px]">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3">Nike</span> Shoes
				</h1>
				<p className="font-montserrat mt-6 mb-14 text-lg leading-8 text-slate-gray sm:max-w-sm">
					Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
				</p>
				<Button label="Shop now" iconURL={arrowRight} />

				<div className="w-full flex justify-start items-start gap-16 mt-20 flex-wrap ">
					{statistics.map((stats) => (
						<div key={stats.value}>
							<p className="font-palanquin text-4xl font-bold">{stats.value}</p>
							<p className="font-montserrat leading-8 text-slate-gray">{stats.label}</p>
						</div>
					))}
				</div>
			</div>

			<div className="relative flex flex-1 flex-col justify-center items-center max-h-full xl:min-h-screen max-xl:py-40 bg-cover bg-center bg-primary">
				<img
					className="object-contain relative z-10"
					src={bigShoeImg}
					alt="shoes images"
					width={610}
					height={500}
				/>

				<div className="flex justify-center items-center gap-6 absolute bottom-[-5%]">
					{shoes.map((shoe) => (
						<div key={shoe.bigShoe}>
							<ShoeCard
								imgURL={shoe}
								changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
