import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-black tracking-tighter mb-6">
              A1 <span className="text-accent">MOT</span> CENTRE
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Taunton's dedicated MOT-only testing station. Impartial, fair, and trusted by local drivers for over 15 years.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-accent">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#booking" className="hover:text-accent transition-colors">Book Online</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-accent">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>01823 335 337</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@a1motcentre.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span>Railway Street, Taunton,<br />Somerset, TA2 6HF</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-accent">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>08:30 - 17:30</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>08:30 - 12:30</span>
              </li>
              <li className="flex justify-between text-accent font-bold">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} A1 MOT Centre. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.privacypolicygenerator.info/live.php?token=generic" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.cookiesandyou.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
