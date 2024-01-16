// icons and images
import { footerLogo } from "../assets/images"
import { copyrightSign } from "../assets/icons"

// constants
import { socialMedia } from "../constants"
import { footerLinks } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Nike logo" width={150} height={46}/>
          </a>
          <p className="mt-6 text-white-400 leading-7 font-montserrat sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div key={icon.alt} className="bg-white h-12 w-12 flex justify-center items-center rounded-full">
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between flex-1 flex-wrap lg:gap-10 gap-20">
          { footerLinks.map((section) => (
              <div key={section.title}>
                <h4 
                className="text-2xl mb-6 font-medium font-montserrat text-white leading-normal">{section.title}</h4>
                <ul>
                  { section.links.map((link) => (
                    <li 
                      className="mt-3 font-montserrat text-white-400 text-base leading-normal hover:text-slate-gray cursor-pointer"
                      key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer font-montserrat">
          <img 
            src={copyrightSign} 
            alt="copy right icon" 
            width={20} 
            height={20} 
            className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer