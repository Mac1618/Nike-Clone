// components
import Button from '../components/Button';

// icons
import { arrowRight } from '../assets/icons';

// constants
import { statistics } from '../constants';

const Hero = () => {
	return (
		<section
			id="home"
			className="w-full p-4 flex xl:flex-row flex-col max-container justify-center min-h-screen"
		>
			<div className="relative xl:w-2/5 flex flex-col items-start w-full max-xl:padding-x pt-28 ">
				<p className="font-montserrat text-lg text-coral-red">Our Summer Collections</p>
				<h1 className="font-bold text-8xl mt-8 font-palanquin max-sm:leading[82px] max-sm:text[72px]">
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
							<p>{stats.value}</p>
							<p>{stats.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
