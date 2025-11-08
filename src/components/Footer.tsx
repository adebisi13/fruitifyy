import GooglePlayIcon from '@/components/icons/GooglePlayIcon';
import AppleIcon from '@/components/icons/AppleIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import XIcon from '@/components/icons/XIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import CopyrightIcon from '@/components/icons/CopyrightIcon';

export function Footer() {
  return (
    <footer className="bg-dark-bg px-5 md:px-10 lg:px-20 py-10 md:py-14 lg:py-16">
      <div className="flex flex-col gap-12 md:gap-20 lg:gap-32">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 lg:gap-72">
          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="text-white font-bold text-sm md:text-base capitalize mb-1 md:mb-2">About</h3>
            <nav className="flex flex-col gap-2 md:gap-3">
              <a href="#home" className="text-white/90 text-xs md:text-sm capitalize hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-white/90 text-xs md:text-sm capitalize hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-white/90 text-xs md:text-sm capitalize hover:text-white transition-colors">About Us</a>
              <a href="#contact" className="text-white/90 text-xs md:text-sm capitalize hover:text-white transition-colors">Contact us</a>
              <a href="#faq" className="text-white/90 text-xs md:text-sm capitalize hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>
          
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-white font-bold text-sm md:text-base capitalize">Help & Support</h3>
            <nav className="flex flex-col gap-2 md:gap-3">
              <a href="#payment" className="text-white/90 text-xs md:text-sm capitalize hover:text-white transition-colors">Payment Options</a>
              <a href="#delivery" className="text-white/90 text-xs md:text-sm capitalize hover:text-white transition-colors">Deliver Information</a>
              <a href="#support" className="text-white/90 text-xs md:text-sm capitalize hover:text-white transition-colors">Customer Support</a>
              <a href="#faq" className="text-white/90 text-xs md:text-sm capitalize hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>
          
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="flex flex-col gap-2 md:gap-3">
              <button className="bg-dark-bg border border-white/20 rounded-lg px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2 md:gap-3 hover:bg-white/10 transition-colors">
                <GooglePlayIcon width={14} height={14} className="md:w-[18px] md:h-[18px]" />
                <div className="text-left">
                  <p className="text-white text-[10px] md:text-xs leading-tight">GET IT ON</p>
                  <p className="text-white text-xs md:text-sm font-medium leading-tight">Google Play</p>
                </div>
              </button>
              
              <button className="bg-dark-bg border border-white/20 rounded-lg px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2 md:gap-3 hover:bg-white/10 transition-colors">
                <AppleIcon width={14} height={14} className="md:w-[18px] md:h-[18px]" />
                <div className="text-left">
                  <p className="text-white text-[10px] md:text-xs leading-tight">Download on the</p>
                  <p className="text-white text-xs md:text-sm font-medium leading-tight">App Store</p>
                </div>
              </button>
            </div>
            
            <div className="flex gap-4 md:gap-6">
              <a href="#facebook" className="hover:opacity-80 transition-opacity">
                <FacebookIcon width={16} height={16} className="md:w-5 md:h-5" />
              </a>
              <a href="#whatsapp" className="hover:opacity-80 transition-opacity">
                <WhatsAppIcon width={16} height={16} className="md:w-5 md:h-5" />
              </a>
              <a href="#twitter" className="hover:opacity-80 transition-opacity">
                <XIcon width={18} height={18} className="md:w-[22px] md:h-[22px]" />
              </a>
              <a href="#instagram" className="hover:opacity-80 transition-opacity">
                <InstagramIcon width={16} height={16} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
          <div className="flex items-center gap-2 text-white/90 text-[10px] md:text-xs">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <span>|</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#feedback" className="hover:text-white transition-colors">Feedback</a>
          </div>
          <div className="flex items-center gap-1">
            <CopyrightIcon width={8} height={8} className="md:w-[10px] md:h-[10px]" />
            <p className="text-white/90 text-[10px] md:text-xs capitalize">2025 Fruitify. All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}