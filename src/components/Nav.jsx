// Icons and Images
import hamburgerButton from '../assets/icons/hamburger.svg';
import headerLogo from '../assets/images/header-logo.svg';

// contants
import { navLinks } from '../constants';

const Nav = () => {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="">
					<img className='m-0 w-[129px] h-[29px]' src={headerLogo} alt="nike-imagee" height={29} width={130} />
				</a>
				<ul className="flex flex-1 justify-center items-center gap-16 max-md:hidden">
					{navLinks.map((item) => (
						<li key={item.label} className="font-montserrat leading-normal text-lg text-slate-gray">
							<a href={item.href}>{item.label}</a>
						</li>
					))}
				</ul>

				<div className="hidden max-md:block">
					<img src={hamburgerButton} alt="hamburger-button" width={23} height={25} />
				</div>
			</nav>
		</header>
	);
};

export default Nav;
