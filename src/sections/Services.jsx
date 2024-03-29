// constants
import { services } from '../constants';

// components
import ServiceCard from '../components/ServiceCard';

const Services = () => {
	return (
		<section>
			<div className="max-container flex justify-center flex-wrap gap-9 ">
				{services.map((service) => (
					<ServiceCard key={service.label} {...service} />
				))}
			</div>
		</section>
	);
};

export default Services;
