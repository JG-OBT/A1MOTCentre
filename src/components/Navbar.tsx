import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-dark text-white border-b-4 border-accent shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-black tracking-tighter">
              A1 <span className="text-accent">MOT</span> CENTRE
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Home</a>
            <a href="#services" className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Services</a>
            <a href="#booking" className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Book Online</a>
            <a href="#location" className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:01823335337" 
              className="hidden lg:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              01823 335 337
            </a>
            <a 
              href="#booking" 
              className="bg-accent text-white px-6 py-2.5 rounded-sm font-bold uppercase text-xs tracking-widest btn-shadow hover:brightness-110 transition-all"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
